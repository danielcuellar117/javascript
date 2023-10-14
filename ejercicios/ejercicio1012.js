/*let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
Calcular el costo total del inventario.*/

let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

function obtenerProductosMasBaratos() {
    let productosMasBaratos = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].precio<= 5) {
                productosMasBaratos.push(products[i]);
            }            
        }console.log(productosMasBaratos);
}
/*const productosBaratos = products.filter(product => product.precio <= 5);*/
const productosBaratos = products.filter(product=> product.precio <= 5);
obtenerProductosMasBaratos();

function calcularCostoPromedio() {
    let productosValidos = 0;
    let totalCost = 0;

for (let i = 0; i < products.length; i++) {
    if (products[i].precio > 0 && products[i].cantidad > 0) {
        totalCost += products[i].precio * products[i].cantidad;
        productosValidos++;
    }
}

const promedioCosto = totalCost / productosValidos;

console.log("Costo promedio de productos válidos:", promedioCosto);

}
calcularCostoPromedio();
// Calcular el costo total del inventario.
function calcularcostoTotalInventario() {
    let sumaCosto = 0;
    for (let i = 0; i < products.length; i++) {
        sumaCosto+= products[i].precio;
    }console.log('El valor total de los productos es: ',sumaCosto);
}
calcularcostoTotalInventario();