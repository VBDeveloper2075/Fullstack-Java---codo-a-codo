
// ****** VARIABLES ***********

//evenlistener para detectar cuando hacen click en Button Resumen
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

//evenlistener para detectar cuando hacen click en el Button Borrar
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

//evenlistener para detectar cuando hacen click en el input Cantidad
let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

//evenlistener para detectar cuando hacen click en el input Categoria
let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);


//eventlistener para detectar click en los div estudiante/trainee/junior
let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);




// ******* FUNCION TICKETSPRICE *****************
function ticketsPrice(evento) {
    console.log(evento);
    //Usamos preventDefault() para que no se refresque el formulario
    evento.preventDefault();

    //leemos el valor del input cantidad
    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
        let spanNode = document.createElement("span");
        spanNode.className = 'ticketsBuy';
        let textNode = document.createTextNode("Comprar");
        spanNode.append(textNode);
        outputNode.append(spanNode);

        //eventlistener para detectar click en el span ticketsBuy
        let ticketsBuy = document.querySelector(".ticketsBuy");
        ticketsBuy.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".ticketsQuantity").style.border = "2px solid red";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }

}

// ******* FUNCION BORRAROUTPUT *****************
function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}


// ******* FUNCION APDATECATEGORY *****************
function updateCategory(evento) {
    // console.log(document.querySelector(".ticketsCategory"));
    let categoria = evento.target.parentNode.className;

    switch (categoria) {
        case "estudiante": {
            console.log("es estudiante");
            document.querySelector(".ticketsCategory").options.selectedIndex = 0;
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "trainee": {
            console.log("es trainee");
            document.querySelector(".ticketsCategory").options.selectedIndex = 1;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "junior": {
            console.log("es junior");
            document.querySelector(".ticketsCategory").options.selectedIndex = 2;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}


// ******* FUNCION TICKETSSUBMIT *****************
function ticketsSubmit() {

    let form = document.querySelector(".ticketsForm");
console.log(form);
    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.querySelector("." + form[i].className).style.border = "2px solid red";
            } else {
                document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
            }
        }


        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.querySelector("." + form[2].className).style.border = "1px solid var(--gray-300)";
            } else {
                alert("Debe ingresar un correo válido");
                document.querySelector("." + form[2].className).style.border = "2px solid red"
            }
        } else {
            alert("Completar los campos en rojo");
        }

    }
}

// ******* FUNCION CELARINPUT *****************
function clearInput(evento) {
    // console.log(evento.target.className);
    document.querySelector("." + evento.target.className).style.border = "1px solid var(--gray-300)";
}

// ******* FUNCION DESCUENTO *****************
function descuento(evento) {
    // console.log(typeof(evento.target.value));
    switch (evento.target.value) {
        case "Estudiante": {
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Trainee": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Junior": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}

