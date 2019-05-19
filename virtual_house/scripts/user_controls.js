

function UserControls() {
  //this includes functions for onkeydown movement.

  //switching camera view + controls (Currently not working)
  var onKeyDown = function (event) {
				switch ( event.keyCode ) {
					case 70: /*F*/
          case 102: /*f*/
						setControlsFirstPerson();
						break;

					case 79: /*O*/
          case 111: /*o*/
						setControlsOrbit();
						break;

				}
			}
}
