const formulario = document.getElementById("formulario");
const operacion = document.getElementById("operaciones");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");
let resultado;

function ValidarBoton() {
    const seleccion = operacion.value;
    const num2 = parseFloat(numero2.value);

    if(seleccion === "division" && num2 === 0){
        boton.disabled = true;
    }else{
        boton.disabled = false;
    }
}

numero2.addEventListener("input", ValidarBoton);

operacion.addEventListener("change", ValidarBoton);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);

    const seleccion = operacion.value;


    if(num2 === 0 && seleccion === "divicion"){
        boton.disabled = true;
        resultado = "Opcion invalida, por favor refresque la pagina";
        mensaje.textContent = `${resultado}`;
        return;
    }

    if(isNaN(num1) || isNaN(num2)){
        mensaje.textContent = "Por favor introduzca numeros para trabajar";
        return;
    }

    switch(seleccion){
        case "suma": 
        resultado = num1 + num2;
        break;
        case "resta": 
        resultado = num1 - num2;
        break;
        case "multi": 
        resultado = num1 * num2;
        break;
        case "divicion": 
        resultado = num1 / num2;
        break;
        default: 
        resultado = "Operacion no reconocida.";
        break;
    }
    
    mensaje.textContent = `${resultado}`;
});

ValidarBoton();