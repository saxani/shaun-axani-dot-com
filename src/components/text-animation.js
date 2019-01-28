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
    this.bigView = false;
    this.bigPrevious = false;
    this.lastMove = 0;
    this.lastMovePositive = false;

    if (width > 736) {
      this.bigView = true;
      this.bigPrevious = true;
    }

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
    this.lights[1] = new THREE.DirectionalLight( 0xffffff, 1 );
    this.lights[1].position.set( 0.75, 1, 0.5 );
    this.lights[2] = new THREE.DirectionalLight( 0xf64f59, 1 );
    this.lights[2].position.set( -0.75, -1, 0.5 );
    this.lights[3] = new THREE.AmbientLight( 0x404040 ); // soft white light
    this.scene.add( this.lights[0] );
    this.scene.add( this.lights[1] );
    this.scene.add( this.lights[2] );
    this.scene.add( this.lights[3]  );

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


    //////// STUFF FOR PARTICLES
    this.particle = new THREE.Object3D();
    this.scene.add(this.particle);
    this.particleMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading
    });

    for (let i = 0; i < 1000; i++) {
      let particleGeometry = new THREE.SphereGeometry(Math.random() * 2 + 1, Math.random() * 15 + 5, Math.random() * 15 + 5);
      let mesh = new THREE.Mesh(particleGeometry, this.particleMaterial);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(90 + (Math.random() * 700));
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      this.particle.add(mesh);
    }

    //RESIZE
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

  this.textGeoSmall = new THREE.TextGeometry( "Shaun Axani", {
    font: font,
    size: 26,
    height: 20,
    curveSegments: 4,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelEnabled: true
  } );

  this.textGeo.center();
  this.textGeo = new THREE.BufferGeometry().fromGeometry( this.textGeo );
  this.textMesh = new THREE.Mesh( this.textGeo, this.materials );
  this.textMesh.position.y = 70;
  this.textMesh.rotation.y = 0.1;

  //Small size
  this.textGeoSmall.center();
  this.textGeoSmall = new THREE.BufferGeometry().fromGeometry( this.textGeoSmall );
  this.textMeshSmall = new THREE.Mesh( this.textGeoSmall, this.materials );
  this.textMeshSmall.position.y = 50;
  this.textMeshSmall.rotation.y = 0.1;

  if (this.bigView) {
    this.group.add( this.textMesh );
  } else {
    this.group.add( this.textMeshSmall );
  }

  this.textGeo2 = new THREE.TextGeometry( "Creative Technologist", {
    font: font,
    size: 24,
    height: 20,
    curveSegments: 4,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelEnabled: true
  } );

  this.textGeo2Small = new THREE.TextGeometry( "Creative Technologist", {
    font: font,
    size: 16,
    height: 20,
    curveSegments: 4,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelEnabled: true
  } );

  this.textGeo2.center();
  this.textGeo2 = new THREE.BufferGeometry().fromGeometry( this.textGeo2 );
  this.textMesh2 = new THREE.Mesh( this.textGeo2, this.materials );
  this.textMesh2.rotation.y = 0.1;

  this.textGeo2Small.center();
  this.textGeo2Small = new THREE.BufferGeometry().fromGeometry( this.textGeo2Small );
  this.textMesh2Small = new THREE.Mesh( this.textGeo2Small, this.materials );
  this.textMesh2Small.rotation.y = 0.1;
  this.textMesh2Small.position.y = 10;

  if (this.bigView) {
    this.group.add( this.textMesh2 );
  } else {
    this.group.add( this.textMesh2Small );
  }
}

changeTextSize() {
  if (this.bigView) {
    this.group.remove( this.textMeshSmall );
    this.group.remove( this.textMesh2Small );
    this.group.add( this.textMesh );
    this.group.add( this.textMesh2 );
  } else {
    this.group.remove( this.textMesh );
    this.group.remove( this.textMesh2 );
    this.group.add( this.textMeshSmall );
    this.group.add( this.textMesh2Small );
  }
}

onWindowResize() {

  if (window.innerWidth > 736) {
    this.bigView = true;
  } else {
    this.bigView = false;
  }

  if (this.bigPrevious !== this.bigView) {
    this.bigPrevious = this.bigView;
    this.changeTextSize();
  }

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

  if(this.group.rotation.y > this.lastMove) {
    this.lastMove = this.particle.rotation.y;
    this.lastMovePositive = false;
  } else if (this.group.rotation.y < this.lastMove) {
    this.lastMove = this.particle.rotation.y;
    this.lastMovePositive = true;
  }

  if (this.lastMovePositive) {
    this.particle.rotation.y += 0.0040;
  } else {
    this.particle.rotation.y -= 0.0040;
  }

  this.particle.rotation.y += ( this.targetRotation - this.group.rotation.y ) * 0.1;
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
