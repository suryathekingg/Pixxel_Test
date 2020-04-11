1) Required Libraries To Install Separately: GDAL, NUMPY

2) Create_COG_Automatically.ipynb is a jupyter notebook file which take a folder path where different bands remote sensing data is available. It creates a sample RGB Geotiff, COG from Sample RGB Geotiff and hyper spectral COG using all bands. 

3) Test_COG.py is a third party python script to validate a COG. It is used in Create_COG_Automatically.ipynb to validate output COGs created.

4) Comments are added in the code in Create_COG_Automatically.ipynb wherever required. To run this file, please replace all hardcoded paths specific to my systems with yours

5) Sample_RGB.tif is the output of one sample RGB created, Sample_RGB_COG.tif is the output of corresponding COG created. Hyperspectral COG could not be uploaded because of heavy size

6) Snip Snip_COG.png is a snip of a sample visualization of a sample Geotiff over node.js architecture using geotiff.js over http. 
Due to lack of time only sample visualization is shown without much customizations and many other methods. Would be happy to discuss is required.