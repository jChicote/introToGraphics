
function ClearScene()
{
  for (let i = scene.children.length - 1; i >= 0; i--)
      if(scene.children[i].type == "Mesh")
          scene.remove(scene.children[i]);
}

function CreateScene()
{

  //------------------- create and load model
  //loader.load('', HandleLoad());

  //------------------- creating the floor
  var grassTexture = textureLoader.load('textures/grasslight-big.png');
  var bumpTexture = textureLoader.load('textures/Grass_001_DISP.png');

  var geoFloor = new THREE.BoxBufferGeometry( 30, 0.1, 30 );
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.anisotropy = 20;
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
  sphere_mesh.receiveShadow = false;
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
  cube_mesh.receiveShadow = false;
  scene.add( cube_mesh );

}

function HandleLoad( geometry )
{

}
