<script>
  import Delores from "$lib/images/f-street-kayaks.png";
  let title = 'About';
</script>

<div class='page'>
  <!-- <h2>{title}</h2> -->

  
<div class="frame">
  <h2>About</h2>
  <img src={Delores} alt="Delores River Bathing" class="delores" />
</div>

<p>Many topics are presented here with varying degrees of complexity.  Neither the depth nor the bredth of these articles are comprehensive.  It is more a 'stream of consciousness', general thoughts on what a newcomer to rafting should begin to grasp.  If nothing more it is the first time you have heard some of these practices and principles.  They will become more embedded as you hear them again, consider them, and experience them more in the future.</p>


<p style="font-style: italic; padding: 0 1em;"> ...the river is everywhere at once, at its origin and at its mouth, at the waterfall, at the ferry, at the rapids, in the sea, in the mountains, everywhere at the same time, and for it only the present exists, no shadow of the past, no shadow of the future. <br>
<cite>-- Herman Hesse</cite></p>

</div>

<style lang='postcss'>

.delores {
    position: relative;
    width: 100%;
    filter: grayscale(60%) brightness(120%) opacity(30%);
  }
  .delores::after {
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
      top: 40%;
      left: 45%;
      z-index: 5;
      
      @media (min-width: 500px) {
        top: 65%;
        left: 60%;
      }
    }
  }

</style>