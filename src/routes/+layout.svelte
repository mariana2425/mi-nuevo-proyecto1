<script>
    let{children} = $props()
    import footer from '$lib/components/footer.svelte';
</script>

<a href="/" class="Logo">Reduce, Reutiliza y Recicla </a>
        <nav class="EN">
            <a href="http://127.0.0.1:5500/Inicio.html">Inicio</a>
            <a href="http://127.0.0.1:5500/Actividades.html">Actividades</a>
            <a href="http://127.0.0.1:5500/Informacion.html">Información</a>
            <a href="http://127.0.0.1:5500/Iniciosesion.html">Iniciar Sesión</a>
            <a href="http://127.0.0.1:5500/Resgistro.html">Resgistro</a>
            <a href="http://127.0.0.1:5500/Funcionalidad.html">Mis metas</a>
        </nav>


{@render children()}

<style>
    .Logo{
    font-size: 25px;
    color: #ededed;
    text-decoration: none;
    font-weight: 600;
}
</style>

