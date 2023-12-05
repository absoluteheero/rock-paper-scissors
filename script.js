function getComputerChoice(){
    var choices =['Rock', 'Paper', 'Scissors']
    var cpuChoice = choices[Math.floor(Math.random()* choices.length)]
    return cpuChoice
    
}

function playRound (playerSelection, computerSelection){
    // Logic here
    console.log(playerSelection);
    // Put choices in all same case
    let playerChoice = playerSelection.toUpperCase();
    let cpuChoice = computerSelection.toUpperCase();

    // Compare the two choices
    if (playerChoice == cpuChoice){
        return 'We have a tie'
    }

    if (playerChoice == 'ROCK' && cpuChoice == 'PAPER' ||
        playerChoice == 'PAPER' && cpuChoice == 'ROCK' ||
        playerChoice == 'SCISSORS' && cpuChoice == 'PAPER') {
            return 'You won. ' + playerChoice + ' beats ' + cpuChoice + '.'
        }

    else {
        return 'You lose. ' + cpuChoice + ' beats ' + playerChoice + '.'
    }

}

function game(){

    let playerScore = 0;
    let cpuScore = 0;
    let numRounds = 5;
    let computerSelection = '';

    while(numRounds > 0){
        computerSelection = getComputerChoice();
        var playerChoice = prompt('What is your choice?');
        var result = playRound(playerChoice, computerSelection);
        console.log(result);
        numRounds--;
    }
}

game();


