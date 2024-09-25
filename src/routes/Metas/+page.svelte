<header class="Nav">
    <a href="#" class="Logo">Reduce, Reutiliza y Recicla </a>
    <nav class="EN">
        <a href="http://127.0.0.1:5500/Inicio.html">Inicio</a>
        <a href="http://127.0.0.1:5500/Actividades.html">Actividades</a>
        <a href="http://127.0.0.1:5500/Informacion.html">Información</a>
        <a href="http://127.0.0.1:5500/Iniciosesion.html">Iniciar Sesión</a>
        <a href="http://127.0.0.1:5500/Resgistro.html">Resgistro</a>
        <a href="http://127.0.0.1:5500/Funcionalidad.html">Mis metas</a>
    </nav>
</header>

<h2 class="H2">Registro de Actividades</h2>
<div class="Actividades">
    <form action="#" method="post" id="registroForm">
        <ul>
            <li><input type="checkbox" id="actividad1" name="actividades[]" value="actividad1"><label for="actividad1">Mete 5 papeles reciclables en tu botella de amor</label></li>
            <li><input type="checkbox" id="actividad2" name="actividades[]" value="actividad2"><label for="actividad2">Cepíllate por la mañana con un solo vaso de agua</label></li>
            <li><input type="checkbox" id="actividad3" name="actividades[]" value="actividad3"><label for="actividad3">Cepíllate en la tarde con un solo vaso de agua</label></li>
            <li><input type="checkbox" id="actividad4" name="actividades[]" value="actividad4"><label for="actividad4">Cepíllate en la noche con un solo vaso de agua</label></li>
            <li><input type="checkbox" id="actividad5" name="actividades[]" value="actividad5"><label for="actividad5">Solo demórate 5 minutos en la ducha</label></li>
            <li><input type="checkbox" id="actividad6" name="actividades[]" value="actividad6"><label for="actividad6">Baja la cisterna del baño tres veces hoy con agua reciclada (agua que utilizas para trapear)</label></li>
            
        </ul>
        
        <input type="submit" value="Enviar">
    </form>
</div>

<div class="Racha" id="statsContainer">
    <p>Días de racha: <span id="diasRacha">0</span></p>
    <p>Número de tareas realizadas: <span id="numTareas">0</span></p>
    <p>Tareas restantes del día: <span id="tareasRestantesDia">0</span></p>
    <p>Tareas restantes de la semana: <span id="tareasRestantesSemana">0</span></p>
</div>

<div class="gota-agua-container">
    <div class="gota-agua gris" id="gotaAgua" data-message="Lléname de color"></div>
</div>

<div id="agradecimiento" style="display: none;">
    <p>MUCHAS GRACIAS POR PARTICIPAR EL DÍA DE HOY. ESPERA TUS TAREAS DE MAÑANA.</p>
</div>


<style>
    body {
    font-family: 'Salsa', cursive;
    background-color: #f0f0f0;
    background-image: url(FONDO\ ACTIVIDADES); /* Cambia 'tu_imagen.jpg' por la ruta de tu imagen */
    background-size: cover;
    background-position: center;
    color: #333; /* Cambiamos el color del texto a un tono más oscuro */
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9); /* Hacemos el contenedor semi-transparente para que se vea la imagen de fondo */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* Estilos para el contenedor del título */
.title-container {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #008CBA;
    border-radius: 10px;
}

/* Estilos para el título */
.title-container h2 {
    color: white;
    font-size: 36px; /* Aumentamos el tamaño de la fuente */
    font-weight: bold; /* Hacemos la fuente más gruesa */
    margin: 0;
}

/* Estilos para el resto del contenido */
.task-list,
.task-item,
.submit-button,
.stats,
.gota-agua-container,
.gota-agua::after {
    font-size: 20px; /* Aumentamos el tamaño de la fuente */
    font-weight: bold; /* Hacemos la fuente más gruesa */
    color: #000000; /* Cambiamos el color del texto a un tono más oscuro */
}

.task-item {
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

/* Estilos para los checkboxes */
.task-checkbox {
    margin-right: 10px;
}

/* Estilos para el botón de enviar */
.submit-button {
    display: block;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #45a049;
}

.Racha {
    text-align: center;
    margin-top: 50px;
    background-color: #ededed;
    border-radius: 20px;
    margin-left: 40px;
    margin-right: 40px;
}

/* Estilos para la gota de agua */
.gota-agua-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.gota-agua {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: background-color 0.5s ease;
    position: relative;
    background-color: #fff;
    border: 2px solid #ddd;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.gota-agua::after {
    content: attr(data-message);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: white;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    white-space: nowrap;
    visibility: hidden;
}

.gota-agua:hover::after {
    visibility: visible;
}
.Nav a {
    font-size: 18px;
    color: #ededed;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px ;
    transition: .3s;
}
.Nav a:hover { 
    color:#258d19;
}
header{
    background-color: #005200;
    height: 70px;
}
.Actividades{
    height: 200px;
    background-color: #ededed;
}
.H2{
    background-color: #ddd;
    text-align: center;
    height: 50px;
}

    .stats {
        margin-top: 20px;
    }
    .gota-agua-container {
        display: flex;
        align-items: center;
    }
    .gota-agua {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: background-color 0.5s ease;
        margin-right: 10px;
        position: relative;
    }
    .gota-agua::after {
        content: attr(data-message);
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        color: white;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        white-space: nowrap;
        visibility: hidden;
    }
    .gota-agua:hover::after {
        visibility: visible;
    }
    .gota-agua.gris {
        background-color: #bbb;
    }
    .gota-agua.azul {
        background-color: #008CBA;
    }
    .gota-agua.rojo {
        background-color: #f44336;
    }
    .gota-agua.verde {
        background-color: #4CAF50;
    }

</style>