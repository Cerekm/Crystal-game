
var winCount = 0; 
$(".wScore").text("Wins: " + winCount);
var lossCount = 0; 
$(".lScore").text("Losses: " + lossCount);
var userNumber = 0; 
var gameNumber = Math.floor(Math.random() * 101) + 19; 
var gem1 = Math.floor(Math.random() * 12) + 1; 
var gem2 = Math.floor(Math.random() * 12) + 1; 
var gem3 = Math.floor(Math.random() * 12) + 1; 
var gem4 = Math.floor(Math.random() * 12) + 1; 
$(".gNumber").text("Game Number: " + gameNumber);
$(".uNumber").text("User Score: " + userNumber);
console.log(gameNumber);
console.log("diamond" + " " + gem1);
console.log("ruby" + " " + gem2);
console.log("emerald" + " " + gem3);
console.log("amethyst" + " " + gem4);


function resetGame() {
userNumber = 0;
gameNumber = Math.floor(Math.random() * 101) + 19; 
gem1 = Math.floor(Math.random() * 12) + 1; 
gem2 = Math.floor(Math.random() * 12) + 1; 
gem3 = Math.floor(Math.random() * 12) + 1; 
gem4 = Math.floor(Math.random() * 12) + 1; 
$(".gNumber").text("Game Number: " + gameNumber);
$(".uNumber").text("User Number: " + userNumber);
console.log(gameNumber);
console.log("diamond" + " " +gem1);
console.log("ruby" + " " + gem2);
console.log("emerald" + " " + gem3);
console.log("amethyst" + " " +gem4);
}


function winGame() {
alert("You win! Lets go another round");
winCount = winCount + 1;
$(".wScore").text("Wins: " + winCount);
resetGame();
}


function loseGame() {
alert("oh no try again :(");
lossCount = lossCount + 1;
$(".lScore").text("Losses: " + lossCount);
resetGame();
}


$(".gem1").click(function() {
userNumber = userNumber + gem1;
console.log("User Number: " + userNumber);
$(".userNumber").text("User Number: " + userNumber);
  if (userNumber === gameNumber) {
    winGame();
  } else if (userNumber > gameNumber) {
    loseGame();
  }
});


$(".gem2").click(function() {
    userNumber = userNumber + gem2;
    console.log("User Number: " + userNumber);
    $(".userNumber").text("User Number: " + userNumber);
      if (userNumber === gameNumber) {
        winGame();
      } else if (userNumber > gameNumber) {
        loseGame();
      }
    });


$(".gem3").click(function() {
    userNumber = userNumber + gem3;
    console.log("User Number: " + userNumber);
    $(".userNumber").text("User Number: " + userNumber);
      if (userNumber === gameNumber) {
        winGame();
      } else if (userNumber > gameNumber) {
        loseGame();
      }
    });


    $(".gem4").click(function() {
        userNumber = userNumber + gem4;
        console.log("User Number: " + userNumber);
        $(".userNumber").text("User Number: " + userNumber);
          if (userNumber === gameNumber) {
            winGame();
          } else if (userNumber > gameNumber) {
            loseGame();
          }
        });

