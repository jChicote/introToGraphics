
  ////////////
	// CUSTOM //
	////////////

function buildGui() {
      gui = new dat.GUI();
      var params = {
        color: materialFloor.color.getHex(),
        'sunX': sunLight.position.x,

      }

      var flooring = gui.addFolder( 'Flooring' );
      var lighting = gui.addFolder( 'Lighting' );

      //Flooring Folder
      flooring.addColor( params, 'color' ).onChange( function ( val ) {
        materialFloor.color.setHex( val );
      } );

      // Lighting Folder
      var sunlightX = lighting.add( params, 'sunX' ).min(-200).max(200).step(1).listen();

      sunlightX.onChange(function(value){
        sunLight.position.x = value;
      });

      gui.open();
}
