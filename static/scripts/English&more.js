const questions = [

    {
        type: "multiple-choice",
        text: "1. Which movie won the Academy Award for Best Picture in 2020, marking the first non-English language film to do so?",
        options: ["A. 1917", "B. Joker", "C. Parasite", "D. Once Upon a Time in Hollywood"],
        correct: 2,
        explanation: "B.  Directed by Bong Joon-ho, Parasite made history as the first South Korean film and non-English language film to win Best Picture at the Oscars.",
        explanationImage:"https://m.media-amazon.com/images/I/71r0IQwj57L._SL1200_.jpg"
    },
    {
        type: "multiple-choice",
        text: "2. Which actor portrayed the character of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["A. Chris Evans", "B. Robert Downey Jr.", "C. Chris Hemsworth", "D. Mark Ruffalo"],
        correct: 1,
        explanation: "B. Robert Downey Jr.'s portrayal of Tony Stark is widely regarded as one of the most iconic roles in superhero film history.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/4/4a/Iron_Man_Mark_III_armor_from_Iron_Man_%282008_film%29.jpg"
    },
    {
        type: "multiple-choice",
        text: "3. What is the highest-grossing movie of all time as of 2024?",
        options: ["A. Avatar", "B. Avengers: Endgame", "C. Titanic", "D.  Star Wars: The Force Awakens"],
        correct: 0,  // Index of the correct answer in options
        explanation:"A. After various re-releases, Avatar reclaimed its spot as the highest-grossing movie, surpassing Avengers: Endgame.",
        explanationImage:"https://m.media-amazon.com/images/I/61O8KP0CYVS._SL1500_.jpg"
    },
    {
        type: "multiple-choice",
        text: "4. Who directed the film Inception, known for its complex plot involving dreams within dreams?",
        options: ["A. Quentin Tarantino", "B. Steven Spielberg", "C. Christopher Nolan", "D. Martin Scorsese"],
        correct: 2,
        explanation: "C. Christopher Nolan is renowned for his mind-bending narratives, with Inception being one of his most notable works.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg"
    },
    {
        type: "multiple-choice",
        text: "5. Which movie features the quote, 'May the Force be with you'?",
        options: ["A. Star Wars", "B. The Matrix", "C. Blade Runner", "D. Dune"],
        correct: 0,
        explanation: "A. This iconic phrase originated from the Star Wars franchise and has become synonymous with the series.",
        explanationImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NobdxcV1PnOKB3kvYHG-35OpmAPySnVWaA&s"
    },
    {
        type: "multiple-choice",
        text: "6. Which animated movie features a talking snowman named Olaf?",
        options: ["A. Brave", "B. Moana", "C. Tangled", "D. Frozen"],
        correct: 3,
        explanation: "D. Frozen became a cultural phenomenon, with Olaf's character adding comic relief to the story.",
        explanationImage:"https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810"
    },
    {
        type: "multiple-choice",
        text: "7. In which movie does Leonardo DiCaprio play a stockbroker involved in high-level financial crimes and excess?",
        options: ["A. Catch Me If You Can", "B. The Wolf of Wall Street", "C. The Revenant", "D. The Great Gatsby"],
        correct: 1,  // Index of the correct answer in options
        explanation: "B.Directed by Martin Scorsese, this film showcases the rise and fall of Jordan Belfort, with DiCaprio in a standout role.",
        explanationImage:"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"
    },
    {
        type: "multiple-choice",
        text: "8. What award-winning Spanish series follows a group of robbers who plan a heist on the Royal Mint of Spain?",
        options: ["A. Locked up", "B.  Elite", "C. Narcos", "D. Money Heist (La Casa de Papel)"],
        correct: 3,
        explanation:"A. Money Heist became an international sensation for its intense heist plot and memorable characters.",
        explanationImage:"https://m.media-amazon.com/images/I/81WSF164GOL._SL1500_.jpg"
    },
    {
        type: "multiple-choice",
        text: "9. Which film stars Joaquin Phoenix as a socially awkward comedian who becomes the infamous Gotham villain?",
        options: ["A. The Dark Knight", "B. Joker", "C. Birdman", "D. Lagan"],
        correct: 1,
        explanation:"B. Directed by Todd Phillips, Joker portrays the dark and gritty origin story of the character and earned Phoenix an Oscar for Best Actor.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png"
    },
    {
        type: "multiple-choice",
        text: "10. Which series is about the financially desperate individuals competing in children's games where losing results in death.",
        options: ["A. Sacred Games", "B. Breathe", "C. Squid Games", "D. Defiance"],
        correct: 2,
        explanationImage :"https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg"
    },
    {
        type: "multiple-choice",
        text: "10. Which series is about the financially desperate individuals competing in children's games where losing results in death.",
        options: ["A. Sacred Games", "B. Breathe", "C. Squid Games", "D. Defiance"],
        correct: 2,
        explanationImage :"https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg"
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
      body: JSON.stringify({ userAnswers,quiz: 'Englishmore' }),
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
  

