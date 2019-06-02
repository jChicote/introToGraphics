
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
  /*var sphere_color = new THREE.Color(0xBE21B2);
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
  scene.add( cube_mesh );*/

}

function loadModels()
{


  tableMTL.setPath('textures/');
  tableMTL.load('table.mtl', function ( materials )
  {
    materials.preload();
    tableLoader.setMaterials( materials );
  tableLoader.load('models_&_assets/table.obj', function ( table )
  {
    table.position.set(-5,0,-17);
    table.scale.set(0.045,0.045,0.045);
    table.rotation.x= -90* Math.PI /180;

    table.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow=true;
          child.receiveShadow = true;
        }
    } );

    scene.add( table );
  } );
        });


  chairMTL.setPath('textures/');
  chairMTL.load('chair.mtl', function ( materials )
  {
    materials.preload();
    chairLoader.setMaterials( materials );


    chairLoader.load('models_&_assets/chair.obj', function ( chair )
      {
        chair.position.set(-5,0,-22);
        chair.scale.set(0.0045,0.0045,0.0045);
        //chair.rotation.y = -90* Math.PI/180;



        chair.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(chair);
      });

      chairLoader.load('models_&_assets/chair.obj', function ( chair )
      {
        chair.position.set(-5,0,-12);
        chair.scale.set(0.0045,0.0045,0.0045);
        chair.rotation.y = -180* Math.PI/180;



        chair.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(chair);
      });

          chairLoader.load('models_&_assets/chair.obj', function ( chair )
      {
        chair.position.set(-3,0,-17);
        chair.scale.set(0.0045,0.0045,0.0045);
        chair.rotation.y = -90* Math.PI/180;



        chair.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(chair);
      });

              chairLoader.load('models_&_assets/chair.obj', function ( chair )
      {
        chair.position.set(-7.5,0,-17);
        chair.scale.set(0.0045,0.0045,0.0045);
        chair.rotation.y = -270* Math.PI/180;



        chair.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(chair);
      });
  });



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

      fence_front_group_right.add(fence1);
      //fence_front_group_left.add(fence1);
      //scene.add( fence1 );
    });
  });

  //load fence 3
  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence2 )
    {

      fence2.scale.set(0.2,0.2,0.2);
      fence2.position.set(0,0,0);
      fence2.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_left.add(fence2);
      //fence_front_group_left.add(fence2);
      //scene.add( fence1 );
    });
  });

  //load fence side 5
  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence3 )
    {

      fence3.scale.set(0.2,0.2,0.2);
      fence3.position.set(0,0,0);
      fence3.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideR.add(fence3);
      //fence_front_group_left.add(fence2);
      //scene.add( fence1 );
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence4 )
    {

      fence4.scale.set(0.2,0.2,0.2);
      fence4.position.set(0,0,0);
      fence4.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideR.add(fence4);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence5 )
    {

      fence5.scale.set(0.2,0.2,0.2);
      fence5.position.set(0,0,19);
      fence5.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideR.add(fence5);
    });
  });


  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence6 )
    {

      fence6.scale.set(0.2,0.2,0.2);
      fence6.position.set(0,0,37);
      fence6.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideR.add(fence6);
    });
  });


  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence7 )
    {

      fence7.scale.set(0.2,0.2,0.2);
      fence7.position.set(0,0,55.8);
      fence7.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideR.add(fence7);
    });
  });


  //other side fence left
  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence8 )
    {

      fence8.scale.set(0.2,0.2,0.2);
      fence8.position.set(0,0,0);
      fence8.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideL.add(fence8);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence9 )
    {

      fence9.scale.set(0.2,0.2,0.2);
      fence9.position.set(0,0,19);
      fence9.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideL.add(fence9);
    });
  });


  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence10 )
    {

      fence10.scale.set(0.2,0.2,0.2);
      fence10.position.set(0,0,37);
      fence10.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideL.add(fence10);
    });
  });


  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence11 )
    {

      fence11.scale.set(0.2,0.2,0.2);
      fence11.position.set(0,0,55.8);
      fence11.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_front_group_sideL.add(fence11);
    });
  });

  //fence back
  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence12 )
    {

      fence12.scale.set(0.2,0.2,0.2);
      fence12.position.set(0,0,0);
      fence12.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_back_group.add(fence12);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence13 )
    {

      fence13.scale.set(0.2,0.2,0.2);
      fence13.position.set(0,0,19.4);
      fence13.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_back_group.add(fence13);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence14 )
    {

      fence14.scale.set(0.2,0.2,0.2);
      fence14.position.set(0,0,-19.4);
      fence14.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_back_group.add(fence14);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence15 )
    {

      fence15.scale.set(0.2,0.2,0.2);
      fence15.position.set(0,0,-38.8);
      fence15.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_back_group.add(fence15);
    });
  });

  fenceMTL.setPath('textures/');
  fenceMTL.load('Fence_White.mtl', function ( fence_material )
  {
    fence_material.preload();
    fenceLoader.setMaterials( fence_material );

    fenceLoader.load('models_&_assets/fence.obj', function ( fence16 )
    {

      fence16.scale.set(0.2,0.2,0.2);
      fence16.position.set(0,0,-58.2);
      fence16.traverse(function(child) {
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      fence_back_group.add(fence16);
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
        bed.position.set(22,0,12);
        bed.scale.set(0.005,0.005,0.005);
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



  //load bed
  /*var mtlloader = new THREE.MTLLoader();
  mtlLoader.setPath('textures/');
  mtlLoader.load('bed.mtl', function(materials) {
     materials.preload();
     var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('models_&_assets/');
      objLoader.load('bed.obj', function(object) {
        object.position.set(20,1.5,-8);
        object.scale.set(0.15,0.15,0.15);
        scene.add(object);
  }

)
}
)*/


  //loads lamp
  lampMTL.setPath('textures/');
  lampMTL.load('Floorlamp.mtl', function ( materials )
  {
    materials.preload();
    lampLoader.setMaterials( materials );

    lampLoader.load('models_&_assets/Floorlamp.obj', function ( lamp )
      {
        lamp.position.set(4,0.2,16.1);
        lamp.scale.set(1,0.8,1);
        //lamp.rotation.y = -90* Math.PI/180;

        lamp.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(lamp);
      });
  });

  //loads table
  coffeetableMTL.setPath('textures/');
  coffeetableMTL.load('coffeetable.mtl', function ( materials )
  {
    materials.preload();
    coffeetableLoader.setMaterials( materials );

    coffeetableLoader.load('models_&_assets/coffeetable.obj', function ( coffeetable )
      {
        coffeetable.position.set(15,0,-15.5);
        coffeetable.scale.set(0.0035,0.0035,0.0035);
        coffeetable.rotation.y = -90* Math.PI/180;

        coffeetable.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(coffeetable);
      });
  });
//floorlamp

/*lamp2MTL.setPath('textures/');
lamp2MTL.load('Floorlamp.mtl', function ( materials )
{
  materials.preload();
  lamp2Loader.setMaterials( materials );


  lamp2Loader.load('models_&_assets/Floorlamp.obj', function ( lamp2 )
    {
      lamp2.position.set(0,0,0);
      lamp2.scale.set(1,1,0.1);

      lamp2.traverse(function(child){
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(lamp2);
    });
});*/
    //loads sofa



  sofaMTL.setPath('textures/');
  sofaMTL.load('sofa.mtl', function ( materials )
  {
    materials.preload();
    sofaLoader.setMaterials( materials );


    sofaLoader.load('models_&_assets/sofa.obj', function ( sofa )
      {
        sofa.position.set(19.5,0,-15);
        sofa.scale.set(0.005,0.005,0.005);
        sofa.rotation.y = -90* Math.PI/180;



        sofa.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(sofa);
      });
  });

  fridgeMTL.setPath('textures/fridge/');
  fridgeMTL.load('fridge.mtl', function ( materials )
  {
    materials.preload();
    fridgeLoader.setMaterials( materials );


    fridgeLoader.load('models_&_assets/fridge.obj', function ( fridge )
      {
        fridge.position.set(-22,0,-15);
        fridge.scale.set(0.04,0.04,0.04);
        fridge.rotation.y = 90* Math.PI/180;



        fridge.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(fridge);
      });
  });

  kitchenMTL.setPath('textures/');
  kitchenMTL.load('kitchen.mtl', function ( materials )
  {
    materials.preload();
    kitchenLoader.setMaterials( materials );


    kitchenLoader.load('models_&_assets/kitchen.obj', function ( kitchen )
      {
        kitchen.position.set(-22,0,-7);
        kitchen.scale.set(0.11,0.11,0.11);
        kitchen.rotation.y = -90* Math.PI/180;



        kitchen.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(kitchen);
      });
  });

  stoveMTL.setPath('textures/stove/');
  stoveMTL.load('stove.mtl', function ( materials )
  {
    materials.preload();
    stoveLoader.setMaterials( materials );


    stoveLoader.load('models_&_assets/stove.obj', function ( stove )
      {
        stove.position.set(-22,2.2,0.3);
        stove.scale.set(0.55,0.55,0.55);
        stove.rotation.y = 90* Math.PI/180;



        stove.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(stove);
      });
  });


  tvMTL.setPath('textures/');

  tvMTL.load('tv.mtl', function ( materials )
  {
    materials.preload();
    tvLoader.setMaterials( materials );


    tvLoader.load('models_&_assets/tv.obj', function ( tv )
      {
        tv.position.set(4.5,0.1,-17);
        tv.scale.set(0.8,0.8,0.8);
        tv.rotation.x = -90* Math.PI/180;
        tv.rotation.z = -270* Math.PI/180;

        tv.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(tv);
      });
  });
  //lilylamp
  lilyMTL.setPath('textures/');

  lilyMTL.load('Lamp.mtl', function ( materials )
  {
    materials.preload();
    lilylampLoader.setMaterials( materials );


  lilylampLoader.load('models_&_assets/Lamp.obj', function ( lilylamp )
      {
        lilylamp.position.set(0,0,0);
        lilylamp.scale.set(0.5,0.5,0.5);

        lilylamp.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(lilylamp);
      });
  });


    cabinetMTL.setPath('textures/');
  cabinetMTL.load('cabinet.mtl', function ( materials )
  {
    materials.preload();
    cabinetLoader.setMaterials( materials );


    cabinetLoader.load('models_&_assets/cabinet.obj', function ( cabinet )
      {
        cabinet.position.set(-16,0.1,6.5);
        //cabinet.scale.set(0.8,0.8,0.8);

        cabinet.traverse(function(child){
          if ( child instanceof THREE.Mesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(cabinet);
      });
  });
  //artwork
  artworkLoader.load('models_&_assets/Elephant.obj', function ( artwork )
    {
      artwork.position.set(-8,0,15);
      artwork.scale.set(0.4,0.4,0.4);

      artwork.traverse(function(child){
        if ( child instanceof THREE.Mesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(artwork);
    });
    //vase2
    vase2MTL.setPath('textures/');
    vase2MTL.load('Wild.mtl', function ( materials )
    {
      materials.preload();
      vase2Loader.setMaterials( materials );

      vase2Loader.load('models_&_assets/Wild.obj', function ( vase2 )
        {
          vase2.position.set(18,0,-8);
          vase2.scale.set(0.2,0.2,0.2);

          vase2.traverse(function(child){
            if ( child instanceof THREE.Mesh ) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          scene.add(vase2);
        });
    });
    //vase2a
    vase2aMTL.setPath('textures/');
    vase2aMTL.load('Cats.mtl', function ( materials )
    {
      materials.preload();
      vase2aLoader.setMaterials( materials );

      vase2aLoader.load('models_&_assets/Cats.obj', function ( vase2a )
        {
          vase2a.position.set(10,0,0);
          vase2a.scale.set(0.01,0.01,0.01);

          vase2a.traverse(function(child){
            if ( child instanceof THREE.Mesh ) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          scene.add(vase2a);
        });
    });

}
