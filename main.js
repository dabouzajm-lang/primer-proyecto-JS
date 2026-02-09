// CONSTANTES

const deporte = "Vóley";
const categoria = "Masculino";

const posiciones = [
  "Armador",
  "Opuesto",
  "Central",
  "Punta",
  "Líbero"
];

// Muestra de información

function mostrarPosiciones() {
  alert(
    "Bienvenido al simulador de " + deporte + " 🏐\n\n" +
    "Posiciones disponibles:\n" +
    posiciones.join(" - ")
  );

  console.log("Posiciones disponibles:", posiciones);
}

// Ingreso de datos

function ingresarDatosJugador() {
  let nombre = prompt("Ingresá tu nombre:");
  let edad = prompt("Ingresá tu edad:");
  let posicion;

// Validación de la posición
  do {
    posicion = prompt(
      "¿Qué posición jugás?\n" +
      posiciones.join(", ")
    );

    if (!posiciones.includes(posicion)) {
      alert("Posición inválida ❌\nIntentá nuevamente.");
    }

  } while (!posiciones.includes(posicion));

  console.log("Datos ingresados:", nombre, edad, posicion);

  return {
    nombre: nombre,
    edad: edad,
    posicion: posicion
  };
}

// Mostrar resumen del registro

function mostrarResumenJugador(jugador) {
  alert(
    "Jugador registrado correctamente ✅\n\n" +
    "Nombre: " + jugador.nombre +
    "\nEdad: " + jugador.edad +
    "\nDeporte: " + deporte +
    "\nCategoría: " + categoria +
    "\nPosición: " + jugador.posicion
  );

  console.log("Jugador registrado:", jugador);
}

// Ejecución del simulador
mostrarPosiciones();

const confirmar = confirm("¿Deseás registrar un jugador?");

if (confirmar) {
  const jugador = ingresarDatosJugador();
  mostrarResumenJugador(jugador);
} else {
  alert("Registro cancelado. ¡Hasta la próxima!");
  console.log("El usuario canceló el registro.");
}
