

function UserControls() {
  //this includes functions for onkeydown movement.

  //fps movement
  var onKeyDown = function ( event ) {

    switch ( event.keyCode ) {

      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;

      case 49: //1
        setControlsOrbit();
        break;

      case 50: //2
        setControlsFirstPerson();
        break;

      case 90: // up

        woodFloors();
        break;

      case 88: // up

        tileFloors();
        break;

      case 67: // up

        tile2Floors();
        break;
    }

  };

  var onKeyUp = function ( event ) {

    switch( event.keyCode ) {

      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;

      case 49: // 1
        setControlsOrbit();
        break;

      case 50: // 2
        setControlsFirstPerson();
        break;

      case 90: // z

        woodFloors();
        break;

      case 88: // x

        tileFloors();
        break;

      case 67: // c

        tile2Floors();
        break;
    }
  };

      /*var raycaster = new THREE.Raycaster();

      var selectedObj = false;

      function onDocumentMouseDown( event ) {

         var mouse = new THREE.Vector2;
         mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
         mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

         raycaster.setFromCamera( mouse, camera );

         var intersects = raycaster.intersectObjects( scene.children, false );

         if ( intersects.length > 0 ) {
             if ((intersects[ 0 ].object.name=="loaded_mesh")&&(!selectedObj))
             {
               console.log("Selected!");
               //var FaceI=intersects[ 0 ].face;
               intersects[ 0 ].object.material.color= new THREE.Color(1,0.5,0.5);
               selectedObj = true;
             }
             if ((intersects[ 0 ].object.name!="loaded_mesh")&&(selectedObj))
             {
               mesh.material.color= new THREE.Color(0.9,0.9,0.9);
               var pos=intersects[0].point;
               console.log("Placed!");
               mesh.position.x=pos.x;
               mesh.position.y=pos.y;
               selectedObj = false;
             }
         }
      }

document.addEventListener( 'mousedown', onDocumentMouseDown, false );*/

  document.addEventListener( 'keydown', onKeyDown, false );
  document.addEventListener( 'keyup', onKeyUp, false );
}
