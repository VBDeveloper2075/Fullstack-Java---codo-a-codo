// tipo de dato :
// console.log(typeof function(){});

//¿Que es una funcion?
// Las funciones nos permiten agrupar líneas de código en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer 2 cosas:

// *-Declarar la función: Preparar la función, darle un nombre y decirle las tareas que realizará.
// *-Ejecutar la función: «Llamar» a la función para que realice las tareas de su contenido.

// DECLARACION
// En el siguiente ejemplo veremos la declaración de una función llamada "saludar":

// function saludar(){
//     console.log("hola,soy una funcion");
// }

// El contenido de la función es una línea que mostrará por consola un saludo. Sin embargo, si escribimos estas 4-5 líneas de código en nuestro programa, no mostrará nada por pantalla. Esto ocurre así porque solo hemos declarado la función (le hemos dicho que existe), pero aún nos falta el segundo paso, ejecutarla, que es realmente cuando se realizan las tareas de su contenido.

// EJECUCION

//declaracion de la funcion
// function saludar(){
//     console.log("hola,soy una funcion");
// }

//ejecucion de la funcion
// saludar();

// En este ejemplo hemos declarado la función y además, hemos ejecutado la función llamándola por su nombre y seguida de ambos paréntesis, que nos indican que es una función. En este ejemplo, si se nos mostraría en la consola Javascript el mensaje de saludo.

// -- Ejemplo tabla del 1
// for (let i = 0; i < 11; i++) {
//     console.log("1 X " + i + " = " + (1 * i));
// }

// Imaginemos que ahora nuestro objetivo es mostrar la tabla de multiplicar del 1 varias veces

// function tablaDeUno(){
//     for (let i = 0; i < 11; i++) {
//         console.log("1 X " + i + " = " + (1 * i));
//     }
// }

// tablaDeUno();
// tablaDeUno();
// tablaDeUno();


// for (let i = 0; i < 100; i++) {
//     tablaDeUno();  
// }

// -- ¿QUE SON LOS PARAMETROS? --//
// A las funciones se les pueden pasar parámetros, que no son más que variables que existirán sólo dentro de dicha función, con el valor pasado desde la ejecución.

// function tablaDeUno(hasta){
//     for (let i = 0; i <= hasta; i++) {
//       console.log("1 X " + i + " = " + (1 * i));
//     }
// }

//ejecucion
// tablaDeUno(10);
// tablaDeUno(5);
// tablaDeUno(3);

// La idea de las funciones es enfocarnos en el código de la declaración, y una vez lo tengamos funcionando, nos podemos olvidar de él porque está encapsulado dentro de la función. Simplemente tendremos que recordar el nombre de la función y los parámetros que hay que pasarle. Esto hace que sea mucho más fácil trabajar con el código.

// PARAMETROS MULTIPLES
// una función de Javascript puede tener muchos más parámetros

function tablaDeMultiplicar(tabla, hasta) {
    for (let i = 0; i <= hasta; i++) {
        console.log(tabla + " X " + i + " = " + (tabla * i));
    }
}
// tablaDeMultiplicar(2,5);
// tablaDeMultiplicar(3,10);
// tablaDeMultiplicar(9,13);

// Esta función necesita que le pasemos dos parámetros: tabla (la tabla de multiplicar en cuestión) y hasta (el número hasta donde llegará la tabla de multiplicar)

// PARAMETROS POR DEFECTO
// Es posible que en algunos casos queramos que ciertos parámetros tengan un valor sin necesidad de escribirlos en la ejecución. Es lo que se llama un valor por defecto.

// function tablaDeMultiplicar(tabla, hasta = 10) {
//     for (let i = 0; i <= hasta; i++) {
//         console.log(tabla + " X " + i + " = " + (tabla * i));
//     }
// }


// var numero = parseInt(prompt("ingrese la tabla"));
// var hasta = parseInt(prompt("ingrese la tabla hasta"));
// tablaDeMultiplicar(numero,hasta);
// tablaDeMultiplicar(undefined,15);
// esta tabla llega hasta el numero 10
// tablaDeMultiplicar(2);
// esta tabla llega hasta el numero 15
// tablaDeMultiplicar(2,15);


// DEVOLUCION DE VALORES
// Hasta ahora hemos utilizado funciones simples que realizan acciones o tareas,pero habitualmente, lo que buscamos es que esa función realice una tarea y nos devuelva la información al exterior de la función.
// Para ello, se utiliza la palabra clave return, que suele colocarse al final de la función, ya que con dicha devolución terminamos la ejecución de la función (si existe código después, nunca será ejecutado).

// function sumar (a,b){
//     return a + b;
//     console.log(a);
// }
// let resultado = sumar(5,10);
// console.log(resultado);
// console.log(sumar(10,20));
// sumar(5,5);


// devuelve true si un numero es impar

// function impar(numero){ 
     
//     if(numero % 2 == 0) return false;
//     else return true;      
// }

// console.log(impar(3));

// FUNCIONES ANONIMAS
// Una función anónima es una función sin un nombre explícito en la definición. En su lugar, se crea una función y se asigna a una variable o se pasa como argumento a otra función.

// let saludo = function (nombre){
//     return "¡Hola " + nombre + "!";
// }

// console.log(saludo("juan"));



// funciones flecha
// La sintaxis de función flecha proporciona una forma más breve y concisa de definir funciones anónimas en comparación con la sintaxis de función convencional.

// const doble = numero => numero * 2;
// console.log(doble(5));

// const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

// const area = calcularAreaTriangulo(10, 5);
// console.log(area);

//CALLBACKS
// Un callback es una función que se pasa como argumento a otra función y que se ejecuta dentro de esa función.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach(function(num) {
  doubledNumbers.push(num * 2);
});

console.log(doubledNumbers); 

// Permiten que el código sea más flexible y modular, ya que una función puede ser reutilizada en diferentes contextos al pasar diferentes funciones de callback como argumentos.

// function saludar(nombre, callback) {
//     const mensaje = `¡Hola, ${nombre}!`;
//     callback(mensaje);
// }

// function imprimirMensaje(mensaje) {
//     console.log(mensaje);
// }

// let nombre = prompt("ingresa tu nombre");
// saludar(nombre, imprimirMensaje);

// HOISTING
// El hoisting en funciones es un comportamiento en JavaScript donde las declaraciones de funciones se mueven al inicio del ámbito en el que están definidas, lo que permite utilizarlas antes de su declaración en el código.
// Esto significa que puedes llamar a una función antes de que aparezca en el código, y JavaScript moverá automáticamente la declaración de la función al principio del ámbito, lo que permite que la función se ejecute correctamente.

// saludar();

// function saludar() {
//   console.log("¡Hola!");
// }

// Sin embargo, es importante destacar que solo las declaraciones de funciones se ven afectadas por el hoisting, no las asignaciones de funciones a variables.
// Cuando asignas una función a una variable, el hoisting no se aplica de la misma manera que con las declaraciones de funciones. En lugar de eso, se aplica el hoisting a la variable, pero la asignación de la función permanece en el lugar donde se realiza.

// saludar();

// var saludar = function() {
//   console.log("¡Hola!");
// };
