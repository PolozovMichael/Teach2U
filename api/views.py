from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from django.utils.http import urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import authenticate, login, logout
from .utils import get_tokens_for_user
from .serializers import *
from .permissions import *
from rest_framework import generics, status, permissions
from .serializers import SetNewPasswordSerializer, ResetPasswordEmailRequestSerializer, LoginSerializer 
from rest_framework.response import Response
from django.urls import reverse
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from .notifications import *
from rest_framework_simplejwt.views import TokenObtainPairView


#Sign Up Views
class TeacherSignupView(generics.CreateAPIView):
    serializer_class = TeacherSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        activateEmail(request, user, user.email)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "Teacher Created Successfully"
        }) 

class StudentSignupView(generics.CreateAPIView):
    serializer_class = StudentSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        activateEmail(request, user, user.email)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "Student Created Successfully"
        })
    
class EduCenterSignupView(generics.CreateAPIView):
    serializer_class = EduCenterSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        activateEmail(request, user, user.email)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "EduCenter Created Successfully"
        })

# Login/Logout Views   

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    

# Delete User

class DeleteUserView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_object(self):
        return self.request.user

    def delete(self, request, *args, **kwargs):
        user = self.get_object()
        user.delete()
        return Response({'msg': 'User Deleted Successfully'}, status=status.HTTP_200_OK)

#Private Views
class StudentOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user
    
class TeacherOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
class EduCenterOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated&IsEduCenterUser]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user
    
#List of all Users View
class TeacherListView(generics.ListAPIView):
    queryset = User.objects.prefetch_related('teacher').exclude(teacher__phone=None)
    serializer_class = ListTeacher

class StudentListView(generics.ListAPIView):
    queryset = User.objects.prefetch_related('student').exclude(student__phone=None)
    serializer_class = ListStudent

class EduCenterListView(generics.ListAPIView):
    queryset = User.objects.prefetch_related('edu_center').exclude(edu_center__phone=None)
    serializer_class = ListEduCenter

#Update Profile View
class UpdateStudentView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]
    serializer_class = UpdateStudentSerializer
    def get_object(self):
        return self.request.user
    
    def post(self, request):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.get(id=request.user.id)
        user = serializer.update()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "User Updated Successfully"
        })

class UpdateTeacherView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = UpdateTeacherSerializer
    def get_object(self):
        return self.request.user
    
    def post(self, request):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.update()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "User Updated Successfully"
        })
    
class UpdateEduCenterView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsEduCenterUser]
    serializer_class = UpdateEduCenterSerializer
    def get_object(self):
        return self.request.user
    
    def post(self, request):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.update()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "User Updated Successfully"
        })

#Reset Password View
class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        return Response({'suckess': 'Type your email'}, status=status.HTTP_200_OK)


    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            absurl = 'http://'+current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)

class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True}, status=status.HTTP_200_OK)

    def patch(self, request, uidb64, token):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)

#Create Course

class CreateCourseView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = CreateCourseSerializer

    def get(self, request, *args, **kwargs):
        return Response({'msg': 'Method Not Allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = Teacher.objects.get(user_id=request.user.id)
        serializer.save(user)
        return Response({'msg': 'Course Created Successfully'}, status=status.HTTP_200_OK)
    
class CourseListView(generics.ListAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = ListCourseSerializer

    def get_queryset(self, *args, **kwargs):
        self.teacher = Teacher.objects.filter(pk=self.kwargs['id'])
        return self.teacher
    
class DeleteCourseView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = CoursesSerializer
    def get_object(self, *args, **kwargs):
        queryset = Courses.objects.get(pk=self.kwargs['id'])
        return queryset

    def delete(self,request, *args, **kwargs):
        teacher = Teacher.objects.get(user_id=request.user.id)
        course = self.get_object()
        if teacher.id == course.teacher_id:
            course.delete()
            return Response({'msg': 'Course Deleted Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'You are not allowed to delete this course'}, status=status.HTTP_403_FORBIDDEN)
    
class UpdateCourseView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = UpdateCourseSerializer
    def get_object(self, *args, **kwargs):
        queryset = Courses.objects.get(pk=self.kwargs['id'])
        return queryset
    
    def put(self, request, *args, **kwargs):
        course = self.get_object()
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        teacher = Teacher.objects.get(user_id=request.user.id)
        if teacher.id == course.teacher_id:
            serializer.update(course, serializer.validated_data)
            return Response(
                {'msg': 'Course Updated Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'You are not allowed to update this course'}, status=status.HTTP_403_FORBIDDEN)

#Enroll Course

class EnrollCourseView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]
    
    def post(self, request, *args, **kwargs):
        id = request.user.id
        lesson = self.kwargs['lesson_id']
        course = self.kwargs['course_id']
        if Courses.objects.filter(pk=course).exists():
            course = Courses.objects.get(pk=course)
            number_of_students = course.number_of_students
            lessons = Lessons.objects.get(pk=lesson)
            for i in Enrollment.objects.filter(id=lessons.related_course.id):
                number_of_students = number_of_students - 1
            if number_of_students <= 0:
                return Response({'msg': 'Course is full'}, status=status.HTTP_202_ACCEPTED)
            if Lessons.objects.filter(pk=lesson).exists():
                lesson = Lessons.objects.get(pk=lesson)
                user = User.objects.get(pk=id)
                if lesson.student_id == None:
                    lesson.student_id = user.id
                    lesson.save()
                    enrollment = Enrollment(user_id=id, lessons=lesson)
                    enrollment.save()
                    teacher = Teacher.objects.get(pk=course.teacher_id)
                    teacher = User.objects.get(pk=teacher.user_id)
                    notify_teacher(teacher=teacher,course=course,lesson=lesson,student = request.user)
                    notify_student(course=course,lesson=lesson,student = request.user)
                    return Response({'msg': 'Enrollment successful'}, status=status.HTTP_200_OK)
                else:
                    return Response({'msg': 'Lesson is not avaliable'}, status=status.HTTP_202_ACCEPTED)
            return Response({'msg': 'Course Enrolled Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'Course Not Found'}, status=status.HTTP_404_NOT_FOUND)

class DeleteEnrollmentView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]

    def get_object(self, *args, **kwargs):
        queryset = Enrollment.objects.get(pk=self.kwargs['id']) 
        return queryset

    def delete(self,request, *args, **kwargs):
        enrollment = self.get_object()
        if enrollment.user_id == request.user.id:
            enrollment.lessons.student_id = None
            enrollment.delete()
            cancel_lesson(lesson = enrollment.lessons, student = request.user, teacher = enrollment.lessons.teacher.user, course = enrollment.lessons.related_course)
            return Response({'msg': 'Enrollment Deleted Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'You are not allowed to delete this enrollment'}, status=status.HTTP_403_FORBIDDEN)

class EnrollListStudentsView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = ListEnrollStudentsSerializer

    def get_queryset(self, *args, **kwargs):
        course = Courses.objects.get(pk=self.kwargs['course_id'])
        queryset = Enrollment.objects.all()
        queryset = queryset.filter(lessons__related_course=course)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class MyEnrollmentsView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]
    serializer_class = MyEnrollmentSerializer

    def get_queryset(self, *args, **kwargs):
        queryset = Enrollment.objects.filter(user_id=self.request.user.id)
        return queryset

    def get(self, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

#Lessons CRUD

class AddLessonsView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = AddLessonsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        teacher = Teacher.objects.get(user_id=request.user.id)
        course = Courses.objects.get(pk=self.kwargs['id'])
        if serializer.save(teacher, course) == True:
            return Response({'msg': 'Lesson Added Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'Lesson not added. Conflicting times'}, status=status.HTTP_400_BAD_REQUEST)

class DeleteLessonView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]

    def get_object(self, *args, **kwargs):
        queryset = Lessons.objects.get(pk=self.kwargs['lesson_id'])
        return queryset

    def delete(self, request, *args, **kwargs):
        teacher = Teacher.objects.get(user_id=request.user.id)
        course = Courses.objects.get(pk=self.kwargs['id'])
        if teacher.id == course.teacher_id:
            lesson = self.get_object()
            lesson.delete()
            if lesson.student_id != None:
                student = User.objects.get(pk=lesson.student_id)
                cancel_lesson_teacher(lesson = lesson, student = student, teacher = request.user, course = course)
            return Response({'msg': 'Lesson Deleted Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'You are not allowed to delete this lesson'}, status=status.HTTP_403_FORBIDDEN)
        
class UpdateLessonView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated&IsTeacherUser]
    serializer_class = UpdateLessonsSerializer

    def get_object(self, *args, **kwargs):
        queryset = Lessons.objects.get(pk=self.kwargs['lesson_id'])
        return queryset
    
    def put(self, request, *args, **kwargs):
        lesson = self.get_object()
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        teacher = Teacher.objects.get(user_id=request.user.id)
        student = User.objects.get(pk=lesson.student_id)
        if teacher.id == lesson.teacher_id:
            if serializer.update(lesson, serializer.validated_data) == True:
                notify_update_lesson(lesson = lesson, student = student, course = lesson.related_course)
                return Response(
                    {'msg': 'Lesson Updated Successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'msg': 'Lesson not updated. Conflicting times'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'msg': 'You are not allowed to update this lesson'}, status=status.HTTP_403_FORBIDDEN)