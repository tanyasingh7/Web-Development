


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/dice_1.gif';

imgArray[1] = new Image();
imgArray[1].src = 'img/dice_2.gif';

imgArray[2] = new Image();
imgArray[2].src = 'img/dice_3.gif';

imgArray[3] = new Image();
imgArray[3].src = 'img/dice_4.gif';

imgArray[4] = new Image();
imgArray[4].src = 'img/dice_5.gif';

imgArray[5] = new Image();
imgArray[5].src = 'img/dice_6.gif';

// Application #3 - Simple Crap Game (Dice game based on luck)

function crap() {
  var bet=document.getElementById('input').value;
  console.log(bet);
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var total=dice1+dice2;
  document.images[0].src="img/dice_" + dice1 + ".gif";
  document.images[1].src="img/dice_" + dice2 + ".gif";
  document.getElementById("total").innerHTML = "Sum: " + total;

  if (total==7 || total == 11){
    document.getElementById("result").innerHTML = "You Won!";
  }
  else if(total == 3 || total ==2 || total == 12){
  document.getElementById("result").innerHTML = "Sorry! Not only did you lose the game, but you also lost your bet! You lost $"+bet;
  console.log(bet);
} else{
  document.getElementById("result").innerHTML='Roll again!'
}
}
