from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('get-started/', views.sign_up, name="sign-up"),
    path('log-in/', views.login, name="log-in"),
]
