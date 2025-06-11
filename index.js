// Function to generate and display random numbers
function displayRandomNumber() {
     const randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
     document.body.innerHTML += `Random Number: ${randomNum}<br>`;
}

// Create a button element
const button = document.createElement('button');
button.textContent = 'Generate Random Number';
button.onclick = displayRandomNumber;

// Add button to body
document.body.appendChild(button);

// Generate initial random number
displayRandomNumber();
