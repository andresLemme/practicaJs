//Crear una funcion para ordenar un arreglo de cadenas acorde al ultimo caracter

function ordenarCadenaSegunUltimoCaracter(cadena){
    if (!Array.isArray(cadena)) {
        throw TypeError ("el argumento debe ser un arreglo")
    }

    if (!cadena.every (e => typeof e === "string")){
        throw TypeError ("Todos los elementos del arreglo deben ser cadenas de caracteres")
    }
    return cadena.sort((x,y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1))

}

let lenguajes = ["Python", "Javascript", "C#", "Go", "PHP", "Java"]

try {
    let resultado = ordenarCadenaSegunUltimoCaracter(lenguajes)
    console.log(resultado)
    
} catch (error) {
    console.log(`Error: ${error.message}`)
}

console.log("--------------------------")

try {
    let resultado = ordenarCadenaSegunUltimoCaracter(32432)
    console.log(resultado)
    
} catch (error) {
    console.log(`Error: ${error.message}`)
}
console.log("--------------------------")

try {
    let resultado = ordenarCadenaSegunUltimoCaracter([1,2,3,4,5])
    console.log(resultado)
    
} catch (error) {
    console.log(`Error: ${error.message}`)
}

console.log("--------------------------")