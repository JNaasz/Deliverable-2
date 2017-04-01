document.getElementById("color").addEventListener("change", myFunction);
function myFunction() {
      var x = document.getElementById("color");
    x.value = x.value.toUpperCase();
}
document.getElementById("ping").value = function() {damnitNo()};

function damnitNo() {
  document.getElementById("ping").innerHTML = "NOOOO!!!";
  }

/*after entering text into "input" when the user clicks enter the text
dissapears. I'm not really sure how to change that.*/
