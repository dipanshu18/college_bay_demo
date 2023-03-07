from django.shortcuts import render

def explore(request):
    return render(request, 'collegebay/explore.html')
