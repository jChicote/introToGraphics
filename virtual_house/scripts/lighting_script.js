//js lighting script

function sunLight()
{
  /*This is only used for the creation of sunlight using pointlight

  This takes x,y,z and orientation/rotation of light.
  This also includes the specialisated code that allows for
  gui control of the light source. (IF NECESSARY) */

  sunLight = new THREE.DirectionalLight( 0xffffff, 1 );
  sunLight.position.set( 0, 50, 0 );
  sunLight.castShadow = true;

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
  //sunLight.shadowCameraVisible = true;
  scene.add( sunLight );

  //This outputs the line guide of the direct light
  var helper = new THREE.DirectionalLightHelper( sunLight, 5 );
  scene.add( helper );

  //ambient light of scene
  ambient = new THREE.AmbientLight( 0xE6E0A1, 0.3 );
  scene.add( ambient );


  var light = new THREE.PointLight( 0xcce0ff, 1, 100 );
  light.position.set( 0, 20, 0 );
  light.castShadow = true;
  light.bias = 20;
  light.shadow.mapSize.width = 2000;
  light.shadow.mapSize.height = 2000;
  scene.add( light );

}

  function objLight()
{
    /*This function is used for the creation of certain objects
    that contain their own light source (lamps, etc).
    It takes the x,y,z position/vector and also the orientation
    of object*/
    var objLight = new THREE.SpotLight( 0xffff00 );
    objLight.position.set(0,4,0);
    objLight.target.position.set(0,-4,0);
    objLight.castShadow = true;

    objLight.shadow.mapSize.width = 256;
    objLight.shadow.mapSize.height = 256;

    objLight.shadow.camera.near = 50;
    objLight.shadow.camera.far = 40;
    objLight.shadow.camera.fov = 3;
    scene.add( objLight );
    scene.add( objLight.target );



  }
