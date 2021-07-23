//Usar la funcion reduce() para contar las ocurrencias de los elementos de los arrelgos

function contarOcurrencias(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError ("el argumento no es un array")
    }

    return datos.reduce((a,d) => (a[d] ? a[d] +=1 : a[d] = 1, a),{})
}
let numeros = [3,5,2,3,7,5,5,3,3,11,13,11,2]

try {
    console.log(contarOcurrencias(numeros))
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(contarOcurrencias("numeros"))
} catch (e) {
    console.log(`Error: ${e.message}`)
}