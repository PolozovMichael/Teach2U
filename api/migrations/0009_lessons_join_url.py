# Generated by Django 4.1.6 on 2023-03-23 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_enrollment_course_remove_enrollment_datetime_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lessons',
            name='join_url',
            field=models.TextField(blank=True, null=True),
        ),
    ]
