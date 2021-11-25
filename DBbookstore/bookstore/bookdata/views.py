from rest_framework import viewsets
from bookdata.serializers import  BookSerializer
from bookdata.models import book

class BookViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = book.objects.all()
    serializer_class = BookSerializer
