// function cycleShapes() {
// 	scene.remove(object)
// 	geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
// 	object = new THREE.Mesh(geometry, material);
// 	object.rotation.x = yRotation;
// 	object.rotation.y = yRotation;
// 	scene.add(object)
// }


let xRotation = 0, yRotation = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

// let geometry = new THREE.BoxGeometry();

// let material = new THREE.MeshBasicMaterial({
// 	color: 0x00ff00,
// 	wireframe: true
// });

// let object = new THREE.Mesh( geometry, material );
// scene.add( object );

// camera.position.z = 5;

import { GLTFLoader } from 'three.js-master/examples/jsm/loaders/GLTFLoader.js';

// const GLTFLoader = require('three.js-master/examples/jsm/loaders/GLTFLoader.js');

	const loader = new GLTFLoader();

	loader.load( 'Earth.glb', function ( earth ) {

		scene.add( earth.scene );

	}, undefined, function ( error ) {

		console.error( error );

	} );

function animate() {
	requestAnimationFrame( animate );

	xRotation = (xRotation + 0.01) % 360;
	yRotation = (yRotation + 0.01) % 360;

	earth.rotation.x = yRotation;
	earth.rotation.y = yRotation;

	// object.material.color.setHex(0xffffff);

	renderer.render( scene, camera );
};

animate();