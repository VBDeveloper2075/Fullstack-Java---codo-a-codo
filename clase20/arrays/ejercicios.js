// ejercicios de ejemplo
// --Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:
// Ingrese nombres: Ada Greta Grace
// ¡Hola Ada!
// ¡Hola Greta!
// ¡Hola Grace!

// let array = [];

// let nombres = prompt("ingrese nombres separados por espacios");
// array = nombres.split(' ');
// for (let i = 0; i < array.length; i++) {
//     console.log("¡hola " + array[i] + "!");  
// }

// --Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
// Ingrese números: 5 7 99 34 54 2 12
// El menor número es: 2

// let array = [];
// let numeros = prompt("ingrese numeros separados por espacios");
// array = numeros.split(' ');

// let bandera = 0;
// let acumulador = 0;

// for (let i = 0; i < array.length; i++) {

//     var aux = parseInt(array[i]);  

//     if(bandera == 0){
//         acumulador = aux;
//         bandera ++;
//     }
//     if (bandera > 0 && aux < acumulador){
//         acumulador = aux;
//     }    
// }
// console.log(acumulador);

// --crea un script que realice un promedio de numeros guardados en un array utilizando foreach().

// const numeros = [5, 7, 2, 10, 3];
// let suma = 0;

// numeros.forEach(function(numero) {
//   suma += numero;
// });

// const promedio = suma / numeros.length;

// console.log("El promedio es: " + promedio);

// --ingresar string a una cadena
// let strings = [];
// let string = '';

// do {
//   string = prompt('Ingrese una palabra (o escriba "fin" para terminar)');
//   if (string !== 'fin' && string !== '') {
//     strings.push(string);
//   }
// } while (string !== 'fin');

// console.log(strings);
// console.log(strings.join(' '));


// --buscar repetidos
// let nums = [34, 25, 6, 89, 5, 6, 7, 34, 7, 99, 6]
// let aux = [];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] === nums[j]) {
//             aux.push(nums[i]);
//         }
//     }
// }
// console.log(aux);

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] === nums[j]) {
//             let count = 0;

//             for (let k = 0; k < aux.length; k++) {
//                 if (aux[k] === nums[i]) {
//                     count++;
//                 }
//             }
//             if(count == 0){
//                 aux.push(nums[i]);
//             }
//         }
//     }
// }
// console.log(aux);

