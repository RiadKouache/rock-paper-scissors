// Get the computer choice
function getComputerChoice() {
  choiceNumber = Math.floor(Math.random() * 3);

  if (choiceNumber === 0) choice = "rock";
  else if (choiceNumber === 1) choice = "paper";
  else choice = "scissor";

  return choice;
}

// console.log(getComputerChoice());

// Get the user choice

function getHumanChoice() {
  console.log("Choose One of this : ");
  console.log("1) - rock");
  console.log("2) - paper");
  console.log("3) - scissor");

  let choice = prompt("Enter your choice here : ");

  return choice;
}

// // choice = getHumanChoice();

// playRound(humanChoice, computerChoice);

// Play the entire game for 5 rounds

function playGame() {
  // // Single Round

  function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You loose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log("You Win! Rock beats Scissor");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("Equality! Rock Rock");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("Equality! Paper Paper");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      console.log("You Loose! Scissor beats Paper");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      console.log("You Win! Scissor beats Paper");
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
      console.log("Equality! Scissor Scissor");
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      console.log("You Loose! Rock beats Scissor");
      computerScore++;
    }
  }

  //  Score variables

  let humanScore = 0;
  let computerScore = 0;

  // Play the game :
  for (let p = 0; p < 5; p++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (p === 4) {
      console.log("5 Rounds! End of the Game.");
    }
  }

  console.log(humanScore, computerScore);

  if (humanScore > computerScore) {
    return console.log("Victory!");
  } else if (humanScore < computerScore) {
    return console.log("Defeat...");
  } else if (humanScore === computerScore) {
    return console.log("Equality.");
  }
}

playGame();
