// Get the computer choice
function getComputerChoice() {
  choiceNumber = Math.floor(Math.random() * 3);

  if (choiceNumber === 0) choice = "rock";
  else if (choiceNumber === 1) choice = "paper";
  else choice = "scissor";

  return choice;
}

// Get the user choice

function getHumanChoice() {
  console.log("Choose One of this : ");
  console.log("1) - rock");
  console.log("2) - paper");
  console.log("3) - scissor");

  let choice = prompt("Enter your choice here : ");

  return choice;
}

// Play the entire game for 5 rounds

function playGame() {
  // // Single Round

  function playRound(humanChoice, computerChoice, displayChoice, displayScore) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      resultSpan = "You loose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      resultSpan = "You Win! Rock beats Scissor";
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      resultSpan = "Equality! Rock Rock";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      resultSpan = "Equality! Paper Paper";
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      resultSpan = "You Loose! Scissor beats Paper";
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      resultSpan = "You Win! Paper beats Rock";
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      resultSpan = "You Win! Scissor beats Paper";
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
      resultSpan = "Equality! Scissor Scissor";
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      resultSpan = "You Loose! Rock beats Scissor";
      computerScore++;
    }

    resultArray = [
      resultSpan,
      computerChoice,
      humanChoice,
      computerScore,
      humanScore,
    ];

    return resultArray;
  }

  const gameSelectionContainer = document.querySelector(".gameChoice");
  const gameSelection = document.querySelectorAll("button");

  const resultContainer = document.querySelector("gameChoice");
  const displayChoice = document.querySelector(".display-choice");
  const displayScore = document.querySelector(".display-score");
  // const roundSpanSelection = document.querySelectorAll("span");

  gameSelection.forEach((selection) => {
    selection.addEventListener("click", () => {
      let humanChoice = selection.value;
      let computerChoice = getComputerChoice();

      resultArray = playRound(
        humanChoice,
        computerChoice,
        displayChoice,
        displayScore
      );

      displayChoice.innerHTML =
        `
       <span id="playerScore">Your Choice :` +
        resultArray[2] +
        ` </span>
        <span id="computerScore">Computer Choice :` +
        resultArray[1] +
        ` </span>
      `;

      displayScore.innerHTML =
        `
       <span id="resultSpan">` +
        resultArray[0] +
        `</span>
        <span id="playerScore">Your Score : ` +
        resultArray[4] +
        `</span>
        <span id="computerScore">Computer Score : ` +
        resultArray[3] +
        `</span>
      `;
    });
  });

  //  Score variables

  let humanScore = 0;
  let computerScore = 0;

  // Play the game :
  // for (let p = 0; p < 5; p++) {
  //   let humanChoice = getHumanChoice();
  //   let computerChoice = getComputerChoice();

  //   playRound(humanChoice, computerChoice);

  //   if (p === 4) {
  //     console.log("5 Rounds! End of the Game.");
  //   }
  // }

  // console.log(humanScore, computerScore);

  // if (humanScore > computerScore) {
  //   return console.log("Victory!");
  // } else if (humanScore < computerScore) {
  //   return console.log("Defeat...");
  // } else if (humanScore === computerScore) {
  //   return console.log("Equality.");
  // }
}

playGame();
