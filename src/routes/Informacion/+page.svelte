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

	let activeActivity: string | null = $state(null);

	function showActivity(activityId: string) {
		activeActivity = activityId;
	}
</script>

<main class="mybody">
	<section id="intro">
		<h2>¿Por qué Reciclar?</h2>
		<p>
			Reciclar es importante por varias razones. <br /> En primer lugar, ayuda a reducir la cantidad
			de basura que termina en los vertederos y la incineración, lo que a su vez reduce la
			contaminación del medio ambiente. <br />
			Además, el reciclaje ayuda a ahorrar recursos naturales, como agua y energía, ya que se requiere
			menos energía para producir nuevos productos a partir de materiales reciclados que para producirlos
			a partir de materias primas vírgenes. <br />
			El reciclaje también reduce la necesidad de extraer materias primas, lo que ayuda a proteger el
			medio ambiente y a conservar los recursos naturales. <br />
			Otro beneficio del reciclaje es que ayuda a reducir las emisiones de gases de efecto invernadero,
			lo que contribuye a mitigar el cambio climático.
		</p>
	</section>

	<section id="tipos">
		<h2>Tipos de Reciclaje</h2>

		<CardsCollection />
	</section>

	<section id="informacion">
		<h2>¿COMO USAR CADA CANECA DE BASURA SEGUN SU COLOR?</h2>
		<button onclick={() => showActivity('CanecaAmarilla')}>CANECA AMARILLA</button>
		<button onclick={() => showActivity('CanecaAzul')}>CANECA AZUL</button>
		<button onclick={() => showActivity('CanecaVerde')}>CANECA VERDE</button>
		<button onclick={() => showActivity('CanecaRoja')}>CANECA ROJA</button>
		<button onclick={() => showActivity('CanecaGris')}>CANECA GRIS</button>
		<button onclick={() => showActivity('CanecaNaranja')}>CANECA NARANJA</button>
		<button onclick={() => showActivity('CanecaNegra')}>CANECA NEGRA</button>
		<button onclick={() => showActivity('CanecaBlanca')}>CANECA BLANCA</button>

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
		{#if activeActivity === 'CanecaAzul'}
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
			<h3 class='prueba'>
				En la caneca roja. <br />
				Se deben depositar únicamente para residuos hospitalarios y similares que contengan bacterias,
				parásitos, virus, hongos e infecciosos como: guantes quirúrgicos, agujas, jeringas, gasas, e
        <img src={contenedorr} width="200" alt="">
			</h3>
    {/if}

    {#if activeActivity === 'CanecaGris'}
			<h3 class='prueba'>
				Caneca gris: <br />
				Aquí se deben depositar todo tipo de papeles y cartones, sin importar su procedencia, siempre
				y cuando sean limpios y secos; las revistas, periódicos, folletos o papeles para envolver son
				algunos ejemplos de residuos que puede desechar en estos recipientes
        <img src={contenedorg} width="200" alt="" />
			</h3>
    {/if}

    {#if activeActivity === 'CanecaNaranja'}
			<h3 class='prueba'>
				En el contenedor naranja/marrón <br />
				los restos de alimentos (cáscaras de fruta, espinas de pescado, etc.).
        <img src={contenedor} alt="" />
			</h3>
    {/if}

    {#if activeActivity === 'CanecaNegra'}
			<h3 class='prueba'>
				Color negro: <br />
				Para depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones
				contaminados con comida; papeles metalizados, entre otros.
        <img src={contenedorn} width="200" alt="" />
			</h3>
    {/if}

    {#if activeActivity === 'CanecaBlanca'}
			<h3 class='prueba'>
				Caneca Blanca: <br />
				allí deben ir los residuos aprovechables como plástico, metales, cartón, papel, vidrio, PET.
        <img src={contenedorb} width="200" alt="" />
			</h3>
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

	h2 {
		color: #4caf50;
		text-align: center;
	}

	ul {
		list-style-type: square;
	}

	.prueba {
		display: flex;
		justify-items: center;
	}
</style>