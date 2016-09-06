function getArtistInput(){
  var artist = $("#js-in-artist").val();
  $("#js-in-artist").val("");
  return artist;
}

function linkName(item, element_search ,class_name){
  var html = "<a href=\"#\" class=\""+ class_name+ "\" "+  element_search + "-id=\""
  html += item.id + "\">"+  item.name + "</a>"
  return html;
}

function setItemLi(item, element_search, class_name){
  var html = "<li>" ;
  html += linkName(item, element_search, class_name) + "<br>";
  console.log(item.images);
  if (typeof(item.images) != 'undefined')  {
    html += getImage(item);
  }

  html += "</li>";

  return html;
}

function getImage(item){
  return (item.images.length > 0) ? "<img src=\"" +item.images[0].url + "\">" : "";
}



function showArtists (response) {
  //console.log("hola")
  var artists=response.artists.items
  console.log(artists);

  $.each(artists, function(i, item){
    var html = setItemLi(item, "artist", "js-link-artist");
    $(".js-ul-artist").append(html);
  });
}



function showAlbum(response){
  // console.log(response.items);
  $('#myModal').modal();
  var albums = response.items
  $.each(albums, function(i, item){
    var html = setItemLi(item, "album", "js-link-album")
    $(".modal-body").append(html);
  });
}

function showTracks(response){
  console.log("estoy aqui")
  // console.log(response.items);
  $('#myModal').modal();
  var albums = response.items
  $.each(albums, function(i, item){
    var html = setItemLi(item, "track", "js-link-track")
    $(".modal-body").append(html);
  });
}


function getArtist(){
  var search_url = "https://api.spotify.com/v1/search?type=artist&query=";
  search_url += getArtistInput();

  $.ajax({
    type: "GET",
    url: search_url,
    success: showArtists
  });

  //$('.js-link-artist').val(getArtistInput());
}

function getAlbum(e){
  var search_url = "https://api.spotify.com/v1/artists/";
  //search_url += getArtistInput();
  search_url += $(e.currentTarget).attr("artist-id") + "/albums";


  $.ajax({
    type: "GET",
    url: search_url,
    success: showAlbum
  });

}

function getTracks(e){
  var search_url = "https://api.spotify.com/v1/albums/";
  //search_url += getArtistInput();
  search_url += $(e.currentTarget).attr("album-id") + "/tracks";


  $.ajax({
    type: "GET",
    url: search_url,
    success: showTracks
  });

}


$(document).ready(function(){

  $(".js-btn-search").on('click', function(event){
    $(".js-ul-artist").empty()
    event.preventDefault();
    getArtist();
  });

  $('.js-div-artists').on('click', '.js-link-artist' ,  function(event){
    event.preventDefault();
    $(".modal-body").empty()
    getAlbum(event);
    //console.log(e.currentTarget.attr(id));
  });

  $('.modal-body').on('click', '.js-link-album' ,  function(event){
    event.preventDefault();
    $(".modal-body").empty()
    getTracks(event);
    //getAlbum(event);
    //console.log(e.currentTarget.attr(id));
  });






});
