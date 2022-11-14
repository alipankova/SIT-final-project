# Generated by Django 4.1.1 on 2022-11-14 14:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('post', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.PROTECT, related_name='post', to=settings.AUTH_USER_MODEL),
        ),
    ]
