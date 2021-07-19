//extraer el primer elemento de un arreglo

function extraerPrimerElemento(datos, n=1) {
    if (!Array.isArray(datos)) {
        throw TypeError ("El primer elemento debe ser un arreglo")
    }

    if (typeof n !="number") {
        throw TypeError ("el segundo argumento debe ser un valor numerico")
    }

    if (!Number.isInteger(n)) {
        throw TypeError ("el segundo argumento debe ser un numero entero")
    }
    if (datos.length == 0) {
        return null
    }
    if (!Array.isArray(datos[0])) {
        return datos.slice(0, n)
    }
}

try {
    console.log(extraerPrimerElemento([1,2,3,4,5]))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento([1,2,3,4,5], 3))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}
try {
    console.log(extraerPrimerElemento([1,2,3,4,5], 10))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento([[1,2,3,4,5],6,7,8], 2))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento([[1,2,3,4,5],6,7,8], 2.2))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento([[1,2,3,4,5],6,7,8], "Js"))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento({a:1000}, 2.2))
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}

try {
    console.log(extraerPrimerElemento([]), 2)
    
} catch (e) {
    console.log(`Error: ${e.message}`)
}