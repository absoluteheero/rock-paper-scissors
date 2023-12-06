var playerScore = 0;
var cpuScore = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id, getComputerChoice());
    });
  });

function getComputerChoice(){
    var choices =['Rock', 'Paper', 'Scissors']
    var cpuChoice = choices[Math.floor(Math.random()* choices.length)]
    return cpuChoice
    
}

function playRound (playerSelection, computerSelection){
    
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

    
}

game();


