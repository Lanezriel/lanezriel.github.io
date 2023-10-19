<script>
  import { onMount } from 'svelte';
  import { quadOut } from 'svelte/easing';

	import SectionsList from '../lib/components/SectionsList.svelte';
  import HomeExperience from '$experiences/HomeExperience/HomeExperience.svelte';
	import ScrollIcon from '$lib/components/ScrollIcon.svelte';
	import WhoAmI from '$lib/components/home/WhoAmI.svelte';
	import Knowledge from '$lib/components/home/Knowledge.svelte';
	import Experience from '$lib/components/home/Experience.svelte';
	import Contact from '$lib/components/home/Contact.svelte';

  let rendered = false;

  onMount(async () => {
    rendered = true;

    // This is required because of the way Sveltekit handles import statements
    // GSAP plugins won't work properly unless registered this way
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

  function blurryAppear(node, { duration, delay }) {
    return {
      duration,
      delay,
      easing: quadOut,
      css: (t, u) => {
        return `
          opacity: ${t};
          filter: blur(${u * 2}rem);
        `;
      },
    };
  }
</script>

<svelte:head>
	<title>Dimitri Delbrouck - Frontend experience developer</title>
	<meta name="description" content="Dimitri Delbrouck - Frontend experience developer" />
</svelte:head>

<SectionsList/>

<section class="home-section title-wrapper">
  <HomeExperience />
  {#if rendered}
    <h1 in:blurryAppear={{ duration: 2000, delay: 0 }}>Dimitri Delbrouck</h1>
    <h2 in:blurryAppear={{ duration: 1000, delay: 1500 }}>Frontend experience developer</h2>
  {/if}
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
  }

  h1,
  h2 {
    text-align: center;
    font-weight: bold;
    opacity: 1;
    filter: blur(0);

    @include small {
      max-width: 70%;
    }
  }
  
  h1 {
    font-size: 4rem;

    @include small {
      font-size: 1.8rem;
    }
  }
  
  h2 {
    @include small {
      font-size: 0.9rem;
    }
  }
</style>