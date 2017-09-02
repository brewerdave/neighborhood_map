var map;
var infoWindow;
var markers = [];

var locations = [
  {
    title: 'Humphrey\'s Peak', 
    position:{lat: 35.346704, lng: -111.678544}
  },
  {
    title: 'test2',
    position:{lat: 35.17, lng: -111.63}
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.1812727, lng: -111.6429784},
    zoom: 12,
    mapTypeId: 'satellite'
  });

  // Initialize markers
  locations.forEach(function(location) {
    var title = location.title;
    var position = location.position;
    
    marker = new google.maps.Marker({
      map: map,
      title: title,
      position: position
    });
  }, this);
}

var AppViewModel = function() {
  for (var marker in markers){
    markers[marker].setVisible(false);
  }
};

ko.applyBindings(new AppViewModel());