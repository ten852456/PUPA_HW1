from rest_framework import viewsets
from bookdata.serializers import  BookSerializer
from bookdata.models import book
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

class BookViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = book.objects.all()
    serializer_class = BookSerializer

@csrf_exempt
def bookApi(request,id=0):
    if request.method=='GET':
        departments = book.objects.all()
        departments_serializer = BookSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)

    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        department_serializer = BookSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        department_data = JSONParser().parse(request)
        department=book.objects.get(id=department_data['id'])
        department_serializer=BookSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        department=book.objects.get(id=id)
        department.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
