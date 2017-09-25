
// Add quote to array of used quotes, and use the indexOf method to check if its there
var usedQuotes = [];
// Array of Kanye quotes to select from and display
const quotes = [
  "Jay is Kweli's favorite rapper, 50 is Eminem's favorite rapper, and I'm my favorite rapper.",
  "I'm like a vessel, and God has chosen me to be the voice and the connector.",
  "My music isn't just music -- it's medicine.",
  "\"Everything I'm not made me everything I am.\" In my humble opinion, that's a prophetic statement. Gandhi would have said something like that.",
  "Come on now! How could you be me and want to be someone else?",
  "When I think of competition it's like I try to create against the past. I think about Michelangelo and Picasso. You know, the pyramids.",
  "I am so credible and so influential and so relevant that I will change things.",
  "I'm the No. 1 living and breathing rock star.",
  "When someone comes up and says something like, 'I am a god,' everybody says 'Who does he think he is?' I just told you who I thought I was. A god. I just told you. That's who I think I am.",
  "For me to say I wasn't a genius, I would just be lying to you and to myself.",
  "I feel like a little bit, like, I'm the Braveheart of creativity.",
  "I am Warhol! I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney, Nike, Google.",
  "Visiting my mind is like visiting the Hermes factory.",
  "I'm doing pretty good as far as geniuses go... I'm like a machine. I'm a robot.",
  "I'm going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.",
  "The Bible had 20, 30, 40, 50 characters in it. You don't think that I would be one of the characters of today's modern Bible?",
  "My greatest pain in life is that I will never be able to see myself perform live.",
  "You can't look at a glass half full or empty if it's overflowing.",
  "I have, like, nuclear power, like a superhero, like Cyclops when he puts his glasses on.",
  "Yeah. I'm rich and I'm famous, but I try not to be extra with it.",
  "A lot of people were wondering what I was going to do if I didn't win anything. I guess we'll never know.",
  "I'm a creative genius and there's no other way to word it.",
  "We're living the future so the present is our past.",
  "I feel like I'm too busy writing history to read it."
];

// Event listener to respond to clicks on the page
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", printQuote, refreshQuote(25000), false);

// Function that refreshes the quote after a specified amount of time
function refreshQuote(refreshTime) {
    return window.setInterval(printQuote, refreshTime);
}

// Selects and returns a random quote from the array
function getRandomQuote() {
    do {
        for (var i = 0; i < quotes.length; i++) {
            // Generate a random number from 1 to total number of quotes
            var randomNumber = Math.floor(Math.random() * quotes.length);
            if (usedQuotes.indexOf(randomNumber) === -1) {
                // Add quote to usedQuotes array
                usedQuotes.push(randomNumber);
                return quotes[randomNumber];
            }
        }
        // Reset the usedQuotes array
        usedQuotes = [];
    } while (usedQuotes.length < quotes.length);
}

// Gets a randomQuote and writes it to the page
function printQuote() {
    var randomQuote = getRandomQuote();
    var printHTML = '<p class="quote">' + randomQuote + '</p>';

    document.getElementById("quote-container").innerHTML = printHTML;
}
