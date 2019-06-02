
  ////////////
	// CUSTOM //
	////////////

function buildGui()
{
      gui = new dat.GUI();
      var params = {
        color: materialFloor.color.getHex(),
        'sunZ': sunLight.position.z,
        'background_color': scene.background.getHex(),
      }

      var flooring = gui.addFolder( 'Flooring' );
      var lighting = gui.addFolder( 'Lighting' );

      //Flooring Folder
      flooring.addColor( params, 'color' ).onChange( function ( val )
      {
        materialFloor.color.setHex( val );
      } );

      // Lighting Folder
      var sunlightX = lighting.add( params, 'sunZ' ).min(-400).max(400).step(1).listen();

      sunlightX.onChange(function(value)
      {
        sunLight.position.z = value;
      });

      lighting.addColor( params, 'background_color').onChange( function ( colorVal )
      {
        scene.background.setHex( colorVal );
        //scene.fog.setHex(colorVal);
      } );



      gui.open();
}
