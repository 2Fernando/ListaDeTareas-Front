from backend.tareas.models import Tarea
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User


@api_view(('GET',))
def listado(request):
    userId = request.session["member_id"]
    tareas = Tarea.objects.filter(user_id=userId).values()
    return Response(tareas)


@api_view(('GET',))
def tarea(request, idTarea):
    tarea = Tarea.objects.filter(id=idTarea).values()[0]
    if tarea is None:
        response_data = {"respuesta": "Tarea no existe"}
        return Response(response_data)

    return Response(tarea)


@api_view(('PUT',))
def editar(request, idTarea):
    tarea = Tarea.objects.filter(id=idTarea).first()
    if tarea is None:
        response_data = {"respuesta": "Tarea no existe"}
        return Response(response_data)

    tarea.titulo = request.data.get('titulo')
    tarea.descripcion = request.data.get('descripcion')
    tarea.realizada = request.data.get('realizada')

    tarea.save()
    response_data = {"respuesta": "tarea actualizada"}
    return Response(response_data)


@api_view(('POST',))
def crear(request):
    titulo_tarea = request.data.get('titulo')
    descripcion_tarea = request.data.get('descripcion')

    userId = request.session["member_id"]

    user = User.objects.filter(id=userId).first()

    nueva_tarea = Tarea(titulo=titulo_tarea,
                        descripcion=descripcion_tarea, realizada=False, user=user)
    nueva_tarea.save()

    return Response({"respuesta": "tarea creada"})


@api_view(('DELETE',))
def eliminar(request):
    id = request.data.get("id")

    tarea = Tarea.objects.filter(id=id).first()
    if tarea is None:
        response_data = {"respuesta": "Tarea no existe"}
        return Response(response_data)

    tarea.delete()
    return Response({"respuesta": "tarea borrada"})
