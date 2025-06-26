const todasTareas = "https://jsonplaceholder.typicode.com/todos?_limit=5";
const error = document.getElementById("mensaje-error");
const lista = document.getElementById("tareasCompletadas");
const boton = document.getElementById("fetch-completadas");
const cargando = document.getElementById("cargando");

boton.addEventListener("click", async () =>{
    lista.innerHTML = "";
    error.textContent = "";
    cargando.style.display = "block";

    const respuesta = await fetch(todasTareas);

    cargando.style.display = "none";

    if(!respuesta.ok){
        error.textContent = `ERROR DETECTADO: ${respuesta.status} - ${respuesta.statusText}`;
        return;
    }

    const data = await respuesta.json();

    if(data && data.length > 0){
        const tareasCompletadas = data.filter(function(tarea){
            return tarea.completed === true;
        });

        if(tareasCompletadas.length > 0){
            tareasCompletadas.forEach(tarea => {
                const elementos = document.createElement("li");
                elementos.classList.add("todo-item.completed");
                elementos.innerHTML = `
                <p><strong>ID:</strong> ${tarea.id}</p>
                <p><strong>Titulo:</strong> ${tarea.title}</p>
                `;
                lista.appendChild(elementos);
            });
        }else{
            lista.innerHTML = "<p>No hay tareas completadas.</p>";
        }
    }else{
        lista.innerHTML = "<p>No hay tareas disponibles.</p>";
    }
});
