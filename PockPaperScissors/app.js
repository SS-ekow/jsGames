const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const computerScore = document.getElementById('computerScore')
const userScore = document.getElementById('userScore')
const audioElement1 = new Audio('win.mp3');
const audioElement2 = new Audio('lost.mp3');
const audioElement3 = new Audio('draw.mp3');

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
    const randomNumber = Math.floor(Math.random()*4)

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
        audioElement3.play();
        
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "Paper beats rock. You win!"
        Uscore++
        audioElement1.play();
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "Rock beats scissors. You lost!"
        Cscore++
        audioElement2.play();
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Scissors beats paper. You win!"
        Uscore++
        audioElement1.play();
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "Paper beats rock. You lost!"
        Cscore++
        audioElement2.play();
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "Rock beats scissors. You win!"
        Uscore++
        audioElement1.play();
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "Scissors beats paper. You lost!"
        Cscore++
        audioElement2.play();

    }

    resultDisplay.innerHTML = result
    computerScore.innerHTML = Cscore
    userScore.innerHTML = Uscore
}