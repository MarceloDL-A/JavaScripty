const getUserChoice = userInput => {userInput = userInput.toLowerCase()
if (userInput === "rock" || userInput === "paper" ||userInput === "scissors" ){return userInput} else {console.log("Did you type a invalid valor")}};

// getUserChoice("wood")
// console.log(getUserChoice("scissors"))

function getComputerChoice() {comp_choice = Math.floor(Math.random()*3)
if (comp_choice === 0){return 'rock'} else if (comp_choice === 1){return 'paper'} else{return 'scissors'}};

// console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice){if(userChoice === computerChoice){"The game was a tie"} else if (userChoice === 'rock'){if (computerChoice === 'paper'){return "You Lost! The computer Win!"} else {return "You Win!"}} else if (userChoice === 'scissors'){if (computerChoice === 'rock'){return "You Lost! The computer Win!"} else {return "You Win!"}} else {if (computerChoice === 'scissors'){return "You Lost! The computer Win!"} else {return "You Win!"}}};

function playGame(userChoice, computerChoice){userChoice = getUserChoice('scissors');
computerChoice = getComputerChoice();
console.log(`User: ${userChoice} and comp choice: ${computerChoice}`)
console.log(determineWinner(userChoice, computerChoice))
}

playGame()
