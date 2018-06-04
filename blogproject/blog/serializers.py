from rest_framework import serializers

from .models import Post, Category, Tag

class PostSerializers (serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'img', 'created_time', 'modified_time', 'excerpt', 'authors_id', 'category_id', 'tags')

class CategorySerializers (serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class TagSerializers (serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')