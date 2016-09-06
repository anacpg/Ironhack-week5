// Write your Pizza Builder JavaScript in this file.


var ingredients = {};
ingredients['Pepperonni'] = '.pep';
ingredients['Mushrooms'] = '.mushroom';
ingredients['Green peppers'] = '.green-pepper';

var specialIngredients = {};
specialIngredients['White sauce'] = 'sauce-white';
specialIngredients['Gluten-free crust'] = 'crust-gluten-free';

var price = {};
price['pepperonni'] = 1;
price['mushrooms'] = 1;
price['green peppers'] = 1;
price['white sauce'] = 3;
price['gluten-free crust'] = 5 ;



function addRemoveIngredients(event){
  var text = event.currentTarget.innerText;
  if($(event.currentTarget).hasClass('btn-crust') || $(event.currentTarget).hasClass('btn-sauce')){
    showSpecialIngredients(text);
  }else{
    show_ingredients(text);
  }
  active_button(event);
  bill(text.toLowerCase());
  show_price();
}



function calculate_price(){
  var total_price = 10;
  var active_button = $('.active');
  for(var i=0; i < active_button.length ; i++){
    total_price += price[active_button[i].innerText.toLowerCase()];
  }

  return total_price;
}

function active_button(e){
  $(e.currentTarget).toggleClass('active');
}

function show_ingredients(name_btn){
  $(ingredients[name_btn]).toggle('slow');
}

function showSpecialIngredients(name_btn){
  var name_class = "."+specialIngredients[name_btn].split('-')[0];
  $(name_class).toggleClass(specialIngredients[name_btn]);
}

function show_price(){
  $('aside strong').text('$'+calculate_price());
}


function bill(text){
  var bill_list = $('aside li');
  for (var i=0; i<bill_list.length; i++) {
      if (bill_list[i].innerText.match(text) != null){
        $(bill_list[i]).toggle();
      }
  }
}


$(".btn").on('click',addRemoveIngredients);
