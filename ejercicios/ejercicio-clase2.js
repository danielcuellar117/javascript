// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

const peso = parseFloat(prompt('Ingresa tu peso'))
const altura = parseFloat(prompt('Ingresa tu altura'));
const BMI = peso/altura**2;
console.log(`Tu indice de masa corporal es ${BMI}`);
switch (true) {
    case BMI < 18.5       :
        console.log('Bajo de peso');
        break;
    case BMI >18.5 && BMI <= 24.9:
        console.log('Normal');
        break;
    case BMI >=25 && BMI <29.9:
        console.log('Sobrepeso');
        break;
    case BMI >=30:
        console.log('Obeso');    
        break;
    default:
        console.log('No valido');
}
