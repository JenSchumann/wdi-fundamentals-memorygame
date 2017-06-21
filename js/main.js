console.log("Up and running!");

// object with properties of the cards
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	}, 
	{
		rank: 'queen',
		suit:'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
	];

// I think there should be some type of variable cardId defined here (as a method??)

var cardsInPlay = [];
 cardsInPlay.push(cards[cardId].rank);

// f to alert user whether match was found
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	};
	
// f to randomize flipping process... eventually?
var flipCard = function() {
	var cardId = document.getElementsByIdName(this).setAttribute(cards);
	console.log("User flipped " + cards[cardId].rank);
	this.getAttribute(cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	
	var createNewCard = function() {
		var cards = document.querySelectorAll('.cardElement');
		documentgetElementsById('game-board').appendChild(cardElement);  
		}
		};
document.querySelectorAll('.cards')[0].addEventListener('click', flipCard);
createBoard(); 
}
};


