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
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
};
flipCard(0);
flipCard(1);
checkForMatch(cardInPlay);



