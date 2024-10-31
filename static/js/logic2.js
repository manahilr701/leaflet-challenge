const apiKey = window.CONFIG.MAPBOX_API_KEY;

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicplatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Fetch earthquake data
d3.json(queryUrl).then(function (data) {
  createFeatures(data.features);
});

function chooseColor(depth) {
  if (depth < 10) return "#00FF00";
  else if (depth < 30) return "greenyellow";
  else if (depth < 50) return "yellow";
  else if (depth < 70) return "orange";
  else if (depth < 90) return "orangered";
  else return "#FF0000";
}

function createFeatures(earthquakeData) {
  function onEachFeature(feature, layer) {
    layer.bindPopup(
      `<h3>Location: ${feature.properties.place}</h3><hr>
       <p>Date: ${new Date(feature.properties.time)}</p>
       <p>Magnitude: ${feature.properties.mag}</p>
       <p>Depth: ${feature.geometry.coordinates[2]}</p>`
    );
  }

  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      var markers = {
        radius: feature.properties.mag * 4, // Adjusted radius
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        fillOpacity: 0.7,
        color: "black",
        weight: 0.5
      };
      return L.circleMarker(latlng, markers); // Use circleMarker for better scaling
    }
  });

  createMap(earthquakes);
}

function createMap(earthquakes) {
  var satellite = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    attribution: "© Mapbox © OpenStreetMap"
  });

  var grayscale = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    attribution: "© Mapbox © OpenStreetMap"
  });

  var outdoors = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    attribution: "© Mapbox © OpenStreetMap"
  });

  var tectonicPlates = new L.layerGroup();

  d3.json(tectonicplatesUrl).then(function (plates) {
    L.geoJSON(plates, {
      color: "red",
      weight: 5
    }).addTo(tectonicPlates);
  });

  var baseMaps = {
    "Satellite": satellite,
    "Grayscale": grayscale,
    "Outdoors": outdoors
  };

  var overlayMaps = {
    "Earthquakes": earthquakes,
    "Tectonic Plates": tectonicPlates
  };

  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [satellite, earthquakes, tectonicPlates]
  });

  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend"),
      depth = [-10, 10, 30, 50, 70, 90];

    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";
    for (var i = 0; i < depth.length; i++) {
      div.innerHTML +=
        `<i style="background: ${chooseColor(depth[i] + 1)}"></i> ${depth[i]}${depth[i + 1] ? "&ndash;" + depth[i + 1] + "<br>" : "+"}`;
    }
    return div;
  };
  legend.addTo(myMap);

  L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(myMap);
}
