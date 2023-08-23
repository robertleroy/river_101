<script>
  import Kayaks from "$lib/images/f-street-kayaks.png";
  let title = "First Week";
</script>

<div class="page">
  <div class="frame">
    <h2>First Week</h2>
    <img src={Kayaks} alt="f-street-kayaks" class="kayaks" />
  </div>

  <div class="preface">
    The following roughly summarizes the first 2 weeks of guide training, 
    <div class="indent">typical progressions and areas to focus on:</div>
  </div>

  <!-- <h4>Day 0 </h4>
  <p>
  Day zero: Take care of administrative stuff, intros, boathouse tour, and then a guided trip down the Upper Eagle.
  The point of this trip was to show our product, guided by the instructors.  Alot of off hand thinking out, ie. what the guide is thinking about, how he reads the current ahead, how he sets up a move...  etc.  It's mostly just good fun, not alot of comprehension expected.  Good ice breaker all the way around.  
  </p> -->

  <h4>Day 1: Upper Colorado </h4>
  <p>
    Day one was always an exercise of bouncing from one river bank to the other, then back.  Most people have a really hard time just staying in slow moving current.  <em class="sidenote">I assume lack of awareness of various current changes ~ or ~ the need to stop/counter boat momentum/residual drift.</em> I remember this day from my training trip also.  Awkward first steps...  
  </p>
  <p>
    I learned on oars.  Most trips were oar rigs in 1987 or 88 I think it was.  That changed completely in the next couple of years.  I think it is easier to learn all the river stuff on oars as opposed to learning to manage a crew at the same time.  On oars all you need to do is learn which hand is right, which left.  And you don't have to tell anyone about it.
  </p>
  <p>
    Either way, day one is mostly getting a feel for how heavy the boat is, how quick or how sluggish it is to spin.  First experiences with the force of the current, managing and countering momentum, balancing that with the speed and direction of the current.  How well or how poorly the boat tracks.
  </p>
  <p>
    The first time at the wheel, I would task people to spin both directions, fast, slow.  Forward and Back, with, against, and across the current.  Just to feel it.  A good game to play is to get the boat spinning, then pick a direction. "3 o'clock" or "7 o'clock", being the orientation to the river to stop the rotation and hold the angle.  Just getting a feel for the boat, develop new muscles and memory.  Paddle boats need to learn how much you can do with a paddle vs how much you can do with a crew.  You get 2 10ft paddles!  Bonus.
  </p>

  <p>This is your first goal.  Pick a stretch with slow current and few features.  Try to stay in the current.  Get a feel for the weight and momentum of the boat. Once you can stay in a clear wide open channel, time to move on.</p>

  

  <h4>Day Two: Upper Colorado</h4>
  <p>
    Random goals / games on the way downstream.  Throw a paddle in the river and chasing it down.  Pick random spots (eddies) on the river and make your move to get there.  Endless suggestions of "point way above your target".  "Start your move way early".  It dosent matter how many times you say it, it takes about 3 days to begin to hear it apparently.  So this is a universal learning hurdle.  Realizing that you need to take into account the 3 mph you are moving downstream when you plot an angle, a route.  It just takes some time to get that feel.   
  </p>
  <p>This is really goal 2.  Not necesarily catching the eddy, but practicing the general angles and momentum to acheive the goal. Anticipating.</p>
  <p>
    Another day two scenario: <br>
     "See that Big Rock (BFR) in the river, the only one around?  Don't hit it."  That pretty much assures they are going to hit it.  Because now they were focusing on it.  Mistake.  <br>
    Don't focus on the obsticle.  Notice the obsticle, then focus on the clear path.  That is how you drive, how you ride a bike...  Focus on your lane.  If you catch yourself obsessively focusing on an obsticle, take a breath, reorient your focus.
  </p>

  <h4>Day Three:</h4>
  <p>Focus on eddies.  Big ass eddies.  I can't tell you how many bushes in slow water I have been dragged through on training trips.  These are NOT eddies (lol).  Day 3: Pick <em>big ass eddies</em>.  If you are past the eddy, in slow water, you will continue to go down stream..  Make a plan B.  Again, don't let focusing so hard on plan A interfere with realizing you have already missed plan A.  Don't argue with the river about it.</p>
  <p>I really like the strech below State Bridge for this (State Bridge to Bond - 4ish miles to Two Bridges boat ramp.).  
    <br><br>
  No big rapids here.  A riffle then a float, then a riffle then a float...  Great eddies after each little riffle.  A few of them were great for going from the eddy on one side to the eddy on the other.  Quick little 'ferries' back and forth across the riffle. (39.854876844868855, -106.66422447906656)  Late summer this may not have the features I am thinking of, my training memories are all from late May flows.</p>

  <p>Many people show begin to show good progress on day 3.  Still making moves late, but beginning to anticipate.  Setting angles more aggressively, though often not enough.  Better at holding lines and angles.  Beginning to be able to read the currents and obsticles.  Few people having difficulty staying in the current.</p>

  <p>Also day 3, more paddle chasing: sets good short term goals.  Spontaneous event driven goals requireing response and adaptation.</p>

  <h4>Day Four: </h4>
  <p>Working into easy class 3 at this point.  We still have training wheels on, but stepping up .. half a notch.  Other than that, see day 3.</p>

  <br>

  <h4>Week Two: Lower Eagle</h4>

  <p>Easy class 3 shouldn't be a problem.  Beginning to run larger more complex class 3 </p>

  <ul>
    <li>Larger rapids</li>
    <li>Complex rapids, linking multiple moves</li>
    <li>Scouting rapids</li>
    <ul>
      <li>Identify obsticles / hazards</li>
      <li>Identify possible routes</li>
      <li>Plot out strategies to acheive routes.</li>
      <li>Identify alternatives (plan B?)</li>
    </ul>
    <li>Challenging yourself with more difficult eddies.</li>
  </ul>

  <p>Start to challenge yourself with smaller eddies. pick an eddy thats harder to get to, plan and link moves together...</p>



</div>

<!-- page -->

<style lang="postcss">
  .kayaks {
    position: relative;
    width: 100%;
    filter: grayscale(60%) brightness(120%) opacity(20%);
  }
  .kayaks::after {
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
      top: 20%;
      /* width: 100%;
      text-align: center; */
      left: 20%;
      z-index: 5;

      @media (min-width: 500px) {
        /* top: 40%; */
        /* left: 35%; */
      } 
    }
  }
  .preface {
    width: 80%;
    margin: 2rem auto;
  }
</style>
