// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create an array of JavaScript objects to hold the data for your quotes.
//Each quote object should have the following properties:
//A quote property which contains a string: the text of the quote to display on the page
//A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb"
//An optional citation property which contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication, then do not include this property on the //object.
//An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.

var quotes = [
    {quote:"1. Don't cry because it's over, smile because it happened.", source:"Dr. Seuss",citation:"https://en.wikiquote.org/wiki/Dr._Seuss#Disputed",year:"Unknown"},
    {quote:"2. Don't cry because it's over, smile because it happened.", source:"Dr. Seuss",citation:"https://en.wikiquote.org/wiki/Dr._Seuss#Disputed",year:"Unknown"},
    {quote:"3. Don't cry because it's over, smile because it happened.", source:"Dr. Seuss",citation:"https://en.wikiquote.org/wiki/Dr._Seuss#Disputed",year:"Unknown"},
    {quote:"4. Don't cry because it's over, smile because it happened.", source:"Dr. Seuss",citation:"https://en.wikiquote.org/wiki/Dr._Seuss#Disputed",year:"Unknown"},
    {quote:"5. Don't cry because it's over, smile because it happened.", source:"Dr. Seuss",citation:"https://en.wikiquote.org/wiki/Dr._Seuss#Disputed",year:"Unknown"}
];