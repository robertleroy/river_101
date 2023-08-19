
<script>
  import Carabiners from "$lib/images/choinard.png";
  import Accordion from '$lib/components/Accordion.svelte';
  let title = 'Links';

  const myLinks = [
    /*
    { 
      category: 'category', 
      links: [
        { name: 'name', path: 'path', desc: "desc" },
        { name: 'name', path: 'path', desc: "desc" },
        { name: 'name', path: 'path', desc: "desc" },
        { name: 'name', path: 'path', desc: "desc" },
      ]
    },
    */
    { 
      category: 'Beta', 
      items: [
        { name: 'Mountainbuzz', path: 'https://www.mountainbuzz.com/', desc: "Boating Forum: Trash Talk, General info, Classifieds" },
        { name: 'American Whitewater', path: 'https://www.americanwhitewater.org/content/River/state-summary/state/CO/', desc: `
        <div>Non Profit River Advocacy.</div>
        <div>River Flows, Trip Info including: rapid descriptions, Put-in / Take-out directions</div>` },
        { name: 'USGS', path: 'https://waterdata.usgs.gov/co/nwis/current/?type=flow&group_key=huc_cd', desc: "National River Flow Data" },
        { name: 'Denver Water Board', path: 'https://dwr.state.co.us/Tools/Stations', desc: "More Front Range River Flow Data" },
        { name: 'CurrentFlow', path: 'https://robertleroy.github.io/currentflow/', desc: "My River Flow app" },
        { name: "", path: "", desc: `I am sure there is a fishing / rafting club out there, I have no idea what the name is... <br> Maybe drifters something...`}
      ]
    },
    { 
      category: 'Gear', 
      items: [
        { name: 'NRS', path: 'https://www.nrs.com/', desc: "River Gear" },
        { name: 'Watershed Drybags', path: 'https://www.drybags.com/product/colorado/', desc: `
        <div>Bomber Drybags.</div>
        <div>I  <strike>used</strike> <ins>abused</ins> 'the Colorado' daily for 5 summers before I bought my second one.</div>
        <div>The First one was still dry.  I felt obliged to get a new one.</div>
        <div>I thought they were expensive 20 years ago.  Prices went up.</div>
        <div>★★★★</div>
        ` },
        { name: "Jack's Plastic Welding", path: 'https://www.jpwinc.com', desc: `
        <div>Bomber river gear made in Four Corners area.</div>
        <div>Large Bomber Hypalon Drybags</div>
        <div>Paco Pads are toughest and thickest sleeping pad out there.</div>
        <div>Hypalon.  Strap 'em on to your cooler for a raft seat.</div>
        <div>★★★★</div>
        `},
        { name: 'Down River Equipment', path: 'https://www.downriverequip.com/', desc: `
        <div>River gear, retail, repair, manufacturing in Wheatridge, Co.</div>
        <div>★★★★</div>
        ` },
      ]
    },
    { 
      category: 'Misc', 
      items: [
        { name: 'Knots', path: 'http://localhost:5173/src/lib/PrimerOnKNots.pdf', desc: "Knots pdf" },
      ]
    },
  ];
</script>

<div class='page'>
  <!-- <h2>{title}</h2> -->

  <div class="frame">
    <h2>Links</h2>
    <img src={Carabiners} alt="carabiners" class="choinard" />
  </div>
  

  <section class="" >
    {#each myLinks as myLink (myLink.category)}
    <Accordion >
      <svelte:fragment slot="header">
        {myLink.category}
      </svelte:fragment>

      <svelte:fragment>
        {#each myLink.items as item (item.name)}
        <div class="link">
          <a href={item.path} target='_blank' rel='noopener noreferrer'>{item.name}</a>
        </div>
        <div class="desc">{@html item.desc}</div>
        {/each}
      </svelte:fragment>
    </Accordion>
    {/each}


    <div class="todo" style:color="tomato">
      <h4>Todo</h4>
      <ul style:margin="0">
        <ol>Change localhost link for knots pdf to match deployment url</ol>
      </ul>
    </div>
  </section>


</div>

<style lang='postcss'>
  .choinard {
    position: relative;
    width: 150px;
    left: 6rem;
    filter: grayscale(80%) brightness(120%) opacity(30%) drop-shadow(2px 2px 2px #555);
  }
  .choinard::after {
    box-shadow: inset 3px 3px 10px 0 #000000;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .frame {
    position: relative;

    h2 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }
  .desc { margin: 0 0 1rem 2ch}
  /* .link {  margin-bottom: 0.3rem; } */
  a {
    text-decoration: underline dotted;
  }
</style>