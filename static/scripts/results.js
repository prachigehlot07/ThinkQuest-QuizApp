window.onload = function () {
    // Get the results from localStorage
    const results = JSON.parse(localStorage.getItem("quizResults"));

    if (!results) {
        document.body.innerHTML = "<h1>No results to display. Take the quiz first!</h1>";
        return;
    }

    const { correctCount, totalQuestions, userAnswers, questions } = results;

    // Display the score
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `You got ${correctCount} out of ${totalQuestions} correct!`;

    // Display detailed question-by-question results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear any previous content

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "result-question";

        const questionText = document.createElement("p");
        questionText.textContent = question.text;
        questionDiv.appendChild(questionText);

        const userAnswerText = document.createElement("p");
        const userAnswer = userAnswers[index];
        userAnswerText.textContent = `Your Answer: ${
            userAnswer !== null ? question.options[userAnswer] : "No Answer"
        }`;
        userAnswerText.style.color = userAnswer === question.correct ? "green" : "red";
        questionDiv.appendChild(userAnswerText);

        const correctAnswerText = document.createElement("p");
        correctAnswerText.textContent = `Correct Answer: ${question.options[question.correct]}`;
        correctAnswerText.style.fontWeight = "bold";
        questionDiv.appendChild(correctAnswerText);

        if (userAnswer !== question.correct) {
            const explanationText = document.createElement("p");
            explanationText.textContent = `Explanation: ${question.explanation}`;
            explanationText.style.fontStyle = "italic";
            questionDiv.appendChild(explanationText);

            if (question.explanationImage) {
                const img = document.createElement("img");
                img.src = question.explanationImage;
                img.alt = "Explanation Image";
                img.style.maxWidth = "200px";
                questionDiv.appendChild(img);
            }
        }

        resultsDiv.appendChild(questionDiv);
    });
};