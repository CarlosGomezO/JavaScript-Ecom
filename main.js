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

/*

function ProductoML(id, nombre, precio, imagen, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
  this.stock = stock
};

const productos = [
  producto1 = new ProductoML(012, "tabla", 800, "https.mckmosvnjd", 10),
  producto2 = new ProductoML(022, "tabla 1", 900, "https.mckmosvnjd", 10),
  producto3 = new ProductoML(032, "tabla 2", 1000, "https.mckmosvnjd", 10),
  producto4 = new ProductoML(042, "tabla 3", 2000, "https.mckmosvnjd", 10),
]



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

const info = productos.map((item) => {
  return {
    nombre: item.nombre,

    precio: (`Antiguo: ${item.precio} Nuevo precio ${calcular(item.precio, numeroProducto)}`),

  }
});
console.log(info);


console.log(`lista de productos alterada por consola = ${info}`); // NOTA: POR "ALERT" ARROJA = [object Object],[object Object],[object Object],[object Object]


*/

//*************************************** HASTA ACA ES LA 2DA ENTREGA ***********************************************************************



// **************************************** 3RA ENTREGA *********************************************************************************




let formulario = document.getElementById("formulario");
let agregados = document.getElementById("agregados");

// Creamos objetos para el localStorage
let clientes =[
  {id: 1, nombre: "Micaela", email: "mica@gmail.com"},
  {id: 2, nombre: "Carlos", email: "carlos@gmail.com"},
  
];
localStorage.setItem("clientes",JSON.stringify(clientes)); // Agregar al local storage


//LOGICA PARA GUARDAR EN LOCAL STORAGE 

const crear = (nombre, email) => {
  let clientesStorage = localStorage.getItem("clientes");
  let clientes = JSON.parse(clientesStorage);

  let nuevoCliente = {
    id: clientes.length + 1,
    nombre: nombre,
    email: email,
  };

  clientes.push(nuevoCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
};


// LLAMAMOS AL FORMULARIO


// EVENTO PARA AGREGAR AL LOCAL STORAGE CON INPUT VALUES
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = e.target.elements.nombre.value;
  let email = e.target.elements.email.value;

  crear(nombre, email);
});


// EVENTO PARA MOSTRAR STORAGE CON HTML 
agregados.addEventListener("click", () => {

  let clientesStorage = localStorage.getItem("clientes");
  let clientes = JSON.parse(clientesStorage);

  clientes.forEach((clientes) =>{
    let div = document.createElement("div");
    div.innerHTML = `
      <h2> ID: ${clientes.id}<h2>
      <p> Nombre: ${clientes.nombre}<p>
      <b> ${clientes.email}<b>
      <hr/>
      `;
    document.body.append(div);
  });


});

//*************************************** HASTA ACA ES LA 3RADA ENTREGA ***********************************************************************

/* PROMESAS*/
/*
const DB = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "media", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DB);
      // reject("error intente luego");
    }, 3000);
  });
};
////////////////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>precio: ${producto.precio}</b>
        <hr />
      `;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));
  */
// ************************************************************ ENTREGA DE PROYECTO FINAL *****************************************************************************************************

// Mostrar cards con un .JSON y se aplica librería SweetAlert
  document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('lista-productos');
    // Cargar el archivo JSON
    fetch('productos.json')
      .then(response => response.json())
      .then(data => {
        // Se generar el HTML para cada producto
        data.forEach((product, index) => {
          const productHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${product.imagen}" class="card-img-top">
              <div class="card-body">
                <h5>${product.nombre}</h5>
                <p>Precio: ${product.precio}</p>
                <button class="btn btn-dark" onclick="mostrarAlerta(${index})">Comprar</button>
              </div>  
            </div>
          `;
    
          // Agrega al HTML
          productContainer.innerHTML += productHTML;
        });
      })
      .catch(error => {
        console.log('Error al cargar el archivo JSON:', error);
      });
  });
  function mostrarAlerta(index) {
    Swal.fire('Coming Soon, pronto podrás comprar');
  }


// Productos API con promesa
const ApiContainer = document.getElementById('Api-container');

const MLproducts = () => {
  return new Promise((resolve, reject) => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        const products = data.results;
        products.forEach(product => {
          let div = document.createElement("div");
          div.className = "card-box";
          div.innerHTML = `
            <div class="card" style="width: 18rem; height: 23rem;">
              <div">
                <img src=${product.image} style="width: 18rem;">
                <b>Nombre: ${product.name}</b>
                <p>Status: ${product.status}</p>
              </div>
            </div>
          `;
          ApiContainer.appendChild(div);
        });
        resolve(products);
      })
      .catch(error => reject(error));
  });
};

// Ejemplo de uso de la promesa en tu Ecommerce
MLproducts()
  .then(products => {
    // Realizar acciones con los productos obtenidos
    console.log(products);
  })
  .catch(error => {
    // Manejar el error de la promesa
    console.log('Error:', error);
  });


// ************************************************************ FINALIZA ENTREGA DE PROYECTO FINAL *****************************************************************************************************

/*

// Productos Api
const ApiContainer = document.getElementById('Api-container');
const MLproducts = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const products = data.results;

  products.forEach((product)=>{
    let div = document.createElement("div");
    div.className = "card-box";
    div.innerHTML = `
      <div class="card" style="width: 18rem; height: 23rem;">
        <div">
          <image src = ${product.image} style = "width: 18rem;">
          <b>Nombre: ${product.name}</b>
          <p>Status: ${product.status}</p>
        </div>
      </div>
    `;
    ApiContainer.appendChild(div);
  });
};
MLproducts();

*/