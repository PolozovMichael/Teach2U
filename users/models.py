from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.dispatch import receiver
 
class User(AbstractUser):
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_edu_center = models.BooleanField(default=False)
     
    def __str__(self):
        return self.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL) 
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
 

class Teacher(models.Model):
    user = models.OneToOneField(User, related_name='teacher', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)
    educetion = models.CharField(max_length=255, null = True, blank = True)

    def __str__(self):
        return self.user.username
    
class Student(models.Model):
    user = models.OneToOneField(User, related_name='student', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)

    def __str__(self):
        return self.user.username
    
class EduCenter(models.Model):
    user = models.OneToOneField(User, related_name='edu_center', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, null = True, blank = True)
    city = models.CharField(max_length=255, null = True, blank = True)
    address = models.CharField(max_length=255, null = True, blank = True)


    def __str__(self):
        return self.user.username
    


    