class Usuario {
    constructor(nombre, tipo, monto, tiempo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.monto = monto;
        this.tiempo = tiempo;

    }
}
let boton = document.getElementById("calcular");
boton.addEventListener("click", cargarUsuario);

function cargarUsuario() {
    let nombre = document.getElementById("name").value;
    let tipo = document.getElementById("type").value;
    let monto = document.getElementById("amount").value;
    let tiempo = document.getElementById("time").value;
    let usuario1 = new Usuario(nombre, tipo, monto, tiempo);
    console.log(usuario1);
    mostrarUsuario(usuario1);
}

function mostrarUsuario(usuario) {
    let formulario = document.getElementById("user");
    formulario.innerHTML = "";

    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `Gracias ${usuario.nombre} ! Seleccionaste ${usuario.tipo} el monto de la inversión es de $${usuario.monto} y el plazo es de ${usuario.tiempo}.`;

    nuevoContenido.className = "info-usuario";
    formulario.appendChild(nuevoContenido);
}

