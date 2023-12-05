var playerScore = 0;
var cpuScore = 0;

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
            playerScore++;
            return 'You won. ' + playerChoice + ' beats ' + cpuChoice + '.'
            
        }

    else {
        cpuScore++;
        return 'You lose. ' + cpuChoice + ' beats ' + playerChoice + '.'
    }

}

function game(){

    let numRounds = 5;
    let computerSelection = '';
    playerScore = 0;
    cpuScore = 0;

    while(numRounds > 0){
        computerSelection = getComputerChoice();
        var playerChoice = prompt('What is your choice?');
        var result = playRound(playerChoice, computerSelection);
        console.log(result);
        console.log("The score is:");
        console.log("Human: " + playerScore);
        console.log("CPU: " + cpuScore)
        numRounds--;
    }
}

game();


