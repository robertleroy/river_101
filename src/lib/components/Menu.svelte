<!-- <Menu bind:toggle={playing} {fontsize}/> -->
<script>
	export let toggle;
	export let style = '';
</script>

<div class="menu" {style}
		 on:keypress on:click 
		 on:pointerdown="{() => toggle = !toggle}" 
		 class:toggled="{toggle}">
  <div class="bar_1"/>
  <div class="bar_2"/>
  <div class="bar_3"/>
</div>

<style>
  .menu { 
    display: inline-grid;
		width: 24px;
    font-size: 16px;
		height: max-content;
		justify-items: center;
		align-items: center;
    cursor: pointer; 
    user-select: none;
    vertical-align: middle;
    /* border: 1px solid #ccc; */
    /* background: cyan; */
	}
  .menu:hover:not(:active) { opacity: 0.6; }
	[class^='bar_'] {
		height: 0.1875em;
		width: 100%;
		background: currentColor;
		transition: 0.2s linear; 
		/* transform-origin: 14% center; */
		transform-origin: 6% center;
	}
	[class^='bar_']:not(:last-child) { margin: 0 0 0.1875em 0; }

	/* .toggled .bar_1 { rotate: 45deg; }
	.toggled .bar_2 { width: 0; }
	.toggled .bar_3 { rotate: -45deg; } */

  .toggled .bar_1 { rotate: 45deg; width: 80%; }
	.toggled .bar_2 { width: 0; }
	.toggled .bar_3 { rotate: -45deg; width: 80%; }

  /* .toggled { scale: 3; } */
</style>
