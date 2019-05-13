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

  //Higher mapsize value increases the shadow quality
  sunLight.shadow.mapSize.width = 4096;
  sunLight.shadow.mapSize.height = 4096;

  //Below affects the lights spread around the world.
  sunLight.shadow.camera.left = -50;
  sunLight.shadow.camera.right = 50;
  sunLight.shadow.camera.top = 50;
  sunLight.shadow.camera.bottom = -50;

  sunLight.shadow.camera.near = 0.5;
  //sunLight.shadow.camera.fov = 50;
  sunLight.shadow.camera.far = 1000;
  sunLight.shadowCameraVisible = true;
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
