from django.shortcuts import render

def profile(request):
    return render(request, 'collegebay/profile.html')
