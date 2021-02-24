let digit = 0;
function rollDice() {
  digit = Math.floor((Math.random() * 6) + 1);
}

funtion endTurn() {
  $("#player1").hide
  $("#player2").show 
}

function ScoreCard() {
  this.players = {};
}

// ScoreCard.prototype.addPlayers = function () {
//  let player1 = new Player ()
//   let player2 = new Player ()
// }

function Player(name, totalScore, turnTotal) {
  this.name= name;
  this.totalScore = 0;
  this.turnTotal = 0;
}

let player1 = new Player("Player1", "", "")


Player.prototype.holdTurn = function(turnTotal) {
  return this.totalScore = this.totalScore + turnTotal;
}

ScoreCard.prototype.addPlayer = function(player) {
  this.players[player.name] = player;
}


Player.prototype.doSomething = function() {
  this.players[]
}


Player.prototype.addDigit = function() {
  switch(digit) {
    case (1):
    this.turnTotal = 0
    // endTurn(); // hide player1 dice show player 2 dice 
    break;
    case (2):
    case (3):
    case (4):
    case (5):
    case (6):
     this.turnTotal = this.turnTotal + digit;
      break;
  }
}



