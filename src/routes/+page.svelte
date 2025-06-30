<script lang="ts">
  export let data;
</script>

<h1 class="text-2xl font-bold mb-4">Slovenské zberateľské 10€</h1>


{#each data.groupedProducts as [year, products]}
  <div class="mb-6">
    <h2 class="text-xl font-bold mb-2">{year}</h2>
    <hr class="mb-4 border-gray-300" />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each products as product}
        <div class="p-4 border rounded shadow">
          <img
            src={product.image_url}
            alt={product.name}
            class="w-full aspect-square object-cover mb-2 rounded"
          />
          <h3 class="font-semibold">{product.name}</h3>
          <p class="text-sm">{product.year}</p>
        </div>
      {/each}
    </div>
  </div>
{/each}
