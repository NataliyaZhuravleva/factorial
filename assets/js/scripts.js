// Business logic:

function factorial1(n) {

  if (n == 0) {
    return 1;
  } else
  n * factorial1(n - 1);
}

// User interface logic:

$(document).ready(function () {
  $("button#factorial").click(function () {
    
    // let n = 5;
    // let factorial = n;

    // for (let i = n - 1; i > 0; i--) {  
    //  factorial *= i;
    //  console.log(factorial);

    //}
    let result = factorial1(5);
   // console.log(result);
    alert(result);
    
    //
   // event.preventDefault();
  });


});
