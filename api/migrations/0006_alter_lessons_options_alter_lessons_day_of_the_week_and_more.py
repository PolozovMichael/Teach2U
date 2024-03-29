# Generated by Django 4.1.6 on 2023-03-23 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_enrollment_datetime_schedule_lessons'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lessons',
            options={'verbose_name': 'Lesson', 'verbose_name_plural': 'Lessons'},
        ),
        migrations.AlterField(
            model_name='lessons',
            name='day_of_the_week',
            field=models.CharField(choices=[('MON', 'Monday'), ('TUE', 'Tuesday'), ('WED', 'Wednesday'), ('THU', 'Thursday'), ('FRI', 'Friday'), ('SAT', 'Saturday'), ('SUN', 'Sunday')], max_length=3, verbose_name='Day of the week'),
        ),
        migrations.AlterField(
            model_name='lessons',
            name='end_time',
            field=models.TimeField(verbose_name='End time'),
        ),
        migrations.AlterField(
            model_name='lessons',
            name='start_time',
            field=models.TimeField(verbose_name='Start time'),
        ),
        migrations.AlterUniqueTogether(
            name='lessons',
            unique_together={('day_of_the_week', 'start_time', 'end_time')},
        ),
    ]
