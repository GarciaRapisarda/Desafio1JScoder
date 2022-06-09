function buscarProducto(id) {
    let inversiones = cargarInversionesLS();

    return inversiones.find(x => x.id == id);
}

function cargarInversionesCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function agregarAlCarrito(id) {
    let inversion = buscarProducto(id);
    let inversion_carrito = cargarInversionesCarrito();
    inversion_carrito.push(inversion);
    localStorage.setItem("carrito", JSON.stringify(inversion_carrito));
    actualizarBotonCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
}
const btn = document.querySelector('#myBtn')
 
btn.addEventListener('click', () => {
 
    Swal.fire({
        title: 'Está seguro de eliminar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
 
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El carrito ha sido eliminado!'
            })
        }
    })
})


function actualizarBotonCarrito() {
    let inversion_carrito = cargarInversionesCarrito();
    let contenido =`<button type="button" class="btn position-relative"><img width="25" src="images/cart.svg" alt="cart"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">${inversion_carrito.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

function cargarProductosSeleccionados() {
    let productos = cargarInversionesCarrito();
    let productos_seleccionados = document.getElementById("productos_seleccionados");
    let contenido = "";

    if (productos.length == 0) {
        contenido = "<p class= `text-center bg-light p-3`>No se encontraron Inversiones!!!</p>";
        productos_seleccionados.innerHTML = contenido;
    } else {
    let total = 0;
    contenido = `<table class="table table-hover">
    <tr>
    <th>Tipo de Inversion</th>
    <th>Monto</th>
    <th>Interes</th>
    <th>&nbsp;</th>
    </tr>`;

    for (const producto of productos) {
        contenido += `<tr>
        <td>${producto.nombre}</td>
        <td class="text-end"><b>$${producto.descripcion}</b></td>
        <td class="text-end"><button class="btn btn-danger>[ X ]</button></td>
        </tr>`;
        total += producto.interes;
    }

    contenido += `<tr>
    <td>Total Inversiones</td>
    <td class="text-end"><b>$${total}</b></td>
    <td>&nbsp;</td>
    </tr>
    </table>`;
    productos_seleccionados.innerHTML = contenido;
}


}
