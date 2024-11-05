<script>
	import Menu from '$lib/components/Menu.svelte';
	import inicio from '$lib/images/ambiente.png';
</script>

<main class="bodymin">
<div class="imagen-derecha">
	<img src={inicio} alt="inicio" />
</div>
	<section class="Inicio">
		<div class="Inicio-contenido">
			<h1>"Hola, Bienvenido a Recicla y Crea"</h1>
			<p>
				Aprende y participa en nuestras actividades de reciclaje para contribuir a un planeta más
				limpio.
			</p>
		</div>

		<div class="Ingresa">
			<a href="/Iniciosesion">Inicia ya </a>
		</div>
		<div class="Inicio-link">
			<a href="/"><i class="bx bxl-facebook"></i></a>
			<a href="/"><i class="bx bxl-gmail"></i></a>
			<a href="/"><i class="bx bxl-instagram"></i></a>
		</div>
	</section>
</main>

<style>
	@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

	.bodymin {
		margin: 0;
		padding: 0;
		font-family: 'Poppins', sans-serif;
		color: rgba(0, 0, 0, 0.8);
		background-image: url(fondo2.jpg);
		object-fit: cover;
	}
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 20px 10%;
		height: 70px;
		background-color: #258d19;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.Logo {
		font-family: 'DynaPuff', system-ui;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-variation-settings: 100;
		font-size: 60px;
		color: rgb(0, 0, 0);
		text-decoration: none;
		font-weight: 600;
		margin: 20px;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	.Nav a {
		font-family: 'DynaPuff', system-ui;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		font-variation-settings: 100;
		font-size: 18px;
		color: #ffffff;
		text-decoration: none;
		font-weight: 500;
		margin-left: 35px;
		transition: 0.3s;
	}
	.Nav a:hover {
		color: #083a06;
	}
	.Inicio {
		margin-right: 50%;
		margin-left: 5%;
		margin-top: 12%;
		background-color: #ffffff;
		border-radius: 8px;
	}
	.Inicio-contenido {
		max-width: 600px;
	}
	.Inicio-contenido h1 {
		margin-left: 3%;
		font-family: 'DynaPuff', system-ui;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-variation-settings: 100;
		font-size: 56px;
		font-weight: 700;
		line-height: 1.2;
		color: #225a0b;
	}
	.Inicio-contenido p {
		margin-left: 3%;
		font-family: 'DynaPuff', system-ui;
		font-optical-sizing: center;
		font-weight: 500;
		font-style: normal;
		font-variation-settings: 50;
		font-size: 20px;
		margin: 20px 0 40px;
		color: #225a0b;
	}

	.Ingresa a {
		font-family: 'DynaPuff', system-ui;
		font-optical-sizing: auto;
		font-weight: 700;
		font-style: normal;
		font-variation-settings: 100;
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 150px;
		height: 100%;
		margin-bottom: 3%;
		margin-left: 3%;
		background: #225a0b;
		border: 2px solid #225a0b;
		border-radius: 5px;
		font-size: 19px;
		color: white;
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 1px;
		z-index: 1;
		overflow: hidden;
		transition: 0.5s;
	}
	.Ingresa a:hover {
		color: rgb(255, 255, 255);
	}
	.Ingresa a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: #225a0b;
		z-index: -1;
		transition: 0.5s;
	}
	.Ingresa a:hover::before {
		width: 100%;
	}

	.Inicio-link {
		position: absolute;
		bottom: 40px;
		width: 170px;
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;
		border-radius: 8px;
	}
	.Inicio-link a {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background: transparent;
		border: 2px solid #143805;
		border-radius: 50%;
		font-size: 20px;
		color: #143805;
		text-decoration: none;
		z-index: 1;
		overflow: hidden;
		transition: 0.5s;
	}
	.Inicio-link a:hover {
		color: white;
	}
	.Inicio-link a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: #143805;
		z-index: -1;
		transition: 0.5s;
	}
	.Inicio-link a:hover::before {
		width: 100%;
	}

	.imagen-derecha {
		position: fixed;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
