<script>
  import tooltip from '$actions/tooltip.js';
  import knowledge from '$data/knowledge.js';
</script>

<section id="knowledge" class="home-section primary-alt">
  <div class="scene">3D SCENE PLACEHOLDER</div>
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
      padding: 3rem 5rem 3rem 2rem;
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
    background: rgb(255, 255, 255, 0.1);
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
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    @include small {
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

    @include small {
      max-width: unset;
    }
  }
</style>
