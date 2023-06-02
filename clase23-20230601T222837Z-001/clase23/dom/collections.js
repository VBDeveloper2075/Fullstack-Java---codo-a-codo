// HTMLCollection es una interfaz en JavaScript que representa una colección ordenada de elementos HTML. Es similar a un array, pero no es un array real, ya que no tiene todos los métodos y propiedades de un array.
// Un HTMLCollection se crea automáticamente cuando se seleccionan elementos HTML utilizando métodos como getElementsByTagName(), getElementsByClassName() o querySelectorAll(). Estos métodos devuelven una colección de elementos que coinciden con el criterio de selección especificado.

// Algunas características importantes de HTMLCollection son:

// 1.Índices numéricos: Los elementos en un HTMLCollection se pueden acceder utilizando índices numéricos, similar a un array. Por ejemplo, coleccion[0] accedería al primer elemento de la colección.

// 2.Longitud: Puedes obtener la cantidad de elementos en un HTMLCollection utilizando la propiedad length. Por ejemplo, coleccion.length devolvería el número total de elementos en la colección.

// 3.Actualización en tiempo real: Si se modifican el DOM y se agregan o eliminan elementos que coinciden con la selección original, el HTMLCollection se actualizará automáticamente para reflejar estos cambios.

// Es importante tener en cuenta que un HTMLCollection no es un array real y, por lo tanto, no tiene todos los métodos y propiedades de un array. Si necesitas utilizar métodos de array como forEach() o map(), es posible que necesites convertir el HTMLCollection a un array utilizando métodos como Array.from() o el operador de propagación ([...coleccion]).

// let item = [...items]
// item.forEach(element => {
//     console.log(element.innerHTML)
// });

// let item = Array.from(items);
// item.forEach(element => {
//     console.log(element.innerHTML)
// });

