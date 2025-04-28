// index.js - lab6
// Author: Shawn Dhillon
// Date: 4/27


const myTransport = ["Walking", "Honda Civic", "Bus"];

var myMainRide = {
make: "Honda",
model: "Civic",
color: "Black",
year: 2020,
age: function(){
  return 2025 - this.year;
}
}

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
