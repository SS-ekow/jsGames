const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const computerScore = document.getElementById('computerScore')
const userScore = document.getElementById('userScore')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let Cscore = 0
let Uscore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber=== 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "it's a draw!"
        
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "Paper beats rock. You win!"
        Uscore++
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "Rock beats scissors. You lost!"
        Cscore++
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Scissors beats paper. You win!"
        Uscore++
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "Paper beats rock. You lost!"
        Cscore++
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "Rock beats scissors. You win!"
        Uscore++
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "Scissors beats paper. You lost!"

    }

    resultDisplay.innerHTML = result
    computerScore.innerHTML = Cscore
    userScore.innerHTML = Uscore
}