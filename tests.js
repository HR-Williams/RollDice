Describe: rollDice();
Test: "It will generate a random number from a click input"
Expect(rollDice(click)).toEqual(random integer between 1 and 6);

Describe: endTurn();
Test: "It will hide player 1 buttons and show player 2 buttons"
Expect(rollDice(click)).toEqual(random integer between 1 and 6);

Describe: switch(digit)
Test: "If digit is 1 then call endTurn(), will also set turntotal = 0"
Expect(switch(1)).toEqual(endturn);






Descibe: 
Click button to start game.  
Show Html Prompt: Player 1's turn. 
let player 1 turnDig = 0
let player 1 totalScore = 0
There will be an action (click) that will generate a random digit (dig) between 1 and 6.  If dig = 1 then return totalScore. (change player)
If dig = (2-6) then: turnDig += dig (continue rolling)
If player clicks "hold" then 
return totalScore += turnScore 
(change players)

function ScoreCard (player, totalScore) {
  this.player = player;
  this.totalScore = totalScore;
}

[Player1: totalScore1
Player2: totalScore2]



let roll = [1,2,3,4,5,6]
let function rollDice(roll) {
  input: roll
  output: random number 1-6
}
Let scoreCard = 

player 1 score : 1total
player 2 score : 2total


let 1total = 0
let 2total = 0
let turnTotal = 0

if (1total <= 100 || 2total<= 100) {
// run this:

switch(digit) {
  case (1):
  turntotal = 0;
  endTurn(); // hide player1 dice show player 2 dice 
  break;
  case (2):
  case (3):
  case (4):
  case (5):
  case (6):
   turnTotal = digit + turnTotal;
    break;
}
}

function holdTurn(click) {
  1total = 1total + turntotal;
  //hide player 1 show player 2 
}
