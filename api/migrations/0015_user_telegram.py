# Generated by Django 4.1.6 on 2023-05-20 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_user_birth_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='telegram',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]