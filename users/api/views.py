from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .permissions import *


class TeacherSignupView(generics.CreateAPIView):
    serializer_class = TeacherSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
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
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "EduCenter Created Successfully"
        })
    
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'is_student': user.is_student,
            'is_teacher': user.is_teacher,
        })
    
class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)
    
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