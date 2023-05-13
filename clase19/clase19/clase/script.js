// comentarios de una linea

// console.log("hola mundo");
/* alt + shift + a */
/*
comentarios en 
varias lineas
*/

// variables
// camelCase = estilo de escritura que se le da a las variables

//--Declaracion de variables = var;let;const

// console.log(miVariableLet);
// var miVariable = "hola ";
// let miVariableLet = 1;
// const mivariableConst = 2;
// console.log(miVariableLet);
// console.log(mivariableConst);
// miVariableLet = 3;
// console.log(miVariableLet);
// mivariableConst = 3;
// let miVariableDeTresPalabras = 3 ;
// let function = 4; no se puede
// let function = 5;


// Tipos de datos
/*
Primitivos: son aquellos que representan un único valor
*/

/*Number: representa un valor numérico, incluyendo enteros y números de punto flotante*/
// let edad = 25;
// let precio = 29.99;
// console.log(typeof precio);

// String: representa una cadena de texto, como un nombre o una dirección de correo electrónico
// let nombre = 'Juan "Perez"';
// console.log(typeof nombre);
// let correoElectronico = "juan@example.com";
// console.log(typeof correoElectronico);
// console.log(nombre);



// Boolean: representa un valor verdadero o falso
// let esMayorDeEdad = false;
// let estaActivo = false;
// console.log(esMayorDeEdad);
// console.log(typeof estaActivo);
// console.log(typeof esMayorDeEdad);



// Null: representa la ausencia intencional de cualquier objeto o valor
// let objetoNulo = null;
// console.log(typeof objetoNulo);
// let indefinido;
// console.log(indefinido);

// Objetos:son estructuras de datos más complejas que contienen propiedades y métodos

// Array: representa una lista de elementos, que se pueden acceder y manipular utilizando índices numéricos
// let numeros = [1, 2, 3, 4, 5];
// let colores = ["rojo", "verde", "azul"];
// console.log(typeof numeros);
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
// let resultado = numero1 * numero2;
// console.log(resultado);
// console.log(numero1);
// numero1 ++;
// numero1 = numero1 + 1 ;
// console.log(numero1);

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
// ahorros = ahorros + 3500;
// let suma = ahorros + 3500;
// console.log(suma);
// console.log(ahorros);
// ahorros /= 2 ;
// console.log(ahorros);

// concatenacion
//  + une la segunda cadena a continuacion de la primera

// let cadena1 = "hola ";
// let cadena2 = "mundo";
// let resultadoCadena = cadena1 + cadena2;
// console.log(resultadoCadena);
// console.log(cadena1 + cadena2);
// console.log("hola " + cadena2);

// console.log(numero1 + cadena1);
// console.log(cadena1 + numero1);
// let numero1 = false;
// let numero2 = 2;
// console.log(numero1 + numero2);
// console.log(typeof numero1);
// alert(typeof numero1);
// console.log(typeof(numero1));

// console.log(numero2 + cadena2 + numero1);

// operadores condicionales
// sirven para comparar variables
/*
    == Comprueba si dos valores son iguales
    === igual estricto
    != Comprueba si dos valores son distintos
    > Mayor que, devuelve true si el primer operando es mayor que el segundo
    < Menor que, es true cuando el elemento de la   izquierda es menor que el de la derecha
    >= Mayor igual
    <= Menor igual
*/
// let dinamico = 1;
// console.log(typeof dinamico);
// dinamico = "hola";
// console.log(typeof dinamico);
// let numero = 1;
// console.log(typeof numero);
// numero = "hola";
// console.log(typeof numero);

// console.log("1" === 1);
// console.log(1==1);
// console.log("hola"=="Hola");
// let nombre1 = "martin";
// let nombre2 = "Martin";
// console.log(nombre1 != nombre2);
// console.log("hola"!="Hola");
// console.log( "1" !== 1 );
// console.log( 1 != 1 );

// console.log(1 >= 1);

// operadores logicos (tablas de verdad)
/*
    && AND : se utiliza cuando se deben cumplir ambas condiciones
    || OR : se utiliza cuando se debe cumplir una condicion u otra
    ! NOT(negacion) : se utiliza para negar el valor de una condicion (de true a false;y viceversa)
*/

// let edad = 18;
// let dni = !true;
// let dni = false;
// console.log(dni);

// ejemplo AND
// console.log(edad >=18 && dni == true);

// ejemplo OR
// console.log(edad >=18 || dni == true);

//-----------------------------------------------//

//Prompt y alert

/* El método prompt() en JavaScript es una función que muestra un cuadro de diálogo en el navegador y le permite al usuario ingresar un valor. La función prompt() toma un argumento, que es una cadena de texto que se muestra como mensaje en el cuadro de diálogo.*/
// prompt("mensaje a mostrar");
// let consulta = prompt("mensaje a mostrar");
// console.log(consulta);

// let numero = prompt("ingrese un numero");
// console.log(typeof numero);
// let suma = numero + 20;
// console.log(suma);

/*El método alert() en JavaScript es una función que muestra un cuadro de diálogo en el navegador con un mensaje y un botón "Aceptar"*/

// alert(suma);
// alert(consulta);

// parseInt() parseFloat() typeof
// let numero1 = "123a45a6789";
// numero1 = parseInt(numero1);
// console.log(numero1);
// let numero2 = 2;
// let suma = numero1 + numero2;
// console.log(suma);
// console.log(typeof suma);
// let edad = prompt("indica tu edad");
// alert("tu edad es : " + edad);

// let numero1 = parseInt(prompt("indica el primer numero"));
// let numero2 = parseInt(prompt("indica el segundo numero"));
// let resultado = numero1 + numero2;
// alert("la suma es : " + resultado);
// console.log("la suma es : " + (numero1 + numero2));

// typeof es un operador en JavaScript que se utiliza para determinar el tipo de datos de una variable u objeto

// console.log(typeof numero1);

// parseInt y parseFloat son dos funciones integradas en JavaScript que se utilizan para convertir una cadena de texto en un número entero o decimal

//opcion 1:
// let numero1 = prompt("indica el primer numero");
// let numero2 = prompt("indica el segundo numero");
// let numero1Parseado = parseInt(numero1);
// let numero2Parseado = parseInt(numero2);
// let resultado = numero1 + numero2;
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

//  --if es una estructura de control de flujo que se utiliza en JavaScript (y en muchos otros lenguajes de programación) para tomar decisiones basadas en una condición

// sintaxis:
// if (condicion o condiciones) {
// código a ejecutar si la condición es verdadera
  // }

// let mostrar = true;

// if(mostrar == true){
//     console.log("es verdadero");
//     console.log(typeof mostrar);
// }
// else{
    // console.log("es falso");
    // console.log(typeof mostrar);
// }
// let edad = 17;
// if(edad >= 18){
//   console.log("podes ingresar");
// }
// else{
//   console.log("no podes ingresar");
// }


// const userAdmin = "miguel";
// const passwordAdmin = "miguel123";

// const user = prompt("ingrese el usuario");
// const password = prompt("ingrese password");

// if (user == userAdmin && password == passwordAdmin){
//     alert("bienvenido señor : " + user);
// }
// else{
//     alert("usuario invalido");
// }


// pedir dos numeros y decir cual es el mayor

// let numero1 = prompt("ingresa el primer numero");
// let numero2 = prompt("ingresa el segundo numero");

// if( numero1 > numero2 ){
//     console.log("El número mayor es el: "+numero1)
// }else{
//     console.log("El número mayor es el: "+numero2)
// }

// pedir un numero y decir si es negativo/positivo/cero


// let numero = prompt("ingresa un numero");

// if(numero > 0){
//     console.log("Es un número positivo");
//     alert("es un numero pósitivo");
// }else if(numero < 0){
//     console.log("Es un número negativo");
// }else{
//     console.log("Es el número cero (0)");
// };
// ------------------------------------------------------------------------------------------//

//  --swich
// El condicional switch se utiliza para tomar diferentes acciones dependiendo del valor de una variable

// let diaDeLaSemana = parseInt(prompt("ingrese el numero del dia de la semana..."));

// switch (diaDeLaSemana) {
//   case 1:
//     console.log("Hoy es lunes");
//     break;
//   case 2:
//     console.log("Hoy es martes");
//     break;
//   case 3:
//     console.log("Hoy es miércoles");
//     break;
//   case 4:
//     console.log("Hoy es jueves");    
//     break;
//   case 5:
//     console.log("Hoy es viernes");
//     break;
//   case 6:
//     console.log("Hoy es sábado");
//     break;
//   case 7:
//     console.log("Hoy es domingo");
//     break;
//   default:
//     console.log("Día de la semana no válido");
// };

// console.log("se salio del ciclo");
//-----------------------------------------------------------//

// bucle while
// El bucle while es otra estructura de control de flujo que se utiliza para repetir una acción mientras se cumple una condición.
// La sintaxis general del bucle while es la siguiente:

// while (condición) {
// Acciones a realizar en cada iteración del bucle
// }
// La condición se evalúa al principio de cada iteración del bucle. Si la condición es verdadera, se ejecutan las acciones dentro del bloque del bucle.
// Si la condición es falsa, el bucle se detiene y la ejecución del programa continúa con la siguiente instrucción después del bloque del bucle

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// console.log("termino el ciclo");

// let numero = parseInt(prompt("ingrese un numero para mostrar los impares hasta él"));

// let contador = 1;
// while(contador <= numero){
//     if(contador % 2 != 0){
//         console.log(contador);
//     }
//     contador ++;
// }
//-----------------------------------------------------------//

// Do while
// El bucle do-while es una estructura de control de flujo que se utiliza para repetir una acción al menos una vez y mientras se cumpla una condición
// sintaxis:
// do {
// Acciones a realizar en cada iteración del bucle
//   } while (condición);


// do {
//     tecla = prompt("Teclear letra mágica");
// } while (tecla != 'A');

// alert("Has acertado");

// let opcion = '';
// do{
// opcion = prompt("1.- Escribir\n 2.- Leer\n 3.- Salir\n Escoge una opción:");
// switch(opcion){
//    case '1':
//       alert("Eliges Escribir")
//        break;
//    case '2':
//       alert("Eliges Leer")
//        break;
//     case '3':
//        alert("fin del programa");
//          break;
//    default:
//        alert("debes elegir una de las opciones")
//    }
// }
// while(opcion != '3');
//-----------------------------------------------------------//

// bucle for
// El bucle for es una estructura de control de flujo que se utiliza para repetir una acción un número determinado de veces.
//  La sintaxis general del bucle for es la siguiente:
// for (inicialización; condición; expresión final) {
// Acciones a realizar en cada iteración del bucle
//}

// console.log("imprimimos los numeros del 1-10");
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i);
// imprimimos el valor de i
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// --La inicialización se realiza una vez al inicio del bucle y se utiliza para definir una variable y asignarle un valor inicial.
// --La condición se evalúa al principio de cada iteración del bucle. Si la condición es verdadera, se ejecutan las acciones dentro del bloque del bucle. Si la condición es falsa, el bucle se detiene.

// Imprime la suma de todos los números impares entre 1-100
// let suma = 0;
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 != 0) {
//         suma = suma + i;
//     }
// }
// console.log(suma);

