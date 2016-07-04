/* 
Check if jQuery was initialized and if not (CDN was down for example), then
load jQuery from a local source in the js folder of the project.
*/
if (window.jQuery) {  
    console.log("You are running jQuery version: " + $.fn.jquery);  
} else {
    console.log("");
}

if(typeof jQuery === 'undefined'){
    document.write(unescape("%3Cscript src='js/jquery-3.0.0.min.js' type='text/javascript'%3E%3C/script%3E"));
}

/*
On documentReady get the quotes using an ajax request
https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

$( document ).ready(function() {
    console.log( "ready!" );
});

function loadJSON(callback) {   

var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
xobj.open('GET', 'js/quotes.json', true);
xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
};
xobj.send(null);  
}

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
 });
}


/*
Create a function named getRandomQuote which:
1. selects a random quote object from the quotes array
2. returns the randomly selected quote object
*/


function getRandomQuote (){
};

// event listener to respond to "Show another quote" button clicks


// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
Create a function named printQuote which follows these rules:
1. printQuote calls the getRandomQuote function and stores the returned quote object in a variable
2. printQuote constructs a string using the different properties of the quote object using the following HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
3. printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
4. printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
*/
function printQuote(){}

