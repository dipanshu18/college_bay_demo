from django.shortcuts import render

def home(request):
    return render(request, 'collegebay/index.html')


def sign_up(request):
    return render(request, 'collegebay/sign_up.html')

def login(request):
    return render(request, 'collegebay/login.html')
