
var $color_button = $('.color-changer');

function changeColor(event){
  var color = $(this).data('color');
  console.log($(this).data());
  //color2 = $(event.currentTarget).attr("data-color");
  changeBodyColor(color);
  saveColor(color);
}

function changeBodyColor(color){
  $("body").css("background-color", color);
}

function saveColor(color){
  window.localStorage.setItem("bg-color", color);
}

function defaultColor (){
   var color = window.localStorage.getItem("bg-color");
  if(color){
    //console.log(window.localStorage.getItem("bg-color"));
    $("body").css("background-color", color);
  }
}

$(document).on('ready', function (){
  defaultColor();
  $color_button.on('click', changeColor);

})


// 
// $(document).ready(function() {
//
//   var body = $('body');
//
//   changeBodyColor(getSavedColor('grey'));
//
//   $('.color-changer').on('click', function(event) {
//     var target = $(event.target);
//     var color = target.data('color');
//     changeBodyColor(color);
//     saveColorForLater(color);
//   });
//
//
//   function changeBodyColor(color) {
//     body.css('background-color', color);
//   }
//
//   function saveColorForLater(color) {
//     localStorage.setItem('pageColor', color);
//   }
//
//   function getSavedColor(defaultColor) {
//     return localStorage.getItem('pageColor') || defaultColor;
//   }
//
// });
