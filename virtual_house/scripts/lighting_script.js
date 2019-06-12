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
  sunLight.shadow.mapSize.width = 2096;
  sunLight.shadow.mapSize.height = 2096;

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

  //ambient light of scene
  ambient = new THREE.AmbientLight( 0xE6E0A1, 0.3 );
  scene.add( ambient );

  var light = new THREE.PointLight( 0xcce0ff, 1, 100 );
  light.position.set( 0, 20, 0 );
  light.castShadow = true;
  light.bias = 20;
  light.shadow.mapSize.width = 200;
  light.shadow.mapSize.height = 200;
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

function outdoorLight() {
  light1 = new THREE.PointLight( 0xff9115, 1, 20 );
  light1.position.set( 23, 8, 21 );
  light1.castShadow = true;
  scene.add( light1 );

  orb1 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb1.position.set(23, 8, 20 );
  scene.add( orb1 );

  light2 = new THREE.PointLight( 0xff9115, 1, 20 );
  light2.position.set( -22, 8, 21 );
  light2.castShadow = true;
  scene.add( light2 );

  orb2 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb2.position.set(-22, 8, 20 );
  scene.add( orb2 );

  light3 = new THREE.PointLight( 0xff9115, 1, 20 );
  //light3.castShadow = true;
  light3.position.set(-3, 9, 21 );
  scene.add( light3 );

  orb3 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb3.position.set(-3, 10, 18 );
  scene.add( orb3 );

  light4 = new THREE.PointLight( 0xff9115, 1, 20 );
  //light4.castShadow = true;
  light4.position.set(-3, 24, 21 );
  scene.add( light4 );

  orb4 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb4.position.set(-3, 24, 18 );
  scene.add( orb4 );

  light5 = new THREE.PointLight( 0xff9115, 2, 40 );
  light5.castShadow = true;
  light5.position.set(-25, 24, -3 );
  scene.add( light5 );

  orb5 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb5.position.set(-25, 24, -3 );
  scene.add( orb5 );

  light6 = new THREE.PointLight( 0xff9115, 2, 40 );
  light6.castShadow = true;
  light6.position.set(25, 24, -3 );
  scene.add( light6 );

  orb6 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb6.position.set(25, 24, -3 );
  scene.add( orb6 );

  light7 = new THREE.PointLight( 0xff9115, 1, 20 );
  //light7.castShadow = true;
  light7.position.set( 23, 8, -27  );
  scene.add( light7 );

  orb7 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb7.position.set(23, 8, -26.3 );
  scene.add( orb7 );

  light8 = new THREE.PointLight( 0xff9115, 1, 20 );
  //light8.castShadow = true;
  light8.position.set( -23, 8, -27  );
  scene.add( light8 );

  orb8 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb8.position.set(-23, 8, -26.3 );
  scene.add( orb8 );

  light9 = new THREE.PointLight( 0xff9115, 1, 20 );
  //light9.castShadow = true;
  light9.position.set( -11, 8, -27  );
  scene.add( light9 );

  orb9 = new THREE.Mesh( spherelightGeometry, sphere_material );
  orb9.position.set(-11, 8, -26.3 );
  scene.add( orb9 );
}
