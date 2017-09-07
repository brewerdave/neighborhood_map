var AppViewModel = function() {
  var self = this;
  // Use slice to make a copy of array to preserve data later
  this.locationList = ko.observableArray(locations.slice(0));
  this.searchQuery = ko.observable('');
  
  
  /**
   * Opens an InfoWindow on the current marker.
   */
  this.openInfoWindow = function(location) {
    markers.forEach(function(marker) {
      if (marker.title == location.title){
        openInfoWindow(marker);
      }
    }, this);
  };

  /**
   * Makes all of the markers on the map invisible
   */
  hideAllMarkers = function() {
    markers.forEach(function(marker) {
      marker.setVisible(false);
    }, this);
  };

  /**
   * Makes all of the markers on the map visible
   */
  showAllMarkers = function() {
    markers.forEach(function(marker) {
      marker.setVisible(true);
    }, this);
  };

  /**
   * Performs a live search on the list of locations
   */
  this.search = function(query) {
    // Hide all markers and list items and close the info window
    hideAllMarkers();
    self.locationList.removeAll();
    infoWindow.close();

    // Show appropriate markers
    markers.forEach(function(marker) {
      if (marker.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query == '') {
        marker.setVisible(true);
      }
    }, this);

    // Show appropriate list items
    locations.forEach(function(location) {
      if (location.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query == '') {
        self.locationList.push(location);
      }
    }, this);  
    
  };

  this.searchQuery.subscribe(this.search);
};

ko.applyBindings(new AppViewModel());