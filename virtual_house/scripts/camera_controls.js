//Camera functions
//
//
//View does change, but I haven't implemented the Pointer Lock Controls yet
function setupControls() {
  cam1 = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
  cam1.position.set(20,20,50 );
  cam1.lookAt(0,0,1);
  con1 = new THREE.OrbitControls( cam1, renderer.domElement);

  cam2 = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
  cam2.position.set( 0,5,45 );
  cam2.lookAt(0,0,1);
  con2 = new THREE.OrbitControls( cam2, renderer.domElement);
  //con2 = new THREE.PointerLockControls( cam2, renderer.domElement);
  //con2.lookSpeed = 0.05;
  //con2.movementSpeed = 50;
}

//Default Orbit Camera function
function setControlsOrbit() {
    camera = cam1;
    controls = con1;
}

//First Person Camera view function
function setControlsFirstPerson() {
    camera = cam2;
    controls = con2;
}
