/* ## Tema 4: Incrementales y Decrementales

1. Declarar dos variables numéricas e incrementar una de ellas y decrementar la otra en una sola línea de código utilizando operadores de incremento y decremento. Muestra los valores resultantes.*/

var numero1=100;
var numero2=100;
numero1++;
numero2--;
console.log(numero1);
console.log(numero2);

/*2. Usando el prompt captura el nombre de un producto. Define una variable que se llame precio con el valor inicial de 0 (cero) e incrementa el precio en 1 por cada letra que tenga el producto, ejemplo:
    - Si el producto se llama 'Mango', el precio debe ser de 5. El mensaje será `El mango tiene un valor de $5 la unidad`
    - Si el producto se llama 'Mandarina', el precio debe ser de 9. El mensaje será  `El mandarina tiene un valor de $9 la unidad`*/

var nombreProducto=prompt('ingresa el nombre de un producto ');
var valorProducto = nombreProducto.length;
console.log('El valor de '+nombreProducto+' es '+ valorProducto);

/*3. Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco incrementará 2 veces para los chicos y decrementará 2 veces para las chicas. El valor habitual es de 7 dólares. Usando el prompt solicite el nombre y el genero de una persona e imprima usando alert() el siguiente mensaje si es un chico `Juan tu entrada a la disco vale $9 dólares`, en caso de ser chica `Ana tu entrada a la disco vale $5 dólares*/

var coverNormal= 7;
var nombre = prompt('Ingresa tu nombre')
var genero = prompt('Ingresa tu genero')
