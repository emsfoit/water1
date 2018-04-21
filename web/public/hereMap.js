var platform = new H.service.Platform({
  'app_id': 'TkZ5D3cR7A0TNOTm2YI6',
  'app_code': 'KUbzQcWdvzlcVJrFSQabLQ'
});

var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('hereMap'),
  defaultLayers.normal.map,
  {
    zoom: 11,
    center: { lat: 31.432793, lng: 34.387282 }
  });


map.setBaseLayer(defaultLayers.normal.traffic.incidents);
