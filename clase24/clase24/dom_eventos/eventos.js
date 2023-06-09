// ¿Qué es un evento Javascript?
// Un evento Javascript es una característica especial que ha sucedido en nuestra página y a la cuál le asociamos una funcionalidad, de modo que se ejecute cada vez que suceda dicho evento. Por ejemplo, el evento click se dispara cuando el usuario hace click en un elemento de nuestra página.

// Imaginemos el siguiente código HTML:

//<button>Saludar</button>

// En nuestro navegador nos aparecerá un botón con el texto «Saludar». Sin embargo, si lo pulsamos, no realizará ninguna acción ni tendrá funcionamiento. Para solucionar esto, podemos asociarle un evento:

//<button onClick="alert('Hello!')">Saludar</button>
// En este ejemplo, cuando el usuario haga click con el ratón en el botón Saludar, se disparará el evento click en ese elemento HTML (<button>). Dicho botón, al tener un atributo onClick (cuando hagas click), ejecutará el código que tenemos asociado en el valor del atributo HTML (en este caso un alert()), que no es más que un mensaje emergente con el texto indicado.

// Organizando la funcionalidad
// El valor del atributo onClick llevará la funcionalidad en cuestión que queremos ejecutar cuando se produzca el evento. En nuestro ejemplo anterior, hemos colocado un alert(), pero lo habitual es que necesitemos ejecutar un fragmento de código más extenso, por lo que lo ideal sería meter todo ese código en una función, y en lugar del alert(), ejecutar dicha función:

// function hola() {
//     alert("Hola!");
// }

//<button onClick="hola()">Saludar</button>

// Ahora aparece un nuevo problema que quizás puede que aún no sea muy evidente. En nuestro <button> estamos haciendo referencia a una función llamada hola() que, aparentemente, confiaremos en que se encuentra declarada dentro del fichero eventos.js.

// Esto podría convertirse en un problema, si posteriormente, o dentro de cierto tiempo, nos encontramos modificando código en el fichero eventos.js y le cambiamos el nombre a la función hola(), ya que podríamos olvidar que hay una llamada a una función Javascript en uno (o varios) ficheros .html.

// Por esta razón, suele ser buena práctica no incluir llamadas a funciones Javascript en nuestro código .html, sino que es mejor hacerlo desde el fichero externo .js, localizando los elementos del DOM con un .querySelector() o similar.

// Método .addEventListener()
// Con el método .addEventListener() permite añadir una escucha del evento indicado (primer parámetro), y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro).

// vemos el ejemplo anterior

// const button = document.querySelector("button");
// button.addEventListener("click", function() {
//   alert("Hola!");
// });

// Observa algunas cosas de este ejemplo:

// En el primer parámetro indicamos el nombre del evento, en nuestro ejemplo, click. Con .addEventListener() no se precede con on los nombres de eventos y se escriben en minúsculas, sin camelCase.
// En el segundo parámetro indicamos la función con el código que queremos que se ejecute cuando ocurra el evento.
// Aunque es muy habitual escribir los eventos de esta forma, es posible que veas mucho más organizado este código si sacamos la función y la guardamos en una constante previamente, para luego hacer referencia a ella desde el .addEventListener():

// const button = document.querySelector("button");
// function action() {
//   alert("Hola!");
// };
// button.addEventListener("click", action);

// Si prefieres utilizar las funciones flecha de Javascript, quedaría incluso más legible:

// const button = document.querySelector("button");
// const action = () => alert("Hola!");
// button.addEventListener("click", action);

// Múltiples listeners
// Dicho método .addEventListener() permite asociar múltiples funciones a un mismo evento:

// const button = document.querySelector("button");
// const action = () => alert("Hola!");
// const toggle = () => button.classList.toggle("red");


// button.addEventListener("click", action);
// button.addEventListener("click", toggle);

// Hemos añadido una clase .red de CSS, que coloca el color de fondo del botón en rojo. Además, hemos creado dos funcionalidades:
// -action, que muestra un mensaje de saludo
// -toggle, que añade o quita el color rojo del botón
// Observa que al pulsar el botón se efectuan ambas acciones, ya que hay dos listeners en escucha.

// aclaracion:La función toggle en JavaScript se utiliza para alternar o cambiar una clase CSS en un elemento HTML.
// Cuando se llama a element.classList.toggle(className), se verifica si el elemento tiene la clase className. Si la clase está presente, se eliminará; si no está presente, se agregará. Es decir, la función toggle alterna la presencia o ausencia de una clase en el elemento.

// ALGUNOS EVENTOS Js:
// En el contexto de los eventos en JavaScript, event es un objeto que representa el evento que ha ocurrido, como un clic de mouse, una pulsación de tecla o un envío de formulario. Contiene información y propiedades relacionadas con el evento específico que se produjo.
// El objeto event proporciona métodos y propiedades que permiten acceder a detalles sobre el evento, como el elemento en el que ocurrió el evento, las coordenadas del cursor, el tipo de evento y más.
// Cuando se define una función de manejo de eventos, generalmente se pasa el objeto event como argumento a esa función, para que puedas acceder a sus propiedades y utilizar esa información según sea necesario.

// 1.click: Se activa cuando se hace clic en un elemento.

// document.querySelector("button").addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("¡Se hizo clic en el botón!");
//   });

// 2.submit: Se activa cuando se envía un formulario.

// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que se envíe el formulario
//     console.log("¡Se envió el formulario!");
//});

// 3.keydown: Se activa cuando se presiona una tecla.

// document.addEventListener("keydown", function(event) {
//     console.log("Se presionó la tecla:", event.key);
//   });

// 4.mouseover: Se activa cuando el puntero del mouse se mueve sobre un elemento.

// document.querySelector("button").addEventListener("mouseover", function () {
//     console.log("El mouse está sobre el elemento");
// });

// 5.focus: Se activa cuando un elemento recibe el foco.

// document.querySelector("input").addEventListener("focus", function () {
//     console.log("El elemento ha recibido el foco");
// });
