from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import PostSerializers, CategorySerializers, TagSerializers
from .models import Post, Category, Tag

# Create your views here.
@api_view(['GET'])
def index (request):
    if request.method == 'GET':
        post = Post.objects.all().order_by('-created_time')
        serializer = PostSerializers(post, many=True)
        print(serializer.data
        # for non
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def category (request):
    if request.method == 'GET':
        category = Category.objects.all()
        serializer = CategorySerializers(category, many=True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def tag (request):
    if request.method == 'GET':
        tag = Tag.objects.all()
        serializer = TagSerializers(tag, many=True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def detail (request, pk):
    if request.method == 'GET':
        post = Post.objects.get(pk=pk)
        serializer = PostSerializers(post)
        print(serializer.data)
        return JsonResponse(serializer.data)
