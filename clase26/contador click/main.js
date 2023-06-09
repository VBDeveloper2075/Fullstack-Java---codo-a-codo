const parrafo = document.querySelector('#numero');
const btnSumar = document.querySelector('.boton-sumar');
const btnRestar = document.querySelector('.boton-restar');
const btnReset = document.querySelector('.boton-reset');
// console.log(btnSumar);

let contador = 0;

btnSumar.addEventListener("click",()=>{    
    contador++;
    parrafo.innerHTML = contador;
})

btnRestar.addEventListener("click",()=>{    
    contador--;
    parrafo.innerHTML = contador;
})

btnReset.addEventListener("click",()=>{
    contador = 0;
    parrafo.innerHTML = contador;
})