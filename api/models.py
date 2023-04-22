from django.contrib.auth.hashers import make_password
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser, UserManager
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
from django.core.exceptions import ValidationError
 
class CustomManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    username = None
    surname = models.CharField(max_length=255, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True, default=None)
    email = models.EmailField(_("email address"), max_length=150,
        unique=True,
        error_messages={
            "unique": _("A user with that email already exists."),
        },)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = "email"
    objects = CustomManager()
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_edu_center = models.BooleanField(default=False)
     
    def __str__(self):
        return self.email

@receiver(post_save, sender=settings.AUTH_USER_MODEL) 
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Teacher(models.Model):
    user = models.OneToOneField(User, related_name='teacher', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)
    education = models.CharField(max_length=255, null = True, blank = True)

    def __str__(self):
        return self.user.email
    
class Student(models.Model):
    user = models.OneToOneField(User, related_name='student', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)

    def __str__(self):
        return self.user.email
    
class EduCenter(models.Model):
    user = models.OneToOneField(User, related_name='edu_center', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)
    city = models.CharField(max_length=255, null = True, blank = True)
    address = models.CharField(max_length=255, null = True, blank = True)

    def __str__(self):
        return self.user.email
    
class Courses(models.Model):
    name = models.CharField(max_length=255, null = True, blank = True)
    description = models.CharField(max_length=255, null = True, blank = True)
    price = models.IntegerField(null = False, blank = False)
    number_of_students = models.IntegerField(null = False, blank = False)
    teacher = models.ForeignKey(Teacher, related_name='courses', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Schedule(models.Model):
    teachers = models.ForeignKey(Teacher, related_name='teachers', on_delete=models.CASCADE)
    lessons = models.ManyToManyField(Courses, related_name='lessons')    

class Lessons(models.Model):
    date = models.DateField(_('Date'), default=None)
    start_time = models.TimeField(_('Start time'))
    end_time = models.TimeField(_('End time'))
    student_id = models.IntegerField(null=True, blank=True)
    teacher = models.ForeignKey(Teacher, related_name='teacher', on_delete=models.CASCADE)
    related_course = models.ForeignKey(Courses, related_name='related_course', on_delete=models.CASCADE)
    start_url = models.TextField(null=True, blank=True)
    join_url = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = _('Lesson')
        verbose_name_plural = _('Lessons')
        unique_together = (('date', 'start_time', 'end_time'),)
   
    def clean(self):
        super().clean()

        conflicting_lessons = Lessons.objects.filter(
            date=self.date,
            start_time__lt=self.end_time,
            end_time__gt=self.start_time
        )
        if self.pk:
            conflicting_lessons = conflicting_lessons.exclude(pk=self.pk)
        if conflicting_lessons.exists():
            conflicting_times = ', '.join(
                f'{lesson.start_time.strftime("%H:%M")} - {lesson.end_time.strftime("%H:%M")}'
                for lesson in conflicting_lessons
            )
            return conflicting_times
        else:
            return True
            
class Enrollment(models.Model):
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    lessons = models.ForeignKey(Lessons, related_name='lessons', on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name
    