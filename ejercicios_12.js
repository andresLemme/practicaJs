//extraer el ultimo elemento de un arreglo

function extraerUltimoElemento(datos, n = 1) {
    if (!Array.isArray(datos)) {
        throw TypeError ("el primer elemento debe ser un arreglo")
    }

    if (typeof n !="number" ) {
        throw TypeError("el segundo argumento debe ser un valor numerico")
    }

    if (!Number.isInteger(n)) {
        throw TypeError("el segundo argumento debe ser un numero entero")
    }

    if (!datos.length) {
        return null
    }

    if (Array.isArray(datos[datos.length - 1])) {
        return datos [datos.length - 1].slice(0, n)
    }

    return datos[datos.length - 1]

}

try {
    console.log(extraerUltimoElemento([1,2,3,4,[5,6,7]]))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([1,2,3,4,[5,6,7]], 2))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([1,2,3,4,[5,6,7]], 10))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([1,2,3,4,5,6,7], 10))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento({v:1000}, 10))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([], 10))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([1,2,3,4,5,6,7], 10.999))
} catch (e) {
    console.log(`Error ${e.message}`)
}

try {
    console.log(extraerUltimoElemento([1,2,3,4,5,6,7], "numero"))
} catch (e) {
    console.log(`Error ${e.message}`)
}