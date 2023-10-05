// # Taller 1 - Intermedio

//## Objetivo del taller

//El propósito del mismo es permitir al estudiante desarrollar ejercicios de lógica de programación de nivel intermedio, en búsqueda de mejorar habilidad y capacidad en la resolución de problemas a partir de algorítmos vistos en clase junto con todos los conocimientos ateriores, afianzar los conocimientos adquiridos de forma incremental de un problema mucho más grande.*/

//1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).*/

const notaMinima = 3.5;
let calificacion = parseFloat(prompt("Ingrese su calificación"));
if (calificacion>notaMinima && calificacion<5) {
  console.log('Apruebas');
} else {
  console.log('Repruebas');
}

//2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).*/

let nota1= parseInt(prompt('Ingresa la primera nota'));
let nota2 = parseInt(prompt('Ingresa la segunda nota'));
let nota3 = parseInt(prompt('INgresa la tercera nota'));

let promedio= nota1+nota2+nota3/3;

if (promedio> 1 &&promedio<3.5) {
    console.log('Reprueba');
} else if (promedio>3.5 && promedio<5) {
    console.log('Aprueba');
}else {
    console.log('nota no valida');
}

/*3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.*/

/*function determinarMateriasAprobadasYReprobadas(nombreAlumno, notas) {
    const materiasAprobadasYReprobadas = {
      aprobadas: [],
      reprobadas: [],
    };
  
    for (const nota of notas) {
      if (nota >= 3.5) {
        materiasAprobadasYReprobadas.aprobadas.push(nota.materia);
      } else {
        materiasAprobadasYReprobadas.reprobadas.push(nota.materia);
      }
    }
  
    return materiasAprobadasYReprobadas;
  }
  
  const nombreAlumno = prompt('Ingresa tu nombre');
  const notas = [
    { materia: "Matemáticas", nota: 3 },
    { materia: "Física", nota: 5 },
    { materia: "Química", nota: 1 },
  ];
  
  const materiasAprobadasYReprobadas = determinarMateriasAprobadasYReprobadas(nombreAlumno, notas);
  
  console.log("Materias aprobadas:", materiasAprobadasYReprobadas.aprobadas);
  console.log("Materias reprobadas:", materiasAprobadasYReprobadas.reprobadas);*/

const alumno = {};
const nota = {};
const materia = {};
function sacarPromedio( notas ){
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma /notas.length ;
}
function capturaNotas ( cant_notas ){
  let notas = [];
  for (var i=0;i<cant_notas;i++){
    notas.push(parseFloat(prompt('Ingresa la nota')))
  }
  return notas;
}
function capturaMaterias(cant_materias){
  let materias=[];
  for (var i=0;i<cant_materias;i++){
  const nombreMateria = (prompt('Ingresa el nombre de la materia'))
  const notas = capturaNotas(3);

  const nuevaMateria = {
    nombre: nombreMateria,
    notas, 
    promedio
    };
    materias.push(nuevaMateria)
  }
  return materias;
}
  function capturaDatosAlumno(){
    const nombre = prompt('Ingresa el nombre del alumno');
    const materias= capturaMaterias(3);

    const nuevoAlumno ={
      nombre, 
      materias
    };
    return nuevoAlumno;
  }
  function init(){
    const alumno = capturaDatosAlumno();
    console.log(alumno);
  }
/*4. Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes.*/

function aproboMateria(nota) {
  return nota >= 3.5; // 3.5 es la nota mínima para aprobar
}
function ingresarNotasYDeterminarResultado() {
  var nombre = prompt("Ingrese el nombre del alumno:");
  var notaMateria1 = parseFloat(prompt("Ingrese la nota de la primera materia:"));
  var notaMateria2 = parseFloat(prompt("Ingrese la nota de la segunda materia:"));
  var notaMateria3 = parseFloat(prompt("Ingrese la nota de la tercera materia:"));

  if (isNaN(notaMateria1) || isNaN(notaMateria2) || isNaN(notaMateria3)) {
    alert("Por favor, ingrese notas válidas.");
    return;
  }

  var resultado = [];
  
  if (aproboMateria(notaMateria1)) {
    resultado.push("Materia 1 - Aprobada");
  } else {
    resultado.push("Materia 1 - Reprobada");
  }

  if (aproboMateria(notaMateria2)) {
    resultado.push("Materia 2 - Aprobada");
  } else {
    resultado.push("Materia 2 - Reprobada");
  }

  if (aproboMateria(notaMateria3)) {
    resultado.push("Materia 3 - Aprobada");
  } else {
    resultado.push("Materia 3 - Reprobada");
  }

  alert(`Resultado para ${nombre}:\n\n${resultado.join("\n")}`);
}
ingresarNotasYDeterminarResultado();

function aproboMateria(nota) {
  return nota >= 3.5; // 3.5 es la nota mínima para aprobar
}
function ingresarNotasYDeterminarResultado() {
  var nombre = prompt("Ingrese el nombre del alumno:");
  var materia1 = prompt("Ingrese el nombre de la primera materia:");
  var notaMateria1 = parseFloat(prompt(`Ingrese la nota de ${materia1}:`));

  var materia2 = prompt("Ingrese el nombre de la segunda materia:");
  var notaMateria2 = parseFloat(prompt(`Ingrese la nota de ${materia2}:`));

  var materia3 = prompt("Ingrese el nombre de la tercera materia:");
  var notaMateria3 = parseFloat(prompt(`Ingrese la nota de ${materia3}:`));

  if (isNaN(notaMateria1) || isNaN(notaMateria2) || isNaN(notaMateria3)) {
    alert("Por favor, ingrese notas válidas.");
    return;
  }

  var resultado = [];
  
  if (aproboMateria(notaMateria1)) {
    resultado.push(`${materia1} - Aprobada`);
  } else {
    resultado.push(`${materia1} - Reprobada`);
  }

  if (aproboMateria(notaMateria2)) {
    resultado.push(`${materia2} - Aprobada`);
  } else {
    resultado.push(`${materia2} - Reprobada`);
  }

  if (aproboMateria(notaMateria3)) {
    resultado.push(`${materia3} - Aprobada`);
  } else {
    resultado.push(`${materia3} - Reprobada`);
  }

  console.log(`Resultado para ${nombre}:\n\n${resultado.join("\n")}`);
}

// Llamar a la función para ingresar las notas y determinar el resultado
ingresarNotasYDeterminarResultado();

function ingresarNotasYDeterminarResultado() {
  let nombre = prompt('Ingresa el nombre del alumno');
  let materia1 = prompt('Ingresa el nombre de la primera materia');
  let nota1Materia1 = Number(prompt(`Ingrese la nota de ${materia1}`));
  let nota2Materia1 = Number(prompt('Ingresa la segunda nota de la materia'));
  let nota3Materia1 = Number(prompt('Ingresa la tercera nota'));

  let materia2 = 
  let nota1Materia2 = 
}

/*5. Implementar el concepto de clases para gestionar la información de los estudiantes y calcular las notas de los tres estudiantes.

/*6. Agregar la opción de ingresar el número total de materias y las notas correspondientes de un solo estudiante. Determinar qué materias aprobó y cuáles reprobó.

/*7. Implementar funciones para calcular el promedio de notas de un grupo de estudiantes, dados sus nombres y notas por materia.

/*8. Utilizar clases para gestionar la información de un grupo de estudiantes y calcular los promedios de notas de cada estudiante.

/*9. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia para calcular el promedio por materia.

/*10. Implementar una función para calcular la calificación final de un estudiante, considerando los porcentajes asignados a cada materia.

11. Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales de cada estudiante.

12. Agregar la opción de ingresar el número total de exámenes y las calificaciones correspondientes de cada examen para calcular el promedio del estudiante.

13. Implementar funciones para calcular la calificación final de un grupo de estudiantes, considerando el promedio de las notas y el promedio de los exámenes.

14. Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales considerando notas y exámenes.

15. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante.

16. Implementar una función para determinar el estudiante con la calificación más alta y el estudiante con la calificación más baja.

17. Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales, así como determinar el estudiante con la calificación más alta y más baja.

18. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un umbral de calificación para determinar qué estudiantes aprobaron y cuáles reprobaron.

19. Implementar funciones para calcular el promedio de notas y el promedio de exámenes de un grupo de estudiantes, así como determinar qué estudiantes aprobaron y cuáles reprobaron, según el umbral de calificación.

20. Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, promedios y aprobar/reprobar estudiantes, según el umbral de calificación.

21. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un rango de calificaciones para determinar qué estudiantes están dentro de ese rango.

22. Implementar una función para determinar la cantidad de estudiantes que se encuentran dentro del rango de calificaciones especificado.

23. Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, y determinar la cantidad de estudiantes dentro de un rango de calificaciones.

24. Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un número de estudiantes aprobados para determinar si el grupo de estudiantes cumple con ese requisito.

25. Implementar una función para determinar si el grupo de estudiantes cumple con el requisito de tener el número especificado de estudiantes aprobados.

26. Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, y determinar si el grupo cumple con el requisito de estudiantes aprobados.*/
