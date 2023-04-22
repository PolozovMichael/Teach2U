from django.urls import path,include
from .views import *
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('curr/', CurrentUserView.as_view(), name='current-user'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Authentication
    path('signup/teacher/', TeacherSignupView.as_view()),
    path('signup/student/', StudentSignupView.as_view()),
    path('signup/educenter/', EduCenterSignupView.as_view()),
    path('activate/<uidb64>/<token>', activate, name='activate'),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(), name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/', SetNewPasswordAPIView.as_view(), name='password-reset-confirm'),
    path('delete/user/', DeleteUserView.as_view(), name='delete-user'),

    # Unauthorized
    path('student-list/', StudentListView.as_view()),
    path('teacher-list/', TeacherListView.as_view()),
    path('educenter-list/', EduCenterListView.as_view()),

    # Student
    path('student/dashboard/', StudentOnlyView.as_view()),
    path('update/student/', UpdateStudentView.as_view()),
    path('enroll/course/<int:course_id>/lesson/<int:lesson_id>', EnrollCourseView.as_view()),
    path('cancel/<int:id>', DeleteEnrollmentView.as_view()),
    path('lessons', MyEnrollmentsView.as_view()),

    # Teacher
    path('teacher/dashboard/', TeacherOnlyView.as_view()),
    path('update/teacher/', UpdateTeacherView.as_view()),
    path('create/course/', CreateCourseView.as_view(), name='create-course'),

    # Course (Teacher)
    path('course-list/<int:id>', CourseListView.as_view()),
    path('update/course/<int:id>', UpdateCourseView.as_view()),
    path('delete/course/<int:id>', DeleteCourseView.as_view()),
    path('course/<int:id>/add-lesson/', AddLessonsView.as_view(), name='add-lesson'),
    path('enroll/course/<int:course_id>/list', EnrollListStudentsView.as_view()),
    path('delete/course/<int:id>/lesson/<int:lesson_id>', DeleteLessonView.as_view()),
    path('update/course/<int:id>/lesson/<int:lesson_id>', UpdateLessonView.as_view()),

    # EduCenter
    path('educenter/dashboard/', EduCenterOnlyView.as_view()),
    path('update/educenter/', UpdateEduCenterView.as_view()),
]
