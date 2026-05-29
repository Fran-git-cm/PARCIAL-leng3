// Validaciones
function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

    if (nombre.length < 3 || !regex.test(nombre)) {
        document.getElementById("error-nombre").innerHTML = "Solo letras, minimo 3 caracteres";
        return false;
    }
    document.getElementById("error-nombre").innerHTML = "";
    return true;
}

function validarDNI() {
    var dni = document.getElementById("dni").value;

    if (isNaN(dni) || dni == "" || dni.length != 8) {
        document.getElementById("error-dni").innerHTML = "El DNI debe tener 8 numeros";
        return false;
    }
    document.getElementById("error-dni").innerHTML = "";
    return true;
}

function validarFecha() {
    var fecha = document.getElementById("fecha").value;
    var error = document.getElementById("error-fecha");

    if (fecha == "") {
        error.innerHTML = "Ingresa tu fecha de nacimiento";
        return false;
    }

    var fechaNac = new Date(fecha);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes == 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    if (edad < 18) {
        error.innerHTML = "Debes ser mayor de 18 años";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function validarFormulario() {
    var ok = validarNombre() && validarDNI() && validarFecha();
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = ok ? "Inscripcion enviada con exito!" : "Hay errores en el formulario";
    mensaje.style.color = ok ? "green" : "red";
}
// Preguntas progresivas
function hacerPreguntas() {
    var r1 = prompt("¿Cual es tu nacionalidad?");
    var r2 = prompt("¿Cual es tu nivel en programacion? (Basico / Intermedio / Avanzado)");
    var r3 = prompt("¿Por que elegiste esta carrera?");

    if (r1 == null) r1 = "No respondio";
    if (r2 == null) r2 = "No respondio";
    if (r3 == null) r3 = "No respondio";

    document.getElementById("respuestas").innerHTML =
        "<p>Pregunta 1: " + r1 + "</p>" +
        "<p>Pregunta 2: " + r2 + "</p>" +
        "<p>Pregunta 3: " + r3 + "</p>";
}
