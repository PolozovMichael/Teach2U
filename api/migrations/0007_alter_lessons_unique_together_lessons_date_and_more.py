# Generated by Django 4.1.6 on 2023-03-23 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_lessons_options_alter_lessons_day_of_the_week_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='lessons',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='lessons',
            name='date',
            field=models.DateField(default=None, verbose_name='Date'),
        ),
        migrations.AddField(
            model_name='lessons',
            name='student_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='enrollment',
            name='datetime',
            field=models.TimeField(default=None),
        ),
        migrations.AlterUniqueTogether(
            name='lessons',
            unique_together={('date', 'start_time', 'end_time')},
        ),
        migrations.RemoveField(
            model_name='lessons',
            name='day_of_the_week',
        ),
        migrations.RemoveField(
            model_name='lessons',
            name='status',
        ),
    ]
