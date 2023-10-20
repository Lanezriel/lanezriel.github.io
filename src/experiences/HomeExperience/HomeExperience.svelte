<script>
	import { onDestroy, onMount } from 'svelte';

  import HomeExperience from './classes/Experience';

  let canvas;
  let experience;

  onMount(() => {
    experience = new HomeExperience(canvas);
  });

  onDestroy(() => {
    if (experience) {
      experience.destroy();
      experience = null;
    }
  });
</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
  }
</style>