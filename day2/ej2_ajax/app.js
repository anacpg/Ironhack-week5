//{"name": "Ana", "occupation": "dev", "weapon":""}

function showCharacters (response) {

  $("#js-characters-list").empty();
  $.each(response,function(i, item){
    //$("#js-result").append( "<li> " + item.name + "</li>")
    $("#js-characters-list").append( `<li> ${item.name} </li>`)
  });

  //$("#js-result").html(html);
}

function readCharacters(){
  var value = $("#js-new-character").val();
  console.log(value);
  return value;
}

$(document).ready(function(){
  //$.ready(sendResponse);

  get();



  $("#js-btn").on('click', function(){
    $.ajax({
      type: "POST",
      data: JSON.parse(readCharacters()),
      url:"https://ironhack-characters.herokuapp.com/characters",
      success: get
    });


  });
  function get(){
    $.ajax({
      type: "GET",
      url:"https://ironhack-characters.herokuapp.com/characters",
      success: showCharacters
    });
  }
});
