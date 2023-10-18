import * as THREE from "three";

import Experience from "../Experience";
import cursorLightVertexShader from "../shaders/cursorLight/vertex.js";
import cursorLightFragmentShader from "../shaders/cursorLight/fragment.js";

export default class RandomLights {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.time = this.experience.time;
    this.cursor = this.experience.cursor;
    this.scene = this.experience.scene;

    this.start = 18;

    // Setup
    this.setPlaneGeometry();
    this.setPlaneMaterial();
    this.setLight();
    this.setPlane();
  }

  getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const light = 30 + Math.floor(Math.random() * 20);

    return `hsl(${hue}, 50%, ${light}%)`;
  }

  setPlaneGeometry() {
    this.planeGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
  }

  setPlaneMaterial() {
    this.planeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xc000ff) },
      },
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader: cursorLightVertexShader,
      fragmentShader: cursorLightFragmentShader,
    });
  }

  setLight() {
    this.light = new THREE.PointLight(0x3000ff, 3, 4, 2);
    this.light.castShadow = true;
    // this.light.shadow.camera.near = 0.01;
  }

  setPlane() {
    this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    this.plane.add(this.light);
    
    setInterval(() => {
      this.start = this.time.elapsed;

      const color = new THREE.Color(this.getRandomColor());
      this.light.color = color;
      this.planeMaterial.uniforms.uColor.value = color;
      
      this.plane.scale.set(0.75, 0.75, 0.75);

      const hSpread = this.sizes.width > 600 ? 8 : 2.5;
      const vSpread = this.sizes.width > 600 ? 4 : 5;
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * hSpread,
        (Math.random() - 0.5) * vSpread,
        (Math.random() * 0.1) - 0.2
      );

      this.plane.position.set(...position);

      this.scene.add(this.plane);

      setTimeout(() => {
        this.scene.remove(this.plane);
      }, 2000);
    }, 3000);
  }

  update() {
    const elapsed = this.time.elapsed - this.start;
    const t = (elapsed * 0.001);
    
    if (elapsed < 1250) {
      const scale = THREE.MathUtils.lerp(0, 1, t);
      this.plane.scale.set(scale, scale, scale);

      const intensity = THREE.MathUtils.lerp(0, 0.25, t);
      this.light.intensity = intensity;
    } else {
      const scale = THREE.MathUtils.lerp(1.3, 0, t - 1.25);
      this.plane.scale.set(scale, scale, scale);

      const intensity = THREE.MathUtils.lerp(0.325, 0, t - 1.25);
      this.light.intensity = intensity;
    }
  }
}