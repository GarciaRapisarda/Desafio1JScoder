const inversiones = [
    { id: 1, nombre: "Plazo Fijo UVA", descripcion: "Son instrumentos de ahorro protegidos de la inflación (UVAs), o bien, similar al ahorro “en ladrillos” (UVIs). Tienen la simplicidad de un plazo fijo para ser confeccionados. El plazo mínimo es de 90 días (UVAs) y de 180 días (UVIs).", interes: 6,imagen: "images/uva.jpg"},{id: 2, nombre: "Bonos CER", descripcion: "Los bonos CER son un instrumento de inversión en pesos que ajusta su capital por el precio del coeficiente estabilizador de referencia -CER-. Este coeficiente se calcula todos los días por el Banco Central y refleja la inflación a partir del Índice de Precios al Consumidor publicado por el INDEC.", interes: 8, imagen: "images/bonos.jpg"},{id: 3, nombre: "Dolar MEP", descripcion: "El dólar MEP consiste en la compra de un bono en pesos para su posterior venta en dólares. La operatoria es 100% legal y, al ser online, se evita el riesgo de circular por la calle con dinero físico.", interes: 10, imagen: "images/dolar.jpg"}
];

function guardarInversionesLS(inversiones) {
    localStorage.setItem("inversiones", JSON.stringify(inversiones));
}


function cargarInversionesLS() {
    return JSON.parse(localStorage.getItem("inversiones"));

}
