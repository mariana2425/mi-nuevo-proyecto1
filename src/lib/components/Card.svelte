<script>
	let { title, content } = $props();
</script>

<div class="card">
	<h3>{title}</h3>
	<p>{content}</p>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		
		width: 200px;
		height: 350px;
		padding: 2rem;

		justify-content: center;

		background-color: var(--color,#2a7222);
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s,
			filter 0.3s;
	}
	.card:hover {
		transform: scale(1.1);
	}

	p {
        margin-bottom: 0.5rem;
		color: white;
    }
	h3{
		text-align: center;
		color: white;
	}
</style>