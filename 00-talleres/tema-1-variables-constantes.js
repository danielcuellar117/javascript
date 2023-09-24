/* ## Tema 1: Variables y Constantes

1. Crea un programa que declare una variable para almacenar la temperatura actual en grados Celsius. Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula correspondiente y muestra el resultado en la consola.*/

var tempActual = prompt("Ingresa la temperatura en grados celsius")
var tempActual= parseInt(tempActual);
var tempFarenheit= tempActual *9/5 + 32; 
console.log("La temperatura en grados farenheit es: " + tempFarenheit)
alert("La temperatura en grados farenheit es: " + tempFarenheit)

/*2. Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. Luego, pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI.*/

const PI=3.14159;
var radioCirculo = parseFloat(prompt("Ingresa el radio dle circulo"));
var areaCirculo = PI * radioCirculo * radioCirculo;
console.log("El area del circulo es: " + areaCirculo); 
alert("El area del circulo es: " + areaCirculo); 

/*3. Declara una variable para representar la edad de un usuario. Luego, utiliza condicionales para determinar si el usuario es mayor o menor de edad y muestra un mensaje apropiado.*/

var edadUsuario = parseInt(prompt("Ingresa la edad de un usuario "))
if (edadUsuario >= 18) {
    console.log("Es mayor de edad ");
    alert("Es mayor de edad ");
}
else{
    console.log("No es mayor de edad")
    alert("No es mayor de edad ");;
}

/* 4. Usa el prompt para tomar dos números como argumentos y utilice una variable para almacenar la suma de estos números. Luego, muestra el resultado en la consola.*/

var numero1 = parseInt(prompt("Ingresa primer sumando "))
var numero2 = parseInt(prompt("Ingresa el segundo sumando"))
var suma= numero1+numero2;
console.log('La suma de: ' + numero1 + " + " + numero2 + ' es igual a ' + suma);
alert('La suma de: ' + numero1 + " + " + numero2 + ' es igual a ' + suma);


/* 5. Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, convertirla a minúsculas y mostrar la última palabra en mayúsculas.*/

var cadenaTexto = prompt("Ingresa un texto largo")
var palabras= cadenaTexto.split(" ") 
var ultimaPalabra = palabras[palabras.length - 1 ]
var ultimaPalabraMayus = ultimaPalabra.toUpperCase();
var longitudTexto = cadenaTexto.length;
var cadenaMinuscula = cadenaTexto.toLowerCase()
console.log("Cadena de texto en minuscula: " + cadenaMinuscula);
alert("Cadena de texto en minuscula: " + cadenaMinuscula);
console.log("La ultima palabra es: " + ultimaPalabra);
alert("La ultima palabra es: " + ultimaPalabraMayus);

