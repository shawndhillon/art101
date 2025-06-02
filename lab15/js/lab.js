// index.js - AJAX
// Author: Shawn Dhillon
// Date: 6/2/25
$(document).ready(function() {
  $("#activate").click(function(){
    // Generate a random number between 1 and 898 (as per Pokémon API)
  let id = Math.floor(Math.random() * 898) + 1;

  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
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
      success: function(data) {
          // do stuff
          console.log(data);
          let pokemon = data.name;
          let pokemonImg = data.sprites.front_default;
          let shiny = data.sprites.front_shiny;
          let cry = data.cries.latest;
          let t1 = data.types[0].type.name;
        
          let t2 = "";
          if(data.types[1]){
            t2 = data.types[1].type.name;
          } 

          $("#output").html( '<h2>' + pokemon + '</h2>' + t1 + " " + t2 + '<div class = "photo-section" style = "justify-content: center;">' +
             '<br>' + '<img  src="' + pokemonImg + '"/>' 
              + '<img  src="' + shiny + '"/>' + '</div>'  );

          new Audio(cry).play();

      
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })

  });
});

