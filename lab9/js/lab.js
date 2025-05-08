
/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
   Requirements: jQuery must be loaded for this script to work
   Author: Shawn Dhillon
   Date: 2025
*/


// add button to challenge section
$(".special-sections").append("<button>Make Special</button>"
   + "\xA0" + "Am I Special?"
);

// add a click listener to the challenge button
$(".special-sections button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});