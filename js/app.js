function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    mapTypeId: 'satellite'
  });

  var bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow();

  // Initialize markers
  locations.forEach(function(location) {
    var title = location.title;
    var position = location.position;
    // Extend map bounds to include marker
    bounds.extend(position);
    
    marker = new google.maps.Marker({
      map: map,
      title: title,
      position: position,
      animation: google.maps.Animation.DROP
    });

    markers.push(marker);
    marker.addListener('click', function(){
      openInfoWindow(this);
    })
  }, this);

  // Extend map and center it based on the markers
  map.fitBounds(bounds);
  map.setCenter(bounds.getCenter());
}

function openInfoWindow(marker) {
  if(infoWindow.marker != marker) {
    infoWindow.marker = marker;
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
    infoWindow.addListener('closeclick', function() {
      infoWindow.marker = null;
    });
  }
}