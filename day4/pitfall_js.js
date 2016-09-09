
functions = [];

for (var i = 0; i<10; i++) {
  functions[i] = function x(){
    console.log(`function for ${i}`);
  }
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());


//todos devolverían 'function for 10'


//para arreglar esto:

function makeFunction(i){
  return function x(){
    console.log(`function for ${i}`);
  }
}

for (var i = 0; i<10; i++) {
  functions[i] = makeFunction(i);
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
