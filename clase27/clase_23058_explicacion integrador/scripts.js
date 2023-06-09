//definir el valor del ticket
const ticket = 200;

//definir los descuentos
let descuentoEstudiante, descuentoTrainee, descuentoJunior;

descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;

//variables con las que vamos a trabajar

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;

//elementos para calcular

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');

function calcularPago() {

    let total = cantidad.value * ticket;
    //condicionar por descuento
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descuentoEstudiante)
            break;
        case "trainee":
            total = total - (total * descuentoTrainee)
            break;
        case "junior":
            total = total - (total * descuentoJunior)
            break;
    }

    total_p.innerHTML = `Total a Pagar: $ ${total}`;

}

//botones
btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})

btnBorrar.addEventListener('click', () => formulario.reset());

//comprobar ingresos

function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('COMPLETA LOS CAMPOS');
        return
    }
    else if ( nombre == ''){
        alert('ingresa tu nombre')
        return
    }
    else if(apellido == ''){
        alert('ingresa tu apellido')
        return
    }
    else if(correo == ''){
        alert('ingresa tu correo')
        return
    }
    else if(cantidad.value == '' || cantidad.value == 0){
        alert('ingresa la cantidad')
        return
    }

}

