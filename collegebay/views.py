from django.shortcuts import render

def home(request):
    return render(request, 'collegebay/index.html')


def get_started(request):
    return render(request, 'collegebay/get_started.html')

def login(request):
    return render(request, 'collegebay/login.html')
