#Juego Amigo Secreto

![](https://sorteador-de-amigo-secreto-delta.vercel.app/static/media/person.d93575b48916520f8d130f0cb03638d8.svg)

- Desarollar una pagina web que permita ingresar nombres , almacenarlos en una lista , realizar un sorteo con los nombres almacenados en la lista y imprimir el resultado del sorteo en la pagina;

- Utilizaremos HTML5 , JAVASCRIPT Y CSS para realizar la pagina web y las funciones que necesitamos hacer;

**Amigo Secreto(Tabla de Contenido)**

[TOC]

[TOC]


##Características ✨

- Agregar Participantes: Añade amigos a la lista.

- Validar Entrada: Asegura que los nombres ingresados sean válidos, contengan solo letras y espacios, y tengan al menos 3 caracteres.

- Visualizar Lista: Muestra los nombres añadidos.

- Sorteo Aleatorio: Selecciona un nombre al azar.

- Reiniciar Lista: Permite nuevos sorteos.

##Uso de la Aplicación 📖

- Agregar un Nombre: Ingresa el nombre en el campo de texto y haz clic en "Añadir".

- Verificar la Lista: Los nombres aparecerán en la lista.

- Realizar el Sorteo: Haz clic en "Realizar sorteo" para seleccionar un nombre al azar.

- Validar Nombres: Los nombres deben contener solo letras y espacios, y tener al menos 3 caracteres.

- Reiniciar la Lista: Haz clic en "Reiniciar lista" para comenzar un nuevo sorteo.

#### Comandos para clonar repositorio:

```
git clone --recursive https://github.com/lucasalderete1/Amigo-secreto.git

git clone https://github.com/lucasalderete1/Amigo-secreto.git
```

####HTML:
#####head:
```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>
```
#####body:

```
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagen representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite el nombre de sus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
                <button class="button-add" onclick="agregarNombre()">Añadir</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>
```

####CSS:
```
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* Banner */
.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

/* Sección de entrada */
.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

/* Títulos */
.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

/* Contenedores de entrada y botón */
.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

/* Estilos de entrada de texto */
.input-title {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #333;
    border-right: none;
    border-radius: 25px 0 0 25px;
    font-family: "Merriweather", serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilos de botón */
button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

/* Listas */
ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

/* Botón de sortear título */
.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}

```
####javaSCRIPT:

Creo una lista para almacenar los nombres ingresados:
```
let listaDeAmigos = [];
```

------------


Realizo la funcion agregarNombre() para validar si el nombre ingresado es valido , lo almaceno en la lista listaDeAmigos y limpio el input para poder seguir ingresando nombres:



```
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
```

------------


Realizo la funcion sortearAmigo():
```
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
```

------------

Valido si la lista listaDeAmigos no esta vacia, si es que no esta vacia continuo con el sorteo y imprimo en pantalla el resultado
```

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

```
<p>
Autor: Lucas Alderete Covi
</p>


