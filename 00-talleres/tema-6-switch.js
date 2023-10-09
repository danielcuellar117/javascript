/* ## Tema 6: Switch

/*1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:
   - Si saca menos de 2.5 ( `'Insuficiente, has perdido la materia'` )
   - Si saca 2.5 y de menos de 3.5 ( `'Insuficiente, tienes derecho a habilitar'` )
   - Si saca 3.5 y menos de 4.0 ( `'Aceptable'` )
   - Si saca 4.1 y hasta 5.0 ( `'Excelente'` )*/

   var nota1 = parseFloat(prompt('Ingresa la primera nota '));
   var nota2 = parseFloat(prompt ('Ingrese segunda nota'));
   var nota3 = parseFloat(prompt('Ingresa la tercera nota'));
   var promedio=(nota1+nota2+nota3)/3;
   
   switch (true) {
    case promedio > 0 && promedio < 2.5:
        console.log(promedio + " Insuficiente, has perdido la materia");
        break;
    case  promedio >= 2.5 && promedio < 3.5:
        console.log(promedio + " Insuficiente, Puedes habilitar");
        break;
    case promedio >= 3.5 && promedio < 4.0:
        console.log(promedio + " Aceptablke, ");
        break;
    case promedio>= 4.1 && promedio<= 5.0:
        console.log(promedio + " Excelente "); 
        break;
    default:
        console.log(promedio + " Notas no validas");
        break;
   }
 

   /*if (promedio>5) {
    console.log(promedio + ' Notas no validas');    
   }
    if (promedio < 2.5 ){
    console.log(promedio + ` Has Perdido la Materia`);
   }else if ( promedio >= 2.5 && promedio < 3.5 ){
    console.log (promedio + ` Insuficiente. Tienes Derecho A Habilitar`) ;
   }else if ( promedio >= 3.5 && promedio < 4.0){
    console.log(promedio + ' Aceptable ');
   }else if(promedio>= 4.1 && promedio<= 5.0){
    console.log(promedio + ' Excelente');
   }else {
    console.error(promedio + " Nota no valida");
}*/

/* 2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes.*/

const mes = parseInt(prompt('Ingresa un numero del 1 al 12 para representar un mes del año'));
let diasEnElMes;

switch (mes) {
    case 2:
        diasEnElMes=28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        diasEnElMes=30;
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        diasEnElMes=31;
        break;
    default:
        diasEnElMes='Numero de mes no valido'
}
console.log('El mes ' + mes + ' tiene ' + diasEnElMes + ' dias.');

//*3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el nombre del mes utilizando una estructura switch.*/

const mesIngresado = parseInt(prompt('Ingresa un numero del 1 al 12 que represente un mes del año'))
let nombreMes 
switch (mesIngresado){
    case  1 :
        nombreMes="ENERO";
        break;
    case 2: 
        nombreMes="FEBRERO";
        break;
    case 3:
        nombreMes ="MARZO"
        break;
    case 4:
        nombreMes ="ABRIL"
        break;
    case 5:
        nombreMes ="MAYO"
        break;
    case 6:
        nombreMes ="JUNIO"
        break;
    case 7:
        nombreMes ="JULIO"
        break;
    case 8:
        nombreMes ="AGOSTO"
        break;
    case 9:
        nombreMes ="SEPTIEMBRE"
        break;
    case 10:
        nombreMes ="OCTUBRE"
        break;
    case 11:
        nombreMes ="NOVIEMBRE"
        break;
    case 12:
        nombreMes ="DICIEMBRE"
        break;
        default:
            nombreMes ='No existe ese Mes'; 
}
console.log(nombreMes);
/*4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente.*/

const opcionIngresada = parseInt(prompt('Ingresa una opción: 1: Ver perfil\ 2: Editar configuración\ 3: Ayuda\ 4: Salir '))
switch (opcionIngresada) {
    case 1:
        console.log('ver perfil');
        break;
    case 2:
        console.log('editar configuracion');
        break;
    case 3:
        console.log('ayuda');
        break;
    case 4:
        console.log('salir');
        break;
    
    default:
        console.log('Opcion no valida');
        break;
}

/*5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).*/
