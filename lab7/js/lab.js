// index.js - sort username
// Author: Shawn Dhillon
// Date: 4/28

// Constants

// Functions
function sortUserName(){
  var username = window.prompt("give your username to be alphabetized");
  console.log("username =", username);

  var namearray = username.split('');
  console.log("namearray =", namearray);

  var namearraysort = namearray.sort();
  console.log("namearraysort =", namearraysort);

  var namesorted = namearraysort.join('');
  console.log("namesorted =", namesorted);

  return namesorted;
}

document.writeln("Your alphabetized named is: ", sortUserName(), "</br>")
