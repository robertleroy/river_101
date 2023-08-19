<script>
  import TunnelImg from "$lib/images/tunnel_ragged.png";
  import Eddy from "$lib/images/srt/eddy.png";
  import Hydrolic from "$lib/images/srt/hydrolic.png";
  import PillowRock from "$lib/images/srt/pillow_rock.png";
  import PillowRock_2 from "$lib/images/srt/pillow_rock_2.png";

  import V_1 from "$lib/images/v_1.png";
  import V_2 from "$lib/images/v_2.png";
  import Lateral from "$lib/images/lateral_2.png";
  import StrainedBoat from "$lib/images/srt/strained_boat.png";
  import FrogRock from "$lib/images/srt/frog_rock.png";
  import LowHead from "$lib/images/srt/low_head.png";
  import BigSur from "$lib/images/big_sur.png";
  import wrap_1 from "$lib/images/wrap_1.jpg";

  let title = "River Dynamics";
  const forces = [
    {
      velocity: "Velocity:",
      legs: "on Legs:",
      body: "on Body:",
      boat: "on Raft:",
    },
    { velocity: "3mph", legs: "17", body: "34", boat: "168" },
    { velocity: "6mph", legs: "67", body: "134", boat: "672" },
    { velocity: "9mph", legs: "151", body: "302", boat: "1512" },
    { velocity: "12mph", legs: "269", body: "537", boat: "2688" },
  ];
</script>

<div class="page">
  <!-- <h3 class=''>
  {title}
</h3> -->

  <div class="frame">
    <h2>River Features <br/> &emsp; and Dynamics</h2>
    <img src={TunnelImg} alt="Tunnel Falls" class="tunnel_falls" />
  </div>



  <h3 id="features">River Features and Terminology</h3>

  <dl>
    <dt>Whitewater</dt>
    <dd>Why is it white?</dd>
    <dd class="sub">Aeration. Whitewater may be as much as 70% air.</dd>

    <dt>Current Vector</dt>
    <dd>General direction of any given current</dd>

    <dt>River Right and River Left</dt>
    <dd>Orientation relative to facing downstream.</dd>

    <dt>Eddy's</dt>
    <dd>
      The low pressure zone behind any obsticle to the current. (rocks, et al.)
    </dd>
    <dd>
      When the current goes around an obsticle, the void behind draws water back
      in.
    </dd>
    <!-- <dd>Distinguished by currents circling back up</dd> -->
    <dd>
      <img src={Eddy} alt="eddy" style="width: 100%; max-width: 500px;" />
    </dd>

    <br/>

    <dt>Hydraulics ( Holes )</dt>
    <dd>
      Pour-over. Water flowing over a rock dives deep, then backfills with a
      breaking wave. Similar to an eddy, but vertical. There will be a
      'recirculating or back-flow', an 'out-flow', seperated by the 'boil' or
      'boil-point'. The boil-point is where the main flow that dove over the
      obsticle resurfaces, boils back up to the surface.
    </dd>
    <dd>
      <img
        src={Hydrolic}
        alt="Hydrolic"
        style="width: 100%; max-width: 700px;"
      />
    </dd>
    <dd>
      <small
        ><em
          >I disagree with the image calling out-flow ~ back-flow. That makes no
          sense.</em
        ></small
      >
    </dd>

    <br/>

    <dt>Pillow or Compression Wave</dt>
    <dd>
      The high pressure zone on the front of obsticles (rocks, et al.). Water
      will shed to one side or the other. Some of the water will pile up on
      itself and push back upstream. This is the pillow. It is surfable
      sometimes, can even be used to avoid a rock.
    </dd>
    <br/>
    <dd>
      It is also the force (high-pressure) that keeps a raft pinned (wrapped).
      If a raft broaches a rock, such that the pillow wave is displaced from the
      rock onto the raft, That is a whole lot of pressure pasting the raft to
      the rock.
    </dd>
    <br/>
    <dd>
      <img
        src={wrap_1}
        alt="Wrapped Raft"
        style="width: 100%; max-width: 400px;"
      />
    </dd>
    <br/>
    <dd>
      In order to un-wrap a raft brute strength is often needed, or a good
      pulley system (Z-Drag). <br/>
      However think of the goal being not so much to pull the raft off, as to re-place
      the pillow back onto the rock. <br/>
      Sometimes... you can peel an edge up enough to let the pillow wave back under
      the raft 🠖 onto the rock. <br/>
      This can make un-wrapping seem magically easy. Sometimes...
    </dd>

    <br/>
    <dd>
      <cite
        >Pillow Rock on the Gauley
        <br/>
        These people are sure this guy is steering them right into that rock, and
        he is.
        <br/>
        The guide knows that big ass pillow is gonna wash them off.
        <br/>
        The smaller rock is Volkswagon Rock.
        <br/> You can easily see the water piling up and washing off of it.
      </cite>
      <img
        src={PillowRock}
        alt="pillow wave"
        style="width: 100%; max-width: 700px;"
      />

      <br/><br/>
      <cite
        >Pillow Rock from upstream. <br/>
        <img
          src={PillowRock_2}
          alt="pillow wave"
          style="width: 100%; max-width: 700px;"
        /></cite
      >
    </dd>

    <br/><br/>
    <dt>Downstream V's</dt>
    <dd>
      Water going between obsticles creates a 'V' pointing downstream. Big or
      small. <br/>
      Okay, I always felt this term was stupid. I call it a tongue.
    </dd>
    <dd>The tongue is usually the deepest / cleanest path.</dd>
    <dd>
      You will often see a large V at the top of a rapid, as the current rolls
      over the gradient breakover. <br/>
      That is a good place to enter the rapid. V's are a good clue
    </dd>

    <dd>
      <br/>
      <cite
        >If you can't see all these v's, squint your eyes, imagine harder..</cite
      >
      <img src={V_1} alt="v_1" style="width: 100%; max-width: 700px;" />
      <img src={V_2} alt="v_2" style="width: 100%; max-width: 700px;" />
    </dd>

    <br/>
    <dt>Standing Waves</dt>
    <dd>Formed by constriction, gradient, and / or river bed topography</dd>
    <dd>May be smooth, breaking, or both</dd>
    <dd>Breaking waves will give a punch, relative to size / speed</dd>
    <dd>
      They can and will deflect you, relative to how square or askew you hit it.
    </dd>
    <dd>Square up to resist deflection and punch through it.</dd>

    <br/>
    <cite
      >Big Sur - Colorado River in Debeque Canyon &gt; 20,000 <small>cfs</small> </cite><br/>
      <img
        src={BigSur}
        alt="Standing Wave"
        style="width: 100%; max-width: 700px;"
      />

    <br/><br/>
    <dt id="laterals">Lateral Waves</dt>
    <dd>
      Lateral waves angle in and downstream from walls, rocks, etc..
      <br/>
      Like a huge downstream V. Maybe one side, maybe both.
    </dd>
    <br/>
    <dd>
      Typically these are breaking waves, and they will want to deflect you in
      towards... wherever that angle goes.
      <br/>
      The term we used to use was 'typewritter'ed across', but I don't think typewritters
      are a thing any more.
    </dd>
    <dd>
      If you need to break a lateral square up and punch it. Usually it is
      better to go down the middle of the tongue and puch through the bottom
      where all the water exits anyway. Point is: Laterals will want to deflect
      you.
    </dd>
    <br/>
    <dd>
      As you get a feel for how much, and what angle..
      <br/>
      you can use these deflections to your advandage. <br/> Like giving the pinball
      machine a little hip at just the right moment.
    </dd>
    <br/>
    <dd>
      <cite>Skull Rapid, Westwater Canyon at very high flows</cite>
      <img
        src={Lateral}
        alt="lateral_2"
        style="width: 100%; max-width: 700px;"
      />
    </dd>

    <br/>
    <dt id="strainers">Strainers / Seives</dt>
    <dd>
      A strainer is anything that lets water through but not solid objects like
      yourself. <br/>
      Typically refers to downed trees. <br/>
      Often times you will see them jutting out from a bank. <br/>
      In the spring you may see large trees that have washed down and become broached...
      anywhere. <br/>
      They may occlude the whole river or creek.
    </dd>
    <br/>
    <dd>
      You do not want to get caught in / under a strainer. Very dangererous. <br
      />
      Steer <em>way</em> clear, especially if on the outside of a bend. Don't get
      pushed into it.
    </dd>
    <dd>
      <img
        src={StrainedBoat}
        alt="strained_boat"
        style="width: 100%; max-width: 700px;"
      />
    </dd>

    <br/><br/>
    <dd>
      Rocks can form seives which are essentially strainers. <br/> They can be undercut
      which adds an insideous quality to them.
    </dd>

    <br/>
    <dd>
      <cite>Frog Rock rapid on the Arkansas @ 330 <small>cfs</small>. 
      <br/>
      There are caverns under the rocks bottom right. A girl got sucked into this in 2010.</cite>
      <img
        src={FrogRock}
        alt="frog_rock"
        style="width: 100%; max-width: 700px;"
      />
    </dd>
    <cite><a
        href="https://www.americanwhitewater.org/content/Accident/detail/accidentid/3396"
        target="_blank"
        rel="noopener noreferrer"
        class="underline">Frog Rock Accident Report - 2010</a
      ></cite>

    <br/><br>
    <dt id="low_head">Low-head Dams</dt>
    <dd>
      Low-head Dams form a perfectly uniform, and generally large & strong,
      hydrolic. Many hydrolics can trap and surf a raft or a person in the
      backwash. Most natural holes have weak spots or may be angled to one side
      or the other, creating outflow and escape points. A Low-head Dam is
      perectly straight across the river.
    </dd>
    <br/>
    <dd>
      There are many examples of people dying in Low Head Dams. One of the most
      famous is in <a
        class="underline"
        href="https://youtu.be/BKMkXLLBnAQ"
        target="_blank"
        rel="noopener noreferrer">Binghamton, Ny 1975</a
      >. As I recall 2 ppl drowned in the dam. A boat of Firemen motored up
      to the dam to recover a body (which was really just a life jacket, no
      body). The boat motored right up to the boil point without realizing the
      change in currents, which swallowed the boat. Another boat followed to
      rescue the first, only to suffer the same fate. I think 3 firemen died.
      <a
        class="underline"
        href="https://youtu.be/BKMkXLLBnAQ"
        target="_blank"
        rel="noopener noreferrer">This video about the incident (actual footage of the rescue attempts, difficult to watch)</a
      > shows how strong the hydrolic is. Look at how far out the boil point is from
      the face of the dam (50 feet in this case).
    </dd>
    <br/>

    <dd>
      When you get recirculated you get pulled into the face, flushed under and
      out towards the boil point - to repeat the process.
      <br/>
      One strategy in this situation is to ball up and try to go deep, hoping to wash clear of the boil point and surface in the out-flow. Another is to
      try to surf yourself to a side or a weak spot where there may be an exit.
    </dd>

    <br/>
    <dd>
      Most the low head dams I know of in Colorado have boat chute / fish ladders
      to the side. There are two nasty irrigation diversions on the Blue below
      Green Mountain Res. They are big and river wide. Being built with a backhoe and rocks, they have weak spots. I had to look at it every time I ran it. I think I always choose to run the corner pocket.
    </dd>

    <br/>
    <dd>
      Too much rescue talk for this section, but the demonstration of Binghamton
      is impressive.
    </dd>
    <dd>
      <img src={LowHead} alt="eddy" style="width: 100%; max-width: 700px;" />
    </dd>

    <br><br>

    <hr>
    <br>


    <h3 id="flows" style="margin-top: 0">
      Flows <br><br>Laminar Flow:
      <div class="subheader">Extra Credit topic...</div>
    </h3>
    <p>
      Laminar flow describes fluid flowing in a straight smooth channel. Consider
      a straight stretch of river with straight sides. The river will flow fastest
      at the center, primarly due to it's relative depth. The flow will also be
      faster just below the surface 🠖 friction from surface tension &
      turbulance...
    </p>
    <p>
      Flow is slowest at the bottom. Each 'layaer' above is faster, one sheet
      moving on top of another. Think of a skateboard on a shallow slope that
      moves @ 1 mph. If you put another skateboard on top it will move 1 mph for
      the slope + 1 mph for the speed of the skateboard below. (These are really
      long skateboards...). And so on. This is how water works, one layer greasing
      the next and pushing down on the one below. When the volume increases, so
      will the velocity, so will the force ~ exponentially.
    </p>
    <p>These are general dynamics of laminar flow</p>
  
    <h3 id="helical">
      Helical Flow:
      <div class="subheader">Extra Credit topic...</div>
    </h3>
    <p>
      The water on the top layer pushes / weighs down on the layers below. The
      bottom layer gets squished, out to the sides. When it hits the banks it
      pushes back towards the surface, sort of. In turn that water gets shoved
      back to the center.
    </p>
    <p>
      While the laminar flow moves downstream, the helical flow will corkscrew
      down the sides, maybe a third the way out depending on the width and volume
      of the river, relative to the river bed. This is helical flow.
    </p>
    <p>
      In flood stages this dynamic can increase dramatically. It can be difficult<small
        ><em>, or worse,</em></small
      > to get to shore in these conditions due to helical flow pushing out from the
      sides, back towards the center. Normally you wouldn't really notice.
    </p>
    <p>This is a dynamic of rivers as well.</p>
    
  
    <h3 id="force">
      Volume and Force of Water:
      <div class="subheader">Extra Credit topic...</div>
    </h3>
  
    <p>
      Water is massive. <br/>
      <span class="strong_em">One cubic foot</span> of water holds about
      <span class="strong_em">8 gallons</span>
      and weighs about <span class="strong_em">62 lbs.</span>
    </p>
  
    <p>
      River volume is measured in Cubic Feet per Second: <dfn
        title="Cubic Feet per Second">CFS</dfn
      >.
      <br/>
      Given a known / measured cross-section of river,
      <br/>
      volume is measured as width × depth × velocity.
      <br/><br/>
      The force of water is similar.
      <br/>
      Force is mass × velocity.
      <br/><br/>
      We can multiply the cfs (volume) × 62 to get the mass.
      <br/>
      500cfs is about 4,000 gallons or 30,000 lbs of water going by every second.
      <br/><br/>
      When you increase the velocity the force increases exponentially.
      <br/>Double the speed of a volume quadruples the force.
    </p>
  
    <h4>Pounds of force:</h4>
    <div class="table">
      {#each forces as force}
        <div class="cell velocity">{force.velocity}</div>
        <div class="cell legs">{force.legs}</div>
        <div class="cell body">{force.body}</div>
        <div class="cell boat">{force.boat}</div>
      {/each}
      <cite>Ohio Department of Natural Resources, 1980</cite>
    </div>
  
    <br/>

    <br/>
    <br/>
    <br/>
    <br/>

    <!-- <dd>
      Parting shot from Rabbit Valley <br>
      <img src="src/lib/images/rabbit_valley.png" alt="rabbit_valley" style="width:100%; max-width: 700px;">
    </dd> -->

    <!-- <div class="frame">
      <img src="src/lib/images/rabbit_valley.png" alt="rabbit_valley" class="choinard" />
    </div> -->
  </dl>
</div>

<!-- page -->

<style lang="postcss">
  .tunnel_falls {
    position: relative;
    width: 100%;
    filter: grayscale(80%) brightness(120%) opacity(30%);
  }
  .tunnel_falls::after {
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
      top: 5%;
      right: 22%;
      z-index: 5;
    }
  }

  dt:not(:first-of-type) {
    margin-top: 1rem;
  }
  h3:not(:first-of-type) {
    margin-top: 2rem;
  }
  p {
    margin: 0.5rem 0 1rem;
  }
  .table {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    gap: 0.1rem 1.5rem;

    .cell {
      text-align: right;
    }
    .cell:nth-of-type(1),
    .cell:nth-of-type(2),
    .cell:nth-of-type(3),
    .cell:nth-of-type(4) {
      text-align: left;
      font-size: 0.8em;
      font-weight: bolder;
    }
  }
  cite {
    grid-column: span 4;
    font-size: 0.75em;
    text-align: right;
  }
</style>
