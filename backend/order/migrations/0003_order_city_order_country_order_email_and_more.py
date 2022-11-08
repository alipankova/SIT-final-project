# Generated by Django 4.1.1 on 2022-11-08 15:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('order', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='city',
            field=models.TextField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='country',
            field=models.TextField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.EmailField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='first_name',
            field=models.TextField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='last_name',
            field=models.TextField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='phone',
            field=models.TextField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_note',
            field=models.TextField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='order',
            name='street',
            field=models.TextField(default=None, max_length=30),
        ),
        migrations.AddField(
            model_name='order',
            name='street_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='zip',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='order',
            name='buyer',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.PROTECT, related_name='order', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('OP', 'open'), ('CL', 'closed'), ('PA', 'paid'), ('SH', 'shipped')], default='OP', max_length=10),
        ),
    ]
