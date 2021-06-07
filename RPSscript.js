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


function PlayerSelection(){
	let playerSelection = prompt("Please choose: Rock, Paper or Scisors");
	playerSelection = playerSelection.toUpperCase();
	return playerSelection;
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

function game(){
	let round = 0;
	let wins = 0;
	let choice;

	let playerSelection = PlayerSelection();
	let computerSelection = ComputerSelection();

	while(round < 5){
		choice = PlayRound(playerSelection, computerSelection)
		if (choice[4] == "W" ){
			wins++;
			console.log(`You Win! `);
		}
		else if (choice[4] == "L"){
			console.log(`You Lose! `);
		}
		else if (choice[4] == "T"){
			console.log(`You Tied! `);
		}
		else{
			console.log(`Invalid Choice! `);
		}
		playerSelection = PlayerSelection();
		computerSelection = ComputerSelection();
		round ++;
	}
	console.log(wins);
}

game();
Console.log("Goodbye!");