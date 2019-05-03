//js lighting script

function sunLight() {
  /*This is only used for the creation of sunlight using pointlight

  This takes x,y,z and orientation/rotation of light.
  This also includes the specialisated code that allows for
  gui control of the light source. (IF NECESSARY) */

  sunLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  sunLight.position.set(0, 50, 0);
  scene.add(sunLight, sunLight.target);

}

function objLight() {
  /*This function is used for the creation of certain objects
     that contain their own light source (lamps, etc).

     It takes the x,y,z position/vector and also the orientation
     of object*/

}
