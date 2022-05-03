let monto = 0

function solicitarMonto () {
    monto = parseInt(prompt("Ingresá tu monto a invertir"));    
}

let plazo = 0

function solicitarPlazo () {
    plazo = parseInt(prompt("Elige tu plazo en meses"));    
}
let inversion = 0
const inversiones = ["Plazo fijo Uva", "Bonos CER", "Comprar dolares"];
const tasa = [4,6,8];
function tuProducto () {
    inversion = parseInt(prompt("Elegi una opción:" + "1- " + inversiones[0] + " 2- " + inversiones[1] + " 3- " + inversiones[2]));
    
    if (inversion == 1) {
        alert ("Felicitaciones elegiste " + inversiones[0] + " tu tasa de interés es " + tasa[0] + " % mensual.")
    } else if (inversion == 2) {
        alert ("Felicitaciones elegiste " + inversiones[1] + " y tu tasa de interés es " + tasa[1] + " % mensual.")
    } else if (inversion == 3) {
        alert ("Felicitaciones elegiste " + inversiones[2] + " y tu tasa de interés es " + tasa[2] + " % mensual.")
    } 

}



let entrada = prompt("Bienvenido a la calculadora de inversiones, ingrese su nombre o escriba ESC para salir.");

while (entrada.toUpperCase() != "ESC") {
    alert ("Hola! " + entrada)


tuProducto ();
solicitarMonto ();
solicitarPlazo ();

if (monto < 1000) {
    alert ("Mejor gastalo en un vino")
} else if ((monto >= 1000) && (monto <=20000)) {
    alert ("Hacé un plazo fijo UVA")
} else if (monto >= 20001) {
    alert ("Comprá dolares")
}

if (entrada.toUpperCase() == "ESC");
    break;

}



