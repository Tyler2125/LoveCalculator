// submit button
function loveCalculator() {
  if (document.getElementById("firstname").value == "") {
    alert("Please Enter your name");
    return false;
  } else if (document.getElementById("lovername").value == "") {
    alert("Please Enter your Lovers name");
    return false;
  } else {
    //first input
    var yourName = document.getElementById("firstname").value;
    //second input
    var loverName = document.getElementById("lovername").value;
    // Actual Calculation
    var love = document.getElementById("love-calculator");
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore);
    love.querySelectorAll("h2")[1].innerHTML = yourName + " and " + loverName + " your love score is " + loveScore + " %";
  }

}
//resetbutton
function resetFunction() {
  location.reload();
}
