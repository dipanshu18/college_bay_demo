from django.shortcuts import render

def explore(request):
    return render(request, 'collegebay/explore.html')

def product_info(request):
    return render(request, 'collegebay/product_info.html')

def profile(request):
    return render(request, 'collegebay/profile.html')

def request(request):
    return render(request, 'collegebay/request.html')

def post(request):
    return render(request, 'collegebay/post.html')
