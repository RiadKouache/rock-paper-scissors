// Get the computer choice
function getComputerChoice() {
  choiceNumber = Math.floor(Math.random() * 3);

  if (choiceNumber === 0) choice = "rock";
  else if (choiceNumber === 1) choice = "paper";
  else choice = "scissor";

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

  const gameSelectionContainer = document.querySelector(".game-choice");
  const gameSelection = document.querySelectorAll("button");

  const resultContainer = document.querySelector(".game-round");
  const displayChoice = document.querySelector(".display-choice");
  const displayScore = document.querySelector(".display-score");
  // const roundSpanSelection = document.querySelectorAll("span");

  //  Score variables

  let humanScore = 0;
  let computerScore = 0;

  gameSelection.forEach((selection) => {
    selection.addEventListener("click", () => {
      if (humanScore != 5 && computerScore != 5) {
        resultContainer.classList.remove("display");
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
      } else if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) alert("Victory ! You reached 5 points");
        else alert("Defeat ! The computer wins 5 points Haha");

        humanScore = 0;
        computerScore = 0;

        resultContainer.classList.add("display");
      }
    });
  });

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
