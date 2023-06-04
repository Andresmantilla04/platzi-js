var frutas = ["manzanas", "platano", "cereza", "fresa"];

console.log(frutas);

//agrega elementos a array//

var masFrutas = frutas.push("uvas");

//resta elementos del array, desde el ultimo elemento//

var ultimo = frutas.pop("Uvas");

//el unshift sirve para poner el nuevo elemento en el array pero lo manda al inicio de nuestro array//

var nuevoLongitud = frutas.unshift("Uvas");

//Sirve para eliminar el primer elemento del array//

var borrarFruta = frutas.shift("manzana");

//Sirve para identificar un elemento en un grupo de varios elemento con su respetivo nombre//

var pisicion = frutas.indexOf("cereza");
