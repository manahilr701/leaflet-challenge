// Initialize the map
const map = L.map("map", {
    center: [0, 0],  // Centering on a more global view
    zoom: 2,         // Zoomed out to show more regions
    layers: [
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ]
  });
  
  // Define the URL to fetch earthquake data
  const heatQueryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // Fetch data and create heatmap
  d3.json(heatQueryUrl).then(function(data) {
    const heatArray = data.features.map(feature => [
      feature.geometry.coordinates[1],  // Latitude
      feature.geometry.coordinates[0],  // Longitude
      feature.properties.mag            // Magnitude as intensity
    ]);
  
    // Create heatmap layer
    const heat = L.heatLayer(heatArray, {
      radius: 30,       // Radius for the heat "blobs"
      blur: 35,         // Blur to give a more cloud-like effect
      maxZoom: 1,       // Max zoom level to show heat blobs
      gradient: {       // Define a custom gradient for heatmap colors
        0.2: 'blue', 
        0.4: 'cyan', 
        0.6: 'lime', 
        0.8: 'yellow', 
        1.0: 'red'
      }
    }).addTo(map);
  });
  