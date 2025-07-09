const questions = [
    {
        type: "image-choice",
        text: "1. Which of the following exercises is primarily focused on strengthening the core muscles?",
        options: ["https://images.healthshots.com/healthshots/en/uploads/2024/06/12074011/squats-1-370x207.jpg", "https://images.ctfassets.net/hjcv6wdwxsdz/4qJnXqgB4tUKkNvut4xNhM/4bc46f308a341152ee579695f0ba8843/push-up-holding.png?w=800&h=588&q=50&fm=avif", "https://www.shape.com/thmb/-DdD1Tcy3nZX3PORNUZsAa-ZUFY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/low-plank-hold-b8a63da1ef844f00b6f6a21141ba1d87.jpg", "https://images.healthshots.com/healthshots/en/uploads/2024/09/10173919/Bicep-curl-3-770x436.jpg"],
        correct: 2,  // Index of the correct answer in options
        explanation: "C. The plank is a bodyweight exercise that targets the core, helping to strengthen the abdominal muscles, lower back, and improve overall stability."
    },
    {
        type: "multiple-choice",
        text: "2. Which exercise is best for targeting the quadriceps?",
        options: ["A. Deadlifts", "B. Squats", "C. Bench press", "D. Pull-ups"],
        correct: 1,
        explanation: "B. Squats primarily target the quadriceps (front thigh muscles), although they also engage the hamstrings and glutes.",
        explanationImage: "https://images.healthshots.com/healthshots/en/uploads/2024/06/12074011/squats-1-370x207.jpg "
    },
    {
        type: "multiple-choice",
        text: "3. Which of the following exercises improves cardiovascular endurance?",
        options: ["A. Planks", "B. Jumping Jacks", "C. Bicep curls", "D. Lunges"],
        correct: 1,
        explanation: "B. Jumping jacks are a cardiovascular exercise that helps improve overall endurance by increasing heart rate."
    },
    {
        type: "multiple-choice",
        text: "4. What does the term 'HIIT' stand for in exercise?",
        options: ["A. High Intensity Interval Training", "B. High Impact Interval Training", "C. High Intensity Individual Training", "D. Heart Involvement Interval Training"],
        correct: 0,
        explanation: "A. HIIT stands for High Intensity Interval Training, a training method that alternates between short bursts of intense activity and rest.",
    },
    {
        type: "image-choice",
        text: "5.  Which exercise primarily targets the back muscles?",
        options: ["https://hips.hearstapps.com/hmg-prod/images/fit-young-african-american-woman-working-out-with-royalty-free-image-1634219544.jpg?crop=0.667xw:1.00xh;0.190xw,0&resize=640:*", "https://images.healthshots.com/healthshots/en/uploads/2024/06/12074011/squats-1-370x207.jpg", "https://images.healthshots.com/healthshots/en/uploads/2024/09/10173919/Bicep-curl-3-770x436.jpg", "https://hips.hearstapps.com/hmg-prod/images/leg-press-66df0f336c284.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*"],
        correct: 0,
        explanation: "A. Deadlifts target the back muscles, including the lower back, as well as the hamstrings and glutes."
    },
    {
        type: "multiple-choice",
        text: "6.  Which is the muscle shown in image targeted during a leg press?",
        media: "https://coriobayhealth.com.au/wp-content/uploads/2018/01/quadriceps.jpg",
        options: ["A. Hamstrings", "B. Quadriceps", "C. Glutes", "D. Calves"],
        correct: 1,
        explanation: "B. The leg press primarily targets the quadriceps but also works the hamstrings and glutes."
    },
    {
        type: "multiple-choice",
        text: "7. Which of the following exercises is effective for improving balance?",
        options: [
            "A. Squats",
            "B. Lunges",
            "C. Deadlifts",
            "D. Pilates"
        ],
        correct: 3,
        explanation: "D. Pilates incorporates exercises that improve core strength and balance by emphasizing stability."
    },
    {
        type: "multiple-choice",
        text: "8. What is the primary focus of resistance training?",
        options: [
            "A. Flexibility",
            "B. Cardiovascular fitness",
            "C. Muscle strength",
            "D. Balance"
        ],
        correct: 2,
        explanation: "C. Resistance training focuses on building muscle strength and endurance by working against resistance, like weights or bands."
    },
    {
        type: "multiple-choice",
        text: "9. What is a primary benefit of stretching after a workout?",
        options: ["A. Increases strength", "B. Improves flexibility and range of motion", "C. Increases body fat", "D. Reduces muscle soreness"],
        correct: 1,
        explanation: "B. Stretching after a workout helps improve flexibility and range of motion, and may reduce muscle tightness and soreness."
    },
    {
        type: "multiple-choice",
        text: "10. Which is the exercise shown in image?",
        media: "https://cdn.shopify.com/s/files/1/0645/8762/8770/files/Fitness-Fix-Burpee_480x480.jpg?v=1712301822",
        options: ["A. Lunges", "B. Calf raises", "C. Leg press", "D. Burpee"],
        correct: 3,
        explanation: "D. With burpees, the focus is on a full-body calisthenics workout that aims to build muscle strength and endurance in both your lower and upper body. A standard burpee exercise works to strengthen the muscles in your legs, hips, buttocks, abdomen, arms, chest, and shoulders."
    },
    {
        type: "multiple-choice",
        text: "10. Which is the exercise shown in image?",
        media: "https://cdn.shopify.com/s/files/1/0645/8762/8770/files/Fitness-Fix-Burpee_480x480.jpg?v=1712301822",
        options: ["A. Lunges", "B. Calf raises", "C. Leg press", "D. Burpee"],
        correct: 3,
        explanation: "D. With burpees, the focus is on a full-body calisthenics workout that aims to build muscle strength and endurance in both your lower and upper body. A standard burpee exercise works to strengthen the muscles in your legs, hips, buttocks, abdomen, arms, chest, and shoulders."
    },
];
let currentQuestion = 0;
let timerDuration = 30;
let timer;

// Array to store user answers
let selectedAnswers = new Array(questions.length).fill(undefined);
let remainingTimes = new Array(questions.length).fill(timerDuration); // Initialize remaining times array


// Start the quiz
window.onload = function() {
    console.log('Window loaded');
    initializeQuestionNumbers();
    initializeDots();
    loadQuestion();
};
// Function to start the timer
function startTimer() {
    clearInterval(timer);
    timerDuration = remainingTimes[currentQuestion]||30;
    document.getElementById('timer-bar').style.width = '100%';
    document.getElementById('timer-text').textContent = `Time Left: ${timerDuration}s`;
    console.log("Timer started for", timerDuration, "seconds");


    timer = setInterval(() => {
        timerDuration--;
        remainingTimes[currentQuestion]=timerDuration;
        document.getElementById('timer-text').textContent = `Time Left: ${timerDuration}s`;
        document.getElementById('timer-bar').style.width = `${(timerDuration / 30) * 100}%`;

        if (timerDuration <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

// Handle timer out
function handleTimeOut() {
    alert('Time is up! Please select an option.');
    document.querySelectorAll('.option').forEach(option => option.style.pointerEvents = 'none');
    
}

// Function to handle option selection
function selectOption(selectedElement, index) {
    const questionData = questions[currentQuestion];
    const optionElements = document.querySelectorAll('.option');

    selectedAnswers[currentQuestion] = index;

    optionElements.forEach(option => {
        option.classList.remove('correct', 'incorrect');
        option.style.pointerEvents = 'none';
    });

    if (index === questionData.correct) {
        selectedElement.classList.add('correct');
    } else {
        selectedElement.classList.add('incorrect');
        optionElements[questionData.correct].classList.add('correct');
    }
    console.log(questionData);
    showExplanation(questionData.explanation, questionData.explanationImage);
    clearInterval(timer);
    remainingTimes[currentQuestion]=timerDuration;
}

// Show explanation after answering
function showExplanation(text, imageSrc = "") {
    const explanationElement = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const explanationImage = document.getElementById('explanation-image');

    // Set the explanation text
    if (text) {
        explanationText.textContent = text; // Set the text content
    } else {
        explanationText.textContent = "No explanation available."; // Default if text is not available
    }

    // If an image source is provided, display the image
    if (imageSrc) {
        explanationImage.src = imageSrc;
        explanationImage.style.display = 'block';
    } else {
        explanationImage.style.display = 'none';
    }

    // Show the explanation section
    explanationElement.style.display = 'block';
}

function initializeQuestionNumbers () {
    const questionNumberRow = document.getElementById('question-number-row');
    questionNumberRow.innerHTML = '';

    questions.forEach((_, index) => {
        const numberSpan = document.createElement('span');
        numberSpan.textContent = index + 1;
        questionNumberRow.appendChild(numberSpan);
    });
}


// Function to initialize question dots
function initializeDots() {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';

    questions.forEach((_, index) => {
        const dotDiv = document.createElement('div');
        dotDiv.classList.add('dot', 'unseen');
        dotDiv.id = `dot-${index}`;
        dotsContainer.appendChild(dotDiv);
    });
}

// Update status dots function
function updateDots() {
    questions.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        dot.classList.remove('viewed', 'attempted', 'unseen');

        if (selectedAnswers[index] !== undefined) {
            dot.classList.add('attempted');
        } else if (index < currentQuestion) {
            dot.classList.add('viewed');
        } else {
            dot.classList.add('unseen');
        }
    });
}
function loadQuestion() {
    console.log('Loading question...');
    if (currentQuestion < 0 || currentQuestion >= questions.length) {
        console.error('Invalid question index:', currentQuestion);
        return;
    }

    const questionData = questions[currentQuestion];
    document.getElementById('question').textContent = questionData.text;
    document.getElementById('explanation').style.display = 'none';

    // Enable/disable navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').disabled = currentQuestion === questions.length - 1;

    // Handle media element
    const mediaElement = document.getElementById('question-media');
    if (questionData.media) {
        mediaElement.src = questionData.media;
        mediaElement.style.display = 'block';
        mediaElement.onerror = function() {
            console.error('Failed to load media:', questionData.media);
            mediaElement.style.display = 'none';
        };
    } else {
        mediaElement.style.display = 'none';
        mediaElement.src = ''; // Clear media src to prevent lingering media from previous questions
    }

    const optionContainer = document.getElementById('options');
    const imageContainer = document.getElementById('image-options');
    // Clear previous options
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
        element.classList.remove('correct', 'incorrect');
        element.style.pointerEvents = 'auto';
    });

    // Load options based on question type
    if (questionData.type === "multiple-choice") {
        optionContainer.style.display = 'block';
        imageContainer.style.display = 'none';

        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach((element, index) => {
            if (questionData.options[index] !== undefined) {
                element.textContent = questionData.options[index];
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
            element.classList.remove('correct', 'incorrect');
            element.style.pointerEvents = 'auto'; // Make options clickable again

            // Retain previously selected answer
            if (selectedAnswers[currentQuestion] === index) {
                element.classList.add(index === questionData.correct ? 'correct' : 'incorrect');
            }

            // Add click event for selecting option
            element.onclick = () => {
                selectOption(element, index);
                clearInterval(timer);
                document.getElementById('timer-bar').style.animation = 'none'; // Stop timer bar animation
            };
        });

    }else if (questionData.type === "image-choice") {
        optionContainer.style.display = 'none';
        imageContainer.innerHTML = ''; // Clear previous images

        questionData.options.forEach((imgSrc, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.classList.add('option-image');
            imgElement.onclick = () => {
                selectOption(imgElement, index);
                clearInterval(timer);
                document.getElementById('timer-bar').style.animation = 'none'; // Stop timer bar animation
            };
            imageContainer.appendChild(imgElement);
        });
        imageContainer.style.display = 'block'; // Show image options
    }
    // Timer logic
    if (selectedAnswers[currentQuestion] === undefined) {
        timerDuration = remainingTimes[currentQuestion] || 30; // Use remaining time or reset to 30 seconds
        startTimer();
    } else {
        // Show remaining time if the question is already answered
        document.getElementById('timer-text').textContent = `Time Left: ${remainingTimes[currentQuestion]}s`;
    }

    // Update dots for question status
    updateDots();
}


document.getElementById('prev-btn').onclick = prevQuestion;
document.getElementById('next-btn').onclick = nextQuestion;


function submitAnswers() {
    const userAnswers = questions.map((_, index) => 
      selectedAnswers[index] !== undefined ? selectedAnswers[index] : null
    );
  
    console.log(selectedAnswers);
  
    return fetch('/submit-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userAnswers,quiz: 'workout' }),
    }).then(response => response.json());
  }

document.getElementById("submit-btn").addEventListener("click", submitAnswers);

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    console.log("Reached nextQuestion()");
    if (currentQuestion < questions.length - 2) {
      currentQuestion++;
      loadQuestion();
    } else {
      console.log("Redirecting to /result");
      submitAnswers()
        .then(score => {
            score = parseInt(score.score);
            window.location.href = `/result?score=${score}`;
        })
        .catch(error => console.error("Error submitting answers:", error));

      };
    }
  

