// ¿Qué es el DOM?
// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

// En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// Al estar "amparado" por un lenguaje de programación, todas estas tareas se pueden automatizar, incluso indicando que se realicen cuando el usuario haga acciones determinadas, como por ejemplo: pulsar un botón, mover el ratón, hacer click en una parte del documento, escribir un texto, etc...

// EL OBJETO DOCUMENT
// En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos.
// console.log(document); 

// SELECCIONAR ELEMENTOS DEL DOM
// --//Métodos tradicionales//--
// Estos son los 4 métodos tradicionales de Javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en Javascript desde versiones más antiguas. Dichos métodos te permiten buscar elementos en la página dependiendo de los atributos id, class, name o de la propia etiqueta, respectivamente.

// 1.getElementById()
// El primer método, .getElementById(id) busca un elemento HTML con el id especificado en id por parámetro. En principio, un documento HTML bien construído no debería tener más de un elemento con el mismo id, por lo tanto, este método devolverá siempre un solo elemento:

// const porId = document.getElementById('por_id');
// console.log(porId);

// 2.getElementsByClassName()
// Por otro lado, el método .getElementsByClassName(class) permite buscar los elementos con la clase especificada en class. Es importante darse cuenta del matiz de que el metodo tiene getElements en plural, y esto es porque al devolver clases (al contrario que los id) se pueden repetir, y por lo tanto, devolvernos varios elementos, no sólo uno.

// const items = document.getElementsByClassName("item");
// console.log(items[2].innerHTML);
// console.log(items.length);

// Estos métodos devuelven siempre un "array" con todos los elementos encontrados que encajen con el criterio. En el caso de no encontrar ninguno, devolverán un  vacío: [].

// 3/4.Exactamente igual funcionan los métodos getElementsByName(name) y getElementsByTagName(tag), salvo que se encargan de buscar elementos HTML por su atributo name o por su propia etiqueta de elemento HTML, respectivamente:

// Obtiene todos los elementos con atributo name="saludo"
// const saludo = document.getElementsByName("saludo");

// Obtiene todos los elementos <div> de la página
// const divs = document.getElementsByTagName("div");
// console.log(divs);
// let divs1 = [...divs]
// divs1.forEach(element => {
//     console.log(element.innerHTML)
// });

// METODOS MODERNOS
// Aunque podemos utilizar los métodos tradicionales que acabamos de ver, actualmente tenemos a nuestra disposición dos nuevos métodos de búsqueda de elementos que son mucho más cómodos y prácticos si conocemos y dominamos los selectores CSS. Es el caso de los métodos .querySelector() y .querySelectorAll():

// 1.querySelector()
// devuelve el primer elemento que encuentra que encaja con el selector CSS suministrado.
//  Al igual que su «equivalente» .getElementById(), devuelve un solo elemento y en caso de no coincidir con ninguno, devuelve null:

// const page = document.querySelector("#por_id");
// const info = document.querySelector(".main .info");
// console.log(info);
// console.log(info.outerHTML);
// console.log(info.innerHTML);

// Lo interesante de este método, es que al permitir suministrarle un selector CSS básico o incluso un selector CSS avanzado, se vuelve un sistema mucho más potente.

// El primer ejemplo es equivalente a utilizar un .getElementById(), sólo que en la versión de .querySelector() indicamos por parámetro un selector y en el primero le pasamos un simple string. Observa que estamos indicando un # porque se trata de un id.

// En el segundo ejemplo, estamos recuperando el primer elemento con clase info que se encuentre dentro de otro elemento con clase main.

// 2.querySelectorAll()
// Por otro lado, el método .querySelectorAll() realiza una búsqueda de elementos como lo hace el anterior, sólo que como podremos intuir por ese All(), devuelve un array  con todos los elementos que coinciden con el selector CSS:

// Obtiene todos los elementos con clase "info"
// const infos = document.querySelectorAll(".info");
// console.log(infos)
// Obtiene todos los elementos <div> de la página HTML
// const divs = document.querySelectorAll("div");
// console.log(divs);
// Obtiene todos los elementos con atributo name="saludo"
// const saludo = document.querySelectorAll('[name="saludo"]');

// console.log(infos);
// console.log(divs);
// console.log(saludo[0].innerHTML);
// divs.forEach(elemento => console.log(elemento.textContent));

// CREAR ELEMENTOS HTML
// El método createElement()
// Mediante el método .createElement() podemos crear un elemento HTML en memoria (¡no estará insertado aún en nuestro documento HTML!).
//  Con dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.

// Vamos a centrarnos en el proceso de creación del elemento.Mas adelante veremos de insertarlo en el DOM. El funcionamiento de .createElement() es muy sencillo: se trata de pasarle el nombre de la etiqueta tag a utilizar.

// Creamos un <div></div>
// const div = document.createElement("div");
// console.log(div)
// Creamos un <span></span>
// const span = document.createElement("span");
// Creamos un <img>
// const img = document.createElement("img");    

// El método cloneNode()

// Hay que tener mucho cuidado al crear y duplicar elementos HTML. Un error muy común es asignar un elemento que tenemos en otra variable, pensando que estamos creando una copia (cuando no es así):

// const div = document.querySelector('div');
// console.log(div); 
// const div = document.createElement("div");
// div.textContent = "Elemento 1";

// NO se está haciendo una copia
// const div2 = div;  
// div2.textContent = "Elemento 2";
// console.log(div.textContent);


// Con esto, quizás pueda parecer que estamos duplicando un elemento para crearlo a imagen y semejanza del original. Sin embargo, lo que se hace es una referencia al elemento original, de modo que si se modifica el div2, también se modifica el elemento original. Para evitar esto, lo ideal es utilizar el método cloneNode():

const div = document.createElement("div");
div.textContent = "Elemento 1";

// Ahora SÍ estamos clonando
const div2 = div.cloneNode();
div2.textContent = "Elemento 2";
// console.log(div.textContent);
// console.log(div2.textContent);

// --Aquí tienes un ejemplo de uso del método cloneNode()
// Obtener el elemento original
// const elementoOriginal = document.getElementById('por_id');

// Clonar el elemento
// const elementoClonado = elementoOriginal.cloneNode(true);

// Agregar el elemento clonado al DOM
// const contenedor = document.querySelector('#por_id');
// contenedor.innerHTML = 'tomado por id 2'
// contenedor.appendChild(elementoClonado);

// El método cloneNode() es útil cuando necesitas crear copias de elementos existentes en el DOM, ya sea para reutilizarlos o para manipularlos de manera independiente.

// INSERTAR ELEMENTOS EN EL DOM
// vamos a centrarnos en tres categorías:

// Reemplazar contenido de elementos en el DOM
// Insertar elementos en el DOM
// Eliminar elementos del DOM

// --Reemplazar contenido

// La propiedad textContent
// La propiedad .textContent nos devuelve el contenido de texto de un elemento HTML. Es útil para obtener (o modificar) sólo el texto dentro de un elemento, obviando el etiquetado HTML:

// const div = document.querySelector("div");
// div.textContent = "Hola a todos";
// console.log(div.textContent);

// La propiedad innerHTML
// Por otro lado, la propiedad .innerHTML nos permite hacer lo mismo, pero interpretando el código HTML indicado y renderizando sus elementos:

// const div = document.querySelector(".info");

// div.innerHTML = '<strong>Importante</strong>';
// div.innerHTML;   

// div.textContent = "<strong>Importante</strong>";

// Observa que la diferencia principal entre .innerHTML y .textContent es que el primero renderiza e interpreta el marcado HTML, mientras que el segundo lo inserta como contenido de texto literalmente.

// --Insertar elementos

// El método appendChild()
// Uno de los métodos más comunes para añadir un elemento HTML creado con Javascript es appendChild(). Como su propio nombre indica, este método realiza un «append», es decir, inserta el elemento como un hijo al final de todos los elementos hijos que existan.

// Es importante tener clara esta particularidad, porque aunque es lo más común, no siempre querremos insertar el elemento en esa posición:

// const img = document.createElement("img");
// img.src = "js.png";
// img.alt = "Logo Javascript";
// document.body.appendChild(img);

// const div = document.createElement("div");
// div.textContent = "Esto es un div insertado con JS.";

// const app = document.createElement("div");
// app.id = "app";
// document.body.appendChild(app);
// app.appendChild(div);

// --Los métodos insertAdjacent()
// Los métodos de la familia insertAdjacent son bastante más versátiles que .appendChild(), ya que permiten muchas más posibilidades. Tenemos tres versiones diferentes:

// .insertAdjacentElement() donde insertamos un objeto 
// .insertAdjacentHTML() donde insertamos código HTML directamente (similar a innerHTML)
// .insertAdjacentText() donde no insertamos elementos HTML, sino texto

// En las tres versiones, debemos indicar por parámetro un  'string' como primer parámetro para indicar en que posición vamos a insertar el contenido. Hay 4 opciones posibles:

// beforebegin: El elemento se inserta antes de la etiqueta HTML de apertura.
// afterbegin: El elemento se inserta dentro de la etiqueta HTML, antes de su primer hijo.
// beforeend: El elemento se inserta dentro de la etiqueta HTML, después de su último hijo. Es el equivalente a usar el método .appendChild().
// afterend: El elemento se inserta después de la etiqueta HTML de cierre.

// Veamos algunos ejemplo aplicando cada uno de ellos con el método .insertAdjacentElement():

// const div = document.createElement("div");
// div.textContent = "Ejemplo";
// const app = document.querySelector("#ultimo");

// app.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="app">ultimo div</div>

// app.insertAdjacentElement("afterbegin", div);
// Opción 2: <div id="ultimo"> <div>Ejemplo</div> ultimo div</div>

// app.insertAdjacentElement("beforeend", div);
// Opción 3: <div id="ultimo">ultimo div <div>Ejemplo</div> </div>

// app.insertAdjacentElement("afterend", div);
// Opción 4: <div id="ultimo">ultimo div</div> <div>Ejemplo</div>

// Por otro lado, notar que tenemos tres versiones en esta familia de métodos, una que actua sobre elementos HTML (la que hemos visto), pero otras dos que actuan sobre código HTML y sobre nodos de texto. Veamos un ejemplo de cada una:

// app.insertAdjacentElement("beforebegin", div);
// Opción 1: <div>Ejemplo</div> <div id="ultimo">ultimo div</div>

// app.insertAdjacentHTML("beforebegin", '<div>Hola</div>');
// Opción 2: <p>Hola</p> <div id="ultimo">ultimo div</div>

// app.insertAdjacentText("beforebegin", "Hola a todos");
// Opción 3: Hola a todos <div id="ultimo">ultimo div</div>

// Eliminar elementos
// Al igual que podemos insertar o reemplazar elementos, también podemos eliminarlos. Ten en cuenta que al «eliminar» un nodo o elemento HTML, lo que hacemos realmente no es borrarlo, sino desconectarlo del DOM o documento HTML, de modo que no están conectados, pero siguen existiendo.

// const div = document.querySelector(".borrar");

// console.log(div.isConnected);
// div.remove();
// console.log(div.isConnected);

// El método removeChild()
// En algunos casos, nos puede interesar eliminar un nodo hijo de un elemento. Para esas situaciones, podemos utilizar el método .removeChild(node) donde node es el nodo hijo que queremos eliminar:

// <div class="main">info 1</div>
// const elementoPadre = document.querySelector('.main')
// const elemento1 = document.querySelector(".info:nth-child(1)");
// console.log(elemento1)
// elementoPadre.removeChild(elemento1);

// El método replaceChild()
// De la misma forma, el método replaceChild(new, old) nos permite cambiar un nodo hijo old por un nuevo nodo hijo new. En ambos casos, el método nos devuelve el nodo reemplazado:

// const elementoPadre = document.querySelector('.main');
// const anterior = document.querySelector(".info:nth-child(1)");

// const nuevo = document.createElement("div");
// nuevo.textContent = "DOS";

// elementoPadre.replaceChild(nuevo, anterior);