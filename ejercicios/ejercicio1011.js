/*A partir de la lista anterior determinar:
Cantidad de hombres y mujeres.
Promedio de edades de hombres y mujeres.
Cuántas personas se llaman igual.*/

    const values = [
        { name: 'Juan', age: 45, gender: 'male' },
        { name: 'Sofia', age: 13, gender: 'female' },
        { name: 'Sofia', age: 67, gender: 'female' },
        { name: 'Carlos', age: 32, gender: 'female'},
        { name: 'Ana Maria', age: 27, gender: 'female' },
        { name: 'Luisa', age: 5, gender: 'female' },
        { name: 'Elisa', age: 17, gender: 'female' }
    ];

function determinarCantidadHombres() {
    var hombres=[];
    for (let i=0;i<values.length;i++){
            if (values[i].gender == 'male') {
                hombres.push(values[i]);
        }
    }
    var cantidadHombres = hombres.length;
console.log('Cantidad de Hombres: ', cantidadHombres,hombres);
return hombres
}
const listadoHombres = determinarCantidadHombres();
function determinarCantidadMujeres() {
    var mujeres = [];
        for (let i=0;i<values.length;i++) {
            if (values[i].gender == 'female') {
                mujeres.push(values[i]);
            }
        }
    var cantidadMujeres=mujeres.length;
console.log('cantidad de mujeres:',cantidadMujeres, mujeres);
return mujeres;
}    
const listadoMujeres = determinarCantidadMujeres();

function determinarPromedioEdadMujeres(mujeres) {
    var sumaEdadMujeres = 0;
        for (let i = 0; i < mujeres.length; i++) {
            sumaEdadMujeres = mujeres[i].age + sumaEdadMujeres; 
        }
    var promedioEdadMujeres = sumaEdadMujeres/mujeres.length
console.log('El promedio de edad de las mujeres es: ', promedioEdadMujeres.toFixed(1));
}
determinarPromedioEdadMujeres(listadoMujeres);

function determinarPromedioEdadHombres(hombres) {
    var sumaEdadHombres = 0;
        for (let i = 0; i < hombres.length; i++) {
            sumaEdadHombres = hombres[i].age + sumaEdadHombres;            
        }
    var promedioEdadHombres = sumaEdadHombres / hombres.length;
    console.log('El promedio de edad de los Hombres es: ', promedioEdadHombres.toFixed(1));
}
determinarPromedioEdadHombres(listadoHombres);

function determinarNombresIguales() {
    const nombresIguales = {};
    const nombres = {};

        values.forEach(person => {
            const name = person.name;

            if (nombres[name]) {
                nombresIguales[name]==nombresIguales[name]||[name];
                nombresIguales[name].push(person);
            }
        })
        for(const name in nombresIguales){
            if (nombresIguales[name].length>1) {
                console.log(`El nombre "${name}" se repite ${nombresIguales[name].length} veces`);                
            }
        }
}
determinarNombresIguales();


