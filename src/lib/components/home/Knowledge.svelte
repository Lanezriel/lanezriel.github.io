<script>
	import { onDestroy, onMount } from 'svelte';

  import KnowledgeExperience from '$experiences/KnowledgeExperience.js';
  import tooltip from '$actions/tooltip.js';
  import knowledge from '$data/knowledge.js';

  let canvas;
  let sceneDiv;
  let experience;

  onMount(() => {
    experience = new KnowledgeExperience(canvas, sceneDiv);
  })

  onDestroy(() => {
    if (experience) {
      experience.destroy();
      experience = null;
    }
  })
</script>

<section id="knowledge" class="home-section primary-alt">
  <div bind:this={sceneDiv} class="scene">
    <canvas bind:this={canvas}></canvas>
  </div>
  <div class="content">
    <h2>Technologies I use the most</h2>
    <div class="technologies">
      {#each knowledge as tech (tech.name)}
        <div use:tooltip={{ content: tech.name, animation: 'scale' }}>
          <svelte:component this={tech.icon}/>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @import  '$lib/styles/_mixins';

  section {
    padding: 5rem;
    gap: 1rem;

    @include small {
      flex-direction: column-reverse;
      padding: 1rem 4rem 1rem 1rem;
    }
  }

  .content,
  .scene {
    width: 50%;

    @include small {
      width: 100%;
      height: 50%;
    }
  }

  .scene {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    font-size: 1.5rem;
    text-align: center;
    padding-left: 1rem;

    & :global(svg) {
      width: 4rem;
      height: 4rem;

      @include small {
        width: 2rem;
        height: 2rem;
      }
    }

    @include small {
      gap: 1rem;
      font-size: 1rem;
      padding-left: unset;
    }
  }

  .technologies {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 500px;

    @include medium {
      max-width: 400px;
    }

    @include small {
      gap: 0.5rem;
      max-width: unset;
    }
  }
</style>
