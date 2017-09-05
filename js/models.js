/**
 * Models
 */

var map;
var infoWindow;
var markers = [];

var flickrEndpoint = 'https://api.flickr.com/services';
var flickrKey = '19bbce6274264e089fdd63de5e40c8b2';

var locations = [
  {
    title: 'Humphrey\'s Peak', 
    position:{lat: 35.346704, lng: -111.678544}
  },
  {
    title: 'Sunset Crater',
    position:{lat: 35.363349, lng: -111.502754}
  }
];
