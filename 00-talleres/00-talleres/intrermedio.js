// Ejercicio 2: Calcular el promedio y determinar si un alumno aprobó
function ejercicio2() {
    const nota1= parseFloat(prompt('Ingrese la primewra calificacion'));    
    const nota2 = parseFloat(prompt('Ingresa la segunda calificacion'));
    const nota3 = parseFloat(prompt('Ingresa la tercera nota'));
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        const promedio = (nota1 + nota2 + nota3)/3;
        if (promedio>=3.5) {
            console.log("El alumno aprobó la materia con un promedio de " + promedio.toFixed(2));
        }else {
            console.log("El alumno reprobó la materia con un promedio de " + promedio.toFixed(2));
          }
    } else {
        console.log("Ingrese calificaciones válidas.");
    }
}

// Ejercicio 3: Determinar qué materias aprobó y cuáles reprobó
function ejercicio3(){
    var nombreAlumno = prompt('Ingrese el nombre del alumno');
    var notaMateria1 = parseFloat(prompt('Ingrese la nota de la primera materia'));
    var notaMateria2 = parseFloat(prompt('Ingrese la nota de la segunda materia'));
    var notaMateria3 = parseFloat(prompt('Ingrese la nota de la tercera materia'));
    var promedio = (notaMateria1+notaMateria2+notaMateria3)/3;
    var notaMinima = 3.5;
    var materiasAprobadas = [];
    var materiasReprobadas = [];
    if (notaMateria1 >= notaMinima) {
        materiasAprobadas.push("Materia 1");
      } else {
        materiasReprobadas.push("Materia 1");
      }
      
      if (notaMateria2 >= notaMinima) {
        materiasAprobadas.push("Materia 2");
      } else {
        materiasReprobadas.push("Materia 2");
      }
      
      if (notaMateria3 >= notaMinima) {
        materiasAprobadas.push("Materia 3");
      } else {
        materiasReprobadas.push("Materia 3");
      }
      
      console.log("Nombre del alumno: " + nombreAlumno);
      console.log("Promedio de notas: " + promedio.toFixed(2));
      console.log("Materias aprobadas: " + materiasAprobadas.join(", "));
      console.log("Materias reprobadas: " + materiasReprobadas.join(", "));
      }