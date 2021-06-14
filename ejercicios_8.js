//crear una funcion para sumar multiplos de 3 y 5 en un rango de 1 a 1000

function sumaMultiplo3y5() {
    let suma = 0
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            // console.log(i)
            suma += i
        }  
    }
    return suma
}

console.log(sumaMultiplo3y5())