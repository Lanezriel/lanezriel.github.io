<script>
  import icons from '$lib/svg/icons/common';

  let scrolled;
  let windowHeight;
  $: percentScrolled = (scrolled / document.body.scrollHeight) * 100;
  $: halfWindowHeight = windowHeight / 2;

  function goTo(targetSelector) {
    if (targetSelector === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.querySelector(targetSelector).scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:window bind:scrollY={scrolled} bind:innerHeight={windowHeight}/>

<div id="sections-list">
  <div class="slider" style="top: {percentScrolled}%;"></div>
  <button
    class="sections-list-item"
    class:active={scrolled < windowHeight - halfWindowHeight}
    on:click={() => goTo('#top')}
  >
    <!-- <HomeIcon/> -->
    <svelte:component this={icons.Home}/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= windowHeight - halfWindowHeight && scrolled < (windowHeight * 2) - halfWindowHeight}
    on:click={() => goTo('#who-am-i')}
  >
    <!-- <PersonIcon/> -->
    <svelte:component this={icons.Person}/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 2) - halfWindowHeight && scrolled < (windowHeight * 3) - halfWindowHeight}
    on:click={() => goTo('#knowledge')}
  >
    <!-- <KnowledgeIcon/> -->
    <svelte:component this={icons.Knowledge}/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 3) - halfWindowHeight && scrolled < (windowHeight * 4) - halfWindowHeight}
    on:click={() => goTo('#experience')}
  >
    <!-- <ExperienceIcon/> -->
    <svelte:component this={icons.Experience}/>
  </button>
  <button
    class="sections-list-item"
    class:active={scrolled >= (windowHeight * 4) - halfWindowHeight}
    on:click={() => goTo('#contact')}
  >
    <!-- <ContactIcon/> -->
    <svelte:component this={icons.Contact}/>
  </button>
</div>

<style lang="scss">
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
