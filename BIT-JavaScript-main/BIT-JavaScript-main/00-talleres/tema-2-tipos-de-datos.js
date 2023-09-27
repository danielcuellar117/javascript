/* Tema 2: Tipos de Datos

1. Declara una variable y asígnale un valor booleano. Luego, utiliza una estructura condicional para determinar si el valor es verdadero o falso y muestra un mensaje apropiado, por ejemplo "Es verdadero" o "Es falso".*/

var esVerdadero = false;
var preguntaUsuario = prompt("Ingresa si algo es verdadero o falso")
var preguntaUsuarioMinus = preguntaUsuario.toLowerCase()
var preguntaSinEspacios= preguntaUsuarioMinus.trim()
if (preguntaSinEspacios === "verdadero") {

    esVerdadero = true;
    alert("es verdadero")
    console.log("es verdadero");
    
} else if (preguntaSinEspacios=== "falso"){
    esVerdadero=false;
    alert("es falso")
    console.log("es falso");
    
}
else{
    console.log('no es valido');
    alert("no es valido")
}

/*2. Usa el prompt para que tome un número. Indique si el número es par o impar lanzando un alert()*/

var numero = parseInt(prompt('Ingresa un numero '))
var esPar = false
if (numero % 2 ==0 ) {
    esPar = true
    console.log("El numero " + numero + " es par ");
    alert("El numero " + numero + " es par ");
} else {
    alert("El numero " + numero + " es impar")
    console.log("El numero " + numero + " es impar")
}


/*3. Declara un lista que contenga diferentes tipos de datos (números, cadenas, booleanos, objetos, etc.). Cuenta cuantos valore contiene la lista e informa lanzando un alert()*/

var lista = [25, "holaholahola", {nombre: "Daniel"}, false, 12.2]
var contadorValores= lista.length;
alert("La lista tiene: " + contadorValores +" elementos ")
console.log("La lista tiene: " + contadorValores +" elementos ");

/*4. Crea un programa que declare un lista de nombres de frutas. Luego, elimina la primera fruta, ahora cambia el valor de la segunda fruta que ahora esta de primero en la lista, inserta una nueva fruta al final de la lista y 
muestra toda la lista en consola.*/

var frutas= ["mango", "limon", "sandia", "papaya", "fresa"];
frutas.shift();
frutsas[0]= "sapote";
frutas.unshift('guanabana');
alert(frutas);
console.log(frutas);

/*5. Declara un objeto que represente a una persona con propiedades como nombre, edad y dirección. Luego, muestra la información de la persona en la consola accediendo directamente a sus propiedades. El mensaje debe decir algo como: `Juan tiene 45 años y vive en la calle 63 con carrera 24`  
 */