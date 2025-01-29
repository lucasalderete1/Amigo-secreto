// Array que almacenará los nombres de los amigos
// Array para almacenar los nombres
let listaDeAmigos = [];

// Función para agregar nombres a la lista
function agregarNombre() {
    const entrada = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombre = entrada.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else{
        listaDeAmigos.push(nombre);
    }

    // Crear elemento de lista para el nombre
    const li = document.createElement("li");
    li.textContent = nombre;
    li.className = "list-item";
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    entrada.value = "";
    entrada.focus();
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Limpiar resultados previos
    resultado.innerHTML = "";

    // Validar que haya al menos un nombre en la lista
    if (listaDeAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear. Por favor, agrega nombres.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    const liResultado = document.createElement("li");
    liResultado.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    liResultado.className = "result-item";
    resultado.appendChild(liResultado);
}


