/* mostrar el numero mayor de un array*/
function mayor(list) {
    let temp = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i]>temp) {
            temp=list[i];
        }
    }
    return temp;
    
}
let numberList=[3,7,0,9,1]
var numeroMayor = mayor(numberList);
console.log("El número más grande es: "+numeroMayor);