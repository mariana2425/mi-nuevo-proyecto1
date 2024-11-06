<script lang="ts">
    import { content } from '$lib/components/cards_content';
	import Card from '$lib/components/Card.svelte';

	let hoveredIndex: number | null = null;

	function handleMouseEnter(index: number) {
		hoveredIndex = index;
	}

	function handleMouseLeave() {
		hoveredIndex = null;
	}


</script>

<div class="cards-container">
	{#each content as card (card.index)}
		<div
			class="card-wrapper {hoveredIndex !== null && hoveredIndex !== card.index ? 'blurry' : ''}"
			role="button"
			tabindex="0"
			onmouseenter={() => handleMouseEnter(card.index)}
			onmouseleave={handleMouseLeave}
		>
			<Card title={card.tip} content={card.secondText} --color={card.color}/>
		</div>
	{/each}
</div>

<style>
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		margin: 5rem;
	}

	.card-wrapper {
		transition: filter 0.3s;
	}

	.card-wrapper.blurry {
		filter: blur(5px);
	}
</style>