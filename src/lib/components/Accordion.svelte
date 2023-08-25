<script>
	import { slide } from "svelte/transition";
	// import ToggleMore from './more.svelte';
	export let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="shell" >
	<div class="header" on:keypress on:click={toggle}>
		<div class="title">
			<slot name="header">No header was provided</slot>
		</div>
		<div class="toggle" style:rotate={isOpen ? "90deg" : ""}>
      &#10095;</div>
	</div>
	
	{#if isOpen}
	<div class="body" transition:slide={{ duration: 200 }}>
		<slot>No body was provided</slot>
	</div>
	{/if}
</div>


<style>
	.shell { padding: 1rem 0; border-bottom: 1px solid hsl(210,30%,90%);}
	.header {
		cursor: pointer; 
		font-size: 1em;
		padding: 0rem 1rem ;
		display: flex;
		gap: 0 1ch;
		justify-content: space-between;
		align-items: center;
	}
	.title { font-size: 1.1em; }
	.body { padding: 0em 2rem; }
  .toggle { transition: 200ms}
</style>

