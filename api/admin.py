from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(EduCenter)
admin.site.register(Courses)
admin.site.register(Lessons)
admin.site.register(Enrollment)