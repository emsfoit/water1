var latitude;
var longitude
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
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

    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
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
        center: { lat: latitude, lng: longitude }
      });

}




getLocation();
