// an array of javaScript objects for quotes
var quotes =
	[{
		"quote": "You can do anything but not everything",
		"source": "David Allen",
		"citation": "Making It All Work",
		"year": 2001,
		"tags": "Time Management",
		"amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B001AO0GRC&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_CGlryb3ZGNC3A\" ></iframe>"
	}, {
		"quote": "To enjoy life, you don't need fancy nonsense, but you do need to control your time and realize that most things just aren't as serious as you make them out to be.",
		"source": "Tim Ferris",
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

// empty array to hold a running count of quotes to display
var quotesCounter = [];
// count the quotes array items and add each quote as a number into quotesCounter
for (var i = 0; i < quotes.length; ++i){
    quotesCounter.push(i);
}

function getRandomQuote(){
    // reset the quotesCounter after showing all quotes
    if(quotesCounter.length < 1){
        //alert("the end")
        for (var i = 0; i < quotes.length; ++i){
            quotesCounter.push(i);
        }
    }    
    
    // take a random number from quotesCounter and remove then remove it from the count
    var randomNumber = quotesCounter.splice(Math.random()*quotesCounter.length,1)[0];
    //alert(randomNumber);
    // return the randomly selected quote object 
    return quotes[randomNumber];

}

function printQuote(){
    var randomQuote = getRandomQuote();
    var quoteTemplate = '<p class="quote">' + randomQuote.quote + '</p><p class="source">'+ randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span> </p><p class="amazon">' + randomQuote.amazon + '</p>';

    //printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
    document.getElementById('quote-box').innerHTML = quoteTemplate;
    
    //printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
    if (randomQuote.citation === undefined) {
        $( ".citation" ).remove();
    }
    if (randomQuote.year === undefined) {
        $( ".year" ).remove();
    }
    window.setTimeout(printQuote, 30000);
    //set 30 second timer onscreen
    function inPageTimer(){
        var count=30;
        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer()
        {
          count=count-1;
          if (count <= 0)
          {
             clearInterval(counter);
             return;
          }
         document.getElementById("timer").innerHTML=count; // watch for spelling
        }  
    };
    inPageTimer();
}



// call printQuote() when the page first loads
$(document).ready(function () {
   printQuote();
});

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
