const questions = [

    {
        type: "multiple-choice",
        text: "1. Which of the following is a classical music system in India?",
        options: ["A. Hindustani", "B. Carnatic", "C. Both A and B", "D. Western Classical"],
        correct: 2,
        explanation: "C. Both Hindustani and Carnatic are traditional classical music systems in India. Hindustani is prevalent in the North, while Carnatic is practiced in the South."
    },
    {
        type: "multiple-choice",
        text: "2. Who is known as the 'Father of Indian Classical Music'?",
        options: ["A. Tansen", "B. Ravi Shankar", "C. Ustad Ali Akbar Khan", "D. Bhimsen Joshi"],
        correct: 0,
        explanation: "A. Tansen is often regarded as the 'Father of Indian Classical Music' due to his contributions to the development of Hindustani classical music."
    },
    {
        type: "multiple-choice",
        text: "3. Which music composer is known for creating the soundtrack for the movie Sholay (1975), one of Bollywood's greatest hits?",
        options: ["A. R.D. Burman", "B. Naushad", "C. Laxmikant-Pyarelal", "D. Shankar Jaikishan"],
        correct: 0,  // Index of the correct answer in options
        explanation: "A. The soundtrack for Sholay (1975) was composed by R.D. Burman, featuring timeless songs like 'Yeh Dosti.'",
        explanationImage:"https://www.makemykaraoke.com/images/thumbnails/300/300/product/41/Sholay-Ye-Dosti-Hum-Nahi-Todenge.jpg"
    },
    {
        type: "multiple-choice",
        text: "4.  Who is credited with popularizing the sitar internationally?",
        options: ["A. Lata Mangeshkar", "B. Ravi Shankar", "C. Kishore Kumar", "D. Zakir Hussain"],
        correct: 1,
        explanation: "B. Ravi Shankar is widely credited with introducing the sitar to the international music scene, especially in the West."
    },
    {
        type: "multiple-choice",
        text: "5. Who is the renowned Indian playback singer known for her unique voice and timeless songs like 'Pyaar Kiya To Darna Kya'?",
        options: ["A. Asha Bhosle", "B. Lata Mangeshkar", "C. Geeta Dutt", "D. Kishore Kumar"],
        correct: 1,
        explanation: "B. Lata Mangeshkar, whose voice became synonymous with Bollywood, sang 'Pyaar Kiya To Darna Kya' in Mughal-e-Azam (1960)."
    },
    {
        type: "multiple-choice",
        text: "6.  Who composed the music for the film Lagaan (2001), which was nominated for an Academy Award for Best Foreign Language Film?",
        options: ["A. A.R. Rahman", "B. Jatin-Lalit", "C. Nadeem-Shravan", "D. Shankar-Ehsaan-Loy"],
        correct: 0,
        explanation: "A. A.R. Rahman composed the music for Lagaan (2001), including the hit song 'Mitwa'.",
        explanationImage:"https://images-cdn.ubuy.co.in/64f42606eeb2f925b27335d7-lagaan-once-upon-a-time-in-india.jpg"
    },
    {
        type: "multiple-choice",
        text: "7.  What is the meaning of 'Sargam' in Indian classical music?",
        options: [
            "A. The rhythm pattern",
            "B. The vocal notation system",
            "C. The name of a raga",
            "D. The string instrument"
        ],
        correct: 1,
        explanation: "B. Sargam is the vocal system in Indian classical music that represents the solfege syllables (Sa, Re, Ga, Ma, Pa, Dha, Ni) used to denote musical notes."
    },
    {
        type: "multiple-choice",
        text: "8. Which Indian musician won an Academy Award (Oscar) for Best Original Score for the film Slumdog Millionaire?",
        options: [
            "A. A.R.Rahman",
            "B. Shankar-Ehsaan-Loy",
            "C. Ilaiyaraaja",
            "D. Zakir Hussain"
        ],
        correct: 0,
        explanation: "A. A.R. Rahman won two Academy Awards in 2009 for his score and song 'Jai Ho' in Slumdog Millionaire.",
        explanationImage:"https://i0.wp.com/rahmaniac.com/wp-content/uploads/2022/12/Chapter_19.jpg?w=800&ssl=1"
    },
    {
        type: "multiple-choice",
        text: "9.  The iconic Bollywood singer Lata Mangeshkar was honored with which of these prestigious awards?",
        options: ["A. Bharat Ratna", "B. Padma Bhushan", "C. Padma Vibhushan", "D. All of the above"],
        correct: 0,
        explanation: "A. Lata Mangeshkar, one of the most iconic voices in Indian music, was honored with the Bharat Ratna, India's highest civilian award, in 2001.",
        explanationImage:"https://images.tv9hindi.com/wp-content/uploads/2022/01/Lata-Mangeshkar-Bharat-Ratna-Award.jpg?w=1280"
    },
    {
        type: "multiple-choice",
        text: "10. The 'Sangeet Natak Akademi Award' is given for excellence in which field?",
        options: ["A. Classical music and dance", "B. Film music", "C. Folk music", "D. Pop music"],
        correct: 0,
        explanation: "A. The Sangeet Natak Akademi Award is India's highest honor for achievements in the field of classical music, dance, and drama.",
    },
    {
        type: "multiple-choice",
        text: "10. The 'Sangeet Natak Akademi Award' is given for excellence in which field?",
        options: ["A. Classical music and dance", "B. Film music", "C. Folk music", "D. Pop music"],
        correct: 0,
        explanation: "A. The Sangeet Natak Akademi Award is India's highest honor for achievements in the field of classical music, dance, and drama.",
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
    if (questionData.type === "multiple-choice" || questionData.type === "image") {
        if(questionData.media){
            mediaElement.style.display = 'block';
            mediaElement.src = questionData.media;
        }else{
            mediaElement.style.display = 'none';
        }
        mediaElement.onerror = function() {
            console.error('Failed to load media:', questionData.media);
            mediaElement.style.display = 'none';
        };
    }else {
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
      body: JSON.stringify({ userAnswers,quiz: 'indmusic' }),
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
  

