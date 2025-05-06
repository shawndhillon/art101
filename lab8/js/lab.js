// index.js - 
// Author: Shawn Dhillon
// Date: 


function double(x){
  var results = x * 2;
  return results;
}
console.log("double of 6 is:",double(6));
console.log("double of 12 is:",double(12));

array = [1,4,5,8,16,32]
console.log("My array is:", array);

var doubled = array.map(double);

console.log("doubling of array: ", results )

var results = array.map(function(x) {
  var results = x * 3;
  return results;
})

console.log("Tripling of array: ", results )

var mapResults = array.map(double);
console.log("Results: ", mapResults)


// Use jQuery to select the element by its ID and set the HTML content

$("#output").html( 

  "Original array: " + array + "<br>" + 
  "Doubled array: " + mapResults + "<br>" + 
  "Tripled array: " + results

);