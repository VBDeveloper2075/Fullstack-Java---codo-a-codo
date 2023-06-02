// ¿Qué son los objetos?
// En Javascript, existe un tipo de dato llamado objeto .
// Una primera forma de verlo, es como una variable especial que puede contener más variables en su interior. De esta forma, tenemos la posibilidad de organizar múltiples variables de la misma temática en el interior de un objeto.

// En muchos lenguajes de programación, para crear un objeto se utiliza la palabra clave new. En Javascript también se puede hacer:

// const objeto = new Object();
// console.log(objeto);
// Evitar esta sintaxis en Javascript (no se suele usar)

// En Javascript, siempre que podamos, se prefiere utilizar la notación literal, una forma abreviada para crear objetos, sin necesidad de utilizar la palabra new.

// --Declaración de un objeto
// Los literales de los objetos en Javascript son las llaves {}. Este ejemplo es equivalente al anterior, pero es más corto, rápido y cómodo, por lo que se aconseja declararlos siempre así:
// const objeto = {}; 
// console.log(objeto);

// Sin embargo, en esta ocasión hemos creado un objeto con nombre objeto que está vacío.
// Vamos a crear un nuevo objeto llamado persona , que contenga variables con información en su interior:

// const persona ={
//     nombre : "juan",
//     apellido : "lopez",
//     edad : 30
// }
// console.log(persona);

// Estas variables dentro de los objetos se suelen denominar propiedades. Como se puede ver, un objeto en Javascript nos permite encapsular en su interior información relacionada rápidamente, para posteriormente poder acceder a ella de forma sencilla e intuitiva.

// --Propiedades de un objeto
// Una vez tengamos un objeto, podemos acceder a sus propiedades de dos formas diferentes: a través de la notación con puntos o a través de la notación con corchetes.

// console.log(persona["nombre"]);
// console.log(persona["apellido"]);

// console.log(persona.nombre);
// console.log(persona.apellido);
// La más utilizada en Javascript suele ser la notación con puntos

//--Añadir propiedades
// También podemos añadir propiedades al objeto después de haberlo creado, y no sólo en el momento de crear el objeto.
//  Veamos un ejemplo equivalente al anterior donde crearemos las propiedades, pero tras haber creado el objeto:
// const persona = {};

// a travez de la notacion de corchetes
// persona["nombre"] = "juan";
// persona["apellido"] = "lopez";
// persona["edad"] = 30;

//usando la notacion de puntos(recomendada)
// persona.nombre = "juan";
// persona.apellido = "lopez";
// persona.edad = 30;

// console.log(persona);

// --Métodos de un objeto
// Si dentro de una variable del objeto metemos una función (o una variable que contiene una función), tendríamos lo que se denomina un método de un objeto:

// const persona = {
//     nombre : "juan",
//     saludar : function(){
//         return "hola";
//     }
// }

// console.log(persona.saludar());

//--this
// this es una palabra clave en JavaScript que hace referencia al objeto actual en el que se encuentra el código en ejecución.
// En otras palabras, this es una variable que hace referencia al objeto que está siendo ejecutado en ese momento.

// const persona = {
//     nombre: "Juan",
//     saludar: function() {
//         console.log(`Hola, mi nombre es ${this.nombre}`);
//     }
// }

// persona.saludar(); 

//   En este ejemplo, this hace referencia al objeto persona, por lo que this.nombre es igual a "Juan".

// Su valor depende del contexto de ejecución en el que se encuentra.
// EJEMPLO:
// Podemos llamar al método saludar de dos maneras diferentes:

// 1.Llamar directamente al método a través del objeto persona:
// persona.saludar();

// 2.Asignar el método a una variable y luego llamar a la variable:
// const saludarPersona = persona.saludar;
// saludarPersona();

// En este caso, this hace referencia al objeto global de JavaScript (window en el navegador o global en Node.js). Por lo tanto, al ejecutar saludarPersona, se mostrará el mensaje "Hola, mi nombre es undefined", ya que this.nombre no está definido en el objeto global.

// METODOS PARA RECORRER OBJETOS

// 1.El bucle for...of:
//  es una construcción de bucle introducida en ECMAScript 6(ES6) que te permite iterar sobre elementos iterables, como arrays, strings, objetos iterables y otras estructuras de datos.
// La sintaxis del bucle for...of es la siguiente:

// for (variable of iterable) {
// Bloque de código a ejecutar en cada iteración
//   }
// Donde "variable" es una variable que representa cada elemento del iterable; y ""iterable" es una estructura de datos iterable, como un array. 
// El bucle for...of itera sobre cada elemento del iterable, asignando el valor del elemento a la variable especificada en cada iteración. No es necesario acceder a los elementos utilizando índices, lo cual simplifica la escritura y hace el código más legible.
// const numeros = [1, 2, 3, 4, 5];

// for (let numero of numeros) {
//   console.log(numero);
// }

// 2.for...in:
//  El bucle for...in te permite recorrer las propiedades de un objeto.Itera sobre todas las propiedades enumerables del objeto.

// const persona = {
//     nombre: "John",
//     edad: 30,
//     profesion: "Desarrollador"
// };

// for (let propiedad in persona) {
//     console.log(propiedad + ": " + persona[propiedad]);
// }

// 3.Object.keys():
//  El método Object.keys() devuelve un array con los nombres de las propiedades propias enumerables de un objeto. Puedes iterar sobre este array utilizando un bucle for...of. Por ejemplo:
// const persona = {
//     nombre: "John",
//     edad: 30,
//     profesion: "Desarrollador"
// };

// const propiedades = Object.keys(persona);
// console.log(propiedades);

// for (let propiedad of propiedades) {
//     console.log(propiedad + ": " + persona[propiedad]);
// }

// 4.Object.values():
//  El método Object.values() devuelve un array con los valores de las propiedades propias enumerables de un objeto. Puedes iterar sobre este array utilizando un bucle for...of. Por ejemplo:

// const persona = {
//     nombre: "John",
//     edad: 30,
//     profesion: "Desarrollador"
//   };
  
//   const valores = Object.values(persona);
//   console.log(valores);
  
//   for (let valor of valores) {
//     console.log(valor);
//   }
  