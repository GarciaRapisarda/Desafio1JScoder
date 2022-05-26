class Usuario {
    constructor(nombre, correo, telefono) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;

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

let campo_monto = document.getElementById("phone");
campo_monto.addEventListener("keyup", eventoKey1);

function eventoKey1() {
    let alertaCampo1 =  `<img src="images/cruz.svg"><p>Ingresá un número de telefono válido</p>`;
    (campo_monto.value < 1000) ? document.getElementById("form1").innerHTML = alertaCampo1 : document.getElementById("form1").innerHTML = ""   
}

let campo_email = document.getElementById("email");
campo_email.addEventListener("keyup", eventoKey2);

function eventoKey2() {
    let alertaCampo2 =  `<img src="images/cruz.svg"><p>Ingresá un E-mail válido</p>`;
    if (campo_email.value.indexOf("@") == -1) {
        document.getElementById("form2").innerHTML = alertaCampo2
    } else {
        document.getElementById("form2").innerHTML = ""   
    }
}

let boton = document.getElementById("mostrarMensaje");
boton.addEventListener("click", cargarUsuario);

function cargarUsuario () {
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let usuario1 = new Usuario(nombre, correo, telefono);
    console.log(usuario1);
    mostrarUsuario(usuario1);

}

function mostrarUsuario(usuario) {
    let formulario = document.getElementById("user");
    formulario.innerHTML = "";

    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `Gracias ${usuario.nombre} ! Te mandamos un correo a ${usuario.correo} y un representante se comunicará al teléfono ${usuario.telefono}. Muchas Gracias!`;

    nuevoContenido.className = "info-usuario";
    formulario.appendChild(nuevoContenido);
}

