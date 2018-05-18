from django.urls import path
from . import views

# 设置url命名空间
app_name = 'blog'

urlpatterns = [
    path('list/', views.index, name='index'),
    path('list/<int:pk>/', views.detail, name='detail'),
    path('category/', views.category, name='category'),
    path('tag/', views.tag, name='tag')
]