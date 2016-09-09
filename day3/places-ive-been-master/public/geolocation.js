var map;

if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position){
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  var myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  createMap(myPosition);
  setupAutocomplete();
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  var mapOptions = {
    center: position,
    zoom: 17
  };
  map = new google.maps.Map($('#map')[0], mapOptions);

}

function createMarker(position) {
  var marker = new google.maps.Marker({
   position: position,
   map: map
  });
 //console.log(marker);
  getSavedMarker(getLocationPlace(marker.position));
}

function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if (place.geometry.location) {
      //map.setCenter(place.geometry.location);
      //map.setZoom(17);

      createMarker(getLocationPlace(place.geometry.location));

    } else {
      alert("The place has no location...?")
    }
  });
}

function getLocationPlace(position){
  //var place_json = JSON.parse(place);
  return {lat: position.lat(), lng: position.lng() }
}

function getSavedMarker(position){
  var positions = [{}]
  var marker = '{ lat:'+  position.lat + ', lng:' + position.lng + '}';
  localStorage.setItem('marker', marker);
}






//   function saveColorForLater(color) {
//     localStorage.setItem('pageColor', color);
//   }
//
//   function getSavedColor(defaultColor) {
//     return localStorage.getItem('pageColor') || defaultColor;
//   }
