<script lang="ts">
	const tableHeadings = ['#', 'Description', 'Unit', 'Quantity', 'Unit Price', 'Amount', 'Actions'];
</script>

<thead>
	<tr class="border bg-text/10">
		{#each tableHeadings as heading, i (i)}
			<th class="border px-3 py-1">{heading}</th>
		{/each}
	</tr>
</thead>
