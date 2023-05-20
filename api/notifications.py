from django.http import HttpResponse
from rest_framework import status
from django.contrib.auth import get_user_model
from django.utils.encoding import force_bytes, force_str, force_str, smart_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .tokens import account_activation_token
from django.contrib import messages
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
import json
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site

def activate(request, uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()

        messages.success(request, "Thank you for your email confirmation. Now you can login your account.")
        return HttpResponse(json.dumps({'message': "Thank you for your email confirmation. Now you can login your account."}), status=status.HTTP_200_OK)
    else:
        messages.error(request, "Activation link is invalid!")
    return HttpResponse(json.dumps({'message': "Activation link is invalid!"}), status=status.HTTP_400_BAD_REQUEST, content_type="application/json")

def cancel_lesson_teacher(lesson,student,teacher,course,*args, **kwargs):
    mail_subject = "Your lesson has been cancelled"
    message = render_to_string("notify_cancel_lesson_teacher.html", {
    'student': student,
    'course': course,
    'lesson': lesson,
    'teacher': teacher
    })
    email = EmailMessage(mail_subject, message, to=[student.email])
    email.send() 

def activateEmail(request, user, to_email):
    mail_subject = "Activate your user account."
    message = render_to_string("template_activate_account.html", {
        'user': user,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
        "protocol": 'https' if request.is_secure() else 'http'
    })
    email = EmailMessage(mail_subject, message, to=[to_email])
    email.send()

def notify_teacher(teacher, course, lesson, student, *args, **kwargs):
        mail_subject = "New enrollment!"
        message = render_to_string("notify_enrollment_teacher.html", {
        'teacher': teacher,
        'course': course,
        'lesson': lesson,
        'student': student,
        'user_student': user_student
        })
        email = EmailMessage(mail_subject, message, to=[teacher.email])
        email.send()

def notify_student(student, course, lesson,teacher, *args, **kwargs):
        mail_subject = "Your lesson"
        message = render_to_string("notify_enrollment_student.html", {
        'student': student,
        'course': course,
        'lesson': lesson,
        'teacher': teacher,
        'user_teacher': user_teacher
        })
        email = EmailMessage(mail_subject, message, to=[student.email])
        email.send()

def cancel_lesson(lesson,student,teacher,course,*args, **kwargs):
    mail_subject = "Your lesson has been cancelled"
    message = render_to_string("notify_cancel_lesson.html", {
    'student': student,
    'course': course,
    'lesson': lesson,
    'teacher': teacher
    })
    email = EmailMessage(mail_subject, message, to=[teacher.email])
    email.send()

def notify_update_lesson(lesson,student,course,*args, **kwargs):
    mail_subject = "Your lesson has been updated"
    message = render_to_string("notify_update_lesson.html", {
    'student': student,
    'course': course,
    'lesson': lesson,
    })
    email = EmailMessage(mail_subject, message, to=[student.email])
    email.send()


def new_enrollment_for_us(lesson,student,teacher,course,*args, **kwargs):
    mail_subject = "New enrollment!"
    message = render_to_string("notify_new_enrollment_us.html", {
    'student': student,
    'course': course,
    'teacher': teacher,
    'lesson': lesson
    })
    email = EmailMessage(mail_subject, message, to=['teach2u.0000@gmail.com'])
    email.send()
