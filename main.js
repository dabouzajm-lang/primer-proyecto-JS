// =======================
// ARRAY DE JUGADORES
// =======================

let jugadores = JSON.parse(localStorage.getItem("jugadores")) || []


// =======================
// OBJETO JUGADOR
// =======================

function Jugador(nombre, edad, posicion){
this.nombre = nombre
this.edad = edad
this.posicion = posicion
}


// =======================
// SELECTORES DOM
// =======================

const formulario = document.getElementById("formJugador")
const listaJugadores = document.getElementById("listaJugadores")
const contador = document.getElementById("contador")
const ultimoJugador = document.getElementById("ultimoJugador")


// =======================
// GUARDAR EN LOCALSTORAGE
// =======================

function guardarEnStorage(){
localStorage.setItem("jugadores", JSON.stringify(jugadores))
}


// =======================
// MOSTRAR JUGADORES
// =======================

function mostrarJugadores(){

listaJugadores.innerHTML = ""

jugadores.forEach((jugador, index) => {

const li = document.createElement("li")

li.innerHTML = `
${jugador.nombre} | ${jugador.edad} años | ${jugador.posicion}
<button onclick="eliminarJugador(${index})">Eliminar</button>
`

listaJugadores.appendChild(li)

})

actualizarContador()
mostrarUltimoJugador()

}


// =======================
// CONTADOR DE JUGADORES
// =======================

function actualizarContador(){
contador.textContent = `Total de jugadores registrados: ${jugadores.length}`
}


// =======================
// MOSTRAR ÚLTIMO JUGADOR
// =======================

function mostrarUltimoJugador(){

if(jugadores.length > 0){

const jugador = jugadores[jugadores.length - 1]

ultimoJugador.textContent =
`${jugador.nombre} - ${jugador.posicion}`

}else{

ultimoJugador.textContent = "No hay jugadores registrados"

}

}


// =======================
// REGISTRAR JUGADOR
// =======================

function registrarJugador(event){

event.preventDefault()

const nombre = document.getElementById("nombre").value
const edad = document.getElementById("edad").value
const posicion = document.getElementById("posicion").value

const nuevoJugador = new Jugador(nombre, edad, posicion)

jugadores.push(nuevoJugador)

guardarEnStorage()

mostrarJugadores()

formulario.reset()

}


// =======================
// ELIMINAR JUGADOR
// =======================

function eliminarJugador(index){

jugadores.splice(index,1)

guardarEnStorage()

mostrarJugadores()

}


// =======================
// EVENTO
// =======================

formulario.addEventListener("submit", registrarJugador)


// =======================
// CARGA INICIAL
// =======================

mostrarJugadores()