from django.db import models


class Tarea(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=1000)
    realizada = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo
