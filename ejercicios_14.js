function contarRepeticiones(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError ("el argumento debe ser un arreglo")
    }
    let conteo = {}

    for (const dato of datos){
        if (conteo[dato]) {
            conteo[dato] += 1
        } else{
            conteo[dato] = 1
        }
    }
    return conteo

}

let numeros = [3,5,2,3,7,5,5,3,3,11,13,11,2]

try {
    console.log(contarRepeticiones(numeros))
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(contarRepeticiones("umeros"))
} catch (e) {
    console.log(`Error: ${e.message}`)
}