# Generated by Django 3.2.9 on 2021-11-28 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookdata', '0002_alter_book_pic_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='amount',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='book',
            name='pic_url',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='book',
            name='price',
            field=models.CharField(max_length=10),
        ),
    ]
