import Experience from "../Experience";
import CursorLight from "./CursorLight";
import Cubes from "./Cubes";
import Spheres from "./Spheres";
import RandomLights from "./RandomLights";
// import LightTrackers from "./LightTrackers";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // // Wait for resources
    // this.resources.on('ready', () => {
    //   // Setup
    //   this.cube = new Cube();
    // });

    // Setup
    if (this.sizes.width > 600) {
      this.cursorLight = new CursorLight();
    }
    this.randomLights = new RandomLights();
    // this.lightTrackers = new LightTrackers();
    this.cubes = new Cubes();
    this.spheres = new Spheres();
  }

  resize() {
    if (this.sizes.width > 600) {
      if (!this.cursorLight) {
        this.cursorLight = new CursorLight();
      }
    } else {
      if (this.cursorLight) {
        this.cursorLight.destroy();
        this.cursorLight = undefined;
      }
    }
  }

  update() {
    if (this.cursorLight) {
      this.cursorLight.update();
    }
    this.randomLights.update();
    // this.lightTrackers.update();
  }
}
