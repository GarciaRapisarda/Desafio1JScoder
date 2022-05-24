class Usuario {
    constructor(nombre, tipo, monto, tiempo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.monto = monto;
        this.tiempo = tiempo;

    }
}

let campo_nombre = document.getElementById("name");
campo_nombre.addEventListener("keyup", eventoKey);

function eventoKey() {
    let alertaCampo = `<img src="images/cruz.svg"><p>Ingresá un Nombre válido</p>`;
    if (campo_nombre.value.length <= 2) {
        document.getElementById("form").innerHTML = alertaCampo
    } else {
        document.getElementById("form").innerHTML = ""
    }
}

let campo_monto = document.getElementById("amount");
campo_monto.addEventListener("keyup", eventoKey1);

function eventoKey1 () {
    let alertaCampo1 =  `<img src="images/cruz.svg"><p>Ingresá un Monto válido</p>`;
    (campo_monto.value < 1000) ? document.getElementById("form1").innerHTML = alertaCampo1 : document.getElementById("form1").innerHTML = ""   
}


let boton = document.getElementById("calcular");
boton.addEventListener("click", cargarUsuario);

function cargarUsuario () {
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

