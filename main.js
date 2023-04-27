// Carga de datos con flujo y condicionales

/*
let edad = parseInt(prompt("Ingrese edad"));

while (edad < 1999) {
  alert("El año debe ser mayor a 14 para ingresar");
  edad = parseInt(prompt("Ingrese otro edad"));
}


// Ciclo FOR

    // Muestra numeros impares hasta el 11
for(let i = 1; i < 11; i = i + 2 ){
    console.log(i);
}



let nombre = "juan"

function saludar(){
  let nombre = "Camila"
  console.log(nombre);
}

console.log(nombre);
saludar();
*/



/*
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

const precioProducto = 1000;
const descuento = 10;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

console.log(nuevoPrecio)


let precioNike = 10000
let precioAdiddas = 5000 
let precioPuma = 3000

const cuotas_3 = 1.10
const cuotas_6 =  1.20
const cuotas_12 = 1.40

let cuotas = parseInt(prompt("Quieres 3, 6 o 12 coutas? "));

if (cuotas === 3 ){
  resultadoTotal = cuotas_3 * precioNike
  resultadoMesual = resultadoTotal / 3
  alert(resultadoTotal + " " + "en cuotas de" + " " + resultadoMesual)
}
  
if (cuotas === 6 ){
  resultadoTotal = cuotas_6 * precioNike
  resultadoMesual = resultadoTotal / 6
  alert(resultadoTotal + " " + "en cuotas de" + " " + resultadoMesual)
}

if (cuotas === 12 ){
  resultadoTotal = cuotas_12 * precioNike
  resultadoMesual = resultadoTotal / 12
  alert(resultadoTotal + " " + "en cuotas de" + " " + resultadoMesual)
}

*/

//CALCULADORA FUNCION


let numero1 = parseInt(prompt("Ingrese numb 1"));
let numero2 = parseInt(prompt("Ingrese numb 2"));
let operacion = prompt("Ingrese operación");

function calculadora(a,b,c){
  resultado = 0
  if (c === "+"){
    resultado=a+b
  }
  if (b === "-"){
    resultado= a-b
  }
  if (c === "*"){
    resultado= a*c
  }
  if (d === "/"){
    resultado= a/d
  }
}

calculadora(numero1, numero2, operacion);
alert(" El resultado de" + " " + numero1 + operacion + numero2 + "=" + resultado);