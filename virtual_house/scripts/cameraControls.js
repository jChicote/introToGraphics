//js Camera Controls

// This is used for changing the controls of the different camera views

function setControlsFirstPerson() {

    camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
    camera.position.set( 45, 20, 0 );
    controls = new THREE.PointerLockControls(camera, renderer.domElement );
    controls.lookSpeed = 0.05;
    controls.movementSpeed = 50;

    controls.enabled = true;
		scene.add( controls.getObject() );

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

				}
			};

			document.addEventListener( 'keydown', onKeyDown, false );
			document.addEventListener( 'keyup', onKeyUp, false );

}


function setControlsOrbit() {

    camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 1000 );
    camera.position.set( 20, 20, 50 );
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enabled = false;

}
