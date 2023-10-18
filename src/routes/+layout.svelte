<script>
  import '$lib/styles/styles.scss';
	import Toast from '$lib/components/Toast.svelte';
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