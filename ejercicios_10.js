//usar la funcion slice() para clonar el contenido

let numeros = [2,3,5,7,11]

console.log(numeros)

console.log("-------")

let numerosClone = numeros.slice(0)

console.log(numerosClone)

console.log("------")

console.log(numeros == numeros)
console.log(numeros == numerosClone)