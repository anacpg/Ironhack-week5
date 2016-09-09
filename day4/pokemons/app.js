
function createHTML(pokemonData){
  //pokemonData = [name, types[]]
  var html = "<li>"
  html += "<h2>" + pokemonData[0] + "</h2>"
  html += "<ul>"
  for (var i=0; i<pokemonData[1].length; i++){
    html += "<li>" + pokemonData[1][i] +  "</li>"
  }
  html += "</ul>";
  html += "</li>";

  $('.js-pokemon-cards').append(html);

}


function searchPokemon(pokemon){
  var name = pokemon.name
  var types = getTypes(pokemon.types)
  console.log(types);
  return [name, types]
}

function getTypes (array){
  // array = [{slot: 2, type: {name: "a", url:""}},{slot: 3, type: {name: "dfd", url:""}, {}]

  // return array.reduce( function (types, item) {
	// 			return types += item.type.name;
	// 		} , [])
    var types = []
    for (var i=0; i<array.length; i++){
      types.push(array[i].type.name);
    }
    return types;

  }

function pokemonCard(response){
  pokemon = searchPokemon(response)
  createHTML(pokemon)
}


function getPokemon(id) {
  var url = 'http://pokeapi.co/api/v2/pokemon/' + id
  $.ajax({
    type: "GET",
    url: url,
    success: pokemonCard,
    error: getError
  });
}

function getError(){
  console.log('Error');
}

function inputOk(pokemonId){
  return !isNaN(parseInt(pokemonId)) ;
}

$(document).ready(function(){

  $('.js-pokemon-search').on('click', function(){
    var pokemonId = $('.js-pokemon-input').val();
    if (inputOk(pokemonId)){
      getPokemon(pokemonId);
    }else {
      getError();
    }
  })
});
