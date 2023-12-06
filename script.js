var playerScore = 0;
var cpuScore = 0;

const score = document.querySelector('#score');
const message = document.querySelector('#message');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
        var result = playRound(button.id, getComputerChoice());
        message.textContent = result;
        score.textContent = "Human " + playerScore + " CPU " + cpuScore;

        if (playerScore ==5){
            message.textContent ="Congratulations you won !";
            playerScore = 0;
            cpuScore = 0;
            
        }

        if (cpuScore==5){
            message.textContent ="Sorry you lose!";
            cpuScore = 0;
        }
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


