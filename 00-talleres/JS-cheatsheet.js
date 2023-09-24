// Este es un comentario de una línea que describe el propósito del código

/*
   Este es un comentario multilineal
   que explica en detalle lo que hace el código.
*/

// Declaración de una variable y asignación de un valor
let numero = 42;

// Condición if para verificar si el número es mayor que 30
if (numero > 30) {
    console.log("El número es mayor que 30"); // Imprime un mensaje en la consola
} else {
    console.log("El número no es mayor que 30"); // Imprime un mensaje alternativo en la consola
}

// Ciclo for que itera del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log("Iteración " + i); // Imprime el valor de 'i' en cada iteración
}

// Declaración de una función
function saludar(nombre) {
    // Imprime un saludo personalizado
    console.log("¡Hola, " + nombre + "!");
}

// Llamada a la función 'saludar' con un argumento
saludar("Alice");

// Creación de un objeto con propiedades
const persona = {
    nombre: "Bob",
    edad: 25,
    ciudad: "Los Ángeles"
};

// Acceso a las propiedades del objeto y su impresión
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

// Uso de un arreglo y un bucle for para imprimir sus elementos
const colores = ["rojo", "verde", "azul"];
for (let color of colores) {
    console.log("Color: " + color);
}

// Ejemplo de una función de flecha
const suma = (a, b) => {
    return a + b;
};

// Llamada a la función 'suma' y almacenamiento del resultado en una variable
const resultado = suma(10, 20);
console.log("Resultado de la suma: " + resultado);
// Función para imprimir en la consola
console.log("Hola, mundo!");

// Función para mostrar un cuadro de diálogo de alerta
alert("Este es un mensaje de alerta.");

// Función para obtener la longitud de una cadena
const longitud = "Hola".length;

// Función para convertir una cadena a mayúsculas
const mayusculas = "Hola".toUpperCase();

// Función para convertir una cadena a minúsculas
const minusculas = "Hola".toLowerCase();

// Función para obtener un número aleatorio entre 0 y 1
const numeroAleatorio = Math.random();

// Función para redondear un número hacia abajo
const redondeoAbajo = Math.floor(5.8);

// Función para redondear un número hacia arriba
const redondeoArriba = Math.ceil(5.2);

// Función para redondear un número al entero más cercano
const redondeoEntero = Math.round(5.5);

// Función para obtener la fecha actual
const fechaActual = new Date();

// Función para concatenar dos arrays
const array1 = [1, 2];
const array2 = [3, 4];
const concatenado = array1.concat(array2);

// Función para agregar elementos al final de un array
const frutas = ["manzana", "banana"];
frutas.push("cereza");

// Función para eliminar el último elemento de un array
frutas.pop();

// Función para convertir una cadena en un array
const cadena = "Hola, mundo";
const arreglo = cadena.split(", ");

// Función para unir elementos de un array en una cadena
const nuevoCadena = arreglo.join(" - ");

// Función para ordenar un array de números
const numeros = [3, 1, 2];
numeros.sort((a, b) => a - b);

// Función para encontrar el índice de un elemento en un array
const indice = frutas.indexOf("banana");

// Función para agregar o eliminar elementos en un array (splice)
const meses = ["enero", "febrero", "marzo", "abril"];
meses.splice(2, 1, "nuevoMes");

// Función para iterar sobre elementos de un array
const colores = ["rojo", "verde", "azul"];
colores.forEach((color) => {
    console.log(color);
});
// Ciclo for para iterar sobre un rango de números
for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime números del 0 al 4
}

// Ciclo for-in para iterar sobre las propiedades de un objeto
const persona = {
    nombre: "Alice",
    edad: 30,
    ciudad: "Nueva York"
};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Ciclo for-of para iterar sobre elementos de un array
const colores = ["rojo", "verde", "azul"];
for (let color of colores) {
    console.log(color);
}

// Ciclo for clásico para iterar sobre índices de un array
const frutas = ["manzana", "banana", "cereza"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Imprime cada elemento del array
}

// Ciclo for-of para iterar sobre pares clave-valor en objetos
const objeto = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};
for (let [clave, valor] of Object.entries(objeto)) {
    console.log(clave + ": " + valor);
}

// Ciclo for para iterar sobre elementos de un NodeList (DOM)
const parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].textContent);
}
// Método 'push()' para agregar elementos al final de un array
const frutas = ["manzana", "banana"];
frutas.push("cereza");
console.log(frutas); // ["manzana", "banana", "cereza"]

// Método 'pop()' para eliminar el último elemento de un array
const ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "cereza"

// Método 'shift()' para eliminar el primer elemento de un array
const primeraFruta = frutas.shift();
console.log(primeraFruta); // "manzana"

// Método 'unshift()' para agregar elementos al principio de un array
frutas.unshift("naranja", "kiwi");
console.log(frutas); // ["naranja", "kiwi", "banana"]

// Método 'concat()' para concatenar dos arrays
const numeros1 = [1, 2];
const numeros2 = [3, 4];
const numerosConcatenados = numeros1.concat(numeros2);
console.log(numerosConcatenados); // [1, 2, 3, 4]

// Método 'join()' para unir elementos de un array en una cadena
const colores = ["rojo", "verde", "azul"];
const cadenaColores = colores.join(", ");
console.log(cadenaColores); // "rojo, verde, azul"

// Método 'slice()' para crear una copia parcial de un array
const frutasCopiadas = frutas.slice(1, 2);
console.log(frutasCopiadas); // ["kiwi"]

// Método 'indexOf()' para buscar el índice de un elemento en un array
const indiceBanana = frutas.indexOf("banana");
console.log(indiceBanana); // 2

// Método 'includes()' para verificar si un elemento existe en un array
const contieneKiwi = frutas.includes("kiwi");
console.log(contieneKiwi); // true

// Método 'forEach()' para iterar sobre elementos de un array
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Método 'map()' para aplicar una función a cada elemento de un array
const numeros = [1, 2, 3];
const numerosDuplicados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numerosDuplicados); // [2, 4, 6]

// Método 'filter()' para crear un nuevo array con elementos que cumplan una condición
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares); // [2]

// Método 'reduce()' para reducir un array a un solo valor mediante una función acumuladora
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma); // 6
