// index.js - sort username
// Author: Shawn Dhillon
// Date: 4/28

// Constants

// Functions
function sortUserName(name) {
  // removes all spaces from the username
  let username_no_spaces = username.replaceAll(" ", "");
  console.log("username_no_spaces =", username_no_spaces);

  // creates an array from the username splitting on every character
  // prints it to console
  var namearray = username_no_spaces.split('');
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



// Prompt user for their name (outside functions)
let username = window.prompt("Give your username to be alphabetized and shuffled");

// Output results
// writes out the sorted name and username
document.writeln("Your original username is: ", username, "</br>")
document.writeln("Your alphabetized username is: ", sortUserName(), "</br>")
