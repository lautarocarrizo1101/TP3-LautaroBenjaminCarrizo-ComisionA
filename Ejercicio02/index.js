const formulario = document.getElementById("formulario");
const inputPalabra = document.getElementById("inputpalabraNew");
const Lista = document.getElementById("lista");
let array = ["Gran Danes", "Dogo", "Pitbull", "Chihuahua"];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    Lista.innerHTML = "";

    const nuevaPalabra = inputPalabra.value;

    array.push(nuevaPalabra);

    array.forEach(function(perros){
        const li = document.createElement("li");
        li.textContent = perros;
        Lista.appendChild(li);
    });
});