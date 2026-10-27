
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required, permission_required
from .models import ActividadDeportiva
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_POST


@login_required(login_url="/usuarios/login/")
@permission_required(
    "reservas.add_actividaddeportiva",
    raise_exception=True
)

def agregar_actividad(request):
    if request.method == "POST":
        nombre = request.POST.get("nombre", "").strip()
        descripcion = request.POST.get("descripcion", "").strip()
        lugar = request.POST.get("lugar", "").strip()
        cupo = request.POST.get("cupo", "").strip()

        if not nombre or not descripcion or not lugar or not cupo:
            messages.error(request, "Todos los campos son obligatorios.")
        else:
            try:
                cupo = int(cupo)

                if cupo <= 0:
                    messages.error(request, "El cupo debe ser mayor que cero.")
                else:
                    ActividadDeportiva.objects.create(
                        nombre=nombre,
                        descripcion=descripcion,
                        lugar=lugar,
                        cupo=cupo
                    )
                    messages.success(
                        request,
                        "La actividad deportiva se registró correctamente."
                    )
                    return redirect("lista_actividades")

            except ValueError:
                messages.error(request, "El cupo debe ser un número entero.")

    return render(request, "reservas/agregar_actividad.html")


def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()

    return render(
        request,
        "reservas/lista_actividades.html",
        {"actividades": actividades}
    )


def detalle_actividad(request, actividad_id):
    actividad = get_object_or_404(ActividadDeportiva, pk=actividad_id)

    return render(
        request,
        "reservas/detalle_actividad.html",
        {"actividad": actividad}
    )

def iniciar_sesion(request):
    if request.method == "POST":
        usuario = request.POST.get("username", "").strip()
        contrasena = request.POST.get("password", "")

        user = authenticate(
            request,
            username=usuario,
            password=contrasena
        )

        if user is not None:
            login(request, user)
            return redirect("lista_actividades")

        messages.error(request, "Usuario o contraseña incorrectos.")

    return render(request, "reservas/login.html")


@require_POST
def cerrar_sesion(request):
    logout(request)
    return redirect("lista_actividades")
