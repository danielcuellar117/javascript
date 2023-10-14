/*Calcular Entero a partir de un Binario de 4 dígitos.

Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

Entrada: [0, 0, 0, 1]
Salida :  1

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 0, 1]
Salida :  5

Entrada: [1, 0, 0, 1]
Salida :  9

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 1, 0]
Salida :  6

Entrada: [1, 1, 1, 1]
Salida :  15

Entrada: [1, 0, 1, 1]
Salida :  11.

*/

let listaMarica = [
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 1]
]
function convertirBinarioADecimal(binario) {
    let resultado = 0;    
    for (let i = 0; i < binario.length; i++) {
        resultado  += binario[i] * 2 **(binario.length-1-i);        
    } 
    return console.log("El numero decimal es: " , 
    resultado );
}
convertirBinarioADecimal([1,1,0,1]);