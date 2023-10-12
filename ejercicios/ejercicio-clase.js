const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 
const frutasEntre10y20=[];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].precio>=10 &&frutas[i].precio<=20)
    frutasEntre10y20.push(frutas[i]);       
}

console.log(frutasEntre10y20);

