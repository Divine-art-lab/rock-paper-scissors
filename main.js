//Date and Time
function date_time() {
  let date = new Date();
  let formattedDate = date.toLocaleString('default', {
    month: 'short',
    date: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
  document.getElementById('date').innerHTML = formattedDate;
}
setInterval(date_time, 1000);

//player and computers scores 
playerScore = 0;
compScore = 0;

let playerScore_Element = document.createElement('h1');
playerScore_Element.textContent = playerScore;

let compScore_Element = document.createElement('h1');
compScore_Element.textContent = compScore;

document.querySelector('.player').append(playerScore_Element);
document.querySelector('.computer').append(compScore_Element);
//results 
let win, lose;
win = "You WIN🎉!!!, Computer lose😂";
lose = "You lost😔, computer win";


//set output 
let output = document.getElementById('results');
output.textContent = '';
//choice or games.
//For computer
compGames = ["Rock", "Paper", "Scissors"];
let compRndmChoice = () => {
  let index = Math.floor(Math.random() * compGames.length);
  return compGames[index];
}
//for user/player
//create variables and element 
let Rock, Paper, Scissors;
Rock = document.createElement('div');
Paper = document.createElement('div');
Scissors = document.createElement('div');

//give them class name for styling
Rock.classList.add('rock');
Paper.classList.add('paper');
Scissors.classList.add('scissors');

//add them to HTML 
let gamesBox = document.querySelector('main');
gamesBox.append(Rock, Paper, Scissors);

//their functions 
Rock.onclick = () => {
  confirmGames('Rock');
};
Paper.onclick = () => {
    confirmGames('Paper');
};
Scissors.onclick = () => {
    confirmGames('Scissors');
};

//function to confirmGames 
function confirmGames(playerChioce) {
  let compChoice = compRndmChoice();
  if (compChoice === playerChioce) {
    output.textContent = "Draw";
  }
  else if (compChoice == 'Rock' && playerChioce == 'Paper' || compChoice == 'Paper' && playerChioce == 'Scissors' || compChoice == 'Scissors' && playerChioce == 'Rock') {
    output.textContent = win;
    playerScore++;
  }
  else {
    output.textContent = lose;
    compScore++;
  }
  
  compScore_Element.textContent = compScore;
  playerScore_Element.textContent = playerScore;

  if (output.textContent == win) {
    output.style.color = 'lightgreen';
  }
  else if (output.textContent == lose) {
    output.style.color = '#F74848';
  }
  else {
    output.style.color = 'lightblue';
  }
  
  
  let display_compChoice = document.querySelector('.compChoice');
  if (compChoice == 'Rock') {
    display_compChoice.textContent = 'Computer: ✊';
  }
  else if (compChoice == 'Paper') {
    display_compChoice.textContent = 'Computer: 🖐️';
  } 
  else {
    display_compChoice.textContent = 'Computer: ✌️';
  }
}
