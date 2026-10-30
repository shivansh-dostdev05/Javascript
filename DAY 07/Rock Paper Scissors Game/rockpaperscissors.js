console.log("Lets play rock paper scissors")

function rockPaperScissorsGame(){
  const userChoicePrompt = prompt("Enter Rock , Paper or Scissors");
  const userChoice = userChoicePrompt.toLowerCase();

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    console.log("Enter a valid choice");
    return;
  }

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;

    case 2:
      computerChoice = "paper";
      break;

    case 3:
      computerChoice = "scissors";
      break;

    default:
      console.log("Invalid Choice");
  }

  console.log("You chose : " + userChoice);
  console.log("Computer chose : " + computerChoice);

  switch (true) {
    case (userChoice === computerChoice):
      console.log("Oopies!! Match tied. Try again.");
      break;

    case (userChoice === "rock" && computerChoice === "paper" ||userChoice === "paper" && computerChoice === "scissors"||userChoice === "scissors" && computerChoice === "rock"):
      console.log("Oh no! Computer won. Better luck next time");
      break;

    case (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" ||userChoice === "scissors" && computerChoice === "paper"):
      console.log("Yayyyy!! You won.");
      break;

    default:
      console.log("Invalid Entry");
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing!! See you next time.")
  }
}
rockPaperScissorsGame();
