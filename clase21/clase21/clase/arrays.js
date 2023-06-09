//A. *-- Que es un array? --*
// Un array es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa en el array. En algunas ocasiones también se les suelen llamar arreglos o vectores.
// formas de declararlos:

// 1.Sintaxis literal: La forma más común de declarar un array es utilizando la sintaxis literal de corchetes. En esta forma, se crea un array vacío o se inicializa con elementos separados por comas.
// *Array vacío*
// let array1 = [];
// console.log(array1);
// *Array de números*
// let array2 = [1, 2, 3, 4, 5];
// console.log(array2);
// *Array de strings*
// let array3 = ['hola', 'mundo', 'desde', 'JS'];
// console.log(array3);

// 2.Utilizando la clase Array: JavaScript proporciona la clase Array que se puede utilizar para crear y manipular arrays. Esta clase tiene diferentes métodos para agregar, eliminar y modificar elementos del array.
// *Array vacío*
// let array1 = new Array();
// console.log(array1);

// *Array de números*
// let array2 = new Array(1, 2, 3, 4, 5);
// console.log(array2);

// *Array de strings*
// let array3 = new Array('hola', 'mundo', 'desde', 'JS');
// console.log(array3);

// 3.Utilizando el método split(): El método split() se utiliza para convertir una cadena(string) en un array separando los elementos por un separador.

// *Crear un array a partir de una cadena separada por comas*
// let string1 = 'rojo,verde,azul';
// let array1 = string1.split(',');
// console.log(array1);
// *Crear un array a partir de una cadena separada por espacios*
// let string2 = "hola mundo desde JS";
// let array2 = string2.split(" ");
// console.log(array2);

// Recuerda que en JavaScript, los arrays pueden contener diferentes tipos de datos y pueden crecer o reducir su tamaño dinámicamente.
// let mixto = ["a", 5, true];
// console.log(mixto);

//B. *-- Acceso a elementos del array --*
// Para acceder a los elementos de un array en JavaScript, se utiliza la sintaxis de corchetes [] seguida del índice del elemento que se desea acceder. El índice comienza en 0, es decir, el primer elemento del array tiene un índice de 0, el segundo tiene un índice de 1, y así sucesivamente.

// Array de números
// let numeros = [10, 20, 30, 40, 50];

// Acceder al primer elemento del array
// console.log(numeros[3]);

// Acceder al tercer elemento del array
// console.log(numeros[2]);
// console.log(numeros);


// Array de strings
// let palabras = ['hola', 'mundo', 'desde', 'JS'];

// Acceder al segundo elemento del array
// console.log(palabras[1]);

// Modificar un elemento del array
// palabras[2] = 'programación';
// console.log(palabras);

//C. *-- Propiedades de los arrays --*
// En JavaScript, los arrays son objetos que contienen una lista de elementos, y por lo tanto, pueden tener propiedades y métodos como cualquier otro objeto.
// console.log([]);

//1. *propiedad length*
//  es una propiedad que se encuentra en los arrays, y que indica el número de elementos que hay dentro del mismo. Es decir, length devuelve la longitud del array.

// let numeros = [10, 20, 30, 40, 50];
// console.log(numeros.length);

// --Es útil para recorrer un array con un bucle for, ya que podemos utilizarla como condición de salida
// let numeros = [10, 20, 30, 40, 50];
// console.log(numeros.length);
// for (let i = 0; i <= numeros.length; i++) {
//   console.log(numeros[i]);
// }
// console.log(numeros);
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// 2. *La propiedad toString()*
//  Se utiliza en JavaScript para convertir un array en una cadena de texto. Esta propiedad devuelve una cadena que representa los elementos del array separados por comas.
// const frutas = ["manzana", "naranja", "banana", "mango"];
// const cadenaFrutas = frutas.toString();

// console.log(cadenaFrutas);

// Es importante tener en cuenta que la propiedad toString() no modifica el array original y solo devuelve una cadena de texto que representa al array
// console.log(frutas);

// D. *-- Metodos para manipular arrays --*
// console.log([]);
// Los arrays en JavaScript tienen varios métodos que permiten manipular y transformar su contenido

// 1.push(): Agrega uno o más elementos al final del array.
// let frutas = ['manzana', "pera", "naranja"];
// console.log(frutas);

// frutas.push("plátano", "mango");
// console.log(frutas);

// 2.pop(): Remueve el último elemento del array y lo retorna.
// let frutas = ["manzana", "pera", "naranja"];
// console.log(frutas);
// let ultimaFruta = frutas.pop();
// console.log(frutas);
// console.log(ultimaFruta);
// console.log(frutas.pop());
// frutas.pop();
// console.log(frutas);

// 3.shift(): Remueve el primer elemento del array y lo retorna.
// const frutas = ["manzana", "pera", "naranja"];
// let primeraFruta = frutas.shift();
// console.log(primeraFruta);
// console.log(frutas);
// let frutaPop = frutas.pop();
// console.log(frutaPop);
// frutas.pop("mandarinas")
// console.log(frutas);


// 4.unshift(): Agrega uno o más elementos al principio del array.
// let frutas = ["manzana", "pera", "naranja"];
// frutas.unshift("plátano", "mango");
// console.log(frutas);

// 5.slice(): Retorna una parte del array especificada por los índices de inicio y fin.
// let frutas = ["manzana", "pera", "naranja", "plátano", "mango"];
// console.log(frutas);
// let frutasCortadas = frutas.slice(1,4);
// console.log(frutasCortadas);

// 6.splice(): Agrega o remueve elementos del array en una posición especificada.
// let frutas = ["manzana", "pera", "naranja", "plátano", "mango"];
// frutas.splice(2,0,"limón", "uva");
// console.log(frutas);

// 7.concat(): Retorna un nuevo array que contiene los elementos de dos o más arrays concatenados.
// let frutas1 = ["manzana", "pera", "naranja"];
// let frutas2 = ["plátano", "mango", "limón"];
// let todasLasFrutas = frutas2.concat(frutas1);
// console.log(todasLasFrutas);
// console.log(frutas1);

// 8.reverse(): Invierte el orden de los elementos del array.
// let frutas = ["manzana", "pera", "naranja", "plátano", "mango"];
// frutas.reverse();
// console.log(frutas);

// 9.
// El método forEach se utiliza para ejecutar una función proporcionada una vez para cada elemento del array. El método no devuelve nada y simplemente itera sobre el array
// let array = ["manzana", "banana", "pera"];

// array.forEach(function(elemento){console.log(elemento);});

// similar a:
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 10.
// El método map se utiliza para crear un nuevo array a partir de otro array, aplicando una función a cada uno de sus elementos. La función toma el valor actual del elemento como parámetro y devuelve el valor que se utilizará en el nuevo array

// let array = [1, 2, 3, 4, 5];

// let nuevoArray = array.map(function(elemento) {
//   return elemento * 2;
// });

// console.log(nuevoArray);

// //--DIFERENCIAS MAP()-FOREACH()--//

// La diferencia principal entre los métodos map() y forEach() en JavaScript radica en su comportamiento y en el valor de retorno.

// El método map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original. Es decir, toma cada elemento, aplica la función proporcionada y devuelve un nuevo array con los resultados. El nuevo array tendrá la misma longitud que el array original. Por lo tanto, map() es útil cuando necesitas transformar los elementos del array original en una nueva forma o realizar cálculos basados en ellos.

// Por otro lado, el método forEach() itera sobre cada elemento de un array y ejecuta una función proporcionada para cada uno de ellos. A diferencia de map(), forEach() no crea un nuevo array con los resultados de la función. En su lugar, simplemente realiza una operación en cada elemento del array original. Es útil cuando deseas realizar alguna operación o acción en cada elemento del array, como imprimirlos en la consola o realizar una operación de lado.

// En resumen, la principal diferencia entre map() y forEach() es que map() devuelve un nuevo array con los resultados de la función aplicada a cada elemento, mientras que forEach() no devuelve ningún valor y se utiliza principalmente para iterar y realizar operaciones en cada elemento del array original.

// ejemplo diferencia entre map() y forEach():
// Array de números
// const numeros = [1, 2, 3, 4, 5];

// Utilizando map()
// const resultadoMap = numeros.map((numero) => numero * 2);
// console.log("Resultado de map(): ", resultadoMap); 

// Utilizando forEach()
// const resultadoForEach = [];
// numeros.forEach((numero) => {
//   resultadoForEach.push(numero * 2);
// });
// console.log("Resultado de forEach(): ", resultadoForEach);

// 11.
// El método filter() es otro método útil para manipular arrays en JavaScript. Este método crea un nuevo array con todos los elementos que cumplan una determinada condición, y devuelve este nuevo array
// const numeros = [1, 2, 3, 4, 5];

// Filtramos los números pares
// const numerosPares = numeros.filter(function(numero) {
//   return numero % 2 === 0;
// });

// console.log(numerosPares);

//12.El método reduce() en JavaScript se utiliza para reducir un array a un solo valor aplicando una función acumulativa que se ejecuta en cada elemento del array
// La función acumulativa recibe dos argumentos:
// .el acumulador(que se actualiza en cada iteración)
// .el valor actual del elemento del array.
// El método reduce() devuelve el valor final del acumulador después de que se hayan aplicado todas las funciones acumulativas al array

// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);

// console.log(suma);


// 13.El metodo join() devuelve una cadena de texto que contiene todos los elementos de un array concatenados en orden, separados por un delimitador especificado.
// const miArray = ['manzana', 'naranja', 'plátano'];
// const miCadena = miArray.join(', ');
// console.log(miCadena); 

