# Generated by Django 4.1.1 on 2022-10-26 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0003_restaurants_date_created_alter_restaurants_zip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurants',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
