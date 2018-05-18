# coding: utf-8
from django.db import models
from django.contrib.auth.models import User
from django.utils.six import python_2_unicode_compatible

# Create your models here.

# python_2_unicode_compatible 装饰器用于兼容 Python2
# @python_2_unicode_compatible
class Category (models.Model):
    name = models.CharField(max_length=100)

    def __str__ (self):
        return self.name

# @python_2_unicode_compatible
class Tag (models.Model):
    name = models.CharField(max_length=100)
    
    def __str__ (self):
        return self.name

# @python_2_unicode_compatible
class Post (models.Model):
    title = models.CharField(max_length=70)
    body = models.TextField()
    created_time = models.DateField() 
    modified_time = models.DateField()

    # 摘要
    # 指定 CharField 的 blank=True 参数值后就可以允许空值了。
    excerpt = models.CharField(max_length=200, blank=True)

    # ForeignKey 和 ManyToManyField 一对多和多对多
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True) 

    authors = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__ (self):
        return self.title