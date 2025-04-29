// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
function sortUserName(){
  var username = window.prompt("give your username to be fixed");
  console.log("username =", username);

  var namearray = username.split('');
  console.log("namearray =", namearray);

  var namearraysort = username.sort();
  console.log("namearraysort =", namearraysort);

  var namesorted = namearraysort.join('');
  console.log("namesorted =", namesorted);

  return namesorted;
}

document.writeln("Your fixed named is: ", sortUserName(), "</br>")
