
var options = {}

function onLocation (position) {
  //console.log('error')
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=400x300&markers=color:red%7Clabel:A%7C${lat},${lon}`
  $('#js-map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=400x300&markers=color:red%7Clabel:A%7C${lat},${lon}`)
  console.log(url);
//  $('#location').val($('#js-map').attr('src'));

}

function onError (error){
  console.error(error);
}

$(document).ready(function(){

  navigator.geolocation.getCurrentPosition(onLocation, onError, options);

});
