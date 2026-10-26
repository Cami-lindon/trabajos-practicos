
from django.contrib import admin
from .models import ActividadDeportiva, Horario, Inscripcion


@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "lugar", "cupo")
    search_fields = ("nombre", "lugar")


@admin.register(Horario)
class HorarioAdmin(admin.ModelAdmin):
    list_display = ("id", "actividad", "dia", "hora_inicio", "hora_fin")
    search_fields = ("actividad__nombre", "dia")


@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "apellido", "dni", "estado", "horario")
    search_fields = ("nombre", "apellido", "dni")

