// index.js - JSON and APIs
// Author: Shawn Dhillon
// Date: 6/4/25

$(document).ready(function() {
  $("#activate").click(function(){
    // Generate a random number between 1 and 898 (as per Pokémon API)
  let comic = Math.floor(Math.random() * 3096) + 1;

  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: `https://api.allorigins.win/get?url=${encodeURIComponent("https://xkcd.com/info.0.json ")}`,
      // The data to send (will be converted to a query string)
      data: { 
              // here is where any data required by the api 
              //   goes (check the api docs)
              // NA  
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(comicObj) {
          // do stuff
          
          let title = comicObj.title;
          let img = comicObj.img;
          let content = comicObj.alt;
 
        
         $("#output").html( '<h2>' + title + '</h2>' + content + '<div class = "photo-section" style = "justify-content: center;">' +
            '<br>' + '<img  src="' + img + '"/>'  + '</div>'  );

          console.log(comicObj);
          console.log(comicObj.content);

      
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })

  });
});

