//Arrays//
const inversiones = [{nombre: "Plazo Fijo UVA", interes: "6% mensual"},
                {nombre: "Bonos CER", interes: "8% mensual"},
                {nombre: "Compra Dolares", interes: "10% mensual"}];

const carrito_inversiones = [];

class Producto {
    constructor (inversion) {
        this.nombre = inversion.nombre;
        this.interes = inversion.interes;
    }
}
//Funciones//
function agregarInversion () {
    let nueva_inversion = new Producto ({nombre:prompt("Ingresá tu monto a invertir"), interes:prompt("Ingresá tu plazo en meses")});
    carrito_inversiones.push(nueva_inversion);
    console.log (carrito_inversiones);
}
function mostrarInversiones() {
    let salida = "";
    let i = 1;

    for (let inversion of inversiones) {
        salida += i + "- Inversión: " + inversion.nombre + " - Interés: $" + inversion.interes + "\n";
        i++;
    }
    return salida; 
    
}
function elegirInversion() {
    let salir = "";

    while (salir != "NO") {
        let lista_inversiones = mostrarInversiones();
        let producto_seleccionado = parseInt(prompt("Ingrese el Número de Opción que desea elegir:\n\n" + lista_inversiones));
        let producto = inversiones[(producto_seleccionado - 1)];
        agregarCarrito(producto);
        console.log("Tu prodcuto ha sido seleccionado!");
        salir = (prompt("Querés consultar por otra opción? (SI/NO)")).toUpperCase();
    }

function agregarCarrito(inversion) {
    let nueva_inversion = new Producto(inversion);
    carrito_inversiones.push(nueva_inversion);
    }
}

function mostrarCarrito() {
    let salida = "Prodcutos elegidos:\n\n";
    let total_productos = 0;

    for (let inversion of carrito_inversiones) {
        salida += "Tu opcion es: " + inversion.nombre + " - y tu tasa: " + inversion.interes + "\n";
        total_productos += parseFloat(inversion.tasa);
    }
    alert (salida)

}
//Comienzo del Programa//
let entrada = prompt("Bienvenido a la calculadora de inversiones, ingrese su nombre o escriba ESC para salir.");

while (entrada.toUpperCase() != "ESC") {
    alert ("Hola! " + entrada + " vamos a comenzar!")

agregarInversion ();

mostrarInversiones ();
elegirInversion ();

mostrarCarrito ();

if (entrada.toUpperCase() == "ESC");
    break;

}
