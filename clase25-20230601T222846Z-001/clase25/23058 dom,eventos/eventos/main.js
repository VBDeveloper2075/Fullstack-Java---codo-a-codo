const abajoInput = document.querySelector('#abajo-input');
const abajo = document.querySelector('#abajo');

abajoInput.addEventListener('input',()=>{
    abajo.innerHTML = abajoInput.value;
})