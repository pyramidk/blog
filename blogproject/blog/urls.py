from django.urls import path
from . import views

# 设置url命名空间
app_name = 'blog'

urlpatterns = [
    path('', views.index, name='index'),
    path('category/', views.category, name='category'),
    path('tag/', views.tag, name='tag')
]