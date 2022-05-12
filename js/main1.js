
class Usuario {
    constructor(nombre, inversion, tiempo) {
        this.nombre = nombre;
        this.inversion = inversion;
        this.tiempo = tiempo;

    }
}
let boton = document.getElementById("calcular");
boton.addEventListener("click", cargarUsuario);

function cargarUsuario() {
    let nombre = document.getElementById("name").value;
    let inversion = document.getElementById("investment").value;
    let tiempo = document.getElementById("time").value;
    let usuario1 = new Usuario(nombre, inversion, tiempo);
    console.log(usuario1);
    mostrarUsuario(usuario1);
}

function mostrarUsuario(usuario) {
    let formulario = document.getElementById("user");
    formulario.innerHTML = "";

    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `Gracias ${usuario.nombre} ! Seleccionaste ${usuario.inversion} y tu plazo es de ${usuario.tiempo}`;

    nuevoContenido.className = "info-usuario";
    document.body.appendChild(nuevoContenido);
}
//Comienzo del Programa
let entrada = prompt("Bienvenido a la calculadora de inversiones, ingrese su nombre o escriba ESC para salir.");

while (entrada.toUpperCase() != "ESC") {
    alert("Hola! " + entrada + " vamos a comenzar!")

    if (entrada.toUpperCase() == "ESC");
    break;

}

