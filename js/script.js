/* jshint browser: true */
"use strict";
// an array of javaScript objects for quotes
// extra credit - Added tags and amazon properties to the quote object 
var quotes = [{
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
}, {
  "quote": "Both positive and negative thinking are contagious.",
  "source": "Stephen Richards",
  "citation": "The Secret of Getting Started",
  "year": 2011,
  "tags": "Time Management",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B005V7AYKI&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_SiTDybJRWSNXZ\" ></iframe>"
}, {
  "quote": "Before you eat the elephant, make sure you know what parts you want to eat.",
  "source": "Todd Stocker",
  "citation": "Refined: Turning Pain Into Purpose",
  "year": 2014,
  "tags": "Time Management",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B007WN3CT4&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_eoTDybT4PJ3QT\" ></iframe>"
}, {
  "quote": "A precondition for reading good books is not reading bad ones: for life is short.",
  "source": "Arthur Schopenhauer",
  "citation": "On The Suffering of the World",
  "year": 1851,
  "tags": "Essays and Correspondence",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B002RI9K9K&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_JqTDybTCT6G00\" ></iframe>"
}, {
  "quote": "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
  "source": "Malcome Gladwell",
  "citation": "Outliers",
  "year": 2011,
  "tags": "Inspirational",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B001ANYDAO&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_AvTDybCRESSK9\" ></iframe>"
}, {
  "quote": "No one can make you feel inferior without your consent.",
  "source": "Eleanor Roosevelt",
  "citation": "This is My Story",
  "year": 2014,
  "tags": "Biographic",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B00ICN4ZUI&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_qzTDyb7K1BS6J\" ></iframe>"
}, {
  "quote": "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
  "source": "Haruki Murakami",
  "citation": "Norwegian Wood",
  "year": 2000,
  "tags": "Fiction",
  "amazon": "<iframe type=\"text/html\" width=\"212\" height=\"362\" frameborder=\"0\" allowfullscreen style=\"max-width:100%\" src=\"https://read.amazon.com/kp/card?asin=B003XT603Q&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_-BTDyb8VRD5RK\" ></iframe>"
}];
// extra credit - ensure no quote is displayed more than once until all quotes have been displayed
// an empty array is used to hold a running count of quotes
var quotesCounter = [];
// for loop to iterate through the quotes array and add a counter for each quote to quotesCounter
function loadQuotes() {
  for (var i = 0; i < quotes.length; ++i) {
    quotesCounter.push(i);
  }
}
// required function getRandomQuote
// selects a random quote object from the quotes array and returns the randomly selected quote object
function getRandomQuote() {
  // reset the quotesCounter after showing all quotes
  if (quotesCounter.length < 1) {
    //alert("All Quotes Have Been Displayed.  Resetting")
    // when the length of quotesCounter is 0 reset quotesCounter
    for (var i = 0; i < quotes.length; ++i) {
      quotesCounter.push(i);
    }
  }
  // set randomNumber to a random value from quotesCounter and then remove that value from the count
  var randomNumber = quotesCounter.splice(Math.random() * quotesCounter.length, 1)[0];
  // alert(randomNumber);
  // return the randomly selected quote object
  return quotes[randomNumber];
}

function printQuote() {
  // call the getRandomQuote function and stores the returned quote object in a variable
  var randomQuote = getRandomQuote();
  // constructs a string using the different properties of the quote object using the following HTML template
  var quoteTemplate = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span> </p><p class="amazon">' + randomQuote.amazon + '</p>';
  //printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById("quote-box").innerHTML
  document.getElementById("quote-box").innerHTML = quoteTemplate;
  //printQuote doesn"t add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
  if (randomQuote.citation === undefined) {
    $(".citation").remove();
  }
  if (randomQuote.year === undefined) {
    $(".year").remove();
  }
  // extra credit - randomly change the background color of the page, when the quote changes
  ran_col();
}
// function to randomly change the background color of the page
function ran_col() { //function name
  var color = ""; // hexadecimal starting symbol
  var letters = ["#F44336", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000", "#E91E63", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F", "#FF80AB", "#FF4081", "#F50057", "#C51162", "#9C27B0", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C", "#EA80FC", "#E040FB", "#D500F9", "#AA00FF", "#673AB7", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#B388FF", "#7C4DFF", "#651FFF", "#6200EA", "#3F51B5", "#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE", "#2196F3", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1", "#82B1FF", "#448AFF", "#2979FF", "#2962FF", "#03A9F4", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD"]; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  document.getElementById("background").style.background = color; // Setting the random color on your div element.
  return color;
}
// extra credit - Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)
var count = 30;
var counter = setInterval(quoteTimer, 1000); //1000 will  run it every 1 second
function quoteTimer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    resetTimer();
    printQuote();
    //counter ended, do something here
  } else {
    document.getElementById("timer").innerHTML = count;
  }
}
// function to reset the quote timer
function resetTimer() {
  clearInterval(counter);
  count = 30;
  counter = setInterval(quoteTimer, 1000); //1000 will  run it every 1 second
}
// call printQuote() when the page first loads
$(document).ready(function() {
  printQuote();
});
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", function() {
  resetTimer();
  printQuote();
}, false);