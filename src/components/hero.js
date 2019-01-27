import React, { Component } from 'react';
import heroStyles from '../styles/hero.module.scss';
import * as THREE from 'three';
import { withPrefix } from 'gatsby';
import TextAnimation from './text-animation';


class ThreeScene extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = 400;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      30,
      width / height,
      1,
      1500
    );
    this.camera.position.z = 30;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //FONT
    var loader = new THREE.FontLoader();
    var geometry;


    loader.load( withPrefix('/fonts/helvetiker_regular.typeface.json') , function ( font ) {

    	geometry = new THREE.TextGeometry( 'Shaun Axani', {
    		font: font,
    		size: 80,
    		height: 5,
    		curveSegments: 12,
    		bevelEnabled: true,
    		bevelThickness: 10,
    		bevelSize: 8,
    		bevelSegments: 5
    	} );
    } );

    //geometry = new THREE.BufferGeometry().fromGeometry( geometry );

    var materials = [
        new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
        new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
      ];

    var textMesh = new THREE.Mesh( geometry, materials );

    this.scene.add(textMesh);

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


const Hero = ({ siteTitle }) => (
  <div className ={heroStyles.container}>
    <TextAnimation />
  </div>
);

export default Hero;
