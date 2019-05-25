
function ClearScene()
{
  for (let i = scene.children.length - 1; i >= 0; i--)
      if(scene.children[i].type == "Mesh")
          scene.remove(scene.children[i]);
}

function CreateScene()
{
  loadModels();
  console.log(scene.background.getHex());

  //------------------- creating the floor
  var grassTexture = textureLoader.load('textures/grasslight-big.png');
  var bumpTexture = textureLoader.load('textures/Grass_001_DISP.png');

  var geoFloor = new THREE.BoxBufferGeometry( 250, 0.1, 250 );
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;

  grassTexture.repeat.set(10,10);
  grassTexture.anisotropy = 20;
  bumpTexture.repeat.set(10,10);
  bumpTexture.anisotropu = 20;

  materialFloor = new THREE.MeshPhongMaterial();
  materialFloor.color = new THREE.Color( 0xbee5e8 );
  materialFloor.map = grassTexture;
  materialFloor.bumpMap = bumpTexture;
	var floor = new THREE.Mesh( geoFloor, materialFloor );
  floor.receiveShadow = true;
	scene.add( floor );

  //----------------- these are tests objects
  var sphere_color = new THREE.Color(0xBE21B2);
  var sphere_geometry = new THREE.SphereGeometry( 2, 32, 32 );
  sphere_material = new THREE.MeshPhongMaterial();
  sphere_material.color=sphere_color;
  sphere_material.shininess=10;
  sphere_material.wireframe=false;

  var sphere_mesh = new THREE.Mesh( sphere_geometry, sphere_material );
  sphere_mesh.position.y=2;
  sphere_mesh.castShadow = true;
  sphere_mesh.receiveShadow = true;
  scene.add( sphere_mesh );

  var cube_color = new THREE.Color(0xC3422B);
  var cube_geometry = new THREE.BoxGeometry(4,4, 4);
  cube_material = new THREE.MeshPhongMaterial();
  cube_material.color = cube_color;
  cube_material.wireframe=false;

  var cube_mesh = new THREE.Mesh( cube_geometry, cube_material );
  cube_mesh.position.y=3;
  cube_mesh.position.z=5;
  cube_mesh.castShadow = true;
  cube_mesh.receiveShadow = true;
  scene.add( cube_mesh );

}

function loadModels()
{
  modelLoader.load('models_&_assets/table.obj', function ( table )
  {
    table.position.set(10,0,10);
    table.scale.set(0.1,0.1,0.1);

    table.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow=true;
          child.receiveShadow = true;
        }
    } );

    scene.add( table );
    console.log(table);
  } );

  modelLoader.load('models_&_assets/desk.obj', function ( mesh )
  {
    mesh.position.set(-30,0,-10);
    mesh.scale.set(0.1,0.1,0.1);

    mesh.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow=true;
          child.receiveShadow = true;
        }
    } );

    scene.add( mesh );
  } );

  //loads house
  mtlLoader.setPath('textures/');
  mtlLoader.load('full_house.mtl', function ( materials )
  {
    materials.preload();
    modelLoader.setMaterials( materials );

    modelLoader.load('models_&_assets/full_house.obj', function ( house )
      {
        house.position.set(0,-1,0);
        house.scale.set(0.004,0.004,0.004);
        house.rotation.x = -90* Math.PI /180;

        house.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            //child.material.map = texture;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(house);
      });
  });

  //loads fence1
  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence1 )
    {

      fence1.scale.set(0.2,0.2,0.2);
      fence1.position.set(0,0,0);
      fence1.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group.add(fence1)
      //scene.add( fence1 );
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence2 )
    {

      fence2.scale.set(0.2,0.2,0.2);
      fence2.position.set(0,0,19);
      fence2.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group.add(fence2)
      //scene.add( fence1 );
    });
  });

 //loads bed
  bedMTL.setPath('textures/');
  bedMTL.load('bed.mtl', function ( materials )
  {
    materials.preload();
    bedLoader.setMaterials( materials );

    bedLoader.load('models_&_assets/bed.obj', function ( bed )
      {
        bed.position.set(12,1.5,16.1);
        bed.scale.set(0.1,0.1,0.1);
        bed.rotation.y = -90* Math.PI/180;

        bed.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            //child.material.map = texture;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(bed);
      });
  });

  //loads lamp
  lampMTL.setPath('textures/');
  lampMTL.load('lamp.mtl', function ( materials )
  {
    materials.preload();
    lampLoader.setMaterials( materials );

    lampLoader.load('models_&_assets/Lamp.obj', function ( lamp )
      {
        lamp.position.set(4,0.2,16.1);
        lamp.scale.set(0.3,0.3,0.3);
        //lamp.rotation.y = -90* Math.PI/180;

        lamp.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            //child.material.map = texture;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(lamp);
      });
  });


}
