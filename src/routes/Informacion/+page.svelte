<script lang="ts">
	import contenedorb from '$lib/images/Contenedor blanco.jpg';
	import contenedorn from '$lib/images/Contenedor negro.jpg';
	import contendorv from '$lib/images/contenedor-verde.jpg';
	import contenedorg from '$lib/images/contenedor-gris.jpg';
	import contenedora from '$lib/images/contenedor-amarillo.jpg';
	import contenedorz from '$lib/images/contenedor-azul.jpg';
  import contenedor from '$lib/images/contenedor.jpg';
  import contenedorr from '$lib/images/tacho-de-reciclaje.png';
	import CardsCollection from '$lib/components/CardsCollection.svelte';
	import papelera from '$lib/images/papelera-de-reciclaje.png';

	let activeActivity: string | null = $state(null);

	function showActivity(activityId: string) {
		activeActivity = activityId;
	}
</script>

<main class="mybody">
	<section id="intro">
		<h1 class="Bra">¿POR QUÉ RECICLAR?</h1>
		<div class="prueba">
			<h2>Reciclar es importante por varias razones:</h2>
		  <ul>
				<li>
					Ayuda a reducir la cantidad de basura que termina en los vertederos y la incineración, lo que a su vez reduce la contaminación del medio ambiente. 
				</li>
				<li>
					Ayuda a ahorrar recursos naturales, como agua y energía, ya que se requiere menos energía para producir nuevos productos a partir de materiales reciclados que para producirlos a partir de materias primas vírgenes.
				</li>
				<li>
					Reduce la necesidad de extraer materias primas, lo que ayuda a proteger el medio ambiente y a conservar los recursos naturales.
				</li>
				<li>
					Ayuda a reducir las emisiones de gases de efecto invernadero, lo que contribuye a mitigar el cambio climático.
				</li>
		  </ul>
		  <img src={papelera} width="300" alt="">
		</div>
	</section>

	<section id="tipos">
		<h1 class="NOR">TIPOS DE RECICLAJE</h1>

		<CardsCollection />
	</section>

	<section id="informacion">
		<h1>¿COMO USAR CADA CANECA DE BASURA SEGUN SU COLOR?</h1>
		<button Class="Red"    onclick={() => showActivity('CanecaRoja')}>CANECA ROJA</button>
		<button class="Orange" onclick={() => showActivity('CanecaNaranja')}>CANECA NARANJA</button>
		<button class="Yellow" onclick={() => showActivity('CanecaAmarilla')}>CANECA AMARILLA</button>
		<button class="Green"  onclick={() => showActivity('CanecaVerde')}>CANECA VERDE</button>
		<button class="Blue"   onclick={() => showActivity('CanecaAzul')}>CANECA AZUL</button>
		<button  class="White" onclick={() => showActivity('CanecaBlanca')}>CANECA BLANCA</button>
		<button class="Gris"   onclick={() => showActivity('CanecaGris')}>CANECA GRIS</button>
		<button class="Black"  onclick={() => showActivity('CanecaNegra')}>CANECA NEGRA</button>

		{#if activeActivity === 'CanecaAmarilla'}
			<h3>
				CONTENEDOR AMARILLO <br>(plástico, latas o envases tipo brik).
			</h3>
			<div class="prueba">
				<ul style="width: 50%;">
					<li>
						ENVASES DE PLÁSTICO: botellas y garrafas de agua, de refrescos, de aceite; aros que
						sujetan los packs de latas; envases de yogur, de mantequilla; bandejas de “corcho
						blanco”; botes de productos de limpieza, detergentes líquidos; envases de cosméticos,
						gel, champú, cremas,: tapas y tapones de plástico; etc.
					</li>
					<li>
						BOLSAS DE PLÁSTICO: bolsas de comercios y envoltorios, papel film (aluminio), envases
						tipo blister, etc.
					</li>
					<li>ENVASES TIPO BRIK: de leche, zumo, vino, aceite, etc.</li>
					<li>
						ENVASES METÁLICOS: latas de bebidas, botes de conserva, aerosoles, bandejas y papel de
						aluminio, chapas y tapas metálicas, etc.
					</li>
				</ul>
				<img src={contenedora} width="200" alt="" />
			</div>
		{/if}
		{#if activeActivity === 'CanecaAzul' }
			<h3>El contenedor AZUL está destinado a los envases de papel y cartón.</h3>
      <div class="prueba">
        <li>
					Folios, libretas, periódicos, revistas, papel de regalo y de envolver, sobres (sin
					ventanilla), folletos de publicidad.
				</li>
				<li>
					Cajas, piezas de cartón y envases (de cereales, galletas, comidas pre-cocinadas y
					congeladas, comida rápida, zapatos, etc.).
				</li>
				<li>
					Hueveras de cartón, tubos de cartón del papel higiénico o de las servilletas de cocina.
				</li>
				<img src={contenedorz} width="200" alt="" />
      </div>
		{/if}
    
    {#if activeActivity === 'CanecaVerde'}
		<h3>
			CONTENEDOR VERDE 
		</h3>
      <div class="prueba">En esta se depositan residuos orgánicos aprovechables como los restos de comida, desechos agrícolas,
			etc.
        <img src={contendorv} width="200" alt="" />
      </div>
    {/if}
    {#if activeActivity === 'CanecaRoja'}
			<h3>
				CONTENEDOR ROJO <br />
			</h3>
			<div class='prueba'>
				Se deben depositar únicamente para residuos hospitalarios y similares que contengan bacterias,
				parásitos, virus, hongos e infecciosos como: guantes quirúrgicos, agujas, jeringas, gasas, etc.
				<img src={contenedorr} width="200" alt="">
			</div>
    {/if}

    {#if activeActivity === 'CanecaGris'}
		<h3>
			CONTENEDOR GRIS <br />
		</h3>
		<div class='prueba'>
			Aquí se deben depositar todo tipo de papeles y cartones, sin importar su procedencia, siempre
			y cuando sean limpios y secos; las revistas, periódicos, folletos o papeles para envolver son
			algunos ejemplos de residuos que puede desechar en estos recipientes
	        <img src={contenedorg} width="200" alt="" />
		</div>
    {/if}

    {#if activeActivity === 'CanecaNaranja'}
		<h3>
			CONTENEDOR NARANJA/MARRON <br />
		</h3>
		<div  class='prueba'>
			Aqui se depositan los restos de alimentos (cáscaras de fruta, espinas de pescado, etc.).
			<img src={contenedor} width="200" alt="" />
		</div>
    {/if}

    {#if activeActivity === 'CanecaNegra'}
		<h3>
			CONTENEDOR NEGRO
		</h3>
		<div class='prueba'>
			Aqui se deben depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones
			contaminados con comida; papeles metalizados, entre otros.
           <img src={contenedorn} width="200" alt="" />
		</div>

    {/if}

    {#if activeActivity === 'CanecaBlanca'}
		<h3>
			CONTENEDOR BLANCO
		</h3>
		<div class='prueba'>
			Aqui deben ir los residuos aprovechables como plástico, metales, cartón, papel, vidrio, PET.
           <img src={contenedorb} width="200" alt="" />
		</div>
    {/if}
	</section>
</main>

<style>
	.mybody {
		font-family: Arial, sans-serif;
		background-image: url(FONDO\ ACTIVIDADES);
		line-height: 1.6;
		margin: 10px;
		padding: 20px;
	}

	section {
		padding: 30px;
		margin-top: 20px;
		background-color: white;

		border-radius: 8px;
	}

	.Bra {
		color: #ffffff;
		text-align: center;
		font-size: 28px;
		background-color: #ffd900da;
	}

	ul {
		list-style-type: square;
	}
	.prueba {
		display: flex;
		justify-items: center;
	}
	.Yellow{
		background-color: rgb(231, 231, 55);
		border-color: rgb(231, 231, 55);
		border-radius: 8px;
		color: white;
		width: 140px;
		height: 50px;
	}
	.Blue{
		background-color: rgb(55, 146, 231);
		border-color: rgb(55, 146, 231);
		border-radius: 8px;
		color: white;
		width: 130px;
		height: 50px;
	}
	.Green{
		background-color: rgb(25, 155, 42);
		border-color: rgb(25, 155, 42);
		border-radius: 8px;
		color: white;
		width: 130px;
		height: 50px;
	}
	.Gris{
		background-color: rgb(82, 84, 87);
		border-color: rgb(82, 84, 87);
		border-radius: 8px;
		color: white;
		width: 130px;
		height: 50px;
	}
	.Orange{
		background-color: rgb(255, 152, 18);
		border-color: rgb(255, 152, 18);
		border-radius: 8px;
		color: white;
		width: 140px;
		height: 50px;
	}
	.Black{
		background-color: rgb(23, 23, 24);
		border-color: rgb(23, 23, 24);
		border-radius: 8px;
		color: white;
		width: 130px;
		height: 50px;
	}
	.Red{
		background-color: rgb(141, 42, 42);
		border-color: rgb(141, 42, 42);
		border-radius: 8px;
		color: white;
		width: 130px;
		height: 50px;
	}
	.White{
		background-color: rgb(255, 255, 255);
		border-color: rgb(206, 206, 206);
		border-radius: 8px;
		color: black;
		width: 130px;
		height: 50px;
	}
	h2{
		color:black;
	}
	.NOR{
		color:rgb(0, 0, 0);
		text-align: center;
		font-size: 40px;
	}
</style>