 
fetch("/data.json")
    .then( (res) => res.json())
    .then( (respuesta) => {
        
let contenido = "";

    for (const data of respuesta) {
        contenido += `<div class="col-md-4 mt-3">
        <div class="card">
        <div class="card-header">
        ${data.sector}
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
        <p>${data.noticia}</p>
        <footer class="blockquote-footer">Noticia de <cite title="Source Title">${data.fuente}</cite></footer>
        </blockquote>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("listado").innerHTML = contenido;
})
