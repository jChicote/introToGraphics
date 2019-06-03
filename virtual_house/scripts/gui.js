
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
        'sun_intensity': sunLight.intensity,
        'bulb_color': light1.color.getHex(),
        'light_intensity': light1.intensity,
      }

      var flooring = gui.addFolder( 'Flooring' );
      var lighting = gui.addFolder( 'Lighting' );
      var outLighting = gui.addFolder( 'Outdoor Light' );

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

      var sun_intensity = lighting.add( params, 'sun_intensity' ).min(0).max(2).step(0.1).listen();

      sun_intensity.onChange(function(value)
      {
        sunLight.intensity = value;
      });

      lighting.addColor( params, 'background_color').onChange( function ( colorVal )
      {
        scene.background.setHex( colorVal );
        scene.fog.color.set(colorVal);
        ambient.color.set(colorVal);
      } );



      //Outdoor lighting folder
      outLighting.addColor( params, 'bulb_color').onChange( function ( colorVal )
      {
        light1.color.set(colorVal);
        light2.color.set(colorVal);
        light3.color.set(colorVal);
        light4.color.set(colorVal);
        light5.color.set(colorVal);
        light6.color.set(colorVal);
        light7.color.set(colorVal);
        light8.color.set(colorVal);
        light9.color.set(colorVal);
        //scene.fog.setHex(colorVal);
      } );

      var outdoorIntensity = outLighting.add( params, 'light_intensity' ).min(0).max(2).step(0.1).listen();

      outdoorIntensity.onChange(function(value)
      {
        light1.intensity = value;
        light2.intensity = value;
        light3.intensity = value;
        light4.intensity = value;
        light5.intensity = value;
        light6.intensity = value;
        light7.intensity = value;
        light8.intensity = value;
        light9.intensity = value;

        if(value == 0)
        {
          orb1.visible = false;
          orb2.visible = false;
          orb3.visible = false;
          orb4.visible = false;
          orb5.visible = false;
          orb6.visible = false;
          orb7.visible = false;
          orb8.visible = false;
          orb9.visible = false;
        } else {
          orb1.visible = true;
          orb2.visible = true;
          orb3.visible = true;
          orb4.visible = true;
          orb5.visible = true;
          orb6.visible = true;
          orb7.visible = true;
          orb8.visible = true;
          orb9.visible = true;
        }

      });



      gui.open();
}
