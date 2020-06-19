
//------------------------ Game Project---------------------------
//All right we have been learning a lot of things. Now it is time to create something fun. Do you know the game battleship? Yes? well, we are going to create something similar.
//Battleship is a war-themed game for two players in which the opponents try to guess the location of their opponent's warships and sink them.
//Players take turns calling out row (x) and column (y), those are coordinates (x,y) identify a cell that contains a ship.
// As we are creating our own version, all of our ships are located in random cells of the gameBoard (each one in a cell). To make this possible you need to initialized the player's gameBoard (4x4) with zeros and to create the random positions of the warships
// 4 different coordinates x and y (one random number for 'x' between 0-3, one random number for 'y' between 0-3) need to be generated to indicate that there is going to be a ship and it is representated by a number 1 in the gameboard.
//On each turn, the player has to enter two numbers that identify a row (x) and column (Y) of the opponent target grid. if the coordinate "hit" a ship (find a number 1 in the gameBoard) the opponent has one less ship and an alert should be shown saying "you hit a warship"
//the winner is the first player that eliminates all the four ships of the oponent (ships=0)
//In order to store data we want you to:
//create two Players objects (one for each player). The Player object has the following properties: name (ask to the users) {string}, ships {number} (we are goin to play with 4) and gameBoard {number} (matrix 4x4) initialized with zeros
//so in general the game is a loop that takes a player turn and asks for the cordinates for the oponent's ships. loop is over when one of the players has 0 ships.
//return value contains a string with the winner name

const player1 = {
  name: prompt(`What is player1's name?`),
  ships: 0,
  gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
};
const player2 = {
  name: prompt(`What is player2's name?`),
  ships: 0,
  gameBoard: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
};


let player1Turn = true;

battleship = () => {

  // for(let i = 0; i < 4; i ++){
  //   Math.floor(Math.random() * Math.floor(5));
  // }

  while(player1.ships !== 4){
    const qX = Math.floor(Math.random() * Math.floor(4));
    const qY = Math.floor(Math.random() * Math.floor(4));
    console.log(qX, qY);
    if( player1.gameBoard[qY][qX] == 0){
      player1.gameBoard[qY][qX] = 1;
      player1.ships++
    }
  }
  while( player2.ships !== 4 ){
    const qX = Math.floor(Math.random() * Math.floor(4)); 
    const qY = Math.floor(Math.random() * Math.floor(4));
    if( player2.gameBoard[qY][qX] == 0){
      player2.gameBoard[qY][qX] = 1;
      player2.ships++
    }
  }
  
  while(player1.ships !== 0 && player2.ships !== 0){
    const curentPlayer = player1Turn ? player1.name : player2.name;

    const yL = prompt(`${curentPlayer} pick a location to strike! First enter the Y location 0-3
          3 
          2  
          1   
          0
      X       0   1   2   3
          Y`);
    const xL = prompt(`${curentPlayer} pick a location to strike! First enter the X location 0-3
          3 
          2  
          1   
          0
      X       0   1   2   3
          Y`);

    if( (!isNaN(xL) && xL >= 0 && xL <= 3) && (!isNaN(yL) && yL >= 0 && yL <= 3) ){  
      if(player1Turn ? player2.gameBoard[yL][xL] == 1 : player1.gameBoard[yL][xL] == 1){
        alert(`BOOM!!!! ${curentPlayer} SUNK THE SHIP!`)
        if(player1Turn){
          player2.ships--;
          player2.gameBoard[yL][xL] = 0;
        } else{
          player1.shhips--;
          player1.gameBoard[yL][xL] = 0;
        }
      } else {
        alert(`MISSED! Next player.`)
      }
    } else {
      alert(`You must enter a number between 0-3.`)
    }
    
    player1Turn ? player1Turn = false : player1Turn = true;
  }
  let htmlString;
  player1Turn ? htmlString = `${player2.name} WINS!!!` : htmlString = `${player1.name} WINS!!!`;
  alert(htmlString);
  

  return htmlString;
}


const game = battleship()
const htmlTarget = document.getElementById('a');
htmlTarget.innerHTML = game
