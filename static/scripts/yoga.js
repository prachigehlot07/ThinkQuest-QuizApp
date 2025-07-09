// List of questions, each with text, options, correct answer, and explanation
console.log('JavaScript file is loaded');

const questions = [
    {
        type: "multiple-choice",
        text: "1. Which is the birthplace of yoga-",
        options: ["A. Bodh Gaya", "B. Ujjain", "C. Rishikesh", "D. Varanasi"],
        correct: 2,  // Index of the correct answer in options
        explanation: "C. Rishikesh, is the birthplace of yoga, attracts spiritual-seekers who come to meditate, do yoga, and learn about other aspects of Hinduism. The whole town is considered sacred, and it’s believed that meditation there leads to salvation."
    },
    {
        type: "multiple-choice",
        text: "2. What is the theme of International Day of Yoga 2020?",
        options: ["A. Connect the youth", "B. Yoga for Health-yoga at Home", "C. Yoga for Health", "D. Climate change"],
        correct: 1,
        explanation: "B. The theme of the 6th International Day of Yoga-2020 was 'Yoga at Home and Yoga with Family' which signified the importance of staying at home and practicing Yoga with family while observing social distancing."
    },
    {
        type: "multiple-choice",
        text: "3. How many Principal Upanishads are there?",
        options: ["A. 7", "B. 10", "C. 11", "D. 14"],
        correct: 1,
        explanation: "B. There are 10 principal of upanishads "
    },
    {
        type: "multiple-choice",
        text: "4. Suryanamaskar incorporates?",
        options: ["A. 12 mantras", "B. Breathing awareness", "C. Sequence of body positions", "D. All of the above"],
        correct: 2,
        explanation: "C. Surya Namaskar or Sun Salutation is a sequence of 12 powerful yoga poses. It is known to have an immensely positive impact on the body and mind. Each round of Sun Salutation consists of two sets, and each set is composed of 12 yoga poses. Besides good health, Surya Namaskar also provides an opportunity to express gratitude to the sun for sustaining life on this planet.",
    },
    {
        type: "multiple-choice",
        text: "5. What are the five elements in yoga?",
        options: ["A. Earth, Space, Fire, Air, Akash", "B. Earth, Water, Fire, Air, Akash", "C. Earth, Water, Fire, Air, Wood", "D. Earth, Water, Fire, Akash, Wood"],
        correct: 1,
        explanation: "B. Earth, Water, Fire, Air, Akash are five elements in yoga"
    },
    {
        type: "multiple-choice",
        text: "6. Which is the asana shown in the image?",
        media: "https://cdn.cdnparenting.com/articles/2019/01/25141047/515885956-H-1024x700.webp",
        options: ["A. Bhujangasana", "B. Tadasana", "C. Vkrasana", "D. Chakrasana"],
        correct: 0,
        explanation: "A. Bhujangasana looks like a cobra pose"
    },
    {
        type: "image-choice",
        text: "7. Which of the following is Paschimottanasana?",
        options: [
            "https://www.manduka.com/cdn/shop/articles/happy-baby.jpg?v=1632510694",
            "https://propellerd.com/wp-content/uploads/2024/04/2-1024x683.jpg",
            "https://circuitliving.com/wp-content/uploads/2021/09/shoulder-stand-yoga-pose.jpg",
            "https://static.toiimg.com/thumb/imgsize-23456,msid-114847633,width-600,resizemode-4/114847633.jpg"
        ],
        correct: 3,
        explanation: "D. Paschimottanasana is a forward bend pose with legs stretched out and torso leaning forward."
    },
    {
        type: "multiple-choice",
        text: "8. Hatha means?",
        options: [
            "A. Ha= Sun, Tha=Moon; representing duality in balance",
            "B. Life force, energy that moves through all earthly things",
            "C. Union of body, mind and spirit",
            "D. Flexible, pliable and adaptable"
        ],
        correct: 0,
        explanation: "A. Hatha means the representation of duality in balance, with 'Ha' representing the sun and 'Tha' representing the moon. This suggests that Hatha yoga aims to bring harmony and balance between opposing forces, such as strength and flexibility, effort and surrender, and active and passive energies. By uniting these opposing forces, practitioners can achieve a state of balance and integration in body, mind, and spirit."
    },
    {
        type: "multiple-choice",
        text: "9. Which asana can be practiced immediately after eating food?",
        options: ["A. Bhujangasana", "B. Shavasana", "C. Vajrasana", "D. Padmasana"],
        correct: 2,
        explanation: "C. This asana helps to improve the power of digestion is enhanced. It is suggested that, for diabetic patients to sit 10 - 15 minutes in Vajrasana after every meal will help to improve their health. The posture is said to have the power to stimulate the pancreas."
    },
    {
        type: "multiple-choice",
        text: "10. International Yoga Day is celebrated on?",
        options: ["A. July 21", "B. January 1", "C. June 21", "D. August 15"],
        correct: 2,
        explanation: "C. International Yoga Day is celebrated on 21st June every year."
    },
    {
        type: "multiple-choice",
        text: "10. International Yoga Day is celebrated on?",
        options: ["A. July 21", "B. January 1", "C. June 21", "D. August 15"],
        correct: 2,
        explanation: "C. International Yoga Day is celebrated on 21st June every year."
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
    document.getElementById('timer-text').classList.add('blinking');
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

    showExplanation(questionData.explanation);
    clearInterval(timer);
    remainingTimes[currentQuestion]=timerDuration;
}

// Show explanation after answering
function showExplanation(text) {
    const explanationElement = document.getElementById('explanation');
    explanationElement.textContent = text;
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

// Function to load a question
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

    } else if (questionData.type === "image-choice") {
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
      body: JSON.stringify({ userAnswers,quiz: 'yoga' }),
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
  

