<script lang="ts">
	export let data;
</script>

<h1 class="text-2xl font-bold mb-4">Slovenské zberateľské 10€</h1>

<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
	{#each data.products as product}
		<div class="p-4 border rounded shadow">
			<div class="max-w-[200px] w-full mx-auto">
				<img
					src={product.image_url}
					alt={product.name}
					class="w-full aspect-square object-cover mb-2 rounded"
				/>
			</div>
			<h2 class="font-semibold">{product.name}</h2>
			<p class="text-sm">{product.year}</p>
		</div>
	{/each}
</div>
