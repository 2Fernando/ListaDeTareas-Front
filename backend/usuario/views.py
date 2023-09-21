from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import logout

def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)

    if user is not None:
        return HttpResponse("usuario no existente")
    else:
        return HttpResponse("Usuario existente")
    
def registro(request):
    username = request.POST['username']
    password = request.POST['password']
    email = request.POST['email']

    user = User.objects.create_user(username, email, password)
    user.save()

    return HttpResponse("Hello, world. You're at the polls index.")

def logout_view(request):
    logout(request)