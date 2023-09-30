from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import logout

from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(('POST',))
def inicioSesion(request):
    try:
        m = User.objects.get(username=request.data.get('usuario'))
        if m.check_password(request.data.get('password')):
            request.session["member_id"] = m.id
            return Response({"respuesta": "usuario existente"})
        else:
            return Response({"respuesta": "Usuario o contraseña incorrectos"})
    except User.DoesNotExist:
        return Response({"respuesta": "Usuario o contraseña incorrectos"})


@api_view(('POST',))
def registro(request):
    username = request.data.get('usuario')
    password = request.data.get('password')
    email = request.data.get('email')

    user = User.objects.create_user(username, email, password)
    user.save()

    return Response({"respuesta": "Usuario creado"})


@api_view(('POST',))
def logout(request):
    try:
        del request.session["member_id"]
    except KeyError:
        pass
    return Response({"respuesta": "You're logged out."})
