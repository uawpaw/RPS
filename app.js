const computerChoiceDisplay = document.getElementById('compChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1
    
    if (randomNumber ===1){
        computerChoice = 'rock'
    }
    if (randomNumber ===2){
        computerChoice = 'paper'
    }
    if (randomNumber ===3){
        computerChoice = 'scissors'
    }
computerChoiceDisplay.innerHTML = computerChoice

}

function getResult(){
    if(computerChoice=== userChoice){
        result='its a draw!'
    }

    if(computerChoice=== 'rock' && userChoice==='paper'){
        result='you win!'
    }
    if(computerChoice=== 'rock' && userChoice==='scissors'){
        result='you lose!'
    }
    if(computerChoice=== 'paper' && userChoice==='scissors'){
        result='you win!'
    }
    if(computerChoice=== 'paper' && userChoice==='rock'){
        result='you lose!'
    }
    if(computerChoice=== 'scissors' && userChoice==='rock'){
        result='you win!'
    }
    if(computerChoice=== 'scissors' && userChoice==='paper'){
        result='you lose!'
    }
resultDisplay.innerHTML = result


}