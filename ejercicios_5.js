//definir una funcion para validar si un numero dado es de tipo Armstrong

function esNumeroArmstrong(numero) {
  if (typeof numero != "number") {
    throw TypeError("el argumento debe ser un numero");
  }

  if (!Number.isInteger(numero)) {
    throw TypeError("el argumento debe ser un numero entero");
  }

  if (numero <= 100 || numero > 999) {
    return null;
  }
  let resultado = String(numero)
    .split("")
    .map((c) => parseInt(c))
    .reduce((acumulador, digito) => {
      return acumulador + Math.pow(digito, 3);
    }, 0);

  return resultado == numero;
}
try {
  console.log(esNumeroArmstrong(371));
} catch (e) {
  console.log(`Error: ${e.message}`);
}
console.log("----------")
try {
    console.log(esNumeroArmstrong({a:153}));
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  console.log("----------")
try {
    console.log(esNumeroArmstrong(153.5));
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  console.log("----------")
  try {
      console.log(esNumeroArmstrong(1544));
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  