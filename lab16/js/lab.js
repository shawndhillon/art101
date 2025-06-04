// index.js - JSON and APIs
// Author: Shawn Dhillon
// Date: 6/4/25

let current = 0;

const oldest = new Date('2006-01-01');
const newest = new Date();

$(document).ready(function() {
  console.log( ( newest.getTime() - oldest.getTime() )  / (1000 * 60 * 60 * 24) )
  $("#random").click(function(){
    
  let comic = Math.floor(Math.random() * 3096) + 1;
    genComic(comic);
  });

  $("#current").click(function(){

  let comic = "";
   genComic(comic);
  });

  $("#prev").click(function(){

  let comic = current - 1;
   if(comic < 1){
      comic = 1;
  }
   genComic(comic);
  });

  $("#next").click(function(){
   
  let comic = current + 1;
   genComic(comic);
  });
});

function genComic(comic){
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${comic}/info.0.json`),
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
          let comicObj = JSON.parse(data.contents)
          let title = comicObj.title;
          let img = comicObj.img;
          let alt = comicObj.alt;

          let year = comicObj.year;
          let month = comicObj.month;
          let day = comicObj.day;

          current = comic;
 
        
         $("#output").html( '<h2>' + title + "<br>"    + month +  "/" +  day + "/" + year+ '</h2>' + '<div class = "pic-section" style = "justify-content: center; ">' +
            '<br>' + '<img  src=" ' + img + ' "alt =' + alt +' "/>'  + '</div>'  );

          console.log(comicObj);
      
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
}