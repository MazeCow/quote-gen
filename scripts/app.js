let quoteData = [
    {
        originator: "Ryan Vrobel",
        image: "./img/ryan.png",
        date: "10/21/2023",
        quote: "Where am I? Poop land?"
    },
    {
        originator: "Isaac Trost",
        image: "./img/isaac.png",
        date: "02/15/2024",
        quote: "Goku doesn't take 20 minutes to crap."
    },
    {
        originator: "Sullivan Sherwood",
        image: "./img/sully.png",
        date: "12/03/2023",
        quote: "Beethoven is my favorite rapper"
    },
    {
        originator: "Ashton Sharma",
        image: "./img/ashton.png",
        date: "12/15/2024",
        quote: "The alpha doesn't stop mewing."
    },
    {
        originator: "Sawyer Sherwood",
        image: "./img/sawyer.png",
        date: "06/12/24",
        quote: "Did you just drink that ranch? You’re going to have ranch-o-betes!"
    }
]
let currentQuote = parseInt(localStorage.getItem("currentQuote")) || 0;

function showAnotherQuote(){
    // Get the elements that need to be switched.
    const authorImg = document.getElementById("author-img")
    const quoteText = document.getElementById("quote")
    const originatorText = document.getElementById("originator")

    // Update the element's values.
    authorImg.src = quoteData[currentQuote].image
    quoteText.innerText = quoteData[currentQuote].quote
    originatorText.innerText = quoteData[currentQuote].originator

    // Increment currentQuote index
    localStorage.setItem("currentQuote", currentQuote)
    currentQuote = (currentQuote + 1) % quoteData.length;
}

showAnotherQuote()