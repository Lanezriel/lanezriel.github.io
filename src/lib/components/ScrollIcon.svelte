<div id="scroll-icon"></div>

<style lang="scss">
  #scroll-icon {
    --b-radius: 3px;
    --size: 2rem;

    position: absolute;
    bottom: 1rem;
    left: calc(50% - (var(--size) / 2));
    width: var(--size);
    height: var(--size);
    border-right: solid var(--b-radius) #e1e1e1;
    border-bottom: solid var(--b-radius) #e1e1e1;
    opacity: 0;
    transform: rotate(45deg);
    transform-origin: center;
    animation: scroll-icon 5s 2s ease-in-out infinite;

    &::before,
    &::after {
      content:"";
      position:absolute;
      width: var(--b-radius);
      height: var(--b-radius);
      background:#e1e1e1;
      border-radius:50%;
    }

    &::before {
      top:calc(-1 * var(--b-radius) / 2);
      right:0;
      transform:translateX(100%);
    }

    &::after {
      left:calc(-1 * var(--b-radius) / 2);
      bottom:0;
      transform:translateY(100%);
    }
  }
  
  @keyframes scroll-icon {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-50%, -50%);
    }
    10% {
      opacity: 1;
      transform: rotate(45deg) translate(0%, 0%);
    }
    20% {
      opacity: 1;
      transform: rotate(45deg) translate(-50%, -50%);
    }
    30% {
      opacity: 1;
      transform: rotate(45deg) translate(0%, 0%);
    }
    40% {
      opacity: 1;
      transform: rotate(45deg) translate(-50%, -50%);
    }
    50% {
      opacity: 0;
      transform: rotate(45deg) translate(0%, 0%);
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(0%, 0%);
    }
  }
</style>