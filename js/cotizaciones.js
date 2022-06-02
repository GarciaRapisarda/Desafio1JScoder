const lista = document.querySelector('#listado')
 
fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {
 
        data.forEach((valor) => {
            let div_abuelo = document.createelment("div");
            div_abuelo.className = "row"
            let div_padre = document.createElement("div");
            div_padre.className = "card row";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body";
        let parrafo = document.createElement("p");
        div_hijo1.innerText = `La cotizacion del ${valor.divisa}`;
        parrafo.innerText = `$${valor.cotizacion}`;
        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        div_
        lista.appendChild(div_abuelo);
    });
    })
