let monto = 0

function solicitarMonto () {
    monto = parseInt(prompt("Ingresá tu monto a invertir"));    
}

let plazo = 0

function solicitarPlazo () {
    plazo = parseInt(prompt("Elige tu plazo en meses"));    
}

let entrada = prompt("Bienvendio a la calculadora de inversiones, ingrese su nombre o escriba ESC para salir.");

while (entrada.toUpperCase() != "ESC") {
    alert ("Hola! " + entrada)

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



