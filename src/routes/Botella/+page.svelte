<main class="bodymin">
<header>
    <h1>COMO HACER TU PROPIA BOTELLA DE AMOR</h1>
</header>

<div class="container">
    <div class="card">
        <p class="step" data-info="Encuentra una botella limpia y vacía. Asegúrate de que esté completamente libre de residuos. Utiliza una botella de vidrio o plástico reciclado, preferentemente transparente para que se vea lo que pongas dentro."><span class="title">Paso 1</span><span class="info">Encuentra una botella limpia y vacía. Asegúrate de que esté completamente libre de residuos. Utiliza una botella de vidrio o plástico reciclado, preferentemente transparente para que se vea lo que pongas dentro.</span></p>
        <p class="step" data-info="Llena la botella con objetos reciclables. Puedes usar papel, cartón, botones, flores secas o cualquier material pequeño que tengas disponible. Lo importante es que el material sea simbólico y significativo para ti."><span class="title">Paso 2</span><span class="info">Llena la botella con objetos reciclables. Puedes usar papel, cartón, botones, flores secas o cualquier material pequeño que tengas disponible. Lo importante es que el material sea simbólico y significativo para ti.</span></p>
        <p class="step" data-info="Decora tu botella con materiales creativos. Usa cintas, pinturas, pegatinas, piedras decorativas o lo que más te guste para personalizarla. Dale tu toque especial para que la botella represente tu amor de una forma única."><span class="title">Paso 3</span><span class="info">Decora tu botella con materiales creativos. Usa cintas, pinturas, pegatinas, piedras decorativas o lo que más te guste para personalizarla. Dale tu toque especial para que la botella represente tu amor de una forma única.</span></p>
    </div>
</div>
</main>

<style>
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos del cuerpo de la página */
.bodymin {
    font-family: Arial, sans-serif;
    background-image: url(image.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Estilo para el encabezado */
header {
    background-color: #388e3c; /* Verde oscuro para el encabezado */
    width: 100%;
    text-align: center;
    padding: 20px;
}

header h1 {
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.1em;
}

/* Contenedor principal para centrar la tarjeta */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%; /* 80% de la altura de la ventana */
    width: 100%;
}

/* Estilo de la tarjeta */
.card {
    width: 600px; /* Aumentamos el ancho del cuadro a 600px */
    height: 350px; /* Mantenemos una altura adecuada para equilibrar el diseño */
    border-radius: 8px;
    background: #4caf50; /* Verde medio para el fondo de la tarjeta */
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1.5em; /* Padding adicional */
}

/* Estilo de los párrafos dentro de la tarjeta */
.card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: all 1.5s ease;  /* Transición más lenta */
    background: #66bb6a; /* Verde claro para los cuadros */
    border: 1px solid #388e3c; /* Verde oscuro para los bordes */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    padding: 1.5em;  /* Espaciado adicional */
    width: 100%; /* Los cuadros ahora ocupan todo el ancho disponible */
}

/* Contenedor de la imagen */


/* Mostrar "Paso X" por defecto */
.card p .title {
    font-size: 1.6rem;
    color: #2e7d32; /* Verde oscuro para el texto de los pasos */
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 1;
    transition: opacity 1.5s ease;  /* Transición más lenta */
}

/* Estilo para la información */
.card p .info {
    font-size: 1.1rem;  /* Aumentamos el tamaño del texto */
    color: white; /* Información en blanco */
    opacity: 0; /* Inicialmente oculta */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    padding: 1em;
    text-align: center;
    transition: opacity 1.5s ease;  /* Transición más lenta */
    overflow-y: auto;  /* Permite desplazarse verticalmente */
    max-height: 80%; /* Limitamos la altura de la información */
}

/* Efecto al pasar el ratón sobre cada párrafo */
.card p:hover .title {
    opacity: 0; /* Ocultamos el texto "Paso X" */
}

.card p:hover .info {
    opacity: 1; /* Mostramos la información */
}
</style>