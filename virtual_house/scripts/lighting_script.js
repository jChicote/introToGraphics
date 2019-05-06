//js lighting script

function sunLight()
{
  /*This is only used for the creation of sunlight using pointlight

  This takes x,y,z and orientation/rotation of light.
  This also includes the specialisated code that allows for
  gui control of the light source. (IF NECESSARY) */

  sunLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
  sunLight.position.set( 0, 50, 0 );
  sunLight.castShadow = true;
  //sunLight.position.multiplyScalar( 1.3 );
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;

  sunLight.shadow.camera.fov = 1;
  sunLight.shadow.camera.fov = 100;
  sunLight.shadow.camera.far = 1000;
  // THIS COMPONENT IS FIXED DO NOT EDIT

  scene.add( sunLight );

  //This outputs the line guide of the direct light
  var helper = new THREE.DirectionalLightHelper( sunLight, 5 );
  scene.add( helper );

  //ambient light of scene
  var ambience = new THREE.AmbientLight( 0xE6E0A1, 0.3 );
  scene.add( ambience );

}

function objLight()
{
  /*This function is used for the creation of certain objects
     that contain their own light source (lamps, etc).

     It takes the x,y,z position/vector and also the orientation
     of object*/

}
