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
   if (promedio>5) {
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
    console.error(promedio + " Nota no valida");}
   


/* 2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes.*/

//*3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el nombre del mes utilizando una estructura switch.

/*4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente.

/*5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).*/
