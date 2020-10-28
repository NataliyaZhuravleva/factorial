// Business logic:

function factorial1(n) {

  if (n == 0) {
    return 1;
  } else
    return n * factorial1(n - 1);
}

// User interface logic:

$(document).ready(function () {
  $("button#factorial").click(function (event) {
    //without recursion
    // let n = 5;
    // let factorial = n;
    // for (let i = n - 1; i > 0; i--) {  
    //  factorial *= i;
    //  console.log(factorial);
    // }
    //with recursion

    const input = parseInt($("#input").val());
    if (input && input>=0) {
      let result = factorial1(input);
      //alert(result);
      $("#result").show().append(" "+ result);
    } else {
      $("#warning").show();
    }
    //
    event.preventDefault();
  });


});
