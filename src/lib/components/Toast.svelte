<script>
	import { toast } from '$lib/stores';

  $: if ($toast.visible === true) {
    setTimeout(() => {
      $toast.visible = false;
    }, $toast.duration);
  };
</script>

<div class="toast {$toast.type}" class:visible={$toast.visible}>
  <p class="head">{$toast.title}</p>
  <p class="body">{$toast.content}</p>
</div>

<style lang="scss">
  @import '$lib/styles/_mixins';

  .toast {
    position: fixed;
    left: 50vw;
    bottom: 3rem;
    max-width: 350px;
    background: hsl(0, 0%, 45%);
    border: solid 2px hsl(0, 0%, 40%);
    border-radius: 8px;
    overflow: hidden;
    z-index: 100;
    transform: translate(-50%, 100%);
    opacity: 0;
    transition: transform 300ms ease-in-out,
                opacity 300ms linear;
    
    @include small {
      bottom: 5vw;
      width: 90vw;
      max-width: unset;
    }
  }

  .visible {
    transform: translate(-50%, 0%);
    opacity: 1;
  }

  .head {
    padding: 0.5rem;
    background: hsl(0, 0%, 25%);
    border-radius: 6px 6px 0 0;
    border-bottom: solid 2px hsl(0, 0%, 40%);
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .body {
    padding: 0.5rem;
    color: white;
    white-space: pre-line;
  }

  .danger {
    background: hsl(0, 75%, 70%);
    border: solid 2px hsl(0, 65%, 45%);

    & > .head {
      background: hsl(0, 55%, 50%);
      border-bottom: solid 2px hsl(0, 65%, 45%);
    }

    & > .body {
      color: black;
    }
  }

  .success {
    background: hsl(120, 75%, 70%);
    border: solid 2px hsl(120, 65%, 45%);

    & > .head {
      background: hsl(120, 55%, 50%);
      border-bottom: solid 2px hsl(120, 65%, 54%);
      color: black;
    }

    & > .body {
      color: black;
    }
  }
</style>
