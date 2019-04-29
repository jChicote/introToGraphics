
function ClearScene(){
  for (let i = scene.children.length - 1; i >= 0; i--)
      if(scene.children[i].type == "Mesh")
          scene.remove(scene.children[i]);
}

function CreateScene() {

  //creating the floow
  var geoFloor = new THREE.BoxBufferGeometry( 30, 0.1, 30 );
	materialFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0, metalness: 0 } );
	var floor = new THREE.Mesh( geoFloor, materialFloor );
	scene.add( floor )

  var sphere_color = new THREE.Color(0.8,1,1);
  var sphere_geometry = new THREE.SphereGeometry(2, 32, 32 );
  sphere_material = new THREE.MeshPhongMaterial();
  sphere_material.color=sphere_color;
  sphere_material.shininess=100;


  sphere_material.wireframe=false;
  sphere_mesh = new THREE.Mesh( sphere_geometry, sphere_material );
  sphere_mesh.castShadow = true;
  scene.add( sphere_mesh );

  var ambient = new THREE.AmbientLight( 0xffffff, 1 );
  scene.add( ambient );

}
