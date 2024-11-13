

<main class="bodymin">
	<h1>¿Qué son los Puntos Naranja?</h1>
	<div class="Queson">
		<p class="contenido">
			Son espacios para la recepción y acopio de residuos aprovechables o reciclables, una
			alternativa para que los ciudadanos puedan entregar estos residuos con la tranquilidad que
			tendrán un tratamiento adecuado y volverán a la cadena productiva.
		</p>
		<ul>
			<li>
				Recepción: En los Puntos Naranja, los habitantes de la zona o personas de paso pueden
				entregar el material reciclable o posconsumo que generan en su casa o lugar de trabajo, o
				estudio.
			</li>
			<li>
				Recolección puerta a puerta: Los operarios de Emvarias realizan recolección puerta a puerta
				en las zonas aledañas a los Puntos Naranja, en sus horarios de funcionamiento. Esta
				alternativa, está habilitada para negocios y unidades residenciales que generan mayores
				cantidades de reciclaje.
			</li>
		</ul>
	</div>
	<div class="cards-container">
		<div class="card">
			<img src="crea-una-imagen-de-una-sola-hoja-de-papel--animada.jpg" alt="" />
			<div class="card__content">
				<p class="card__title">Papel</p>
				<p class="card__description">
					Papel archivo <br />
					Papel periodico <br />
					Revistas y cuadernos <br />
				</p>
			</div>
		</div>
		<header>
			<h1>MATERIALES RECICLABLES</h1>
		</header>
		<div class="card">
			<img src="imagen-de-una-caja-de-carton.jpg" alt="" />
			<div class="card__content">
				<p class="card__title">Cartón</p>
				<p class="card__description">
					Cajas de cartón <br />
					Cajas de tetrapack <br />
					Tubos de cartón <br />
				</p>
			</div>
		</div>

		<div class="card">
			<img src="imagen-de-botellas-de-plastico-reciclables.jpg" alt="" />
			<div class="card__content">
				<p class="card__title">Plastico</p>
				<p class="card__description">
					Botellas de gaseosas, maltas, aguas <br />
					Envases plasticos <br />
					Bolsas de plasticos <br />
				</p>
			</div>
		</div>

		<div class="card">
			<img src="imagen-de-botellas-de-vidrio-reciclables.jpg" alt="" />
			<div class="card__content">
				<p class="card__title">Vídrio</p>
				<p class="card__description">
					Envases de vídrio de gaseosas <br />
					Envases de vídrio de conservas <br />
					Envases de vídrio de conservas <br />
				</p>
			</div>
		</div>

		<div class="card">
			<img src="imagen-de-de-latas-metal-reciclables.jpg" alt="" />
			<div class="card__content">
				<p class="card__title">Metal</p>
				<p class="card__description">
					Latas de metal <br />
					Latas de conservas <br />
					Partes de herramientas metálicas <br />
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	.bodymin {
		font-family: Arial, sans-serif;
		background-color: #faba95;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		background-color: #ff5202;
		width: 90%;
		height: 70px;
		color: #ffffff;
		justify-content: center;
		text-align: center;
		border-radius: 10px;
	}

	#map {
		height: 500px;
		width: 80%;
		max-width: 1000px;
		border: 15px solid #ffffff;
		border-radius: 10px;
	}

	#info {
		background-color: #2a9e33;
		padding: 15px;
		border: 3px solid #2b7a3d;
		border-radius: 5px;
		width: 90%;
		max-width: 300px;
		margin-top: 10px;
		text-align: center;
		display: none;
	}

	#info h2 {
		color: #276435;
	}

	#info p {
		color: #000000;
		font-size: 14px;
	}
	.Queson {
		width: 90%;
		height: 200px;
		background-color: #ffffff;
		border-radius: 15px;
	}
	.contenido {
		margin-right: 20px;
		margin-left: 20px;
	}
	img {
		margin-top: 20px;
	}

	.cards-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr); 
		gap: 20px; 
		max-width: 1200px;
		width: 100%;
	}

	
	.card {
		position: relative;
		width: 100%;
		height: 200px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.card svg {
		width: 48px;
		fill: #333;
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.card:hover {
		transform: rotate(-5deg) scale(1.1);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.card__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		background-color: #fff;
		opacity: 0;
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.card:hover .card__content {
		transform: translate(-50%, -50%) rotate(0deg);
		opacity: 1;
	}

	.card__title {
		margin: 0;
		font-size: 24px;
		color: #333;
		font-weight: 700;
		text-align: center;
	}

	.card__description {
		margin: 10px 0 0;
		font-size: 14px;
		color: #777;
		line-height: 1.4;
		text-align: center;
	}

	.card:hover svg {
		scale: 0;
		transform: rotate(-45deg);
	}
</style>
