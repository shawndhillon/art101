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
  ana = inputString.split('');

  ana = ana.sort(function(){return 0.5 - Math.random()});

  return ana.join('');
}


// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();

    // now let's sort it
    userNameSorted = sortString(userName);
    
    ana = anagram(userName);

    // append a new div to our output div
    //$("#output").html('<div class="text"><p>' + userNameSorted + '<br>' + ana + '</p></div>');
    $("#output").html('<div class="text"><p>' + userNameSorted +'</p></div>');
});

// click listener for button
$("#anagram").click(function(){
    // get value of input field
    const userName = $("#user-name").val();

    ana = anagram(userName);

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + ana + '</p></div>');
});


