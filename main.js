// Ejercicio 1 

let datos = prompt("Escoje un numero")

let valor = parseInt(datos)


if(valor % 2 == 0){
    console.log ("El numero es par")
} else {
    console.log("el numero es impar")
}

//Ejercicio 2
let persona = {
    nombre: "Jose",
    apellido: "Barboza",
    edad: 16,
    cedula: "32123456",
    nacionalidad: "Venezolana",
    profesion: "Programador",
    estadoCivil: "Soltero",
    hobbies: ["Nadar", "Correr", "Programar"],
  };
  
  // Evaluar profesion y estado civil
  
  if(persona.profesion == "Programador" && persona.estadoCivil == "Soltero"){
    persona.lenguajeFavorito = "JavaScript"
  }
  
  // Agregar propiedad de nombre completo
  
  persona.nombreCompleto = persona.nombre +  ' ' +persona.apellido;

  // Imprimir resultado

  console.log (persona)
  
// Ejercicio 3

let estudiante = {
   nombre:"edgar",
   edad:18,
   nota1:16,
   nota2:18,
   nota3:15
};

let promedio = (estudiante.nota1 + estudiante.nota2 + estudiante.nota3)/3;

console.log(promedio);

//Estudiante si su promedio es mayor a 10

if(promedio >= 10){
   console.log("estudiantes aprueba")
} else {
    console.log("estudiante no aprueba")}

// Estudiante debe ser mayor a 18

if(estudiante.edad >= 18){
  console.log ("Estudiante es mayor de edad")
} else {
  console.log("Estudiante no es mayor de edad")
}

// El estudiante aprueba si su promedio es mayor a 10 y su edad es mayor a 18

if(promedio>= 10 && estudiante.edad >=18){
  estudiante.aprobado = true
} else {
  estudiante.aprobado = false 
}

console.log(estudiante.aprobado)

//Agregale una propiedad llamada resultadoFinal, que contenga el promedio.

estudiante.resultadoFinal = (estudiante.nota1 + estudiante.nota2 + estudiante.nota3)/3;

//Imprime por consola el objeto 
console.log(estudiante.resultadoFinal)

console.log(estudiante)



