

/*function buildGui() {
  console.log(materialFloor);
  console.log(materialFloor.color.getHex());
  gui = new dat.GUI();
  gui.open();

  //gui parameters
  var param = {
    color: materialFloor.color.getHex()
  }

  //Folders
  var flooring = gui.addFolder( 'Flooring' );

  //gui functions
  flooring.gui.addColor( param, 'color' ).onChange( function ( val ) {
    console.log(val);
    materialFloor.color.setHex( val );
  } );

}*/

function buildGui() {
      gui = new dat.GUI();
      var params = {
        color: materialFloor.color.getHex(),

      }

      var flooring = gui.addFolder( 'Flooring' );
      flooring.addColor( params, 'color' ).onChange( function ( val ) {
        materialFloor.color.setHex( val );
      } );


      gui.open();
}
