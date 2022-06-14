function actualizarBotonCarrito1() {
    let inversion_carrito = cargarInversionesCarrito();
    let contenido =`<button type="button" class="btn position-relative"><img width="25" src="../images/cart.svg" alt="cart"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">${inversion_carrito.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

actualizarBotonCarrito1();

const carrito = JSON.parse(localStorage.getItem("carrito"));
const datos_formulario = JSON.parse(localStorage.getItem("datos_formulario"));
const resumen_compra = document.getElementById("productos_seleccionados");


let contenido = `<div class='col-md-6 bg-light p-3'>
<h3 class='list-group-item-danger'>Inversiones</h3>`;

for (let producto of carrito) {
    contenido += `<ul class='list-group list-group-flush>
    <li class='list-group-item'>
    <b>${producto.nombre}</b></li>
    <li class='list-group-item'>${producto.descripcion}</li>
    <li class='list-group-item'><b> El rendimiento es de un % </b>${producto.interes}</li>`;
}

contenido += `</ul>
</div>`;
contenido += `<div class='col-md-6 bg-light p-3'>
<h3 class='list-group-item-danger'>Datos del Cliente</h3>
<ul class='list-group list-group-flush>
<li class='list-group-item'></li>
<li class='list-group-item'>Nombre : <b>${datos_formulario.usuario_nombre}</b></li>
<li class='list-group-item'>E-mail : <b>${datos_formulario.usuario_correo}</b></li>
<li class='list-group-item'>Teléfono : <b>${datos_formulario.usuario_telefono}</b></li>
</ul>
</div>`;

resumen_compra.innerHTML = contenido;
