// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Using polyfill for ECMA6 .includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

var quotes =
	[{
		"quote": "To enjoy life, you don't need fancy nonsense, but you do need to control your time and realize that most things just aren't as serious as you make them out to be.",
		"source": "Tim Ferris",
		"citation": "The 4-Hour Workweek",
		"year": 2009,
		"tags": "Time Management",
		"amazon": "<iframe type=\"text/html\" width=\"336\" height=\"550\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B002WE46UW&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_LCRdybVQ46XNT\" ></iframe>"
	}, {
		"quote": "If you tell the truth, you don't have to remember anything.",
		"source": "Mark Twain",
		"citation": "p. 240 Mark Twain's Notebook",
		"year": 1935,
		"tags": "Essays and Correspondence",
		"amazon": "<iframe type=\"text/html\" width=\"336\" height=\"550\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B00O869NMS&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_6GRdybFWTZR8G\" ></iframe>"
	}, {
		"quote": "Without music, life would be a mistake.",
		"source": "Friedrich Nietzsche",
		"citation": "Twilight of the Idols",
		"year": 1990,
		"tags": "Philosophy",
		"amazon": "<iframe type=\"text/html\" width=\"336\" height=\"550\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B002RI945U&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_5JRdyb1C1XC8G\" ></iframe>"
	}]



function getRandomQuote(){

    //Create a Random Number Video on Treehouse "https://teamtreehouse.com/library/javascript-basics/working-with-numbers/create-a-random-number"
    var randomNumber = Math.floor(Math.random() * quotes.length);
    //* EXTRA * Don't display a random quote more than once until ALL quotes from the array have been displayed. 
    var oldQuote = [];
    oldQuote.push(randomNumber);    

    //Select a random quote from the quotes array   
    var randomQuote = quotes[randomNumber];

    
    //Object Literal Video on Treehouse "https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects/the-object-literal"
    //if the value of randomNumber
    if (oldQuote.includes(randomNumber)){
        
    } else {
        return randomQuote.quote; 
    }

//??http://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice
//return the randomly selected quote object
}


