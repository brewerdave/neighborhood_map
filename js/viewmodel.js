var AppViewModel = function() {
  var self = this;
  self.locations = ko.observableArray(locations);
  
  // A click on the list will open the info window on the corresponding marker
  self.openInfoWindow = function(location) {
    markers.forEach(function(marker) {
      if (marker.title == location.title){
        openInfoWindow(marker);
      }
    }, this);
  };
};

ko.applyBindings(new AppViewModel());