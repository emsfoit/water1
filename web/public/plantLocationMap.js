

// Add the marker to the map:




var latitude;
var longitude;
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
      var icon = new H.map.Icon('./assets/if_truck_1608963.svg');

      // Create a marker using the previously instantiated icon:
      var marker = new H.map.Marker({ lat: latitude, lng: longitude }, { icon: icon });
      var map = new H.Map(
        document.getElementById('hereMap'),
        defaultLayers.normal.map,
        {
          zoom: 11,
          center: { lat: latitude, lng: longitude }
        });
        map.addObject(marker);
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
    var icon = new H.map.Icon('./assets/smallTruck.png');

    // Create a marker using the previously instantiated icon:
    var marker = new H.map.Marker({ lat: latitude, lng: longitude }, { icon: icon });
    var map = new H.Map(
      document.getElementById('hereMap'),
      defaultLayers.normal.map,
      {
        zoom: 11,
        center: { lat: latitude, lng: longitude }
      });
map.addObject(marker);
}




getLocation();
