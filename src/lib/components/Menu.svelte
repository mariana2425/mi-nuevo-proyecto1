<script>
    let {color} = $props();
</script>


<header class="Nav">
	
	<nav class="EN" >
		<a href="/Inicio" style={`color:${color};`}>Inicio</a>
		<a href="/Actividades" style={`color:${color}`}>Actividades</a>
		<a href="/Informacion" style={`color:${color}`}>Información</a>
		<a href="/Iniciosesion" style={`color:${color}`}>Iniciar Sesión</a>
		<a href="/Metas" style={`color:${color}`}>Mis metas</a>
	</nav>
</header>

<style>
	.Nav a {
		font-size: 18px;
		text-decoration: none;
		font-weight: 500;
		margin-left: 35px;
		transition: 0.3s;
	}
	.Nav a:hover {
		color: #005200;
	}
</style>
