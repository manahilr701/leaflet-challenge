# Earthquake Data Visualization with Leaflet

This project visualizes global earthquake data from the United States Geological Survey (USGS) using interactive maps. The goal is to present earthquake data in a way that educates the public and supports the USGS in raising awareness about natural hazards. The visualization offers different perspectives, including heatmaps, clustered points, and tectonic plate overlays.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Data Sources](#data-sources)
4. [Visualizations](#visualizations)
5. [Setup Instructions](#setup-instructions)

## Project Overview

The United States Geological Survey (USGS) provides scientific data about natural hazards, environmental health, and climate change impacts. This project aims to visualize their earthquake data, making it more accessible and understandable for the public and government organizations. These visualizations can be used for educational purposes and to help secure funding for further research.

## Technologies Used

- **Leaflet.js**: JavaScript library for interactive maps.
- **D3.js**: For data manipulation and binding to Leaflet layers.
- **Mapbox**: Provides various map styles like satellite and outdoors views.
- **Leaflet Plugins**: 
  - `leaflet.markercluster` for clustering earthquake data points.
  - `leaflet.heat` for generating heatmaps.

## Data Sources

All earthquake data is sourced from the USGS GeoJSON feed, updated weekly:
- [USGS Earthquake GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

## Visualizations

### 1. Heatmap of Earthquakes
A heatmap visualization showing the intensity of earthquakes worldwide based on magnitude. Higher magnitudes are represented by warmer colors like red and yellow, while lower magnitudes are cooler colors like blue and green.

![Heatmap of Earthquakes](Images/Heat.png)

**Code File**: `logic3.js`  
This script fetches data from the USGS and plots earthquake intensities as heat blobs on a global scale.

### 2. Clustered Earthquake Map
A clustered map that groups nearby earthquakes and color-codes them by depth. This view is interactive and allows users to explore clustered data points across the world.

![Clustered Earthquake Map](Images/5-Advanced.png)

**Code File**: `logic.js`  
This script uses `leaflet.markercluster` to manage and display earthquake clusters dynamically based on the map zoom level.

### 3. Basic Earthquake Map
A simple map with circle markers representing each earthquake. The marker colors indicate the depth of the earthquake, and the size is proportional to its magnitude.

![Basic Earthquake Map](Images/2-BasicMap.png)

**Code File**: `logic2.js`  
This script provides a basic view of earthquake data and includes a legend for earthquake depth. Layers for tectonic plates can also be toggled in this map.

### 4. USGS Logo
The USGS logo is used as part of this project to emphasize the data source and purpose of this visualization project.

![USGS Logo](Images/1-Logo.png)

## Setup Instructions

1. Clone the repository to your local machine.
2. Ensure you have internet access for the Mapbox and Leaflet libraries to load correctly.
3. Replace `MAPBOX_API_KEY` in `config.js` with your own Mapbox API key.
4. Open the `index.html` file in a web browser to view the maps.

### Dependencies

- **Leaflet.js** for map rendering
- **D3.js** for data processing
- **MarkerCluster and Heatmap plugins** for specific visualization types

### Code Structure

- **index.html**: Main HTML structure for the page.
- **logic.js**: Contains logic for the clustered earthquake map.
- **logic2.js**: Contains logic for the basic earthquake map with tectonic plates.
- **logic3.js**: Contains logic for the global earthquake heatmap.
- **config.js**: Holds the Mapbox API key.

---

This README provides an overview and structure for the project, describing each visualization type and linking it to the appropriate image.
