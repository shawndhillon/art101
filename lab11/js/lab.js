/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Shawn Dhillon
   Date: 2025
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// Sorts the characters of a string in alphabetical order.
function anagram(inputString) {
  // We have to convert our string to an array and back again to sort it
  array = inputString.split('');
  // makes sure the array isn't made of all the same character 
  // verifies an anagram exists
  if (array.every(element => element === array[0])){
    return "No Anagram Exists";
  }
  // sorts array in a random pattern and joins it to make a string
  // repeats if the string is the same as input string
  ana = inputString;
  while(ana == inputString){
    anagram_array = array.sort(function(){return 0.5 - Math.random()});
    ana = anagram_array.join('');
  }
  // return string
  return ana;
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted +'</p></div>');
});

// click listener for button
$("#anagram").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // call anagram function
    ana = anagram(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + ana + '</p></div>');   
});




// add a click listener for all the special sections and a button
$("#glitch").click(function(){
  // changes respective classes and ids to the special theme
    $(".minor-section").toggleClass("special");
    $("#content").toggleClass("special");
    $(".link-section").toggleClass("special");
});

function timedGlitch() {
  // changes respective classes and ids to the special theme
  $(".minor-section").toggleClass("special");
  $("#content").toggleClass("special");
  $(".link-section").toggleClass("special");
  // counter to set number of times to glitch
  count += 1;
  if (count <= 5) {
    // waits 500 ms then calls itself
    setTimeout(timedGlitch, 500); 
  } else {
    // Resets respective classes and ids from the special theme
    $(".minor-section").removeClass("special");
    $("#content").removeClass("special");
    $(".link-section").removeClass("special");
  }
}

$("#glitch-timed").click(function () {
  // on button press calls timedGlitch
  count = 0;
  timedGlitch();
});
