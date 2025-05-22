// index.js - returns Harry Potter House
// Author: Shawn Dhillon
// Date: 5/22/25


function sortingHat(str) {

  // arr = str.replaceAll(" ", "").split('');
  // len = arr.length;
  // mod = len % (4 + 1);

  // removes spaces and hashes/takes absolute val of string to get a number
  data = str.replaceAll(" ", "");
  hash = hashCode(data);
    // makes sure hashed val is in scope of one of the houses
  hash = Math.abs(hash)
  
  slytherin =  "If the Sorting Hat placed you in this house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you’re the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn’t let anyone see their soft side.";
  hufflepuff = "If the Sorting Hat placed you in this house, we can imagine you’re the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks.";
  ravenclaw =  "If the Sorting Hat placed you in this house, you have demonstrated excellent wisdom, wit and a skill for learning. Ravenclaws are often known for being quite eccentric and most of the great wizarding inventors and innovators have come from this house.";
  gryffindor = "If the Sorting Hat placed you in this house, you would have demonstrated qualities like courage, bravery and determination. Some of the wizarding world’s best and brightest belonged to this house – Harry Potter and Albus Dumbledore are just a couple that spring to mind!";
  // added house
  muggle = "If the Sorting Hat decided you were a Muggle, you are very unlucky. The term Muggle is used by wizards and witches to distinguish themselves from those who do not possess magical abilities";

  houses = ["Slytherin","Hufflepuff","Ravenclaw","Gryffindor", "Muggle"];
  desc = [slytherin, hufflepuff, ravenclaw, gryffindor, muggle];

  // length dynamically increases for each added house
  mod = hash % (houses.length);
  
  return [houses[mod],desc[mod]];
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const input = $("#input").val();
    // now let's sort it
    result = sortingHat(input);

    house = result[0];
    desc = result[1];
 
    $("#output").html('<div class="text"><p>'+ "The Sorting Hat has sorted you into " + house + ".<br><br>" +  desc +'</p></div>'  );
});

// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript/8831937#8831937
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const numQuestions = 5;
    const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
    let gryffindor = 0;
    let slytherin = 0;
    let hufflepuff = 0;
    let ravenclaw = 0;

    for (let i = 1; i <= numQuestions; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        const house = selected.value;
        if (house === "gryffindor") gryffindor++;
        else if (house === "slytherin") slytherin++;
        else if (house === "hufflepuff") hufflepuff++;
        else if (house === "ravenclaw") ravenclaw++;
      }
    }

    const scores = [gryffindor, slytherin, hufflepuff, ravenclaw];
    const maxScore = Math.max(...scores);
    const House = houses[scores.indexOf(maxScore)];

    document.getElementById("results").textContent = `You belong to ${House}!`;
});