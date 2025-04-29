// index.js - sort username
// Author: Shawn Dhillon
// Date: 4/28

// Constants

// Functions
function sortUserName(){
  // prompts user for a username and prints it to console
  var username = window.prompt("give your username to be alphabetized");
  console.log("username =", username);

  // creates an array from the username splitting on every character
  // prints it to console
  var namearray = username.split('');
  console.log("namearray =", namearray);

  // sorts the name array and prints to console
  var namearraysort = namearray.sort();
  console.log("namearraysort =", namearraysort);

  // turns the array back into a string and prints it to console
  var namesorted = namearraysort.join('');
  console.log("namesorted =", namesorted);

  // returns the sorted string
  return namesorted;
}

// writes out the sorted name
document.writeln("Your alphabetized named is: ", sortUserName(), "</br>")
