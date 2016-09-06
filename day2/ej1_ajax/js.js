function showCharacters (response) {

  $("#js-result").empty();
  $.each(response,function(i, item){
    //$("#js-result").append( "<li> " + item.name + "</li>")
    $("#js-result").append( `<li> ${item.name} </li>`)
  });

  //$("#js-result").html(html);
}

$(document).ready(function(){
  //$.ready(sendResponse);
  $("#js-btn").on('click', function(){
    $.ajax({
      type: "GET",
      url:"https://ironhack-characters.herokuapp.com/characters",
      success: showCharacters
    })
  });
});
