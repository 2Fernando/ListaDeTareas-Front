from django.http import JsonResponse
from backend.tareas.models import Tarea
from django.views.decorators.csrf import csrf_exempt


def listadoTareas(request):
    tareas = Tarea.objects.all().values()
    return JsonResponse(list(tareas), safe=False)


def actualizarTarea(request):
    id = request.data.get("id")

    tarea = Tarea.objects.filter(id=id).first()
    if tarea is None:
        response_data = {"respuesta": "Tarea no existe"}
        return JsonResponse(response_data)

    tarea.titulo = request.PUT['titulo']
    tarea.descripcion = request.PUT['descripcion']
    tarea.realizada = request.PUT['realizada']

    tarea.save()
    response_data = {"respuesta": "tarea actualizada"}
    return JsonResponse(response_data)


@csrf_exempt
def crearTarea(request):
    titulo_tarea = request.POST['titulo']
    descripcion_tarea = request.POST['descripcion']
    print(titulo_tarea)
    nueva_tarea = Tarea(titulo=titulo_tarea,
                        descripcion=descripcion_tarea, realizada=False)
    nueva_tarea.save()
    return JsonResponse("", safe=False)


def borrarTarea(request):
    id = request.data.get("id")

    tarea = Tarea.objects.filter(id=id).first()
    if tarea is None:
        response_data = {"respuesta": "Tarea no existe"}
        return JsonResponse(response_data)

    tarea.delete()
    return JsonResponse({"respuesta": "tarea borrada"})
