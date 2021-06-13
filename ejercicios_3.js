//Capturar dos numeros usando la funcion prompt(), luego sumarlos

function capturarEntero() {
    do {
        let numero = prompt("Digite su numero", "0")
        if (!Number.isNaN(Number(numero))) {
            return parseInt(numero)
        }
    } while (true);
}

window.onload = function () {
    let numero_1 = capturarEntero()
    let numero_2 = capturarEntero()

    let suma = numero_1 + numero_2

    document.getElementById("resultado").innerHTML = suma
}