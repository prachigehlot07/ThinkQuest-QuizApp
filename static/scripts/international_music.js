const questions = [

    {
        type: "multiple-choice",
        text: "1. Who is known as the 'King of Pop'?",
        options: ["A. Elvis Presley", "B. Prince", "C. Michael Jackson", "D. Freddie Mercury"],
        correct: 2,
        explanation: "C. Michael Jackson earned the title 'King of Pop' due to his monumental impact on the music industry, with groundbreaking albums like Thriller and Bad.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg"
    },
    {
        type: "multiple-choice",
        text: "2. Which British rock band released the album 'A Night at the Opera' featuring the song 'Bohemian Rhapsody'?",
        options: ["A. The Beatles", "B. The Rolling Stones", "C. Queen", "D. Pink Floyd"],
        correct: 2,
        explanation: "C. Queen's A Night at the Opera (1975) featured 'Bohemian Rhapsody', a song known for its unique structure and operatic style.",
        explanationImage:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4B19/production/_86352291_bohemianrhapsody.jpg.webp"
    },
    {
        type: "multiple-choice",
        text: "3. Who is the artist behind the song 'Shape of You' which became a global hit in 2017?",
        options: ["A. Ed Sheeran", "B. Justin Bieber", "C. Bruno Mars", "D. Sam Smith"],
        correct: 0,  // Index of the correct answer in options
        explanation: "A. Ed Sheeran's 'Shape of You' was released in 2017 and topped the charts worldwide due to its catchy beat and universal appeal.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"
    },
    {
        type: "multiple-choice",
        text: "4.  What is the title of Adele’s album that features the hit song 'Rolling in the Deep'?",
        options: ["A. 19", "B. 21", "C. 25", "D. 30"],
        correct: 1,
        explanation: "B. Adele's album 21, released in 2011, included 'Rolling in the Deep' and showcased her powerful vocals and emotive songwriting.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
    },
    {
        type: "multiple-choice",
        text: "5. Who was the first female artist to win the Grammy Award for Album of the Year twice?",
        options: ["A. Beyoncé", "B. Taylor Swift", "C. Madonna", "D. Alicia Keys"],
        correct: 1,
        explanation: "B. Taylor Swift became the first female artist to win the Grammy for Album of the Year twice, first for Fearless and later for 1989."
    },
    {
        type: "multiple-choice",
        text: "6.  What year did Beyoncé release her self-titled surprise visual album?",
        options: ["A. 2013", "B. 2011", "C. 2010", "D. 2015"],
        correct: 0,
        explanation: "A.  In 2013, Beyoncé released her self-titled visual album unexpectedly, revolutionizing how music is launched.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
        type: "multiple-choice",
        text: "7. Which song by BLACKPINK became their first music video to reach 1 billion views on YouTube?",
        options: ["A. Kill This Love", "B. DDU-DU DDU-DU", "C. How You Like That", "D. As If It’s Your Last"],
        correct: 1,  // Index of the correct answer in options
        explanation: "B. DDU-DU DDU-DU was BLACKPINK’s first music video to hit 1 billion views on YouTube, showcasing their strong global following and the appeal of their powerful music and performances.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/en/8/8b/Black_Pink_-_Ddu-Du_Ddu-Du_%28Japanese_version%29_artwork.png"
    },
    {
        type: "multiple-choice",
        text: "8. Which K-pop group was the first to win a Billboard Music Award?",
        options: ["A. BTS", "B. BIGBANG", "C. Super Junior", "D. SHINee"],
        correct: 0,
        explanation: "A. BTS was the first K-pop group to win a Billboard Music Award, achieving this in 2017 with the 'Top Social Artist' award. This was a breakthrough moment for K-pop in Western music.",
        explanationImage:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/ED53/production/_96155706_mediaitem96155705.jpg.webp"
    },
    {
        type: "multiple-choice",
        text: "9.  Who is known as the 'King of K-pop'?",
        options: ["A. Taeyang", "B. G-Dragon", "C. Psy", "D. Rain"],
        correct: 1,
        explanation: "B. G-Dragon, leader of the iconic group BIGBANG, is credited for his influence in shaping modern K-pop music and fashion. His career as both a solo artist and group leader has solidified his reputation.",
        explanationImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/G-DRAGON_CHANEL_Photo_Call_3.jpg/375px-G-DRAGON_CHANEL_Photo_Call_3.jpg"
    },
    {
        type: "multiple-choice",
        text: "10. What song by PSY became a viral sensation and holds a record for being the first YouTube video to reach 1 billion views?",
        options: ["A. Gentleman", "B. Daddy", "C. Gangnam Style", "D. Hangover"],
        correct: 2,
        explanation: "C. Gangnam Style became an internet phenomenon in 2012 due to its catchy tune and quirky dance moves. It was the first YouTube video to surpass 1 billion views, marking a significant milestone in K-pop’s global spread.",
        explanationImage :"https://upload.wikimedia.org/wikipedia/en/a/ad/Gangnam_Style_Official_Cover.png"
    },
    {
        type: "multiple-choice",
        text: "10. What song by PSY became a viral sensation and holds a record for being the first YouTube video to reach 1 billion views?",
        options: ["A. Gentleman", "B. Daddy", "C. Gangnam Style", "D. Hangover"],
        correct: 2,
        explanation: "C. Gangnam Style became an internet phenomenon in 2012 due to its catchy tune and quirky dance moves. It was the first YouTube video to surpass 1 billion views, marking a significant milestone in K-pop’s global spread.",
        explanationImage :"https://upload.wikimedia.org/wikipedia/en/a/ad/Gangnam_Style_Official_Cover.png"
    }
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
      body: JSON.stringify({ userAnswers,quiz: 'intmusic' }),
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
  

