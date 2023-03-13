from django.urls import path
from .views import *

urlpatterns = [
    path('signup/teacher/', TeacherSignupView.as_view()),
    path('signup/student', StudentSignupView.as_view()),
    path('signup/educenter/', EduCenterSignupView.as_view()),
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('student/dashboard/', StudentOnlyView.as_view()),
    path('teacher/dashboard/', TeacherOnlyView.as_view()),
    path('educenter/dashboard/', EduCenterOnlyView.as_view()),
]
