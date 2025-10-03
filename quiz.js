function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;

    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else if (userAnswer !== null) {
        feedbackElement.textContent = "That's incorrect. Try again!";
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
