// const contenido = document.getElementById('contenido');
// const parrafos = document.getElementsByClassName('parrafo');
// console.log(parrafos);

const contenido = document.querySelector('#contenido');
const parrafos = document.querySelectorAll('.parrafo');
// console.log(parrafos[1].innerHTML);
// parrafos.forEach(parrafo => console.log(parrafo));

// parrafos[0].innerHTML = 'hola mundo!'

// console.log(contenido.className);
// contenido.classList.add('prueba2');
// contenido.classList.remove('contenido');

// AGREGAMOS ELEMENTOS QUE NO EXISTEN
let lista = document.createElement('ul');
lista.classList.add('lista');

let nombre = prompt('ingresa nombre');
lista.innerText = `<li class="lista-item">${nombre}</li>`

contenido.append(lista);