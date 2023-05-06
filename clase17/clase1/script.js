

// Tipos de datos
/*
Primitivos: son aquellos que representan un único valor
*/

/*Number: representa un valor numérico, incluyendo enteros y números de punto flotante*/
// let edad = 25;
// let precio = 29.99;

// String: representa una cadena de texto, como un nombre o una dirección de correo electrónico
// let nombre = "Juan";
// let correoElectronico = "juan@example.com";

// Boolean: representa un valor verdadero o falso
// let esMayorDeEdad = true;
// let estaActivo = false;

// Null: representa la ausencia intencional de cualquier objeto o valor
// let objetoNulo = null;
// console.log(objetoNulo);

// Objetos:son estructuras de datos más complejas que contienen propiedades y métodos

// Array: representa una lista de elementos, que se pueden acceder y manipular utilizando índices numéricos
// let numeros = [1, 2, 3, 4, 5];
// let colores = ["rojo", "verde", "azul"];
// console.log(numeros);
// console.log(colores);

// Object: representa un objeto genérico que puede contener propiedades y métodos
// const persona = {
//     nombre: "Juan",
//     edad: 25,
//     estaCasado: false
// };
// console.log(persona);


//-------------------------------------------------//

// Operadores
/* aritmeticos
    suma +
    resta -
    multiplicacion *
    division /
    resto %
    incremento ++
    decremento --
*/
// let numero1 = 2;
// let numero2 = 2;
// let resultado = numero1 % numero2;
// console.log(resultado);

// operadores de asignacion
/*
    asignacion =
    asignacion con suma +=
    asignacion con resta -=
    asignacion con multiplicacion *=
    asignacion con division /=
    se obtiene resto y se asigna %=
*/
// let ahorros = 7000;
// console.log(ahorros);
// ahorros += 3500;
// console.log(ahorros);
// ahorros /= 2 ;
// console.log(ahorros);

// concatenacion
//  + une la segunda cadena a continuacion de la primera

// cadena1 = "hola "
// cadena2 = "mundo"
// resultadoCadena = cadena1 + cadena2;
// console.log(resultadoCadena);

// console.log(numero1 + cadena1);
// console.log(cadena1 + numero1);
// numero1 = "2";
// numero2 = "2";
// console.log(numero1 + numero2);
// console.log(numero2 + cadena2 + numero1);

// operadores condicionales
// sirven para comparar variables
/*
    == Comprueba si dos valores son iguales
    != Comprueba si dos valores son distintos
    > Mayor que, devuelve true si el primer operando es mayor que el segundo
    < Menor que, es true cuando el elemento de la   izquierda es menor que el de la derecha
    >= Mayor igual
    <= Menor igual
*/

// console.log(1==1);
// console.log(1!=1);
// console.log(1>=1);

// operadores logicos (tablas de verdad)
/*
    && AND : se utiliza cuando se deben cumplir ambas condiciones
    OR || : se utiliza cuando se debe cumplir una condicion u otra
    NOT ! : se utiliza para negar el valor de una condicion (de true a false;y viceversa)
*/

// let edad = 18;
// let dni = true;
// dni = !true;

// ejemplo AND
// console.log(edad >=18 && dni == true);

// ejemplo OR
// console.log(edad >=18 || dni == true);

//-----------------------------------------------//

//Prompt y alert

/* El método prompt() en JavaScript es una función que muestra un cuadro de diálogo en el navegador y le permite al usuario ingresar un valor. La función prompt() toma un argumento, que es una cadena de texto que se muestra como mensaje en el cuadro de diálogo.*/

// let consulta = prompt("mensaje a mostrar");
// console.log(consulta);

/*El método alert() en JavaScript es una función que muestra un cuadro de diálogo en el navegador con un mensaje y un botón "Aceptar"*/

// alert(consulta);

// parseInt() parseFloat() typeof

// let edad = prompt("indica tu edad");
// alert("tu edad es : " + edad);

// let numero1 = prompt("indica el primer numero");
// let numero2 = prompt("indica el segundo numero");
// let resultado = numero1 + numero2;
// let suma = alert("la suma es : " + resultado);

// typeof es un operador en JavaScript que se utiliza para determinar el tipo de datos de una variable u objeto

// console.log(typeof numero1);

// parseInt y parseFloat son dos funciones integradas en JavaScript que se utilizan para convertir una cadena de texto en un número entero o decimal

//opcion 1:
// let numero1 = prompt("indica el primer numero");
// let numero2 = prompt("indica el segundo numero");
// let numero1Parseado = parseInt(numero1);
// let numero2Parseado = parseInt(numero2);
// let resultado = numero1Parseado + numero2Parseado;
// let suma = alert("la suma es : " + resultado);

//opcion 2:
// let numero1 = parseInt(prompt("indica el primer numero"));
// let numero2 = parseInt(prompt("indica el segundo numero"));
// let resultado = numero1 + numero2;
// let suma = alert("la suma es : " + resultado);
// console.log(typeof numero1);
// console.log(typeof numero2);

//--------------------------------------------------------------------//


// Estructuras condicionales
//  if es una estructura de control de flujo que se utiliza en JavaScript (y en muchos otros lenguajes de programación) para tomar decisiones basadas en una condición

// sintaxis:
// if (condicion o condiciones) {
    // código a ejecutar si la condición es verdadera
//   }
  
// let mostrar = true;

// if(mostrar == true){
//     console.log("es verdadero")
//     console.log(typeof mostrar)
// }
// else{
//     console.log("es falso")
// }



// const userAdmin = "miguel";
// const passwordAdmin = "miguel123"

// const user = prompt("ingrese el usuario");
// const password = prompt("ingrese password");

// if (user == userAdmin && password == passwordAdmin){
//     alert("bienvenido señor :" + user);
// }
// else{
//     alert("usuario invalido");
// }
