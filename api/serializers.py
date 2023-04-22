import datetime
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_str
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django_zoom_meetings import ZoomMeetings
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Models Entities
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'birth_date', 'surname']

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['phone', 'education']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['phone']

class EduCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = EduCenter
        fields = ['phone', 'city', 'address']

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['name', 'description', 'price', 'number_of_students']

class LessonsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Lessons
        fields = ['date', 'start_time', 'end_time']

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    remember = serializers.BooleanField(default=False)
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        return token

class LessonsListSerializer(serializers.ModelSerializer):
    related_course = CoursesSerializer(read_only=True)
    class Meta:
        model = Lessons
        fields = ['date', 'start_time', 'end_time', 'related_course']

# Sign Up Serializers
class TeacherSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    phone = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'password2', 'phone', 'birth_date', 'surname']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self, **kwargs):
        user = User(
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            email = self.validated_data['email'],
            birth_date = self.validated_data['birth_date'],
            surname = self.validated_data['surname']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'Passwords must match.'})
        user.set_password(password)
        user.is_teacher = True
        user.is_active = False
        user.save()
        Teacher.objects.create(
            user=user, 
            phone=self.validated_data['phone']
        )
        return user
        
class StudentSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    phone = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'password2', 'phone', 'birth_date', 'surname']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self, **kwargs):
        user = User(
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
            email = self.validated_data['email'],
            birth_date = self.validated_data['birth_date'],
            surname = self.validated_data['surname']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'Passwords must match.'})
        user.set_password(password)
        user.is_student = True
        user.is_active = False
        user.save()
        Student.objects.create(user=user, phone=self.validated_data['phone'])
        return user

class EduCenterSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    phone = serializers.CharField(write_only=True)
    city = serializers.CharField(write_only=True)
    address = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['first_name', 'email', 'password', 'password2', 'phone', 'city', 'address']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self, **kwargs):
        user = User(
            first_name = self.validated_data['first_name'],
            email = self.validated_data['email']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'Passwords must match.'})
        user.set_password(password)
        user.is_edu_center = True
        user.is_active = False
        user.save()
        EduCenter.objects.create(
            user=user,
            phone = self.validated_data['phone'],
            city = self.validated_data['city'],
            address = self.validated_data['address']
        )
        return user

#List Serializers
class ListTeacher(serializers.ModelSerializer):
    teacher = TeacherSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'is_student', 'is_teacher', 'is_edu_center', 'teacher']

class ListStudent(serializers.ModelSerializer):
    student = StudentSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'is_student', 'is_teacher', 'is_edu_center', 'student']

class ListEduCenter(serializers.ModelSerializer):
    edu_center = EduCenterSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'is_student', 'is_teacher', 'is_edu_center', 'edu_center']

#Update Serializers

class UpdateTeacherSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'teacher']
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('teacher')
        teacher = instance.teacher
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        teacher.phone = profile_data.get('phone', teacher.phone)
        teacher.education = profile_data.get('education', teacher.education)
        teacher.save()
        return instance

class UpdateStudentSerializer(serializers.ModelSerializer):
    student = StudentSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'student']
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('student')
        student = instance.student
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        student.phone = profile_data.get('phone', student.phone)
        student.save()
        return instance
    
class UpdateEduCenterSerializer(serializers.ModelSerializer):
    edu_center = EduCenterSerializer(many=False)
    class Meta:
        model = User
        fields = ['first_name', 'email', 'edu_center']
    
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('edu_center')
        edu_center = instance.edu_center
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        edu_center.phone = profile_data.get('phone', edu_center.phone)
        edu_center.city = profile_data.get('city', edu_center.city)
        edu_center.address = profile_data.get('address', edu_center.address)
        edu_center.save()
        return instance
    
class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)

class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    

# Reset Password Serializers
class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']

class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        
# CRUD Courses

class CreateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['name', 'description', 'price', 'number_of_students']

    def save(self, user,**kwargs):
        course = Courses(
            name = self.validated_data['name'],
            description = self.validated_data['description'],
            price = self.validated_data['price'],
            number_of_students = self.validated_data['number_of_students'],
            teacher = user
        )
        course.save()
        return course

class ListLessonsSeriaziler(serializers.ModelSerializer):
    related_course = LessonsSerializer(many=True)
    class Meta:
        model = Courses
        fields = ['name', 'description', 'price', 'number_of_students', 'related_course']

class ListCourseSerializer(serializers.ModelSerializer):
    courses = ListLessonsSeriaziler(many=True)
    class Meta:
        model = Teacher
        fields = ['phone', 'education', 'courses']

class UpdateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['name', 'description', 'price', 'number_of_students']
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.number_of_students = validated_data.get('number_of_students', instance.number_of_students)
        instance.save()
        return instance

class ListEnrollStudentsSerializer(serializers.ModelSerializer):
    user = ListStudent(many=False)

    class Meta:
        model = Enrollment
        fields = ['user_id', 'lessons', 'user']

class MyEnrollmentSerializer(serializers.ModelSerializer):
    lessons = LessonsListSerializer(many=False)

    class Meta:
        model = Enrollment
        fields = ['user_id', 'lessons']

api_key = "kLLqWqbaR-W5x0LNTa2r4w"
secret_key = "wzoqdUiSaTPov06gy1gyhK7bdf97r0HrjiWf"
zoom_email = "teach2u.0000@gmail.com"
my_zoom = ZoomMeetings(api_key,secret_key,zoom_email)

class AddLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ['date', 'start_time', 'end_time']
    
    def save(self, teacher, course, **kwargs):
        lessons = Lessons(
            date = self.validated_data['date'],
            start_time = self.validated_data['start_time'],
            end_time = self.validated_data['end_time'],
            teacher = teacher,
            related_course = course
        )
        if lessons.clean() == True:
            duration = datetime.datetime.combine(self.validated_data['date'], self.validated_data['end_time'])-datetime.datetime.combine(self.validated_data['date'],self.validated_data['start_time'])
            duration = int(duration.total_seconds()/60)
            create = my_zoom.CreateMeeting(datetime.datetime.combine(self.validated_data['date'],self.validated_data['start_time'])+datetime.timedelta(hours=6),
                                           course.name,
                                           duration,
                                           'teach2u')
            print(create)
            lessons.start_url = create['start_url']
            lessons.join_url = create['join_url']
            lessons.save()
            return True
        else:
            return False
   
class UpdateLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ['date', 'start_time', 'end_time']
    
    def update(self, instance, validated_data):
        instance.date = validated_data.get('date', instance.date)
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        if instance.clean() == True:

            instance.save()
            return True
        else:
            return False

class CurrentUserSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(many=False)
    student = StudentSerializer(many=False)
    edu_center = EduCenterSerializer(many=False)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'birth_date', 'surname', 'is_student', 'is_teacher', 'is_edu_center', 'teacher', 'student', 'edu_center']

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        if instance.is_student:
            ret.pop('teacher')
            ret.pop('edu_center')
        elif instance.is_teacher:
            ret.pop('student')
            ret.pop('edu_center')
        elif instance.is_edu_center:
            ret.pop('student')
            ret.pop('teacher')
        return ret
