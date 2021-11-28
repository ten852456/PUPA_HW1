from django.db import models

# Create your models here.

class book(models.Model):
    bookname = models.CharField(max_length=30)
    amount = models.CharField(max_length=10)
    pic_url = models.CharField(max_length=200)
    price = models.CharField(max_length=10)
    def __str__(self):
        return self.bookname