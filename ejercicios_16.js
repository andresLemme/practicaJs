//definir funcion para alterar los caracteres de un texto

function alterarCaracteres(texto) {
    if (typeof texto != "string") {
        throw TypeError ("el argumento debe ser una cadena de texto")
    }

    return texto.split("").map(c => c.toUpperCase() == c ? c.toLowerCase() : c.toUpperCase()).join("")
}

try {
    console.log(alterarCaracteres("JavaScript"))
} catch (e) {
    console.log(`Error: ${e.message}`)
}