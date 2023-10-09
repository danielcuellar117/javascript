/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

const productosEntre10y20 = frutas.filter(fruta => fruta.precio >= 10 && fruta.precio <= 20);
console.log("Productos entre $10 y $20:");
productosEntre10y20.forEach(fruta => {
    console.log(fruta.nombre + ': $' + fruta.precio);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
const frutas2 = [];

while (true) {
    const nombre = prompt("Ingresa el nombre de una fruta (o presiona Cancelar para detenerse):");
    if (!nombre) {
        break;
    }
    const precio = parseFloat(prompt("Ingresa el precio de la fruta:"));
    frutas2.push({ nombre, precio });
}

const productosEntre10y202 = [];

for (let i = 0; i < frutas2.length; i++) {
    const fruta = frutas2[i];
    if (fruta.precio >= 10 && fruta.precio <= 20) {
        productosEntre10y202.push(fruta);
    }
}
console.log("Productos entre $10 y $20:");

productosEntre10y202.forEach(fruta => {
    console.log(fruta.nombre + ': $' + fruta.precio);
});
