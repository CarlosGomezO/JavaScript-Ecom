/* Carga de datos con flujo y condicionales /*
 

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


//let numero1 = parseInt(prompt("Ingrese numb 1"));
//let numero1 = parseInt(prompt("Ingrese numb 1"));

//
//function calculadora(a,b,c){
//
//  resultado = 0
//  if (c === "+"){
//    resultado=a+b
//  }
//  if (c === "-"){
//    resultado= a-b
//  }
//  if (c === "*"){
//    resultado= a*b
//  }
//  if (c === "/"){
//    resultado= a/b
//  }
//}

//calculadora(numero1, numero2, operacion);
//alert(" El resultado de" + " " + numero1 + operacion + numero2 + "=" + resultado);





/*
// OBJETOS

const persona1 = {
  nombre: "pepito",
  edad: 45,
  direccion: "peña"
};




let clave = "edad";

console.log(persona1[clave]) // Se llama al valor de clave ("edad") en persona1 desde una variable fuera del objeto

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion);



// CREACION DE OBJETOS MEDIANTE UNA FUNCION ****

function Persona(nombrePersona, edadPersona, direccionPersona){
  this.nombre = nombrePersona;
  this.edad = edadPersona;
  this.direccion = direccionPersona
}

const persona2 = new Persona("Carlos", 30, "Coronel Díaz");
const persona3 = new Persona ("Mica", 29, "Villa Urquiza" );

console.log(persona2);
console.log(persona3);



// Método más efectivo
// Para muchos parametros 

function Personas(info){
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion
}

const persona4 = new Personas({
  nombre: "Gomez",
  edad: 35,
  direccion:"Las Heras"
});
console.log(persona4);
console.log(persona4.nombre);
console.log(persona4.direccion);



// CREAR OBJETO COMO PRODUCTO

function ProductoML(nombre, precio, imagen){
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
  
};
const producto1 = new ProductoML ("Monitor", 295319, "htpps.mckmosvnjd");
console.log(producto1.nombre);

for (const i in ProductoML){
  console.log("clave", i);
  console.log("valor", ProductoML[i]);
}

*/

/*
 const operaciones = (op) => {
   if (op === "sumar") {
     return (a, b) => a + b;
   } else if (op === "restar") {
     return (a, b) => a - b;
  } else if (op === "multiplicar") {
     return (a, b) => a * b;
   } else if (op === "dividir") {
     return (a, b) => a / b;
   }
 };





let operacion = prompt("Ingrese el nombre de la operacion deseada");
const calcular = operaciones(operacion);
let num1 = parseInt(prompt("Ingrese el numero"));
let num2 = parseInt(prompt("Ingrese el numero"));
let mensaje = `El resultado de la operacion es: ${calcular(num1, num2)}`;


alert(mensaje);
*/










// **************************************** SEGUNDA ENTREGA *********************************************************************************



function ProductoML(id,nombre, precio, imagen, stock){
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
  this.stock = stock 
};

const productos = [
  producto1 = new ProductoML (012,"tabla", 800, "https.mckmosvnjd", 10),
  producto2 = new ProductoML (022,"tabla 1", 900, "https.mckmosvnjd", 10),
  producto3 = new ProductoML (032,"tabla 2", 1000, "https.mckmosvnjd", 10),
  producto4 = new ProductoML (042,"tabla 3", 2000, "https.mckmosvnjd", 10),
]

/*

// MUESTRA OBJETOS con FOR
//for (const i in productos){
//  console.log("valor", productos[i]);
//}

//FOR EACH
//productos.forEach((item) => {
//  console.log(item);
//});

// BUSQUEDA POR CONDICIÓN
const encontrados = productos.filter((item) => item.precio >= 1000);
console.log(encontrados);


// BUSQUEDA CON "FIND"

let nombre = prompt("ingrese el nombre del producto a buscar");
const encontrado = productos.find((item) => item.nombre === nombre);

if (encontrado) {
  let mensaje = `
    Nombre: ${encontrado.nombre}
    Precio: $${encontrado.precio}
  `;

  alert(mensaje);
} else {
  alert("Producto no encontrado");
}

//BUSQUEDA CON "FILTER"

let precio = parseInt(prompt("Ingrese el precio minimo del producto"));
const busqueda = productos.filter((item) => item.precio > precio && item.nombre.includes("a"));

busqueda.forEach((item) => {
  let mensaje = `
    ID: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
  `;

    alert(mensaje);
});

*/


// CALCULAR OPERACIONES DE SUMA, RESTA MULTIPLICACION Y DIVISIÓN sobre los precios del arreglo 

const operaciones = (op) => {
  if (op === "+") {
    return (a, b) => a + b;
  } else if (op === "-") {
    return (a, b) => a - b;
 } else if (op === "*") {
    return (a, b) => a * b;
  } else if (op === "/") {
    return (a, b) => a / b;
  }
};

//let operacion = prompt("Ingresá +, -, * ó /");
let operacion = "+";
//let numeroProducto = parseInt(prompt("Ingresá un numero"));
let numeroProducto = 50;
const calcular = operaciones(operacion);

const info = productos.map((item) =>{
  return {
    nombre: item.nombre,
    precio: (`Precio antiguo ${item.precio} `),
    precio: (`nuevo precio ${calcular(item.precio,numeroProducto)}`)
  }
});
console.log(info);

console.log(`lista de productos alterada por consola = ${info}`); // NOTA: POR "ALERT" ARROJA = [object Object],[object Object],[object Object],[object Object]




//*************************************** HASTA ACA ES LA 2DA ENTREGA ***********************************************************************