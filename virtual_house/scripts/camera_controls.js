//Camera functions
//
//
//View does change, but I haven't implemented the Pointer Lock Controls yet

function setupControls() {
  orbitCam();
  pointerLockCam();
}

//Orbit Camera
function orbitCam() {
  cam1 = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
  cam1.position.set(20,20,50 );
  cam1.lookAt(0,0,1);
  con1 = new THREE.OrbitControls( cam1, renderer.domElement);
}

//FirstPerson Camera
function pointerLockCam() {
  cam2 = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
  cam2.position.set( 0,-5,30 );
  cam2.lookAt(0,0,1);
  con2 = new THREE.PointerLockControls( cam2 );
  //scene.add( controls.getObject() );
}

//Default Orbit Camera function
function setControlsOrbit() {
    camera = cam1;
    controls = con1;
    controlsEnabled = false;
}

//First Person Camera view function
function setControlsFirstPerson() {
    camera = cam2;
    controls = con2;
    controlsEnabled = true;
}
