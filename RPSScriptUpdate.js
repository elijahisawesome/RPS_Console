let round = 0;
let playerWins = 0;
let computerWins = 0;

function PlayRound(_playerSelection, _computerSelection){
	
	playerSelection = _playerSelection;
	computerSelection = _computerSelection;

	let result = "";

	switch(computerSelection){
		case "ROCK":
			switch(playerSelection){
				case "ROCK":
					result = "You Tied!"
					break;
				case "PAPER":
					result = "You Win!"
					break;
				case "SCISSORS":
					result = "You Lose!"
					break;
				default:
					result = "Invalid"
					break;
			}break;
		case "PAPER":
			switch(playerSelection){
				case "ROCK":
					result = "You Lose!"
					break;
				case "PAPER":
					result = "You Tied!"
					break;
				case "SCISSORS":
					result = "You Win!"
					break;
				default:
					result = "Invalid"
					break;
				}break;
		case "SCISCORS":
			switch(playerSelection){
				case "ROCK":
					result = "You Win!"
					break;
				case "PAPER":
					result = "You Lose!"
					break;
				case "SCISSORS":
					result = "You Tied!"
					break;
				default:
					result = "Invalid"
					break;
				}break;

		default:
			console.log("Error! incorrect computer selection!");
	}
	console.log(`you chose ${playerSelection}, the computer chose ${computerSelection}: `)
	return result;
}

function CalledButton(e){
	if(e.target.id == ""){
		return;
	}
	game(e.target.id);
}
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", CalledButton));
const reset = document.querySelector(".reset");
reset.addEventListener('click', ResetCalled);
const message = document.getElementsByClassName("Message");

function ResetCalled(e){
	round = 0;
	playerWins = 0;
	computerWins = 0;
	reset.classList.remove("visible");
	buttons[0].classList.remove("hidden");
	message[0].innerText =``;
	
}

function EndOfGame(e){
	e.classList.add("hidden");
}

function ComputerSelection(){
	choice = Math.random();
	if (choice < .33){
		return "ROCK";
	}
	else if(choice < .66){
		return "PAPER";
	}
	else{
		return "SCISCORS";
	}
}


function game(playerSelection){
	

	let alerts;
	let choice;
	let computerSelection = ComputerSelection();
	playerSelection= playerSelection.toUpperCase();


		choice = PlayRound(playerSelection, computerSelection)
		if (choice[4] == "W" ){
			playerWins++;
			alerts = `You Win! `;
		}
		else if (choice[4] == "L"){
			computerWins++;
			alerts =`You Lose! `;
		}
		else if (choice[4] == "T"){
			alerts = `You Tied! Try again`;
		}
		else{
			alert(`Invalid Choice!`);
		}
		message[0].innerText =`You chose ${playerSelection},
		 the computer chose ${computerSelection} ${alerts}\n 
		 Your Score: ${playerWins} \n
		 Computer's Score: ${computerWins}`;

		computerSelection = ComputerSelection();
		round ++;
	if (playerWins === 5 || computerWins ===5){
		reset.classList.add("visible");
		buttons.forEach(button => EndOfGame(button));
	}
}
