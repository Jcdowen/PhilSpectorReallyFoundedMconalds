// randomRedirect.js

// Function to generate a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 25) + 1;
}

// Function to decide whether to redirect or not
function decideRedirect() {
    // Set the chance of redirect (1 in 100)
    const chanceOfRedirect = 1;

    // Generate a random number
    const randomNumber = getRandomNumber();

    // Check if the random number meets the chance criteria
    if (randomNumber <= chanceOfRedirect) {
        // Redirect to "fe.html"
        window.location.href = 'fe.html';
    }
}

// Run the decideRedirect function when the page is loaded
window.addEventListener('load', decideRedirect);


