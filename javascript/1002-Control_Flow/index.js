/*
{
  "id": 1002,
  "title": "Control Flow",
  "description": "Uso de instrucciones condicionales y bucles (if, else, switch, for, while)."
}
*/

// ------------------ CONDICIONALES ------------------

// if / else if / else
let edad = 18;

if (edad < 13) {
  console.log("Eres un niño.");
} else if (edad >= 13 && edad < 18) {
  console.log("Eres un adolescente.");
} else {
  console.log("Eres un adulto.");
}

// switch
let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("Inicio de la semana ");
    break;
  case "viernes":
    console.log("¡Es viernes! ");
    break;
  case "sábado":
  case "domingo":
    console.log("Fin de semana ");
    break;
  default:
    console.log("Es un día cualquiera.");
}

// ------------------ BUCLES ------------------

// for
console.log("\nContando del 1 al 5 con for:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while
console.log("\nContando del 1 al 5 con while:");
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// do...while
console.log("\nEjemplo de do...while:");
let numero = 6;
do {
  console.log("El número es:", numero);
  numero++;
} while (numero <= 5); // Se ejecuta una vez aunque la condición sea falsa