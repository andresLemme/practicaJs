//Ordenas 3 numeros de forma ascendente sin usar condicionales ni ciclos

let a = 7
let b = 5
let c = 9

let minimo = Math.min(a,b,c)
let maximo = Math.max(a,b,c)
let medio = (a+b+c) - minimo - maximo

console.log(minimo, medio, maximo)