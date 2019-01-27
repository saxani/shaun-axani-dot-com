import React, { Component } from 'react';
import * as THREE from 'three';
import { withPrefix } from 'gatsby';

class TextAnimation extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = 400;
    this.windowHalfX = width / 2;
    this.mouseX = 0;
    this.mouseXOnMouseDown = 0;
    this.targetRotation = 0;
    this.targetRotationOnMouseDown = 0;
    this.pushed = false;
    this.over = false;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / 400, 1, 1500 );
    this.camera.position.z = 3;
    this.camera.position.set( 0, 200, 700 );
		this.cameraTarget = new THREE.Vector3( 0, 150, 0 );

    // GRADIENT LIGHTS
    this.lights = [];
    this.lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    this.lights[0].position.set( 1, 0, 0 );
    this.lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    this.lights[1].position.set( 0.75, 1, 0.5 );
    this.lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    this.lights[2].position.set( -0.75, -1, 0.5 );
    this.scene.add( this.lights[0] );
    this.scene.add( this.lights[1] );
    this.scene.add( this.lights[2] );

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    this.renderer.setSize(width, height);
    this.renderer.autoClear = false;
    this.renderer.setClearColor(0x000000, 0.0);
    this.mount.appendChild(this.renderer.domElement);

    //FONT
    this.loader = new THREE.FontLoader();
    this.loader.load( withPrefix('/fonts/helvetiker_regular.typeface.json'), function ( font ) {
      this.createText(font);
    }.bind(this) );

    //MATERIALS
    this.materials = [
			new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
			new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
		];

    //GROUP
    this.group = new THREE.Group();
		this.group.position.y = 100;
		this.scene.add( this.group );

    console.log(this);

    // EVENTS
    // document.addEventListener( 'touchstart', this.onDocumentTouchStart.bind(this), false );
    // document.addEventListener( 'touchmove', this.onDocumentTouchMove.bind(this), false );
    window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

    this.start();
  }

componentWillUnmount(){
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

createText(font){
  this.textGeo = new THREE.TextGeometry( "Shaun Axani", {
    font: font,
    size: 48,
    height: 20,
    curveSegments: 4,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelEnabled: true
  } );
  this.textGeo.computeBoundingBox();
  this.textGeo.computeVertexNormals();

  var centerOffset = - 0.8 * ( this.textGeo.boundingBox.max.x - this.textGeo.boundingBox.min.x );
  this.textGeo = new THREE.BufferGeometry().fromGeometry( this.textGeo );
  this.textMesh = new THREE.Mesh( this.textGeo, this.materials );
  this.textMesh.position.x = centerOffset;
  this.textMesh.position.y = 30;
  this.textMesh.position.z = 0;
  this.textMesh.rotation.x = 0;
  this.textMesh.rotation.y = Math.PI * 2;
  this.group.add( this.textMesh );
}

onWindowResize() {
	this.windowHalfX = window.innerWidth / 2;
	this.camera.aspect = window.innerWidth / 400;
	this.camera.updateProjectionMatrix();
	this.renderer.setSize( window.innerWidth, 400 );
}

onDocumentMouseDown( event ) {
  this.pushed = true;
	this.mouseXOnMouseDown = event.clientX - this.windowHalfX;
	this.targetRotationOnMouseDown = this.targetRotation;
}

onDocumentMouseMove( event ) {
  if(this.pushed && this.over) {
    this.mouseX = event.clientX - this.windowHalfX;
    this.targetRotation = this.targetRotationOnMouseDown + ( this.mouseX - this.mouseXOnMouseDown ) * 0.02;
  }
}

onDocumentMouseUp() {
  this.pushed = false;
}

onDocumentMouseOut() {
  this.over = false;
}

onDocumentMouseOver() {
  this.over = true;
}

onDocumentTouchStart( event ) {
	if ( event.touches.length === 1 ) {
		event.preventDefault();
		this.mouseXOnMouseDown = event.touches[ 0 ].pageX - this.windowHalfX;
		this.targetRotationOnMouseDown = this.targetRotation;
	}
}

onDocumentTouchMove( event ) {
	if ( event.touches.length === 1 ) {
		event.preventDefault();
		this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
		this.targetRotation = this.targetRotationOnMouseDown + ( this.mouseX - this.mouseXOnMouseDown ) * 0.05;
	}
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
  this.group.rotation.y += ( this.targetRotation - this.group.rotation.y ) * 0.05;
	this.camera.lookAt( this.cameraTarget );
	this.renderer.clear();
  this.renderer.render(this.scene, this.camera);
}

render(){
    return(
      <div onMouseOver={this.onDocumentMouseOver.bind(this)}
        onMouseOut={this.onDocumentMouseOut.bind(this)}
        onMouseDown={this.onDocumentMouseDown.bind(this)}
        onMouseMove={this.onDocumentMouseMove.bind(this)}
        onMouseUp={this.onDocumentMouseUp.bind(this)}
        onTouchStart={this.onDocumentTouchStart.bind(this)}
        onTouchMove={this.onDocumentTouchMove.bind(this)}
        style={{ width: '100%', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default TextAnimation;
