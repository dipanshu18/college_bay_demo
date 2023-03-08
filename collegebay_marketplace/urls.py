from django.urls import path
from . import views

urlpatterns = [
    path('explore/', views.explore, name="explore"),
    path('product_info/', views.product_info, name="product-info"),
    path('profile/', views.profile, name="profile"),
    path('request/', views.request, name="request"),
    path('post/', views.post, name="post"),
]