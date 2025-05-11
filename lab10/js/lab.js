/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.
   Author: Shawn Dhillon
   Date: 2025
*/

function generateRandomText() {
  const text = "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair, Fuzzy Wuzzy wasn't really fuzzy, Was he?";
  const min = 5;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');

})

// click listener for user message button
$("#send-message").click(function(){

// .val() makes the user message a string rather than object
  const userMsg = $("#user-message").val();
  
  // append user message as a new chat bubble
  $("#output").append('<div class="text"><p>' + userMsg + '</p></div>');
  
  // clear reply box
  $("#user-message").val("");
});



