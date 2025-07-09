const questions = [

    {
        type: "multiple-choice",
        text: "1. Which Telugu actor is popularly known as the “Megastar”?",
        options: ["A. Prabhas", "B. Nagarjuna", "C. Chiranjeevi", "D. Mahesh Babu"],
        correct: 2,
        explanation: "C. Chiranjeevi is referred to as “Megastar” for his tremendous contributions to Telugu cinema.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Senior_Vice-Minister_of_Tourism%2C_Japan%2C_Mr._Hiroshi_Kajiyama_calls_on_the_Minister_of_State_%28Independent_Charge%29_for_Tourism%2C_Dr._K._Chiranjeevi%2C_in_New_Delhi_on_February_12%2C_2013_%28cropped%29.jpg/330px-thumbnail.jpg"
    },
    {
        type: "multiple-choice",
        text: "2. Which South Indian film series is known for its legendary war sequences and follows the rise of a warrior named Amarendra Baahubali?",
        options: ["A. K.G.F", "B. Magadheera", "C. Baahubali", "D. Eega"],
        correct: 2,
        explanation: "C. Directed by S.S. Rajamouli, Baahubali became a global sensation for its epic storytelling and visual effects.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg"
    },
    {
        type: "multiple-choice",
        text: "3. Who played the lead role in the Tamil movie Vikram Vedha?",
        options: ["A. Kamal Haasan", "B. Vijay Sethupathi and R.Madhavan", "C. Dhanush and Ajith kumar", "D. Suriya and karthi"],
        correct: 1,  // Index of the correct answer in options
        explanation:"B. Vijay Sethupathi played Vedha, and R. Madhavan played Vikram in this critically acclaimed neo-noir film.",
        explanationImage:"https://m.media-amazon.com/images/M/MV5BMGQ3MDdhZjgtMjBhMS00MWYwLWI3ODQtZDQ4ZTUzMzM1MjIwXkEyXkFqcGc@._V1_.jpg"
    },
    {
        type: "multiple-choice",
        text: "4. Which 2019 action film, starring Yash, chronicles the story of a man who rises from poverty to become the feared leader of a gold mining empire?",
        options: ["A. K.G.F Chapter 1", "B. Maharshi", "C. Arjun Reddy", "D. Pushpa"],
        correct: 0,
        explanation: "A. This movie, directed by Prashanth Neel, made Yash a pan-India star and became a blockbuster for its raw storytelling.",
        explanationImage:"https://m.media-amazon.com/images/S/pv-target-images/149ac783c0e32bfecd62d2d447b5c36d304d5a5afe30db4d701dc93dc8bba5b0.jpg"
    },
    {
        type: "multiple-choice",
        text: "5. Which movie starring Mahesh Babu revolves around a tech entrepreneur who returns to his village to reform it?",
        options: ["A. Maharshi", "B. Bharat Ane Nenu", "C. Pokiri", "D. Sarileru Neekevvaru"],
        correct: 0,
        explanation: "A. Maharshi was directed by Vamshi Paidipally and dealt with themes of corporate success juxtaposed with rural development.",
        explanationImage:"https://st1.bollywoodlife.com/wp-content/uploads/2019/03/Maharshi-1.jpg?impolicy=Medium_Widthonly&w=1280&h=900"
    },
    {
        type: "multiple-choice",
        text: "6. In which movie did Kamal Haasan play 10 different roles, showcasing a unique feat in Indian cinema?",
        options: ["A. Nayakan", "B. Vishwaroopam", "C. Indian", "D. Dasavatharam"],
        correct: 3,
        explanation: "D. Kamal Haasan's performance in Dasavatharam was widely praised for its versatility.",
        explanationImage:"https://sund-images.sunnxt.com/10121/640x360_8b1ef86d-21fc-45b2-b190-c053e741c72e.jpg"
    },
    {
        type: "multiple-choice",
        text: "7. Which movie marked the debut of director SS Rajamouli?",
        options: ["A. Magadheera", "B. Student No.1", "C. Eega", "D. Samhadri"],
        correct: 1,  // Index of the correct answer in options
        explanation: "B. SS Rajamouli made his directorial debut with Student No. 1, starring Jr. NTR.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/5/57/Student_Number_1_poster.jpg"
    },
    {
        type: "multiple-choice",
        text: "8. What was the first South Indian film to win an Oscar for Best Original Song?",
        options: ["A. RRR", "B.  Baahubali: The Beginning", "C. Ponniyin Selvan: I", "D. Eega"],
        correct: 0,
        explanation:"A. The song Naatu Naatu from RRR won the Oscar for Best Original Song, making history for Indian cinema",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/2/2e/Naatu_Naatu.jpg"
    },
    {
        type: "multiple-choice",
        text: "9. Who played the iconic character 'Bhadrakali' in the 2021 epic historical drama PS-1 (Ponniyin Selvan)?",
        options: ["A. Nayanthara", "B. Aishwarya Rai Bachchan", "C. Trisha Krishnan", "D. Anushka Shetty"],
        correct: 1,
        explanation:"B. Aishwarya Rai Bachchan's portrayal of the cunning and powerful queen was highly appreciated.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg"
    },
    {
        type: "multiple-choice",
        text: "10. Which Kannada film directed by Rakshit Shetty and featuring a dog as a significant character captured hearts for its emotional storyline?",
        options: ["A. Super Deluxe", "B. 7aum Arivu", "C. 777 Charlie", "D. Jallikattu"],
        correct: 2,
        explanation:"The film depicted the bond between a loner and his dog, resonating with audiences for its heartfelt narrative.",
        explanationImage :"https://www.justwatch.com/images/poster/279168181/s166/777-charlie.webp"
    },
    {
        type: "multiple-choice",
        text: "10. Which Kannada film directed by Rakshit Shetty and featuring a dog as a significant character captured hearts for its emotional storyline?",
        options: ["A. Super Deluxe", "B. 7aum Arivu", "C. 777 Charlie", "D. Jallikattu"],
        correct: 2,
        explanation:"The film depicted the bond between a loner and his dog, resonating with audiences for its heartfelt narrative.",
        explanationImage :"https://www.justwatch.com/images/poster/279168181/s166/777-charlie.webp"
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
      body: JSON.stringify({ userAnswers,quiz: 'South' }),
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
  

