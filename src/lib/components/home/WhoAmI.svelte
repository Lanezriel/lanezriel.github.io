<script>
	import { onDestroy, onMount } from 'svelte';
  import * as THREE from 'three';

  import toast from '$lib/utils/toast';

  let canvas;
  let sceneDiv;

  let sizes;
  let scene;
  let camera;
  let renderer;
  let geometry;
  let material;
  let mesh;
  let ambientLight;
  let directionalLight;
  let clock;


  function showToast() {
    toast(
      'Still under construction',
      'The link is not yet ready. Please wait for a future version to be released.',
      'danger',
      2500,
    );
  }

  function getSceneSizes() {
    const elementSizes = sceneDiv.getBoundingClientRect();

    return {
      width: elementSizes.width,
      height: elementSizes.height,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    };
  }

  function resize() {
    // Update sizes
    sizes = getSceneSizes();

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(sizes.pixelRatio);
  }

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    mesh.rotation.x = Math.sin(elapsedTime * 0.25);
    mesh.rotation.y = elapsedTime * 0.5;

    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
  }

  onMount(() => {
    sizes = getSceneSizes();

    scene = new THREE.Scene();

    window.addEventListener('resize', resize);

    camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, 8);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });

    renderer.useLegacyLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.CineonToneMapping;
    renderer.toneMappingExposure = 1.75;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(sizes.pixelRatio);

    geometry = new THREE.IcosahedronGeometry(1.5, 0);
    material = new THREE.MeshStandardMaterial();
    mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    scene.add(mesh);

    ambientLight = new THREE.AmbientLight('#1b0024', 0.2);
    scene.add(ambientLight);

    directionalLight = new THREE.DirectionalLight('#f3ceff', 0.3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(256, 256);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.normalBias = 0.05;
    directionalLight.position.set(1, 1.5, 5);
    scene.add(directionalLight);

    // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, '#ff0000');
    // scene.add(directionalLightHelper);

    clock = new THREE.Clock();

    animate();
  })

  onDestroy(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        Object.keys(child.material).forEach((key) => {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === 'function') {
            value.dispose();
          }
        });
      }
    })

    renderer.dispose();
    renderer = null;

    camera = null;
    window.removeEventListener('resize', resize);
    scene = null;
  })
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
  <div bind:this={sceneDiv} class="scene">
    <canvas bind:this={canvas}></canvas>
  </div>
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
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
      text-align: center;
    }
  }

  .scene {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;

    & canvas {
      outline: none;
    }
  }
</style>
