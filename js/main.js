// ARRAY DE JUGADORES

let jugadores = JSON.parse(localStorage.getItem("jugadores")) || []


// OBJETO JUGADOR

function Jugador(nombre, edad, posicion){
    this.nombre = nombre
    this.edad = edad
    this.posicion = posicion
}


// SELECTORES DEL DOM

const formulario = document.getElementById("formJugador")
const contador = document.getElementById("contador")
const ultimoJugador = document.getElementById("ultimoJugador")

// contenedores por posición

const contenedorArmadores = document.getElementById("armadores")
const contenedorOpuestos = document.getElementById("opuestos")
const contenedorCentrales = document.getElementById("centrales")
const contenedorPuntas = document.getElementById("puntas")
const contenedorLiberos = document.getElementById("liberos")


// GUARDAR EN LOCALSTORAGE

function guardarEnStorage(){
    localStorage.setItem("jugadores", JSON.stringify(jugadores))
}


// CREAR CARD DE JUGADOR

function crearCardJugador(jugador, index){

    const card = document.createElement("div")
    card.classList.add("card-jugador")

    card.innerHTML = `
    <h4>${jugador.nombre}</h4>
    <p>Edad: ${jugador.edad}</p>
    <p>Posición: ${jugador.posicion}</p>
    `

    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"

    botonEliminar.addEventListener("click", () => {
        eliminarJugador(index)
    })

    card.appendChild(botonEliminar)

    return card
}


// MOSTRAR JUGADORES

function mostrarJugadores(){

    contenedorArmadores.innerHTML = ""
    contenedorOpuestos.innerHTML = ""
    contenedorCentrales.innerHTML = ""
    contenedorPuntas.innerHTML = ""
    contenedorLiberos.innerHTML = ""

    jugadores.forEach((jugador, index) => {

        const card = crearCardJugador(jugador, index)

        switch(jugador.posicion){

            case "Armador":
                contenedorArmadores.appendChild(card)
                break

            case "Opuesto":
                contenedorOpuestos.appendChild(card)
                break

            case "Central":
                contenedorCentrales.appendChild(card)
                break

            case "Punta":
                contenedorPuntas.appendChild(card)
                break

            case "Líbero":
                contenedorLiberos.appendChild(card)
                break
        }

    })

    actualizarContador()
    mostrarUltimoJugador()

}


// CONTADOR DE JUGADORES

function actualizarContador(){
    contador.textContent = `Total de jugadores registrados: ${jugadores.length}`
}


// MOSTRAR ÚLTIMO JUGADOR

function mostrarUltimoJugador(){

    if(jugadores.length > 0){

        const jugador = jugadores[jugadores.length - 1]

        ultimoJugador.textContent =
        `${jugador.nombre} - ${jugador.posicion} (${jugador.edad} años)`

    }else{

        ultimoJugador.textContent = "No hay jugadores registrados"

    }

}


// REGISTRAR JUGADOR

function registrarJugador(event){

    event.preventDefault()

    const nombre = document.getElementById("nombre").value.trim()
    const edad = document.getElementById("edad").value
    const posicion = document.getElementById("posicion").value

    // Validar posición

    if(posicion === ""){
        return
    }

    // Evitar jugadores duplicados

    const jugadorExistente = jugadores.find(j =>
        j.nombre.toLowerCase() === nombre.toLowerCase()
    )

    if(jugadorExistente){
        alert("Este jugador ya está registrado.")
        return
    }

    const nuevoJugador = new Jugador(nombre, edad, posicion)

    jugadores.push(nuevoJugador)

    guardarEnStorage()

    mostrarJugadores()

    formulario.reset()

}


// ELIMINAR JUGADOR

function eliminarJugador(index){

    jugadores.splice(index, 1)

    guardarEnStorage()

    mostrarJugadores()

}


// EVENTO

formulario.addEventListener("submit", registrarJugador)


// CARGA INICIAL

mostrarJugadores()