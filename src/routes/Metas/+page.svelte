<script>
   
</script>

<main class="mybody">

	<h2 class="H2">Registro de Actividades</h2>
	<div class="container">
		<div class="Actividades">
			<form action="/" method="post" id="registroForm">
				<ul>
					<li>
						<input type="checkbox" id="actividad1" name="actividades[]" value="actividad1" /><label
							for="actividad1">Mete 5 papeles reciclables en tu botella de amor</label
						>
					</li>
					<li>
						<input type="checkbox" id="actividad2" name="actividades[]" value="actividad2" /><label
							for="actividad2">Cepíllate por la mañana con un solo vaso de agua</label
						>
					</li>
					<li>
						<input type="checkbox" id="actividad3" name="actividades[]" value="actividad3" /><label
							for="actividad3">Cepíllate en la tarde con un solo vaso de agua</label
						>
					</li>
					<li>
						<input type="checkbox" id="actividad4" name="actividades[]" value="actividad4" /><label
							for="actividad4">Cepíllate en la noche con un solo vaso de agua</label
						>
					</li>
					<li>
						<input type="checkbox" id="actividad5" name="actividades[]" value="actividad5" /><label
							for="actividad5">Solo demórate 5 minutos en la ducha</label
						>
					</li>
					<li>
						<input type="checkbox" id="actividad6" name="actividades[]" value="actividad6" /><label
							for="actividad6"
							>Baja la cisterna del baño tres veces hoy con agua reciclada (agua que utilizas para
							trapear)</label
						>
					</li>
				</ul>
				<input type="submit" value="Enviar" />
			</form>
		</div>

		<div class="Racha" id="statsContainer">
			<p>Días de racha: <span id="diasRacha">0</span></p>
			<p>Número de tareas realizadas: <span id="numTareas">0</span></p>
			<p>Tareas restantes del día: <span id="tareasRestantesDia">0</span></p>
			<p>Por cada tarea te daremos 20 puntos. <br /> No te rindas.</p>
		</div>

		<div class="gota-agua-container">
			<div class="gota-agua gris" id="gotaAgua" data-message="Lléname de color"></div>
		</div>
	</div>

	<div id="agradecimiento" style="display: none;">
		<p>MUCHAS GRACIAS POR PARTICIPAR EL DÍA DE HOY. ESPERA TUS TAREAS DE MAÑANA.</p>
		<p>Has acumulado <span id="puntosRecibidos">0</span> puntos.</p>
	</div>
</main>

<style>
	.Logo {
		font-size: 24px;
		color: #18703d;
		font-weight: bold;
		text-decoration: none;
		transition:
			color 0.3s,
			transform 0.3s;
		padding: 10px;
		background-color: #c8e6c9;
		text-align: center;
		border-radius: 5px;
	}

	.Logo:hover {
		color: #000000;
		transform: scale(1.05);
	}

	.EN {
		margin: 20px 0;
	}

	.EN a {
		margin-right: 15px;
		color: #000000;
		text-decoration: none;
		font-weight: bold;
		transition:
			color 0.3s,
			text-shadow 0.3s;
		background-color: #a5d6a7;
	}

	.EN a:hover {
		color: #0b6b23;
		text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	}

	.Actividades {
		background: linear-gradient(135deg, #a5d6a7, #388e3c);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		width: 300px;
		margin-top: 20px;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.Actividades:hover {
		transform: scale(1.05);
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
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
		color: #000000;
	}

	.Racha {
		background-color: #ffffff;
		border-radius: 20px;
		padding: 20px;
		height: 200px;
	}

	.container {
		display: flex;
		gap: 100px;
	}

	input[type='checkbox'] {
		margin-right: 10px;
	}

	input[type='submit'] {
		background-color: #101c50;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.3s;
	}

	input[type='submit']:hover {
		background-color: #105c23;
		transform: scale(1.05);
	}

	.gota-agua-container {
		display: flex;
		align-items: center;
		margin-top: 20px;
	}
	.gota-agua {
		width: 200px;
		height: 200px;
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
		background-color: #4caf50;
	}
</style>
