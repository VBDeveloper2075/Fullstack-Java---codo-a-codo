// Existen algunas situaciones en las que no es posible acceder a las propiedades de un objeto utilizando la notación de punto:

// 1.Cuando el nombre de la propiedad contiene caracteres especiales o espacios: Si el nombre de la propiedad contiene caracteres especiales, como espacios, guiones o signos de puntuación, no se puede acceder a ella utilizando la notación de punto. En su lugar, debes utilizar la notación de corchetes.

// var obj = {
//     "propiedad especial": "valor"
// };

// Error de sintaxis
// console.log(obj.propiedad especial);
// "valor"
// console.log(obj["propiedad especial"]);

// 2.Cuando el nombre de la propiedad es una variable o se genera dinámicamente: Si el nombre de la propiedad es una variable o se genera dinámicamente durante la ejecución del programa, no se puede utilizar la notación de punto. En su lugar, debes utilizar la notación de corchetes y pasar la variable como argumento.

// var prop = "nombre";
// var obj = {
//   nombre: "John",
//   edad: 30
// };

// console.log(obj.prop);
// console.log(obj[prop]);

// 3.Cuando el objeto es null o undefined: Si el objeto es null o undefined, no se puede acceder a ninguna propiedad utilizando la notación de punto. Intentar acceder a las propiedades de un objeto nulo o no definido generará un error.

// var obj = null;
// console.log(obj.prop);

// var obj2;
// console.log(obj2.prop);
