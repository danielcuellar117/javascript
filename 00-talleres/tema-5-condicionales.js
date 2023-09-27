/* ## Tema 5: Condicionales

1. Crea un programa que solicite al usuario un número y determine si es positivo, negativo o cero utilizando una estructura condicional (if).*/

var numeroUsuario= parseInt(prompt('Ingresa un numero'));
if (numeroUsuario > 0){
    console.log(numeroUsuario + ' es positivo');
}else {
    console.log(numeroUsuario + ' es negativo');
}


/*2. Declara una variable para representar la temperatura en grados Celsius. Utiliza una estructura if-else para determinar si la temperatura está por encima o por debajo de cero grados y muestra un mensaje apropiado.*/

var temperaturaCelsius = parseInt(prompt('Ingresa la temperatura en grados celsius '));
if (temperaturaCelsius > 0) {
    console.log('La temperatura' + temperaturaCelsius + ' esta por encima de 0 grados');
} else {
    console.log('La temperatura '+temperaturaCelsius + ' esta por debajo de cero grados');
}

/*3. Escribe un programa que pida al usuario su edad y determine si es un niño, adolescente o adulto utilizando una estructura if-else-if.*/

var edadUsuario= parseInt(prompt('INgresa tu edad '));
if ( edadUsuario >= 0 && edadUsuario <= 12 ) {
    console.log('Es un niño');    
} else if (edadUsuario > 12 && edadUsuario < 18) {
    console.log('Es un adolescente');    
}else if (edadUsuario > 18) {
    console.log('Es un adulto');
}

/*4. Crea un programa que tome un número como argumento y utilice el operador ternario para determinar si es par o impar. Devuelve un mensaje que indique el resultado.*/

var numero = parseInt(prompt(' Ingresa un numero '))
if (numero %2 ==0 ) {
    console.log(numero + ' es par');
} else {
    console.log(numero + ' es impar');
}

/*5. Usa el prompt para capturar dos numeros que representarán los ejes X y Y. Utiliza una estructura if, if-else para determinar en qué cuadrante se encuentra el punto que representa cada valor ingresado por el usuario, así:
   - Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
   - Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
   - Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
   - Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4*/

var x = parseInt(prompt('Ingresa la primera coordenada '))
var y = parseInt(prompt('Ingresa la segunda coordenada'))
if (x > 0 && y > 0) {
    console.log('el punto se encuentra en el cuadrante 1');
} if(x>0 &&y<0){
    console.log('el punto se encuentra en el cuadrante 2');
}if (x<0 && y<0){
    console.log('el punto se encuentra en el cuadrante 3');
}if( x<0 && y>0){
    console.log(' el punto se encuentra en el cuadrante 4');
}
