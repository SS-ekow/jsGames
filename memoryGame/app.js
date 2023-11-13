
const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'burger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }, 
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }, 
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }, 
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'burger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }, 
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }, 
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }

];


cardArray.sort(() => 0.5 - Math.random()); // randomize the cards



const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    grid.appendChild(card)
    card.addEventListener('click', flipCard)


  }
}
createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoid = cardsChosen[1]

  if (optionOneId == optionTwoid){
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoid].setAttribute('src', 'images/blank.png')

    alert('You have clicked the same card!')
  }



 if ( cardsChosen[0] == cardsChosen[1]){
  alert('you found a match!')
  cards[optionOneId.setAttribute('src', 'images/white.png')]
  cards[optionTwoid.setAttribute('src', 'images/white.png')]
  cards[optionOneId.removeEventListener('click', flipCard)]
  cards[optionTwoid.removeEventListener('click', flipCard)]
  cardsWon.push(cardsChosen)
 }
 else {
  cards[optionOneId.setAttribute('src', 'images/blank.png')]
  cards[optionTwoid.setAttribute('src', 'images/blank.png')]
  alert('sorry try again')


 }
 resultDisplay.textContent = cardsWon.length
 cardsChosen = []
 cardsChosenIds = []

 if (cardsWon.length == cardArray.length/2){
  resultDisplay.innerHTML = 'Congratulations. you found them all!'
 }
}

function flipCard(){
  const cardId= this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }



}