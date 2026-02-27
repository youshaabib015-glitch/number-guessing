let guessInput = document.getElementById('guessInput');
let guessButton = document.getElementById('guessButton');
let result = document.getElementById('result');
let playAgainButton = document.getElementById('playAgainButton');
let randomNumber = Math.floor(Math.random() * 10);
let attempts = 0;
let maxAttempts = 3;
let gameOver = false;
let score = 0;
let highScore = 0;
let scoreDisplay = document.createElement('p');
scoreDisplay.id = 'scoreDisplay';
document.body.appendChild(scoreDisplay);
let highScoreDisplay = document.createElement('p');
highScoreDisplay.id = 'highScoreDisplay';
document.body.appendChild(highScoreDisplay);
let num = parseInt(guessInput.value);
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
}
guessButton.addEventListener('click', function(){
    if (gameOver) return;
    let num = parseInt(guessInput.value);
    attempts++;
    if (num === randomNumber) {
        result.textContent = "Congratulations! You guessed the number!";
        score += 10;
        if (score > highScore) {
            highScore = score;
        }
        gameOver = true;
        playAgainButton.style.display = "block";
    } else if (attempts >= maxAttempts) {
        result.textContent = `Game Over! The number was ${randomNumber}.`;
        gameOver = true;
        playAgainButton.style.display = "block";
    } else {
        result.textContent = `Try again! You have ${maxAttempts - attempts} attempts left.`;
    }
    updateScore();
});
playAgainButton.addEventListener('click', function(){
    randomNumber = Math.floor(Math.random() * 10);
    attempts = 0;
    gameOver = false;
    result.textContent = "";
    guessInput.value = "";
    playAgainButton.style.display = "none";
    updateScore();
});
updateScore();
playSound = new Audio('./music/background.mp3');
playSound.loop = true;
playSound.autoplay = true;
playSound.play().catch(() => {
document.addEventListener('click', function() {
    playSound.play();
}, { once: true });
});

