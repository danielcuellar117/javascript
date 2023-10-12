
const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

let temp = array[0];

for (let j = 0; j < array.length - 1; j++) {

    for (let i = 0; i < array.length - 1; i++) {

        console.log(i, i + 1);

        if( array[i + 1] < array[i] ) {

            temp = array[i];
            array[i] = array[i + 1]
            array[i + 1] = temp;
        
        }
    
    }       

}

console.log( array );