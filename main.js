//date
function setDate() {
  let date = new Date().toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  document.getElementById('date').textContent = date;
}
setInterval(setDate, 1000);
//scores 
let playerScore = 0;
let computerScore = 0;
//Results 
let win = "You WIN🎉!!!";
let lose = "You Lose😔";
//computerChoice
let computerOutput = ["Rock", "Paper", "Scissors"];
function compRndmChoice() {
  const index = Math.floor(Math.random() * computerOutput.length);
  return computerOutput[index];
}
//playerChoice
let userOutput = ["Rock", "Paper", "Scissors"];
let Rock, Paper, Scissors;
Rock = document.createElement("div");
Paper = document.createElement("div");
Scissors = document.createElement("div");

Rock.classList.add('Rock');
Paper.classList.add('Paper');
Scissors.classList.add('Scissors');

let parentElement = document.querySelector("main");
parentElement.append(Rock, Paper, Scissors);
let score = document.createElement("h1");
score.textContent = playerScore;
let score2 = document.createElement("h1");
score2.textContent = computerScore;
document.querySelector(".player").appendChild(score); 
document.querySelector(".computer").appendChild(score2); 


Rock.onclick = () => {
  confirmGame("Rock");
}
Paper.onclick = ()  => {
  confirmGame("Paper");
}
Scissors.onclick = () => {
  confirmGame("Scissors");
  console.log(playerChoice)
}


let output = document.getElementById("results");

//conditional statements 
function confirmGame(playerChoice) {
  let computerChoice = compRndmChoice();
  if (computerChoice == playerChoice) {
    output.textContent = "Draw";
  }
  else if (computerChoice == "Rock" && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Rock") {
    output.textContent = win;
    playerScore++;
  } else {
    output.textContent = lose;
    computerScore++;
    
  }
  
  if (output.textContent == win) {
    output.style.color = "green";
  }
  else if (output.textContent == "Draw") {
    output.style.color = "blue";
  } else {
    output.style.color = "red";
  }
  
  score.textContent = playerScore;
  score2.textContent = computerScore;
}
