// alerta.onclick = () => alert('hola mundo!');
const alerta = document.querySelector('#alerta');

function mostrarAlerta() {
    alert('hola mundo!')
}
// pasamos funcion por referencia
alerta.addEventListener('click', mostrarAlerta);

// escruibimos la funcion anonima
const consola = document.querySelector('#consola');

consola.addEventListener('keydown', () => {
    console.log('hola mundo!');
})
consola.addEventListener('click', mostrarAlerta);

// mostrar abajo
const abajoInput = document.querySelector('#abajo-input');
const abajo = document.querySelector('#abajo');
// console.log(abajoInput);

abajoInput.addEventListener('input', () => {
    abajo.innerText = abajoInput.value;
    function hola (){
        console.log('hola')
    }

    hola();
})

// hola();

// boton modo oscuro

const botonColor = document.querySelector('#color-mode');
const body = document.querySelector('body');

function cambiarModo (){
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')){
        botonColor.innerText = 'cambiar a modo claro'
    }else{
        botonColor.innerText = 'cambiar a modo oscuro'
    }
}

botonColor.addEventListener('click',cambiarModo);
botonColor.addEventListener('click',mostrarAlerta);

