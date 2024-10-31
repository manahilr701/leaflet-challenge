<h1>Earthquake Data Visualization with Leaflet</h1>

<p>This project visualizes global earthquake data provided by the United States Geological Survey (USGS) through a variety of interactive maps. The goal is to help educate the public on earthquake occurrences worldwide, assist government organizations in assessing natural hazards, and showcase earthquake data in a visually meaningful way that highlights trends, patterns, and intensities of seismic activity. This project is intended to increase awareness of geological activity and support the USGS in securing funding for further research.</p>

<h2>Table of Contents</h2>
<ol>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#data-sources">Data Sources</a></li>
  <li><a href="#visualizations">Visualizations</a></li>
  <li><a href="#setup-instructions">Setup Instructions</a></li>
  <li><a href="#running-specific-logic-files">Running Specific Logic Files</a></li>
  <li><a href="#file-structure">File Structure</a></li>
</ol>

<h2 id="project-overview">1. Project Overview</h2>
<p>The United States Geological Survey (USGS) collects vast amounts of data about natural hazards such as earthquakes, climate change impacts, and land-use change. In this project, we use USGS earthquake data to create visualizations that make the data accessible and engaging for general audiences and government organizations. By using different types of interactive maps, we aim to present earthquake data in ways that highlight critical features, such as depth, magnitude, clustering, and tectonic activity.</p>
<img src="Images/1-Logo.png" alt="Clustered Earthquake Map">

<h2 id="technologies-used">2. Technologies Used</h2>
<h3>Frontend:</h3>
<ul>
  <li><strong>Leaflet.js</strong>: A powerful JavaScript library for interactive maps.</li>
  <li><strong>D3.js</strong>: Used for handling and binding data to Leaflet layers.</li>
  <li><strong>Mapbox</strong>: Provides additional map styles, such as satellite views, to enhance map aesthetics.</li>
</ul>

<h3>Plugins:</h3>
<ul>
  <li><strong>leaflet.markercluster</strong>: Used for clustering earthquake data points to improve map readability.</li>
  <li><strong>leaflet.heat</strong>: Used to create a heatmap that highlights areas with high earthquake activity.</li>
</ul>

<h2 id="data-sources">3. Data Sources</h2>
<p>All earthquake data is sourced from the USGS GeoJSON feed, which updates earthquake data weekly:</p>
<ul>
  <li><a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson">USGS Earthquake GeoJSON Feed</a></li>
</ul>
<p>This data feed provides information on earthquake locations, magnitudes, depths, and more, allowing us to visualize both individual earthquake events and larger patterns in seismic activity.</p>

<h2 id="visualizations">4. Visualizations</h2>
<p>This project includes multiple visualizations, each with a distinct perspective:</p>

<h3>1. Heatmap of Earthquakes</h3>
<p>The heatmap visualization provides an overview of earthquake intensity globally. Areas with higher earthquake magnitude are displayed with warmer colors, transitioning from blue for lower magnitudes to red for the highest magnitudes.</p>
<img src="Images/Heat.png" alt="Heatmap of Earthquakes">
<p><strong>Code File:</strong> logic3.js</p>
<p><strong>Description:</strong> The <code>logic3.js</code> script uses <code>leaflet.heat</code> to create heat blobs representing earthquake activity. Magnitude influences the intensity of each blob, offering a clear visual representation of areas with concentrated seismic activity.</p>

<h3>2. Clustered Earthquake Map</h3>
<p>The clustered earthquake map groups nearby earthquakes and color-codes them by depth. This clustering technique allows users to explore seismic data at a broader level and examine clusters in high-seismic regions.</p>
<img src="Images/5-Advanced.png" alt="Clustered Earthquake Map">
<p><strong>Code File:</strong> logic.js</p>
<p><strong>Description:</strong> The <code>logic.js</code> script leverages <code>leaflet.markercluster</code> to dynamically group earthquake points into clusters. Clusters adjust as the user zooms in and out, and each earthquake marker color represents the depth of the event.</p>

<h3>3. Basic Earthquake Map</h3>
<p>The basic earthquake map uses circle markers to display individual earthquakes. Marker color reflects the depth of the earthquake, and marker size correlates with magnitude, providing insights into the intensity of each earthquake.</p>
<img src="Images/2-BasicMap.png" alt="Basic Earthquake Map">
<p><strong>Code File:</strong> logic2.js</p>
<p><strong>Description:</strong> This script generates a simple map with customizable color and radius properties for each earthquake marker. It includes a legend for earthquake depth and provides an overlay of tectonic plates, aiding in understanding earthquake locations relative to tectonic boundaries.</p>

<h2 id="setup-instructions">5. Setup Instructions</h2>
<ol>
  <li>Clone the repository to your local machine:
    <pre><code>git clone https://github.com/manahilr701/leaflet-challenge.git</code></pre>
  </li>
  <li>Navigate to the project folder:
    <pre><code>cd leaflet-challenge</code></pre>
  </li>
  <li>Ensure you have internet access, as the project relies on external libraries and APIs.</li>
  <li>Copy the file `static/js/config_template.js` and rename it to `config.js`. Open `config.js` and replace `"YOUR_MAPBOX_API_KEY"` with your actual Mapbox API key.</li>

  <li>Open <code>index.html</code> in a web browser to view the maps.</li>
</ol>

<h2 id="running-specific-logic-files">6. Running Specific Logic Files</h2>
<p>To view each type of visualization, the <code>index.html</code> file includes multiple logic files. To switch between visualizations, you must <strong>comment out the unwanted logic files</strong> in the HTML <code>&lt;script&gt;</code> tags and <strong>uncomment</strong> the specific logic file you want to run.</p>

<h3>Example</h3>
<p>In <code>index.html</code>, to only run the <code>logic.js</code> file (Clustered Earthquake Map), modify the <code>&lt;script&gt;</code> tags as follows:</p>
<pre><code>
<!-- Uncomment only the desired logic file and comment out the others -->
<!-- Clustered Earthquake Map Logic -->
<script type="text/javascript" src="static/js/logic.js"></script>

<!-- Satellite Map Logic -->
<!-- <script type="text/javascript" src="static/js/logic2.js"></script> -->

<!-- Heatmap Logic -->
<!-- <script type="text/javascript" src="static/js/logic3.js"></script> -->
</code></pre>

<h2 id="file-structure">7. File Structure</h2>
<pre><code>
leaflet-challenge/
├── Images/
│   ├── 1-Logo.png
│   ├── 2-BasicMap.png
│   ├── 3-Data.png
│   ├── 4-JSON.png
│   ├── 5-Advanced.png
│   ├── 6-Time_Keeps_On_Ticking.gif
│   ├── Cluster.png
│   └── Heat.png
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── config.js
│       ├── logic.js
│       ├── logic2.js
│       └── logic3.js
├── index.html
└── README.md
</code></pre>

<ul>
  <li><strong>index.html</strong>: Main HTML file that includes links to the logic files for rendering maps.</li>
  <li><strong>config.js</strong>: Holds the Mapbox API key for accessing different map styles.</li>
  <li><strong>logic.js</strong>: Handles the clustered earthquake map visualization.</li>
  <li><strong>logic2.js</strong>: Manages the basic earthquake map with tectonic plates overlay.</li>
  <li><strong>logic3.js</strong>: Generates the heatmap for global earthquake activity.</li>
  <li><strong>Images/</strong>: Contains the images used for demonstration in the README and other documentation.</li>
</ul>
