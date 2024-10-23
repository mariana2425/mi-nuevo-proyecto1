<script>
    import Menu from '$lib/components/Menu.svelte'
    let{children} = $props()
    import '../app.css'
    
</script>

<Menu color="#fff"/>

{@render children()}

