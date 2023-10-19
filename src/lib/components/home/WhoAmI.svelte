<script>
  import toast from '$lib/utils/toast';

  function showToast() {
    toast(
      'Still under construction',
      'The link is not yet ready. Please wait for a future version to be released.',
      'danger',
      2500,
    );
  }
</script>

<section id="who-am-i" class="home-section primary">
  <h2 class="hidden">Who am I?</h2>

  <div class="content">
    <p>Hey there!</p>
    <p>I'm Dimitri, a Fullstack developer who really apreciates the Frontend part, the UX/UI and 3D.</p>
    <p>I like to create beautiful UI with nice UX.</p>
    <p>Wanna know more?</p>
    <button on:click={showToast}>Come along</button>
  </div>
  <div class="scene">3D SCENE PLACEHOLDER</div>
</section>

<style lang="scss">
  @import  '$lib/styles/_mixins';

  section {
    padding: 5rem;
    gap: 1rem;

    @include small {
      flex-direction: column;
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    font-size: 1.5rem;

    & > button {
      padding: 0.5rem 1.5rem;
      color: #e1e1e1;
      border: solid 2px white;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0);
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      transition: color 300ms linear,
                  background 300ms linear;

      &:hover {
        color: black;
        background: rgba(255, 255, 255, 1);
      }

      @include small {
        padding: 0.25rem 1rem;
        font-size: 1.25rem;
      }
    }

    @include small {
      gap: 1rem;
      font-size: 1rem;
    }
  }

  .scene {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    background: rgba(0, 0, 0, 0.75);
  }
</style>
