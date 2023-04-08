let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador)

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReniciar = document.getElementById('boton-reinicio')
    btnReniciar.addEventListener('click', reiniciarJuego)

}

function seleccionMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascotaJugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Lydos"
    } else {
        alert("Debes seleccionar una mascota")
    }
    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipeto"
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        spanMascotaEnemigo.innerHTML = "Lydos"
    }
}

//Funciones de tipo de ataque
function ataqueFuego() {
    ataqueJugador = 'Fuego'
    randomAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    randomAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    randomAtaqueEnemigo()
}

function randomAtaqueEnemigo() {
    let randomAtaque = aleatorio(1, 3)

    if (randomAtaque == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (randomAtaque == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")


    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("GANASTE - Felicitaciones!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE - Lo siento!")
    }
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.disabled = true
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.disabled = true
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota de tu enemigo atacó con " + ataqueEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)