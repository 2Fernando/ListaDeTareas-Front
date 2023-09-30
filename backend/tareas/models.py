from django.db import models
from django.conf import settings


class Tarea(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=1000)
    realizada = models.BooleanField(default=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.titulo
