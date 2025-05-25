// index.js - 
// Author: Shawn Dhillon
// Date: 


//function fizzBuzz(){
$("#submit").click(function(){
    // get value of input field
    const val = $("#input").val();
    const end = Number(val);

    const f1 = $("#f1").val();
    const f2 = $("#f2").val();
    const f3 = $("#f3").val();
    const f4 = $("#f4").val();

    const s1 = $("#s1").val();
    const s2 = $("#s2").val();
    const s3 = $("#s3").val();
    const s4 = $("#s4").val();

    if( end <= 200 && end >= 1  ){
      let oneLongString = "";

      for (let num = 1; num <= end; num++) {
        let str = "";

        if (num % f1 === 0) str += s1;
        if (num % f2 === 0) str += s2;
        if (num % f3 === 0) str += s3;
        if (num % f4 === 0) str += s4;

        if (str !== "") {
          oneLongString += num + " " + str + "!<br>";
        } else {
          oneLongString += num + "<br>";
        }
      }
      $("#output").html(oneLongString);


    } else {
      $("#output").html('<div class="text"><p>'+ "Make sure you are entering a number between 1 and 200" +'</p></div>'  );
    }
});


