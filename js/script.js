// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  { 
    quote: "You can do anything, but not everything.",
    source: "David Allen",
    citation: "Making It All Work",
    year: 2009
  },
  { 
    quote: "The coldest winter I ever spent was a summer in San Francisco.",
    source: "Mark Twain"
  },
  { 
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "Albert Einstein"
  },
  { 
    quote: "Men Wanted: For hazardous journey. Small wages, bitter cold, long months of complete darkness, constant danger, safe return doubtful. Honour and recognition in case of success.",
    source: "Ernest Shackleton",
    citation: "Times of London",
    year: 1914
  },
  { 
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy"
  }
];

// create a function randomQuote
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return(quotes[randomIndex]);
}

// create a function named printQuote
function printQuote() {
  var quote = getRandomQuote();
  var docFragment = '<p class="quote">' + quote.quote + '</p>';
  docFragment += '<p class="source">' + quote.source; 
  docFragment += quote.citation ? '<span class="citation">' + quote.citation + '</span>': '';
  docFragment += quote.year ? '<span class="year">' + quote.year + '</span>': '';
  docFragment += '</p>';
  document.getElementById('quote-box').innerHTML = docFragment;
}

document.getElementById('loadQuote').addEventListener('click', printQuote);

