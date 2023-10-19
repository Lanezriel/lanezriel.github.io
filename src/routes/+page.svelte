<script>
  import { onMount } from 'svelte';

  import HomeExperience from '$experiences/HomeExperience/HomeExperience.svelte';
	import ScrollIcon from '$lib/components/ScrollIcon.svelte';
	import WhoAmI from '$lib/components/home/WhoAmI.svelte';
	import Knowledge from '$lib/components/home/Knowledge.svelte';
	import Experience from '$lib/components/home/Experience.svelte';
	import Contact from '$lib/components/home/Contact.svelte';

	import HomeIcon from '$lib/svg/HomeIcon.svelte';
	import PersonIcon from '$lib/svg/PersonIcon.svelte';
	import KnowledgeIcon from '$lib/svg/KnowledgeIcon.svelte';
	import ExperienceIcon from '$lib/svg/ExperienceIcon.svelte';
	import ContactIcon from '$lib/svg/ContactIcon.svelte';

  let scrolled;
  let windowHeight;
  $: percentScrolled = (scrolled / document.body.scrollHeight) * 100;
  $: halfWindowHeight = windowHeight / 2;

  // This is required because of the way Sveltekit handles import statements
  // GSAP plugins won't work properly unless registered this way
  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');

    gsap.registerPlugin(ScrollTrigger);

    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-wrapper',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
    });

    const secondSectionTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#who-am-i',
        scrub: true,
        start: '-100%',
        end: '-25%',
        // markers: true,
      },
    });

    secondSectionTL.fromTo(
      '#who-am-i',
      { opacity: 0, filter: 'blur(20px)' },
      { opacity: 1, filter: 'blur(0px)' },
    );
  });

  function goTo(targetSelector) {
    if (targetSelector === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.querySelector(targetSelector).scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:head>
	<title>Dimitri Delbrouck - Frontend experience developer</title>
	<meta name="description" content="Dimitri Delbrouck - Frontend experience developer" />
</svelte:head>

<svelte:window bind:scrollY={scrolled} bind:innerHeight={windowHeight}/>

<div id="sections-list">
  <div class="slider" style="top: {percentScrolled}%;"></div>
  <button
    class="sections-list-item"
    class:active={scrolled < windowHeight - halfWindowHeight}
    on:click={() => goTo('#top')}
  >
    <HomeIcon/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= windowHeight - halfWindowHeight && scrolled < (windowHeight * 2) - halfWindowHeight}
    on:click={() => goTo('#who-am-i')}
  >
    <PersonIcon/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 2) - halfWindowHeight && scrolled < (windowHeight * 3) - halfWindowHeight}
    on:click={() => goTo('#knowledge')}
  >
    <KnowledgeIcon/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 3) - halfWindowHeight && scrolled < (windowHeight * 4) - halfWindowHeight}
    on:click={() => goTo('#experience')}
  >
    <ExperienceIcon/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 4) - halfWindowHeight}
    on:click={() => goTo('#contact')}
  >
    <ContactIcon/>
  </button>
</div>

<section class="home-section title-wrapper">
  <HomeExperience />
  <h1>Dimitri Delbrouck</h1>
  <h2>Frontend experience developer</h2>
  <ScrollIcon />
</section>

<WhoAmI/>
<Knowledge/>
<Experience/>
<Contact/>

<style lang="scss">
  @import '$lib/styles/_mixins';

  .title-wrapper {
    position: relative;
    flex-direction: column;
    background: rgb(16,0,33);
    background: radial-gradient(circle, rgba(16,0,33,1) 0%, rgba(0,0,0,1) 100%);
    z-index: -1;
    
    & h1,
    & h2 {
      text-align: center;
      font-weight: bold;
      opacity: 0;
      filter: blur(2rem);
      
      @include small {
        max-width: 70%;
      }
    }
    
    & h1 {
      font-size: 4rem;
      animation: blurry-appear 2s ease-in-out forwards;

      @include small {
        font-size: 1.8rem;
      }
    }
    
    & h2 {
      animation: blurry-appear 1s ease-in-out forwards;
      animation-delay: 1.5s;

      @include small {
        font-size: 0.9rem;
      }
    }
  }

  #sections-list {
    position: fixed;
    top: 50vh;
    right: 0.75rem;
    border-right: solid 2px rgba(255, 255, 255, 0.5);
    transform: translateY(-50%);
    z-index: 2;
    
    & :global(svg) {
      width: 2rem;
      height: 2rem;
    }

    & > .slider {
      position: absolute;
      right: -2px;
      height: 3rem;
      border-right: solid 2px rgba(255, 255, 255, 1);
    }
  }
  
  .sections-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 3rem;
    height: 3rem;
    text-align: right;
    background: none;
    color: rgba(255, 255, 255, 0.5);
    transition: all 300ms linear;
    cursor: pointer;

    &.active {
      color: rgba(255, 255, 255, 1);
    }
    
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
</style>