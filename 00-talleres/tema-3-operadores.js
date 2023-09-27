/*# Tema 3: Operadores

1. Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de suma, resta, multiplicación y división con estos números. Muestra los resultados en la consola para cada una de estas operaciones.*/

var cifra1 = parseInt(prompt('Ingresa el primer numero'));
var cifra2 = parseInt(prompt('Ingresa la segunda cifra '));
var suma = cifra1+cifra2;
var resta = cifra1-cifra2;
var multiplicación = cifra1*cifra2;
var división = cifra1/cifra2;
console.log('La suma de ' + cifra1 + ' y ' + cifra2 + ' es igual a ' + suma);
console.log('La resta de ' + cifra1 + ' y ' + cifra2 + ' es igual a ' + resta);
console.log('La multiplicacion de ' + cifra1 + ' y ' + cifra2 + ' es igual a ' + multiplicación);
console.log('La division de ' + cifra1 + ' y ' + cifra2 + ' es igual a ' + división);

/*2. Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra. Muestra los resultados en la consola.*/

var numeroInterno = 117;
var numeroUsuario = parseInt(prompt(' Ingresa una cifra '));
if (numeroInterno === numeroUsuario) {
    console.log(numeroUsuario + ' es igual a '+ numeroInterno);
} else if (numeroInterno > numeroUsuario){
    console.log(numeroInterno + ' es mayor que ' +numeroUsuario);
}  else if (numeroInterno < numeroUsuario){
    console.log(numeroInterno +' es menor que '+ numeroUsuario );
}

/*3. Usando el prompt solicita al usuario digitar su nombre y utilice el operador de concatenación (+) para unir el nombre ingresado de manera que el resultado se despliegue en un alert y sea el siguiente `Hola Juan, bienvenido!`*/

var nombrUsuario = prompt('Ingresa tu nombre ')
alert('Hola '+ nombrUsuario + ' bienvenido ')

/*4. Crea un programa que calcule el área de un triángulo utilizando la fórmula: `área = (base * altura) / 2`. Solicita al usuario que ingrese los valores de la base y la altura usando el prompt*/

var baseTriangulo= parseInt(prompt('Ingresa la base del triangulo '))
var alturaTriangulo = parseInt(prompt('Ingresa la altura '))
var areaTriangulo = baseTriangulo*alturaTriangulo;
console.log('El area de un triangulo con base '+ baseTriangulo + ' y altura '+alturaTriangulo+' es igual a '+ areaTriangulo);

/*5. Declara una variable booleana llamada esMayor y asigna el resultado de una comparación entre dos edades (por ejemplo, 18 y 25). Luego, muestra el valor de esMayor en la consola.*/

var esMayor=false;
var edadUsuario = parseInt(prompt('Ingresa tu edad'));
var edadAlguienMas = parseInt(prompt('Ingresa la edad de alguien mas'))
if (edadUsuario>edadAlguienMas) {
    esMayor=true;
    console.log('Eres mayor que la otra persona?: '+esMayor);
}else{
    console.log('Eres mayor que la otra persona?: '+esMayor);
}