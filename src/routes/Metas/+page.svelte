<script>
  import racha from "$lib/images/racha.png"
</script>

<main class="mybody">
	<div class="container">
        <h1>Actividades de Reciclaje</h1>
        <div id="points">Puntos: <span id="pointsCount">0</span></div>
        <ul id="activitiesList">
            <li data-points="10"><input type="checkbox"> Reciclar papel (10 puntos)</li>
            <li data-points="15"><input type="checkbox"> Reciclar plástico (15 puntos)</li>
            <li data-points="20"><input type="checkbox"> Reciclar vidrio (20 puntos)</li>
            <li data-points="25"><input type="checkbox"> Compostar residuos (25 puntos)</li>
        </ul>
        <button id="submitButton">Enviar</button>
    </div>

    <div class="containeracha">
        <h1>Tu Racha Actual</h1>
        <div id="racha" class="racha">0 días </div>
        <div class="fuego"><img src={racha} alt=""></div>

    </div>

    <div id="message" class="message" style="display: none;"></div>
	
</main>

<style>
	.mybody {
    font-family: 'Arial', sans-serif;
    background-image: url(image.png);
    margin: 0;
    padding: 20px;
    color: #333;

}

/* Contenedor principal */
.container {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

/* Título */
h1 {
    text-align: center;
    color: #000000;
    font-size: 250%;
}

/* Lista de actividades */
#activitiesList {
    list-style-type: none;
    padding: 0;
}

#activitiesList li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
}

#activitiesList li:last-child {
    border-bottom: none;
}

input[type="checkbox"] {
    margin-right: 10px;
}

/* Contador de puntos y racha */
#pointsCount, #racha {
    font-size: 1.2em;
    margin: 10px 0;
    text-align: center;
}

/* Botón Enviar */
#submitButton {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    display: block;
    margin: 20px auto;
    transition: background-color 0.3s;
}

#submitButton:hover {
    background-color: #45a049;
}

/* Mensaje */
#message {
    text-align: center;
    background-color: #fcd03f;
    color: #000000;
    border: 1px solid #ff6a06;
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: none; 
    font-size: 1em;
}



.containeracha {
    text-align: center;
    background-color: white;
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;}

.racha {
    font-size: 4em;
    margin: 20px 0;
    color: #ad0d0d;
  background-color:rgb(247, 206, 72);
}


img{
    width: 300px;
    height: 300px;
}

</style>
