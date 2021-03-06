

function cargarInversiones() {

    let inversiones = cargarInversionesLS();
    let contenido = "";

    for (const inversion of inversiones) {
        contenido += `<div class="col-md-4 mt-3">
        <div class="card"  style="width: 23rem; height: 31rem ">
        <img src="${inversion.imagen}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title text-center">${inversion.nombre}</h5>
        <p class="card-text text-center">${inversion.descripcion}</p>
        <div class="d-flex justify-content-end">
        <a href="#" class="btn btn-dark" onclick="agregarAlCarrito(${inversion.id})">Agregar (+)</a>
        </div> 
        </div>
        </div>
        </div>`;
    }

    document.getElementById("inversiones").innerHTML = contenido;
}

guardarInversionesLS(inversiones);
cargarInversiones();
actualizarBotonCarrito();


document.getElementById("vaciar_carrito").addEventListener("click", eliminarCarrito);