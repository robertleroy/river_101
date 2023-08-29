<script>
  import { fade, slide } from 'svelte/transition';  
  import { page } from '$app/stores';
  import { routes } from '$lib/stores/store';
  import Logo from '$lib/components/Logo.svelte';
  import Menu from "$lib/components/Menu.svelte";
  import "./app.css";

  let test;

  let title = "River 101";
  let sidebarOpen = false;
  let innerWidth;
  let online = true;

  $: innerWidth > 899 ? (sidebarOpen = false) : "";
</script>

<svelte:window bind:innerWidth bind:online />
<svelte:head>
	<title>River 101</title>
</svelte:head>

<header>
  <div class="flex">
    <a href="/" class="title" class:offline={!online}>
      <Logo offline={!online}/>
      
      <h1>{online ? title : 'Offline' }</h1>
    </a>

    <Menu toggle={sidebarOpen} 
          on:click="{() => (sidebarOpen = !sidebarOpen)}" />

    <nav class="navbar">
      {#each $routes as route}
        <div class="route" class:currentRoute={$page.url.pathname === route.path}>
          <a href={route.path}>{route.name}</a>
        </div>
      {/each}
    </nav>
  </div>
</header>

<aside class:sidebarOpen>
  <nav class="sidenav">
    {#each $routes as route}
      <div class="route" on:keypress on:click={() => test = route.name }
           class:currentRoute={$page.url.pathname === route.path || $page.url.pathname + "/" === route.path}>

        <a href={route.path} 
           on:click="{() => sidebarOpen = false}">
          {route.name}
        </a>

        <!-- #region children -->
        {#if $page.url.pathname === route.path && route.children}
        <div class="child" 
          transition:slide="{{ duration: 300 }}">

          {#each route.children as child}
          <div class="route" 
               style:color="initial" 
               class:currentRoute={$page.url.hash.includes(child.path)} >

            <a href={child.path}
               on:click="{() => sidebarOpen = false}">
              {child.name}  
            </a>

          </div>
          {/each}
        </div>
        {/if}
        <!-- #endregion children -->

      </div> <!-- route -->
    {/each}
    
  </nav> <!-- sidenav -->
</aside>

<main>
  <!-- {#key data.pathname} -->
  {#key test}
  <div class="router" 
    transition:fade="{{
      duration: innerWidth < 900 ? 0 : 300
  }}">
    <slot />
  </div>
  {/key}
</main>

<style lang="postcss">
</style>
