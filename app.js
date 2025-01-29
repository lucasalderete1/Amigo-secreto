
let listaDeAmigos = [];

function agregarNombre() {
    const entrada = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombre = entrada.value.trim();


    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else{
        listaDeAmigos.push(nombre);
    }

    const li = document.createElement("li");
    li.textContent = nombre;
    li.className = "list-item";
    listaAmigos.appendChild(li);


    entrada.value = "";
    entrada.focus();
}


function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";


    if (listaDeAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear. Por favor, agrega nombres.");
        return;
    }

 
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    const liResultado = document.createElement("li");
    liResultado.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    liResultado.className = "result-item";
    resultado.appendChild(liResultado);
}


