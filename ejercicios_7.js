//Calcular el maximo comun divisor MCD usando un ciclo while

function mcd(a,b) {
    while (a != b) {
        if (a > b) {
            a -= b
        } else{
            b -= a
        }
    }
    return a
}

console.log(mcd(2,3))
console.log(mcd(7,14))
console.log(mcd(110,75))