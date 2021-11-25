from rest_framework import serializers
from bookdata.models import book

class BookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = book
        fields = ['bookname', 'amount', 'pic_url', 'price']