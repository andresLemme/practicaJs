//Definir una funcion para validar si un valor es un arreglo

function esArreglo(valor) {
  return toString.call(valor) === "[object Array]";
}

console.log(esArreglo(123));
console.log(esArreglo("123"));
console.log(esArreglo("123".split("")));
console.log(esArreglo([]));
console.log(esArreglo(Array()));
console.log(esArreglo(new Array()));

console.log("-----------------------")

console.log(Array.isArray(123));
console.log(Array.isArray("123"));
console.log(Array.isArray("123".split("")));
console.log(Array.isArray([]));
console.log(Array.isArray(Array()));
console.log(Array.isArray(new Array()));
