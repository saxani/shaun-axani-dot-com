import React, { Component } from 'react';
import * as THREE from 'three';
// import { GPUParticleSystem } from '../libs/GPUParticleSystem';

class ThreeScene extends Component {
  constructor() {
    super();
    this.tick = 0;
    this.clock = new THREE.Clock();
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = 400;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 3;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //PARTICLE
    this.particleSystem = new THREE.Points( {
      maxParticles: 250000
    } );

    this.scene.add(this.particleSystem);

    //PARTICLE OPTIONS
    this.options = {
				position: new THREE.Vector3(),
				positionRandomness: .3,
				velocity: new THREE.Vector3(),
				velocityRandomness: .5,
				color: 0xaa88ff,
				colorRandomness: .2,
				turbulence: .5,
				lifetime: 2,
				size: 5,
				sizeRandomness: 1
			};

			this.spawnerOptions = {
				spawnRate: 15000,
				horizontalSpeed: 1.5,
				verticalSpeed: 1.33,
				timeScale: 1
			};

    //ADD CUBE
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: '#433F81'     });
    // this.cube = new THREE.Mesh(geometry, material);
    // this.scene.add(this.cube);
    this.start();
  }

componentWillUnmount(){
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

stop = () => {
    cancelAnimationFrame(this.frameId);
  }

animate = () => {
  let delta = this.clock.getDelta() * this.spawnerOptions.timeScale;

	this.tick += delta;

	if ( this.tick < 0 ) this.tick = 0;

	if ( delta > 0 ) {
		this.options.position.x = Math.sin( this.tick * this.spawnerOptions.horizontalSpeed ) * 20;
		this.options.position.y = Math.sin( this.tick * this.spawnerOptions.verticalSpeed ) * 10;
		this.options.position.z = Math.sin( this.tick * this.spawnerOptions.horizontalSpeed + this.spawnerOptions.verticalSpeed ) * 5;

		for ( var x = 0; x < this.spawnerOptions.spawnRate * delta; x ++ ) {
			this.particleSystem.spawnParticle( this.options );
		}

	}

	// this.particleSystem.update( this.tick );

   // this.cube.rotation.x += 0.01;
   // this.cube.rotation.y += 0.01;
   this.renderScene();
   this.frameId = window.requestAnimationFrame(this.animate);
 }

renderScene = () => {
  this.renderer.render(this.scene, this.camera);
}

render(){
    return(
      <div
        style={{ width: '100%', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeScene;
