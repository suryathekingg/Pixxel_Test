import * as GeoTIFF from '../src/main'
import * as rastertools from '/d3-marching-squares.min.js'

window.onload = (async function() {
    let origin = [300,600];
    let size = [800, 600];
    const tiff = await GeoTIFF.fromUrl("./data/Sample_RGB_COG_2.tif");
    console.log("Image (Pyramids) Count",await tiff.getImageCount())
    let image = await tiff.getImage(0);
    console.log(image)
    let rasterData = await image.readRasters({window: [origin[0], origin[1],
                                                       origin[0] + size[0], origin[1] + size[1]],
                                                       samples: [0]});
    rasterData = rasterData[0];


    let data = new Array(size[1]);
    for (let j = 0; j<size[1]; j++){
        data[j] = new Array(size[0]);
        for (let i = 0; i<size[0]; i++){
          data[j][i] = (rasterData[i + j*size[0]]);
        }
    }

    console.log(image.getWidth(), image.getHeight())


    let intervals = [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let bands = rastertools.isobands(data, [0, 1, 0, 0, 0, 1], intervals);
    console.log(bands)

    let colorScale = d3.scaleSequential(d3.interpolateRdYlBu);

    let canvas = document.getElementById("myCanvas");

    let context = canvas.getContext("2d");

    let path = d3.geoPath()
                 .context(context);
    console.log(colorScale)        

    bands.features.forEach(function(d, i) {
      context.beginPath();
      context.globalAlpha = 0.7;
      //context.fillStyle = colorScale((2 + intervals[i])/22);
      path(d);
      context.fill();
  });

})();