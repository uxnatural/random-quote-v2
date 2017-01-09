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

// an empty array to hold a running count of quotes
var quotesCounter = [];
// iterate through the array and add a counter for each quote to quotesCounter
for (var i = 0; i < quotes.length; ++i){
    quotesCounter.push(i);
}

// required project function getRandomQuote
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
    ran_col();
}

function ran_col() { //function name
    var color = ''; // hexadecimal starting symbol
    var letters = ['#F44336', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#E91E63', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#9C27B0', '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#673AB7', '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#3F51B5', '#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#2196F3', '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#03A9F4', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', 
'#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#00BCD4', '#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#009688', '#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#4CAF50', '#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#8BC34A', '#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#CDDC39', '#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00', '#FFEB3B', '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FFC107', '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00', '#FF9800', '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#FF5722', '#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#795548', '#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723', '#9E9E9E', '#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121', '#607D8B', '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238', '#000000', '#FFFFFF', 
]; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('background').style.background = color; // Setting the random color on your div element.
    return color;
}

// extra credit - Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)
var count=30;
var counter=setInterval(quoteTimer, 1000); //1000 will  run it every 1 second
function quoteTimer(){
  count=count-1;
  if (count <= 0)
      {
         clearInterval(counter);
         resetTimer();
         printQuote();
         //counter ended, do something here
      } else {
         document.getElementById("timer").innerHTML=count;  
      }
}
// function to reset the quote timer
function resetTimer() {
    clearInterval(counter);
    count = 30;
    counter = setInterval(quoteTimer, 1000); //1000 will  run it every 1 second
}

// call printQuote() when the page first loads
$(document).ready(function () {
   printQuote();
});

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() {resetTimer(); printQuote();}, false);