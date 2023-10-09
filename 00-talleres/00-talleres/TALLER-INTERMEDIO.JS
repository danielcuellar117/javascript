// Ejercicio 1: Determinar si un alumno aprobó o reprobó la materia
function ejercicio1() {
  const nota = parseFloat(prompt("Ingrese la calificación del alumno:"));
  if (!isNaN(nota)) {
    if (nota >= 3.5) {
      console.log("El alumno aprobó la materia.");
    } else {
      console.log("El alumno reprobó la materia.");
    }
  } else {
    console.log("Ingrese una calificación válida.");
  }
}

// Ejercicio 2: Calcular el promedio y determinar si un alumno aprobó
function ejercicio2() {
  const nota1 = parseFloat(prompt("Ingrese la primera calificación:"));
  const nota2 = parseFloat(prompt("Ingrese la segunda calificación:"));
  const nota3 = parseFloat(prompt("Ingrese la tercera calificación:"));

  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 3.5) {
      console.log("El alumno aprobó la materia con un promedio de " + promedio.toFixed(2));
    } else {
      console.log("El alumno reprobó la materia con un promedio de " + promedio.toFixed(2));
    }
  } else {
    console.log("Ingrese calificaciones válidas.");
  }
}

// Ejercicio 3: Determinar qué materias aprobó y cuáles reprobó
function ejercicio3() {
  const nombre = prompt("Ingrese el nombre del alumno:");
  const nota1 = parseFloat(prompt("Ingrese la calificación de la primera materia:"));
  const nota2 = parseFloat(prompt("Ingrese la calificación de la segunda materia:"));
  const nota3 = parseFloat(prompt("Ingrese la calificación de la tercera materia:"));

  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    const materiasAprobadas = [];
    const materiasReprobadas = [];

    if (nota1 >= 3.5) {
      materiasAprobadas.push("Materia 1");
    } else {
      materiasReprobadas.push("Materia 1");
    }

    if (nota2 >= 3.5) {
      materiasAprobadas.push("Materia 2");
    } else {
      materiasReprobadas.push("Materia 2");
    }

    if (nota3 >= 3.5) {
      materiasAprobadas.push("Materia 3");
    } else {
      materiasReprobadas.push("Materia 3");
    }

    console.log(`${nombre} aprobó las siguientes materias: ${materiasAprobadas.join(", ")}`);
    console.log(`${nombre} reprobó las siguientes materias: ${materiasReprobadas.join(", ")}`);
  } else {
    console.log("Ingrese calificaciones válidas.");
  }
}

// Ejercicio 4: Implementar funciones para el punto 3 para tres estudiantes
function ejercicio4() {
  const estudiantes = [];

  for (let i = 0; i < 3; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const nota1 = parseFloat(prompt(`Ingrese la calificación de la primera materia para ${nombre}:`));
    const nota2 = parseFloat(prompt(`Ingrese la calificación de la segunda materia para ${nombre}:`));
    const nota3 = parseFloat(prompt(`Ingrese la calificación de la tercera materia para ${nombre}:`));

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      const materiasAprobadas = [];
      const materiasReprobadas = [];

      if (nota1 >= 3.5) {
        materiasAprobadas.push("Materia 1");
      } else {
        materiasReprobadas.push("Materia 1");
      }

      if (nota2 >= 3.5) {
        materiasAprobadas.push("Materia 2");
      } else {
        materiasReprobadas.push("Materia 2");
      }

      if (nota3 >= 3.5) {
        materiasAprobadas.push("Materia 3");
      } else {
        materiasReprobadas.push("Materia 3");
      }

      estudiantes.push({
        nombre,
        materiasAprobadas,
        materiasReprobadas,
      });
    } else {
      console.log(`Ingrese calificaciones válidas para el estudiante ${nombre}.`);
    }
  }

  console.log("Resultados para los tres estudiantes:");
  for (const estudiante of estudiantes) {
    console.log(`${estudiante.nombre} aprobó las siguientes materias: ${estudiante.materiasAprobadas.join(", ")}`);
    console.log(`${estudiante.nombre} reprobó las siguientes materias: ${estudiante.materiasReprobadas.join(", ")}`);
  }
}

// Ejercicio 5: Utilizar clases para gestionar la información de los estudiantes
class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.materias = [];
  }

  agregarMateria(materia, nota) {
    this.materias.push({ materia, nota });
  }

  obtenerMateriasAprobadas() {
    return this.materias.filter((materia) => materia.nota >= 3.5).map((materia) => materia.materia);
  }

  obtenerMateriasReprobadas() {
    return this.materias.filter((materia) => materia.nota < 3.5).map((materia) => materia.materia);
  }
}

function ejercicio5() {
  const estudiantes = [];

  for (let i = 0; i < 3; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);

    for (let j = 0; j < 3; j++) {
      const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
      const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

      if (!isNaN(nota)) {
        estudiante.agregarMateria(materia, nota);
      } else {
        console.log(`Ingrese una calificación válida para la materia ${materia}.`);
      }
    }

    estudiantes.push(estudiante);
  }

  console.log("Resultados para los tres estudiantes:");
  for (const estudiante of estudiantes) {
    console.log(`${estudiante.nombre} aprobó las siguientes materias: ${estudiante.obtenerMateriasAprobadas().join(", ")}`);
    console.log(`${estudiante.nombre} reprobó las siguientes materias: ${estudiante.obtenerMateriasReprobadas().join(", ")}`);
  }
}

// Ejercicio 6: Ingresar el número total de materias para un solo estudiante
function ejercicio6() {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const numMaterias = parseInt(prompt("Ingrese el número total de materias:"));

  if (!isNaN(numMaterias)) {
    const estudiante = new Estudiante(nombre);

    for (let i = 0; i < numMaterias; i++) {
      const materia = prompt(`Ingrese el nombre de la materia ${i + 1} para ${nombre}:`);
      const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${i + 1} para ${nombre}:`));

      if (!isNaN(nota)) {
        estudiante.agregarMateria(materia, nota);
      } else {
        console.log(`Ingrese una calificación válida para la materia ${materia}.`);
      }
    }

    console.log(`${nombre} aprobó las siguientes materias: ${estudiante.obtenerMateriasAprobadas().join(", ")}`);
    console.log(`${nombre} reprobó las siguientes materias: ${estudiante.obtenerMateriasReprobadas().join(", ")}`);
  } else {
    console.log("Ingrese un número válido de materias.");
  }
}

// Ejercicio 7: Implementar funciones para calcular el promedio de notas de un grupo de estudiantes
function calcularPromedioNotas(estudiantes) {
  const promedios = [];
  for (const estudiante of estudiantes) {
    const promedio = estudiante.materias.reduce((sum, materia) => sum + materia.nota, 0) / estudiante.materias.length;
    promedios.push({ nombre: estudiante.nombre, promedio });
  }
  return promedios;
}

function ejercicio7() {
  const estudiantes = [];

  for (let i = 0; i < 3; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);

    for (let j = 0; j < 3; j++) {
      const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
      const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

      if (!isNaN(nota)) {
        estudiante.agregarMateria(materia, nota);
      } else {
        console.log(`Ingrese una calificación válida para la materia ${materia}.`);
      }
    }

    estudiantes.push(estudiante);
  }

  const promedios = calcularPromedioNotas(estudiantes);
  console.log("Promedios de notas de los tres estudiantes:");
  for (const promedio of promedios) {
    console.log(`${promedio.nombre}: ${promedio.promedio.toFixed(2)}`);
  }
}

// Ejercicio 8: Utilizar clases para gestionar la información de un grupo de estudiantes
class GrupoEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  calcularPromedioNotas() {
    const promedios = [];
    for (const estudiante of this.estudiantes) {
      const promedio = estudiante.materias.reduce((sum, materia) => sum + materia.nota, 0) / estudiante.materias.length;
      promedios.push({ nombre: estudiante.nombre, promedio });
    }
    return promedios;
  }
}

function ejercicio8() {
  const grupo = new GrupoEstudiantes();

  for (let i = 0; i < 3; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const estudiante = new Estudiante(nombre);

    for (let j = 0; j < 3; j++) {
      const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
      const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

      if (!isNaN(nota)) {
        estudiante.agregarMateria(materia, nota);
      } else {
        console.log(`Ingrese una calificación válida para la materia ${materia}.`);
      }
    }

    grupo.agregarEstudiante(estudiante);
  }

  const promedios = grupo.calcularPromedioNotas();
  console.log("Promedios de notas de los tres estudiantes:");
  for (const promedio of promedios) {
    console.log(`${promedio.nombre}: ${promedio.promedio.toFixed(2)}`);
  }
}

// Ejercicio 9: Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen para calcular el promedio por materia
function calcularPromedioPorMateria(estudiantes) {
  const promediosPorMateria = {};

  for (const estudiante of estudiantes) {
    for (const materia of estudiante.materias) {
      if (!promediosPorMateria[materia.materia]) {
        promediosPorMateria[materia.materia] = {
          sumatoria: 0,
          contador: 0,
        };
      }
      promediosPorMateria[materia.materia].sumatoria += materia.nota;
      promediosPorMateria[materia.materia].contador++;
    }
  }

  const resultado = {};
  for (const materia in promediosPorMateria) {
    const promedio = promediosPorMateria[materia].sumatoria / promediosPorMateria[materia].contador;
    resultado[materia] = promedio;
  }

  return resultado;
}

function ejercicio9() {
  const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
  const estudiantes = [];

  if (!isNaN(numEstudiantes)) {
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      const numMaterias = parseInt(prompt(`Ingrese el número total de materias para ${nombre}:`));

      if (!isNaN(numMaterias)) {
        for (let j = 0; j < numMaterias; j++) {
          const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
          const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.agregarMateria(materia, nota);
          } else {
            console.log(`Ingrese una calificación válida para la materia ${materia}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de materias para ${nombre}.`);
      }
    }

    const promedios = calcularPromedioPorMateria(estudiantes);
    console.log("Promedios por materia:");
    for (const materia in promedios) {
      console.log(`${materia}: ${promedios[materia].toFixed(2)}`);
    }
  } else {
    console.log("Ingrese un número válido de estudiantes.");
  }
}

// Ejercicio 10: Calcular la calificación final de un estudiante considerando los porcentajes asignados a cada materia
function calcularCalificacionFinal(estudiante, porcentajes) {
  let calificacionFinal = 0;
  for (const materia of estudiante.materias) {
    const porcentaje = porcentajes[materia.materia] || 0;
    calificacionFinal += (materia.nota * porcentaje) / 100;
  }
  return calificacionFinal;
}

function ejercicio10() {
  const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
  const estudiantes = [];

  if (!isNaN(numEstudiantes)) {
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      const numMaterias = parseInt(prompt(`Ingrese el número total de materias para ${nombre}:`));

      if (!isNaN(numMaterias)) {
        for (let j = 0; j < numMaterias; j++) {
          const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
          const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.agregarMateria(materia, nota);
          } else {
            console.log(`Ingrese una calificación válida para la materia ${materia}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de materias para ${nombre}.`);
      }
    }

    const porcentajes = {};
    const numMateriasConPorcentaje = parseInt(prompt("Ingrese el número de materias con porcentaje de ponderación:"));

    if (!isNaN(numMateriasConPorcentaje)) {
      for (let i = 0; i < numMateriasConPorcentaje; i++) {
        const materia = prompt(`Ingrese el nombre de la materia con porcentaje de ponderación ${i + 1}:`);
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ponderación para ${materia}:`));

        if (!isNaN(porcentaje)) {
          porcentajes[materia] = porcentaje;
        } else {
          console.log(`Ingrese un porcentaje válido para ${materia}.`);
        }
      }
    } else {
      console.log("Ingrese un número válido de materias con porcentaje de ponderación.");
    }

    console.log("Calificaciones finales de los estudiantes:");
    for (const estudiante of estudiantes) {
      const calificacionFinal = calcularCalificacionFinal(estudiante, porcentajes);
      console.log(`${estudiante.nombre}: ${calificacionFinal.toFixed(2)}`);
    }
  } else {
    console.log("Ingrese un número válido de estudiantes.");
  }
}
// Ejercicio 11: Utilizar clases para gestionar la información de un grupo de estudiantes y calcular las calificaciones finales de cada estudiante
class GrupoEstudiantesConCalificaciones extends GrupoEstudiantes {
  constructor(porcentajes) {
    super();
    this.porcentajes = porcentajes;
  }

  calcularCalificacionFinal(estudiante) {
    let calificacionFinal = 0;
    for (const materia of estudiante.materias) {
      const porcentaje = this.porcentajes[materia.materia] || 0;
      calificacionFinal += (materia.nota * porcentaje) / 100;
    }
    return calificacionFinal;
  }

  calcularCalificacionesFinales() {
    const calificacionesFinales = [];
    for (const estudiante of this.estudiantes) {
      const calificacionFinal = this.calcularCalificacionFinal(estudiante);
      calificacionesFinales.push({ nombre: estudiante.nombre, calificacionFinal });
    }
    return calificacionesFinales;
  }
}

function ejercicio11() {
  const porcentajes = {};
  const numMateriasConPorcentaje = parseInt(prompt("Ingrese el número de materias con porcentaje de ponderación:"));

  if (!isNaN(numMateriasConPorcentaje)) {
    for (let i = 0; i < numMateriasConPorcentaje; i++) {
      const materia = prompt(`Ingrese el nombre de la materia con porcentaje de ponderación ${i + 1}:`);
      const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ponderación para ${materia}:`));

      if (!isNaN(porcentaje)) {
        porcentajes[materia] = porcentaje;
      } else {
        console.log(`Ingrese un porcentaje válido para ${materia}.`);
      }
    }

    const grupo = new GrupoEstudiantesConCalificaciones(porcentajes);

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      grupo.agregarEstudiante(estudiante);
    }

    const calificacionesFinales = grupo.calcularCalificacionesFinales();
    console.log("Calificaciones finales de los tres estudiantes:");
    for (const calificacionFinal of calificacionesFinales) {
      console.log(`${calificacionFinal.nombre}: ${calificacionFinal.calificacionFinal.toFixed(2)}`);
    }
  } else {
    console.log("Ingrese un número válido de materias con porcentaje de ponderación.");
  }
}

// Ejercicio 12: Agregar la opción de ingresar el número total de exámenes y las calificaciones correspondientes de cada examen para calcular el promedio del estudiante
function calcularPromedioExamenes(estudiantes) {
  const promediosExamenes = [];
  for (const estudiante of estudiantes) {
    const promedio = estudiante.examenes.reduce((sum, nota) => sum + nota, 0) / estudiante.examenes.length;
    promediosExamenes.push({ nombre: estudiante.nombre, promedio });
  }
  return promediosExamenes;
}

function ejercicio12() {
  const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
  const estudiantes = [];

  if (!isNaN(numEstudiantes)) {
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);
      estudiante.examenes = [];

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const promediosExamenes = calcularPromedioExamenes(estudiantes);
    console.log("Promedios de exámenes de los tres estudiantes:");
    for (const promedioExamen of promediosExamenes) {
      console.log(`${promedioExamen.nombre}: ${promedioExamen.promedio.toFixed(2)}`);
    }
  } else {
    console.log("Ingrese un número válido de estudiantes.");
  }
}
// Ejercicio 15: Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante
function ejercicio15() {
  const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
  const estudiantes = [];

  if (!isNaN(numEstudiantes)) {
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const porcentajes = {};
    const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
    const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

    if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
      porcentajes.notas = porcentajeNotas;
      porcentajes.examenes = porcentajeExamenes;

      const grupo = new GrupoEstudiantesConCalificacionesFinales(porcentajes);

      for (const estudiante of estudiantes) {
        grupo.agregarEstudiante(estudiante);
      }

      const calificacionesFinales = grupo.calcularCalificacionesFinales();
      console.log("Calificaciones finales de los tres estudiantes:");
      for (const calificacionFinal of calificacionesFinales) {
        console.log(`${calificacionFinal.nombre}: ${calificacionFinal.calificacionFinal.toFixed(2)}`);
      }
    } else {
      console.log("Ingrese porcentajes válidos.");
    }
  } else {
    console.log("Ingrese un número válido de estudiantes.");
  }
}

// Ejercicio 16: Implementar una función para determinar el estudiante con la calificación más alta y el estudiante con la calificación más baja
function encontrarEstudianteCalificacionMasAlta(estudiantes) {
  let estudianteMax = null;
  let calificacionMax = -1;

  for (const estudiante of estudiantes) {
    const promedioNotas = estudiante.materias.reduce((sum, materia) => sum + materia.nota, 0) / estudiante.materias.length;
    const promedioExamenes = estudiante.examenes.reduce((sum, nota) => sum + nota, 0) / estudiante.examenes.length;
    const calificacionFinal = (promedioNotas * estudiante.porcentajes.notas) / 100 + (promedioExamenes * estudiante.porcentajes.examenes) / 100;

    if (calificacionFinal > calificacionMax) {
      estudianteMax = estudiante;
      calificacionMax = calificacionFinal;
    }
  }

  return estudianteMax;
}

function encontrarEstudianteCalificacionMasBaja(estudiantes) {
  let estudianteMin = null;
  let calificacionMin = 101;

  for (const estudiante of estudiantes) {
    const promedioNotas = estudiante.materias.reduce((sum, materia) => sum + materia.nota, 0) / estudiante.materias.length;
    const promedioExamenes = estudiante.examenes.reduce((sum, nota) => sum + nota, 0) / estudiante.examenes.length;
    const calificacionFinal = (promedioNotas * estudiante.porcentajes.notas) / 100 + (promedioExamenes * estudiante.porcentajes.examenes) / 100;

    if (calificacionFinal < calificacionMin) {
      estudianteMin = estudiante;
      calificacionMin = calificacionFinal;
    }
  }

  return estudianteMin;
}

function ejercicio16() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    for (const estudiante of estudiantes) {
      estudiante.porcentajes = porcentajes;
    }

    const estudianteCalificacionMasAlta = encontrarEstudianteCalificacionMasAlta(estudiantes);
    const estudianteCalificacionMasBaja = encontrarEstudianteCalificacionMasBaja(estudiantes);

    console.log("Estudiante con la calificación más alta:");
    console.log(`${estudianteCalificacionMasAlta.nombre}: ${estudianteCalificacionMasAlta.calcularCalificacionFinal().toFixed(2)}`);

    console.log("Estudiante con la calificación más baja:");
    console.log(`${estudianteCalificacionMasBaja.nombre}: ${estudianteCalificacionMasBaja.calcularCalificacionFinal().toFixed(2)}`);
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 17: Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales y determinar el estudiante con la calificación más alta y más baja
class GrupoEstudiantesConCalificacionesFinalesYMinMax extends GrupoEstudiantesConCalificacionesFinales {
  constructor(porcentajes) {
    super(porcentajes);
  }

  encontrarEstudianteCalificacionMasAlta() {
    let estudianteMax = null;
    let calificacionMax = -1;

    for (const estudiante of this.estudiantes) {
      const calificacionFinal = estudiante.calcularCalificacionFinal();
      if (calificacionFinal > calificacionMax) {
        estudianteMax = estudiante;
        calificacionMax = calificacionFinal;
      }
    }

    return estudianteMax;
  }

  encontrarEstudianteCalificacionMasBaja() {
    let estudianteMin = null;
    let calificacionMin = 101;

    for (const estudiante of this.estudiantes) {
      const calificacionFinal = estudiante.calcularCalificacionFinal();
      if (calificacionFinal < calificacionMin) {
        estudianteMin = estudiante;
        calificacionMin = calificacionFinal;
      }
    }

    return estudianteMin;
  }
}

function ejercicio17() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const grupo = new GrupoEstudiantesConCalificacionesFinalesYMinMax(porcentajes);

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        grupo.agregarEstudiante(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    grupo.encontrarEstudianteCalificacionMasAlta();
    grupo.encontrarEstudianteCalificacionMasBaja();

    const estudianteCalificacionMasAlta = grupo.encontrarEstudianteCalificacionMasAlta();
    const estudianteCalificacionMasBaja = grupo.encontrarEstudianteCalificacionMasBaja();

    console.log("Estudiante con la calificación más alta:");
    console.log(`${estudianteCalificacionMasAlta.nombre}: ${estudianteCalificacionMasAlta.calcularCalificacionFinal().toFixed(2)}`);

    console.log("Estudiante con la calificación más baja:");
    console.log(`${estudianteCalificacionMasBaja.nombre}: ${estudianteCalificacionMasBaja.calcularCalificacionFinal().toFixed(2)}`);
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 18: Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un umbral de calificación para determinar qué estudiantes aprobaron y cuáles reprobaron.
function ejercicio18() {
  const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
  const estudiantes = [];

  if (!isNaN(numEstudiantes)) {
    for (let i = 0; i < numEstudiantes; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const porcentajes = {};
    const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
    const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

    if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
      porcentajes.notas = porcentajeNotas;
      porcentajes.examenes = porcentajeExamenes;

      const umbralAprobacion = parseFloat(prompt("Ingrese el umbral de calificación para aprobar:"));

      if (!isNaN(umbralAprobacion)) {
        const grupo = new GrupoEstudiantesConCalificacionesFinalesYMinMax(porcentajes);

        for (const estudiante of estudiantes) {
          grupo.agregarEstudiante(estudiante);
        }

        console.log("Estudiantes aprobados:");
        for (const estudiante of grupo.estudiantes) {
          const calificacionFinal = estudiante.calcularCalificacionFinal();
          if (calificacionFinal >= umbralAprobacion) {
            console.log(`${estudiante.nombre}: ${calificacionFinal.toFixed(2)}`);
          }
        }

        console.log("Estudiantes reprobados:");
        for (const estudiante of grupo.estudiantes) {
          const calificacionFinal = estudiante.calcularCalificacionFinal();
          if (calificacionFinal < umbralAprobacion) {
            console.log(`${estudiante.nombre}: ${calificacionFinal.toFixed(2)}`);
          }
        }
      } else {
        console.log("Ingrese un umbral de calificación válido.");
      }
    } else {
      console.log("Ingrese porcentajes válidos.");
    }
  } else {
    console.log("Ingrese un número válido de estudiantes.");
  }
}

// Ejercicio 19: Implementar funciones para calcular el promedio de notas y el promedio de exámenes de un grupo de estudiantes, así como determinar qué estudiantes aprobaron y cuáles reprobaron, según el umbral de calificación.
function calcularPromedioNotas(estudiantes) {
  let sumNotas = 0;
  let numEstudiantes = 0;

  for (const estudiante of estudiantes) {
    sumNotas += estudiante.calcularCalificacionFinal();
    numEstudiantes++;
  }

  return sumNotas / numEstudiantes;
}

function calcularPromedioExamenes(estudiantes) {
  let sumExamenes = 0;
  let numEstudiantes = 0;

  for (const estudiante of estudiantes) {
    const promedioExamenes = estudiante.examenes.reduce((sum, nota) => sum + nota, 0) / estudiante.examenes.length;
    sumExamenes += promedioExamenes;
    numEstudiantes++;
  }

  return sumExamenes / numEstudiantes;
}

function estudiantesAprobadosReprobados(estudiantes, umbralAprobacion) {
  const aprobados = [];
  const reprobados = [];

  for (const estudiante of estudiantes) {
    const calificacionFinal = estudiante.calcularCalificacionFinal();
    if (calificacionFinal >= umbralAprobacion) {
      aprobados.push(estudiante);
    } else {
      reprobados.push(estudiante);
    }
  }

  return { aprobados, reprobados };
}

function ejercicio19() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const umbralAprobacion = parseFloat(prompt("Ingrese el umbral de calificación para aprobar:"));

    if (!isNaN(umbralAprobacion)) {
      const grupo = new GrupoEstudiantesConCalificacionesFinalesYMinMax(porcentajes);

      for (const estudiante of estudiantes) {
        grupo.agregarEstudiante(estudiante);
      }

      const promedioNotas = calcularPromedioNotas(estudiantes);
      const promedioExamenes = calcularPromedioExamenes(estudiantes);
      console.log(`Promedio de calificaciones finales: ${promedioNotas.toFixed(2)}`);
      console.log(`Promedio de calificaciones de exámenes: ${promedioExamenes.toFixed(2)}`);

      const { aprobados, reprobados } = estudiantesAprobadosReprobados(estudiantes, umbralAprobacion);

      console.log("Estudiantes aprobados:");
      for (const estudiante of aprobados) {
        console.log(`${estudiante.nombre}: ${estudiante.calcularCalificacionFinal().toFixed(2)}`);
      }

      console.log("Estudiantes reprobados:");
      for (const estudiante of reprobados) {
        console.log(`${estudiante.nombre}: ${estudiante.calcularCalificacionFinal().toFixed(2)}`);
      }
    } else {
      console.log("Ingrese un umbral de calificación válido.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 20: Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, promedios y aprobar/reprobar estudiantes, según el umbral de calificación.
class GrupoEstudiantesConCalificacionesFinalesYPromedios extends GrupoEstudiantesConCalificacionesFinalesYMinMax {
  constructor(porcentajes) {
    super(porcentajes);
  }

  calcularPromedioNotas() {
    let sumNotas = 0;

    for (const estudiante of this.estudiantes) {
      sumNotas += estudiante.calcularCalificacionFinal();
    }

    return sumNotas / this.estudiantes.length;
  }

  calcularPromedioExamenes() {
    let sumExamenes = 0;

    for (const estudiante of this.estudiantes) {
      const promedioExamenes = estudiante.examenes.reduce((sum, nota) => sum + nota, 0) / estudiante.examenes.length;
      sumExamenes += promedioExamenes;
    }

    return sumExamenes / this.estudiantes.length;
  }

  estudiantesAprobadosReprobados(umbralAprobacion) {
    const aprobados = [];
    const reprobados = [];

    for (const estudiante of this.estudiantes) {
      const calificacionFinal = estudiante.calcularCalificacionFinal();
      if (calificacionFinal >= umbralAprobacion) {
        aprobados.push(estudiante);
      } else {
        reprobados.push(estudiante);
      }
    }

    return { aprobados, reprobados };
  }
}

function ejercicio20() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const umbralAprobacion = parseFloat(prompt("Ingrese el umbral de calificación para aprobar:"));

    if (!isNaN(umbralAprobacion)) {
      const grupo = new GrupoEstudiantesConCalificacionesFinalesYPromedios(porcentajes);

      for (const estudiante of estudiantes) {
        grupo.agregarEstudiante(estudiante);
      }

      const promedioNotas = grupo.calcularPromedioNotas();
      const promedioExamenes = grupo.calcularPromedioExamenes();
      console.log(`Promedio de calificaciones finales: ${promedioNotas.toFixed(2)}`);
      console.log(`Promedio de calificaciones de exámenes: ${promedioExamenes.toFixed(2)}`);

      const { aprobados, reprobados } = grupo.estudiantesAprobadosReprobados(umbralAprobacion);

      console.log("Estudiantes aprobados:");
      for (const estudiante of aprobados) {
        console.log(`${estudiante.nombre}: ${estudiante.calcularCalificacionFinal().toFixed(2)}`);
      }

      console.log("Estudiantes reprobados:");
      for (const estudiante of reprobados) {
        console.log(`${estudiante.nombre}: ${estudiante.calcularCalificacionFinal().toFixed(2)}`);
      }
    } else {
      console.log("Ingrese un umbral de calificación válido.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 21: Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un rango de calificaciones para determinar qué estudiantes están dentro de ese rango.
function estudiantesDentroDeRango(estudiantes, rangoInicio, rangoFin) {
  const estudiantesEnRango = [];

  for (const estudiante of estudiantes) {
    const calificacionFinal = estudiante.calcularCalificacionFinal();
    if (calificacionFinal >= rangoInicio && calificacionFinal <= rangoFin) {
      estudiantesEnRango.push(estudiante);
    }
  }

  return estudiantesEnRango;
}

function ejercicio21() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const rangoInicio = parseFloat(prompt("Ingrese el inicio del rango de calificaciones:"));
    const rangoFin = parseFloat(prompt("Ingrese el fin del rango de calificaciones:"));

    if (!isNaN(rangoInicio) && !isNaN(rangoFin) && rangoInicio <= rangoFin) {
      const grupo = new GrupoEstudiantesConCalificacionesFinalesYPromedios(porcentajes);

      for (const estudiante of estudiantes) {
        grupo.agregarEstudiante(estudiante);
      }

      const estudiantesEnRango = estudiantesDentroDeRango(estudiantes, rangoInicio, rangoFin);

      console.log(`Estudiantes con calificaciones en el rango [${rangoInicio}, ${rangoFin}]:`);
      for (const estudiante of estudiantesEnRango) {
        console.log(`${estudiante.nombre}: ${estudiante.calcularCalificacionFinal().toFixed(2)}`);
      }
    } else {
      console.log("Ingrese un rango de calificaciones válido.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 22: Implementar una función para determinar la cantidad de estudiantes que se encuentran dentro del rango de calificaciones especificado.
function cantidadEstudiantesEnRango(estudiantes, rangoInicio, rangoFin) {
  let count = 0;

  for (const estudiante of estudiantes) {
    const calificacionFinal = estudiante.calcularCalificacionFinal();
    if (calificacionFinal >= rangoInicio && calificacionFinal <= rangoFin) {
      count++;
    }
  }

  return count;
}

function ejercicio22() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const rangoInicio = parseFloat(prompt("Ingrese el inicio del rango de calificaciones:"));
    const rangoFin = parseFloat(prompt("Ingrese el fin del rango de calificaciones:"));

    if (!isNaN(rangoInicio) && !isNaN(rangoFin) && rangoInicio <= rangoFin) {
      const cantidadEnRango = cantidadEstudiantesEnRango(estudiantes, rangoInicio, rangoFin);
      console.log(`Cantidad de estudiantes con calificaciones en el rango [${rangoInicio}, ${rangoFin}]: ${cantidadEnRango}`);
    } else {
      console.log("Ingrese un rango de calificaciones válido.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 23: Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, y determinar la cantidad de estudiantes dentro de un rango de calificaciones.
class GrupoEstudiantesConCalificacionesFinalesYCantidadEnRango extends GrupoEstudiantesConCalificacionesFinalesYPromedios {
  constructor(porcentajes) {
    super(porcentajes);
  }

  cantidadEstudiantesEnRango(rangoInicio, rangoFin) {
    let count = 0;

    for (const estudiante of this.estudiantes) {
      const calificacionFinal = estudiante.calcularCalificacionFinal();
      if (calificacionFinal >= rangoInicio && calificacionFinal <= rangoFin) {
        count++;
      }
    }

    return count;
  }
}

function ejercicio23() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    for (let i = 0; i < 3; i++) {
      const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
      const estudiante = new Estudiante(nombre);

      for (let j = 0; j < 3; j++) {
        const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
        const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

        if (!isNaN(nota)) {
          estudiante.agregarMateria(materia, nota);
        } else {
          console.log(`Ingrese una calificación válida para la materia ${materia}.`);
        }
      }

      const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
      estudiante.examenes = [];

      if (!isNaN(numExamenes)) {
        for (let j = 0; j < numExamenes; j++) {
          const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.examenes.push(nota);
          } else {
            console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
          }
        }

        estudiantes.push(estudiante);
      } else {
        console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
      }
    }

    const rangoInicio = parseFloat(prompt("Ingrese el inicio del rango de calificaciones:"));
    const rangoFin = parseFloat(prompt("Ingrese el fin del rango de calificaciones:"));

    if (!isNaN(rangoInicio) && !isNaN(rangoFin) && rangoInicio <= rangoFin) {
      const grupo = new GrupoEstudiantesConCalificacionesFinalesYCantidadEnRango(porcentajes);

      for (const estudiante of estudiantes) {
        grupo.agregarEstudiante(estudiante);
      }

      const cantidadEnRango = grupo.cantidadEstudiantesEnRango(rangoInicio, rangoFin);
      console.log(`Cantidad de estudiantes con calificaciones en el rango [${rangoInicio}, ${rangoFin}]: ${cantidadEnRango}`);
    } else {
      console.log("Ingrese un rango de calificaciones válido.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 24: Agregar la opción de ingresar el número total de estudiantes y las notas correspondientes de cada materia y examen, así como los porcentajes de ponderación de las notas y los exámenes para calcular la calificación final de cada estudiante. Además, permitir ingresar un número de estudiantes aprobados para determinar si el grupo de estudiantes cumple con ese requisito.
function cumpleRequisitoEstudiantesAprobados(estudiantes, numEstudiantesAprobados) {
  const { aprobados } = estudiantesAprobadosReprobados(estudiantes, 3.5);
  return aprobados.length >= numEstudiantesAprobados;
}

function ejercicio24() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));

    if (!isNaN(numEstudiantes)) {
      for (let i = 0; i < numEstudiantes; i++) {
        const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        const estudiante = new Estudiante(nombre);

        for (let j = 0; j < 3; j++) {
          const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
          const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.agregarMateria(materia, nota);
          } else {
            console.log(`Ingrese una calificación válida para la materia ${materia}.`);
          }
        }

        const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
        estudiante.examenes = [];

        if (!isNaN(numExamenes)) {
          for (let j = 0; j < numExamenes; j++) {
            const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

            if (!isNaN(nota)) {
              estudiante.examenes.push(nota);
            } else {
              console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
            }
          }

          estudiantes.push(estudiante);
        } else {
          console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
        }
      }

      const numEstudiantesAprobados = parseInt(prompt("Ingrese el número de estudiantes aprobados requeridos:"));

      if (!isNaN(numEstudiantesAprobados)) {
        if (cumpleRequisitoEstudiantesAprobados(estudiantes, numEstudiantesAprobados)) {
          console.log(`El grupo cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        } else {
          console.log(`El grupo no cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        }
      } else {
        console.log("Ingrese un número válido de estudiantes aprobados requeridos.");
      }
    } else {
      console.log("Ingrese un número válido de estudiantes.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 25: Implementar una función para determinar si el grupo de estudiantes cumple con el requisito de tener el número especificado de estudiantes aprobados.
function cumpleRequisitoEstudiantesAprobados(estudiantes, numEstudiantesAprobados) {
  const { aprobados } = estudiantesAprobadosReprobados(estudiantes, 3.5);
  return aprobados.length >= numEstudiantesAprobados;
}

function ejercicio25() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));

    if (!isNaN(numEstudiantes)) {
      for (let i = 0; i < numEstudiantes; i++) {
        const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        const estudiante = new Estudiante(nombre);

        for (let j = 0; j < 3; j++) {
          const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
          const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.agregarMateria(materia, nota);
          } else {
            console.log(`Ingrese una calificación válida para la materia ${materia}.`);
          }
        }

        const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
        estudiante.examenes = [];

        if (!isNaN(numExamenes)) {
          for (let j = 0; j < numExamenes; j++) {
            const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

            if (!isNaN(nota)) {
              estudiante.examenes.push(nota);
            } else {
              console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
            }
          }

          estudiantes.push(estudiante);
        } else {
          console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
        }
      }

      const numEstudiantesAprobados = parseInt(prompt("Ingrese el número de estudiantes aprobados requeridos:"));

      if (!isNaN(numEstudiantesAprobados)) {
        if (cumpleRequisitoEstudiantesAprobados(estudiantes, numEstudiantesAprobados)) {
          console.log(`El grupo cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        } else {
          console.log(`El grupo no cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        }
      } else {
        console.log("Ingrese un número válido de estudiantes aprobados requeridos.");
      }
    } else {
      console.log("Ingrese un número válido de estudiantes.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}

// Ejercicio 26: Utilizar clases para gestionar la información de un grupo de estudiantes, calcular las calificaciones finales, y determinar si el grupo cumple con el requisito de estudiantes aprobados.
class GrupoEstudiantesConCalificacionesFinalesYCumpleRequisito extends GrupoEstudiantesConCalificacionesFinalesYPromedios {
  constructor(porcentajes) {
    super(porcentajes);
  }

  cumpleRequisitoEstudiantesAprobados(numEstudiantesAprobados) {
    const { aprobados } = this.estudiantesAprobadosReprobados(3.5);
    return aprobados.length >= numEstudiantesAprobados;
  }
}

function ejercicio26() {
  const porcentajeNotas = parseFloat(prompt("Ingrese el porcentaje de las notas en la calificación final:"));
  const porcentajeExamenes = parseFloat(prompt("Ingrese el porcentaje de los exámenes en la calificación final:"));

  if (!isNaN(porcentajeNotas) && !isNaN(porcentajeExamenes)) {
    const porcentajes = { notas: porcentajeNotas, examenes: porcentajeExamenes };
    const estudiantes = [];

    const numEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));

    if (!isNaN(numEstudiantes)) {
      for (let i = 0; i < numEstudiantes; i++) {
        const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
        const estudiante = new Estudiante(nombre);

        for (let j = 0; j < 3; j++) {
          const materia = prompt(`Ingrese el nombre de la materia ${j + 1} para ${nombre}:`);
          const nota = parseFloat(prompt(`Ingrese la calificación de la materia ${j + 1} para ${nombre}:`));

          if (!isNaN(nota)) {
            estudiante.agregarMateria(materia, nota);
          } else {
            console.log(`Ingrese una calificación válida para la materia ${materia}.`);
          }
        }

        const numExamenes = parseInt(prompt(`Ingrese el número total de exámenes para ${nombre}:`));
        estudiante.examenes = [];

        if (!isNaN(numExamenes)) {
          for (let j = 0; j < numExamenes; j++) {
            const nota = parseFloat(prompt(`Ingrese la calificación del examen ${j + 1} para ${nombre}:`));

            if (!isNaN(nota)) {
              estudiante.examenes.push(nota);
            } else {
              console.log(`Ingrese una calificación válida para el examen ${j + 1}.`);
            }
          }

          estudiantes.push(estudiante);
        } else {
          console.log(`Ingrese un número válido de exámenes para ${nombre}.`);
        }
      }

      const numEstudiantesAprobados = parseInt(prompt("Ingrese el número de estudiantes aprobados requeridos:"));

      if (!isNaN(numEstudiantesAprobados)) {
        const grupo = new GrupoEstudiantesConCalificacionesFinalesYCumpleRequisito(porcentajes);

        for (const estudiante of estudiantes) {
          grupo.agregarEstudiante(estudiante);
        }

        if (grupo.cumpleRequisitoEstudiantesAprobados(numEstudiantesAprobados)) {
          console.log(`El grupo cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        } else {
          console.log(`El grupo no cumple con el requisito de tener al menos ${numEstudiantesAprobados} estudiantes aprobados.`);
        }
      } else {
        console.log("Ingrese un número válido de estudiantes aprobados requeridos.");
      }
    } else {
      console.log("Ingrese un número válido de estudiantes.");
    }
  } else {
    console.log("Ingrese porcentajes válidos.");
  }
}