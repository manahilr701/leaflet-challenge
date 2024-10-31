const queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the GeoJSON data
d3.json(queryUrl).then(function(data) {
    createFeatures(data.features);
  });
  
  function createFeatures(earthquakeData) {
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>${feature.properties.place}</h3>
        <hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]} km</p>`);
    }
  
    function getColor(depth) {
      return depth > 90 ? '#ff5e5e' :
             depth > 70 ? '#fca35d' :
             depth > 50 ? '#f3db4d' :
             depth > 30 ? '#d4ee00' :
             '#98ee00';
    }
  
    function createCircleMarker(feature, latlng) {
      let options = {
        radius: feature.properties.mag * 4,
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 0.5,
        fillOpacity: 0.8
      };
      return L.circleMarker(latlng, options);
    }
  
    let earthquakes = L.geoJSON(earthquakeData, {
      pointToLayer: createCircleMarker,
      onEachFeature: onEachFeature
    });
  
    createMap(earthquakes);
  }
  
  function createMap(earthquakes) {
    let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    let baseMaps = { "Street Map": streetMap };
    let overlayMaps = { Earthquakes: earthquakes };
  
    let map = L.map("map", {
      center: [37.09, -95.71],
      zoom: 5,
      layers: [streetMap, earthquakes]
    });
  
    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
  }
  