//funciona//

if (true) {
  console.log("hola");
}
//no funciona//

if (false) {
  console.log("hola");
}

//a//
if (true) {
  console.log("hola");
} else {
  console.log("soy falso");
}

//b//

if (true) {
  console.log("hola");
} else if (false) {
  console.log("soy falso");
} else {
}

//c//

var edad = 18;

if (edad === 18) {
  console.log("puedes votar, sera tu primera votacion");
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else {
  console.log("aun no puedes votar");
}

//d//

var edad = 18;

if (edad === 18) {
  console.log("puedes votar, sera tu primera votacion");
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else {
  console.log("aun no puedes votar");
}

//e//

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no, no soy uno";
