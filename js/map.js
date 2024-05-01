mapboxgl.accessToken =
  "pk.eyJ1IjoiYXl1cnR1c2hpbm92IiwiYSI6ImNrdWIzc3RnNzBuMTUydG9kM201bjZrZ3IifQ.asw6qS2ZCIhLy71KOej_AQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3362, 48.861],
  zoom: 15.8,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.3363, 48.8611],
      },
      properties: {
        title: "Mapbox",
        description: "Marker 1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.3333, 48.8602],
      },
      properties: {
        title: "Mapbox",
        description: "Marker 2",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.3397, 48.8607],
      },
      properties: {
        title: "Mapbox",
        description: "Marker 3",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.333, 48.8619],
      },
      properties: {
        title: "Mapbox",
        description: "Marker 4",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [2.3365, 48.8625],
      },
      properties: {
        title: "Mapbox",
        description: "Marker 5",
      },
    },
  ],
};

for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
}
