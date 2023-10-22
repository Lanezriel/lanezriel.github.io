<script>
  import { fade } from 'svelte/transition';
  import { form, field } from 'svelte-forms';
  import { required, email } from 'svelte-forms/validators';
  import emailjs from '@emailjs/browser';

  // let canvas;
  let sceneDiv;

  const name = field('name', '', [required()]);
  const mail = field('email', '', [required(), email()]);
  const subject = field('subject', '', [required()]);
  const message = field('message', '');
  const contactForm = form(name, mail, subject, message);

  $: isFormValid = $name.dirty && $mail.dirty && $subject.dirty && $contactForm.valid;

  function handleSubmit(e) {
    if (isFormValid) {
      emailjs.sendForm('service_7p5b5h9', 'template_ogfcoin', e.target)
        .then(() => console.log('message sent!'))
        .catch((err) => console.error(err));
    } else {
      console.log('INVALID');
    }
  }
</script>

<section id="contact" class="home-section primary-alt">
  <div bind:this={sceneDiv} class="scene">
    <!-- <canvas bind:this={canvas}></canvas> -->
    <p>3D Scene later...</p>
  </div>
  <div class="content">
    <h2>Contact</h2>
    <form id="contact-form" on:submit|preventDefault={handleSubmit}>
      <div class="input-group">
        <label for="name-input" class="required">Name</label>
        <input
          id="name-input"
          type="text"
          name="name"
          class:error={$name.invalid}
          class:success={$name.dirty && $name.valid}
          bind:value={$name.value}
          required
        />
        <div class="error">
          {#if $contactForm.hasError('name.required')}
            <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Required</p>
          {/if}
        </div>
      </div>
      <div class="input-group">
        <label for="email-input" class="required">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          class:error={$mail.invalid}
          class:success={$mail.dirty && $mail.valid}
          bind:value={$mail.value}
          required
        />
        <div class="error">
          {#if $contactForm.hasError('email.required')}
            <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Required</p>
          {:else if $contactForm.hasError('email.not_an_email')}
            <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Invalid email</p>
          {/if}
        </div>
      </div>
      <div class="input-group">
        <label for="subject-input" class="required">Subject</label>
        <input
          id="subject-input"
          type="text"
          name="subject"
          class:error={$subject.invalid}
          class:success={$subject.dirty && $subject.valid}
          bind:value={$subject.value}
          required
        />
        <div class="error">
          {#if $contactForm.hasError('subject.required')}
            <p in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>Required</p>
          {/if}
        </div>
      </div>
      <div class="input-group">
        <label for="message-input">Message</label>
        <input
          id="message-input"
          type="text"
          name="message"
          bind:value={$message.value}
        />
      </div>
      <button type="submit" disabled={!isFormValid}>Send</button>
    </form>
  </div>
</section>

<style lang="scss">
  @import '$lib/styles/_mixins';

  $error: hsl(0, 100%, 45%);
  $success: hsl(120, 100%, 40%);

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
    background: rgb(255, 255, 255, 0.1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    gap: 2rem;

    @include small {
      gap: 0;
      font-size: 1rem;
      padding-left: unset;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

    @include small {
      gap: 0.75rem;
    }
  }

  .input-group {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;

    & > div.error {
      position: absolute;
      left: 0;
      top: 100%;
      display: grid;
      font-size: 0.8rem;
      color: $error;

      & > p {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      }

      @include small {
        font-size: 0.7rem;
      }
    }

    @include small {
      gap: 0.1rem;
    }
  }

  label {
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;

    &.required {
      &::after {
        content: '*';
        position: absolute;
        top: 0;
        left: calc(100% + 2px);
        color: $error;
      }
    }

    @include small {
      font-size: 0.9rem;
    }
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: solid 2px #666;
    border-radius: 8px;
    transition: border 300ms linear,
                box-shadow 300ms linear;

    &:focus {
      outline: none;
    }

    &.error {
      border: solid 2px $error;
      box-shadow: inset 0 0 4px $error;
    }

    &.success {
      border: solid 2px $success;
      box-shadow: inset 0 0 4px $success;
    }

    @include small {
      font-size: 0.9rem;
      padding: 0.25rem;
    }
  }

  button[type="submit"] {
    align-self: flex-end;
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
    
    &[disabled] {
      color: grey;
      border: solid 2px grey;
      cursor: unset;
    }

    &:not([disabled]):hover {
      color: black;
      background: rgba(255, 255, 255, 1);
    }

    @include small {
      padding: 0.25rem 1rem;
      font-size: 1.25rem;
    }
  }
</style>
