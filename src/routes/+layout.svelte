<script>
  import Toast from '$lib/components/Toast.svelte';

  import '$lib/styles/styles.scss';
  import 'tippy.js/dist/tippy.css';
  import 'tippy.js/animations/scale.css';
</script>

<slot></slot>
<Toast/>

<style lang="scss">
  @mixin small {
    @media (max-width: 600px) {
      @content;
    }
  }
</style>