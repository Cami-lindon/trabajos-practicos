from django.db import models


class ActividadDeportiva(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    lugar = models.CharField(max_length=100)
    cupo = models.PositiveIntegerField()


class Horario(models.Model):
    actividad = models.ForeignKey(
        ActividadDeportiva,
        on_delete=models.CASCADE,
        related_name="horarios"
    )
    dia = models.CharField(max_length=20)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

class Inscripcion(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    fecha_inscripcion = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=10, default="Activa")
    horario = models.ForeignKey(
        Horario,
        on_delete=models.CASCADE,
        related_name="inscripciones"
    )

