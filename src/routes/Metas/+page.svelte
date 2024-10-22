
<main class="bodym">
<header class="Nav">
    <a href="/" class="Logo">Reduce, Reutiliza y Recicla </a>
    <nav class="EN">
        <a href="/inicio">Inicio</a>
            <a href="/Actividades">Actividades</a>
            <a href="/Informacion">Información</a>
            <a href="/Iniciosesion">Iniciar Sesión</a>
            <a href="/Metas">Mis metas</a>
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
    <p>Has acumulado <span id="puntosRecibidos">0</span> puntos.</p> 
</div>
</main>

<style>
    .bodym {
    font-family: 'Arial', sans-serif;
    background-color: #e9f7e8; 
    background-image: url(FONDO\ ACTIVIDADES);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #333;
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
}

header {
    padding: 20px;
    width: 1000px;
    text-align: center;
    background-color: #258d19;
}

header h2 {
    font-size: 36px;
    margin: 0;
    text-align: center;
    padding: 20px;
    color: #fcf8f8;
}



.Logo {
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    padding: 10px;
}

.Logo:hover {
    color: #1e5830;
    transform: scale(1.05);
}

.EN {
    margin: 20px 0;
}

.EN a {
    margin-right: 15px;
    color: #fdfdfd;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s, text-shadow 0.3s;
}

.EN a:hover {
    color: #f2faf5;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.Actividades {
    background: linear-gradient(135deg, #d4f3d4, #b2e0b2); 
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin-top: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.Actividades:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.Actividades ul {
    list-style-type: none;
    padding: 0;
}

.Actividades li {
    margin: 10px 0;
    position: relative;
    padding-left: 20px;
}

.Actividades li::before {
    content: '✓'; 
    position: absolute;
    left: 0;
    color: #2b7a3e;
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
    .gota-agua.rojo {
        background-color: #f44336;
    }
    .gota-agua.amarillo {
        background-color: #ffeb3b;
    }
    .gota-agua.rosado {
        background-color: #ff69b4; 
    }
    .gota-agua.verde {
        background-color: #4CAF50; 
    }
</style>