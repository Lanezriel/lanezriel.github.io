<script>
  import SvelteIcon from '$lib/svg/technologies/SvelteIcon.svelte';
  import DjangoIcon from '$lib/svg/technologies/DjangoIcon.svelte';
  import PythonIcon from '$lib/svg/technologies/PythonIcon.svelte';
  import JavaScriptIcon from '$lib/svg/technologies/JavaScriptIcon.svelte';

  const domains = [
    {
      name: 'Languages',
      technologies: [
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'Python', icon: PythonIcon },
      ]
    },
    {
      name: 'Frameworks',
      technologies: [
        { name: 'Svelte', icon: SvelteIcon },
        { name: 'Django', icon: DjangoIcon },
      ],
    },
  ];
</script>

<section id="knowledge" class="home-section primary-alt">
  <h2 class="hidden">Knowledge</h2>

  <div class="scene">3D SCENE PLACEHOLDER</div>
  <div class="content">
    {#each domains as domain (domain.name)}
      <div class="domain">
        <h3>{domain.name}</h3>
        <div class="technologies">
          {#each domain.technologies as tech (tech.name)}
            <svelte:component this={tech.icon}/>
          {/each}
        </div>
      </div>
    {/each}
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

    & :global(svg) {
      width: 2rem;
      height: 2rem;
    }
  }

  .domain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .technologies {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
