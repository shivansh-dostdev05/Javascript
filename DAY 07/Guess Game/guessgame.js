function guessGame() {
  let guess;
  let attempts = 0;
  const systemNumber = Math.floor(Math.random() * 10) + 1;
  while (guess !== systemNumber) {
    guess = Number(prompt("Guess a no. between 1 and 10"));
    if (guess < 1 || guess > 10) {
      prompt("Choose a number between 1 and 10");
    }
    attempts++;

    if (guess === systemNumber) {
      prompt("Yayyy!! You guessed the number right in " + attempts + " attempts. ");
    }
    else if (guess < systemNumber) {
      prompt("Oopsies!! too low, try again.");
    }
    else {
      prompt("Oopsies!! too high, try again.")
    }
  }
  let playAgain = prompt("Wanna play again? (yes/no) ");
  if (playAgain.toLowerCase() === "yes") {
    guessGame();
  } else {
    prompt("Thank you for playing");
  }
}
guessGame();
