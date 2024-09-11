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