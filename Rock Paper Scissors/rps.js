const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

let optionBtns = document.getElementsByClassName("optionBtns");

const playerMove = document.getElementById("playerMove");
const computerMove = document.getElementById("computerMove");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

//function assignPlayerMove(){

// for(let move in optionBtns){
//     move.addEventListener("click", event =>{
//         switch(move){
//             case rockBtn:
//                 playerMove.textContent += " Rock"
//                 console.log("hfhf")
//                 break;
//         }
//     })
// }

let moves = ["Rock","Paper","Scissors"]

let playerCount = 0;
let computerCount = 0;


//ASSIGNING THE PLAYER MOVE
rockBtn.addEventListener("click", (event) => {
  playerMove.textContent = moves[0];
  assignComputerMove();
  winnerDeterminer();
  scoreCounter();
});

paperBtn.addEventListener("click", (event) => {
  playerMove.textContent = moves[1];
  assignComputerMove();
  winnerDeterminer();
  scoreCounter();
});

scissorsBtn.addEventListener("click", (event) => {
  playerMove.textContent = moves[2];
  assignComputerMove();
  winnerDeterminer();
  scoreCounter();
});


//ASSIGNING COMPUTER MOVE

function assignComputerMove(){
    compRandom = Math.floor(Math.random()  * moves.length);
    
    console.log(compRandom);

    computerMove.textContent = moves[compRandom];
    return compRandom;
}

function winnerDeterminer(){
    if (playerMove.textContent == computerMove.textContent){
        result.textContent = "TIE!"
    }
    else if(playerMove.textContent == "Rock" & computerMove.textContent == "Scissors"){
        result.textContent = "YOU WIN!"
    }
    else if(playerMove.textContent == "Scissors" & computerMove.textContent == "Rock"){
        result.textContent = "YOU LOSE!"
    }
    else if(playerMove.textContent == "Paper" & computerMove.textContent == "Rock"){
        result.textContent = "YOU WIN!"
    }
    else if(playerMove.textContent == "Rock" & computerMove.textContent == "Paper"){
        result.textContent = "YOU LOSE!"
    }
    else if(playerMove.textContent == "Scissors" & computerMove.textContent == "Paper"){
        result.textContent = "YOU WIN!"
    }
    else if(playerMove.textContent == "Paper" & computerMove.textContent == "Scissors"){
        result.textContent = "YOU LOSE!"
    }
    
}


function scoreCounter(){
    
    if (result.textContent == "YOU WIN!"){
        playerCount ++;
        playerScore.textContent = `${playerCount}`
    } 
    else if (result.textContent == "YOU LOSE!"){
        computerCount ++;
        computerScore.textContent = `${computerCount}`
    } 
}


