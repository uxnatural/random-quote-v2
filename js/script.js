
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes =
	[{
		"quote": "To enjoy life, you don't need fancy nonsense, but you do need to control your time and realize that most things just aren't as serious as you make them out to be.",
		"source": "Tim Ferris",
		"citation": "The 4-Hour Workweek",
		"year": 2009,
		"tags": "Time Management",
		"amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B002WE46UW&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_LCRdybVQ46XNT\" ></iframe>"
	}, {
		"quote": "If you tell the truth, you don't have to remember anything.",
		"source": "Mark Twain",
		"citation": "p. 240 Mark Twain's Notebook",
		"year": 1935,
		"tags": "Essays and Correspondence",
		"amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B00O869NMS&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_6GRdybFWTZR8G\" ></iframe>"
	}, {
		"quote": "Without music, life would be a mistake.",
		"source": "Friedrich Nietzsche",
		"citation": "Twilight of the Idols",
		"year": 1990,
		"tags": "Philosophy",
		"amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B002RI945U&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_5JRdyb1C1XC8G\" ></iframe>"
	}];

//global variable to hold a count of array items in quotes
var quotesCounter = [];
//count the array items and add each as a number in quotesCounter
for (var i = 0; i < quotes.length; ++i){
    quotesCounter.push(i);
}

function getRandomQuote(){
    //take a random number from quotesCounter
    var randomNumber = quotesCounter.splice(Math.random()*quotesCounter.length,1)[0];
    
    //disabled the button when the quotesCounter has 1 item left
    if(quotesCounter.length == 1){
        document.getElementById('loadQuote').innerHTML = "Sorry, we're out of quotes."
        document.getElementById('loadQuote').disabled = true;
    }
    //returns the randomly selected quote object 
    return quotes[randomNumber];

//??http://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice
//return the randomly selected quote object
}

function printQuote(){
    
    var randomQuote = getRandomQuote();
    
    var quoteTemplate = '<p class="quote">' + randomQuote.quote + '</p><p class="source">'+ randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span> </p><p class="amazon">' + randomQuote.amazon + '</p>';

    //printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing

    //printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
    document.getElementById('quote-box').innerHTML = quoteTemplate;
}

