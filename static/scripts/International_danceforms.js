const questions = [
    {
      type: "multiple-choice",
      text: "1. What is the national dance of Mexico, often performed with vibrant traditional clothing?",
      options: [
        "A. Jarabe Tapatío",
        "B. Cumbia",
        "C. Flamenco",
        "D. Charleston",
      ],
      correct: 0, // Index of the correct answer in options
      explanation:
        "A. The Jarabe Tapatío is a folk dance symbolizing Mexican pride and is performed at celebrations and national events.",
      explanationImage:"https://vallartalifestyles.com/jcnsxosc2bflwqa/wp-content/uploads/2020/11/portada_3_s.jpg"
    },
    {
      type: "multiple-choice",
      text: "2. Which dance form originated in Argentina and is known for its passionate and dramatic style?",
      options: [
        "A. Salsa",
        "B. Tango",
        "C. Flamenco",
        "D. Samba",
      ],
      correct: 1,
      explanation:
        "B. Tango originated in Buenos Aires, Argentina, and is characterized by its close embrace and intricate footwork, reflecting themes of love and passion.",
      explanationImage:
        "https://i.pinimg.com/736x/0e/99/7f/0e997f506d1a6698c42cec9c5834d8e5.jpg",
    },
    {
      type: "multiple-choice",
      text: "3. What is the traditional dance of Spain that involves hand clapping, guitar playing, and rhythmic footwork?",
      options: ["A. Salsa", "B. Ballet", "C. Flamenco", "D. Rumba"],
      correct: 2,
      explanation:
        "C. Flamenco is a traditional Spanish dance deeply rooted in the Andalusian culture, known for its intense emotion and powerful movements.",
      explanationImage:
        "https://img.freepik.com/premium-photo/spanish-flamenco-dance-traditional-dress-passionate-performance_539065-1209.jpg?w=740",
    },
    {
      type: "multiple-choice",
      text: "4. Which dance form originated in the streets of New York, in the 1920s and evolved from jazz?",
      options: [
        "A. Lindy Hop",
        "B. Charleston",
        "C. Hip-hop",
        "D. Swing",
      ],
      correct: 0,
      explanation:
        "A. Lindy Hop is a partner dance that developed in Harlem and combines elements of jazz, swing, and tap, emphasizing improvisation.",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/Life_Lindy_Hop%2C_Willa_Mae_Ricker_and_Leon_James_1943.jpg",
    },
    {
      type: "image-choice",
      text: "5. Which is Rumba dance from the following images",
      options: [
        "https://blog.speak.social/wp-content/uploads/2022/04/pexels-marko-zirdum-2188012-565x377.jpg",
        "https://5.imimg.com/data5/BR/SI/MY-921793/russian-belly-dancer-1000x1000.jpg",
        "https://bbreston.com/wp-content/uploads/2023/04/rumba9002-600x850.jpg",
        "https://www.panaprium.com/cdn/shop/articles/what_samba_dancers_wear_1.jpg?v=1686307427",
      ],
      correct: 3,
      explanation:
        "D.  Rumba incorporates complex rhythms and sensual movements, reflecting the blend of cultures in Cuban music and dance.",
    },
    {
      type: "multiple-choice",
      text: "6.  Which is the dance form shown in image below?",
      media:
        "https://blog.speak.social/wp-content/uploads/2022/04/pexels-marko-zirdum-2188012-565x377.jpg",
      options: ["A. Samba", "B. Jazz", "C. Salsa", "D. Rumba"],
      correct: 2,
      explanation:
        "C. Salsa is thought to have been created by intermingling of Spanish and African ancestry. Though the style migrated to New York city in the 1950s as a social dance form, its roots are firmly planted in the Caribbean.",
    },
    {
      type: "multiple-choice",
      text: "7. Which dance form from the Middle East is also known as 'Raqs Sharqi'?",
      options: ["A. Dabke", "B. Belly dance", "C. Tanoura", "D. Ballet"],
      correct: 1,
      explanation:
        "B. Belly dance, or 'Raqs Sharqi' is a traditional dance form known for fluid movements, isolating different parts of the body, especially the hips.",
      explanationImage:
        "https://5.imimg.com/data5/BR/SI/MY-921793/russian-belly-dancer-1000x1000.jpg",
    },
    {
      type: "gif",
      text: "8. Which is the dance shown below-",
      gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGo5N3VxMDliNXV3bjM4MmYyaTg2Nm80cnphMGV4NnBkdGJnemRyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pXRWjUleDU9AfMtRjF/giphy.webp",
      options: ["A. Belly dance", "B. Samba", "C. Ballet dance", "D. Tango"],
      correct: 2,
      explanation:
        "C. The Russian ballet developed during Italian Renaissance, before evolving in France and Russia into a concert dance. This form accompanied by classical music has many subgenres including classical, romantic and contemporary.",
    },
    {
      type: "multiple-choice",
      text: "9.  Which modern dance style involves popping, locking, and breaking and originated in the United States?",
      options: ["A. Hip-hop", "B. Jazz", "C. Swing", "D. Rock and Roll"],
      correct: 0,
      explanation:
        "A. Hip hop dance is a range of street dance styles primarily performed to hip hop music or that have evolved as part of hip hop culture. It is influenced by a wide range of styles that were created in the 1970s and made popular by dance crews in the United States.",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/B-boy_breakdancing.jpg/375px-B-boy_breakdancing.jpg",
    },
    {
      type: "multiple-choice",
      text: "10. Who was famous for popularizing the Moonwalk dance move",
      options: [
        "A. Prince",
        "B. Elvis Presley",
        "C. Michael Jackson",
        "D. James Brown",
      ],
      correct: 2,
      explanation:
        "C. Michael Jackson revolutionized music and dance, making the Moonwalk one of his most famous moves, which debuted during a performance of 'Billie Jean' in 1983.",
      explanationImage:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/8cc4debe-4526-4e99-882a-3681549fc686/bd714ca4-c024-42f5-a41c-dc01db260bc7.png",
    },
    {
      type: "multiple-choice",
      text: "10. Who was famous for popularizing the Moonwalk dance move",
      options: [
        "A. Prince",
        "B. Elvis Presley",
        "C. Michael Jackson",
        "D. James Brown",
      ],
      correct: 2,
      explanation:
        "C. Michael Jackson revolutionized music and dance, making the Moonwalk one of his most famous moves, which debuted during a performance of 'Billie Jean' in 1983.",
      explanationImage:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/8cc4debe-4526-4e99-882a-3681549fc686/bd714ca4-c024-42f5-a41c-dc01db260bc7.png",
    },
]
let currentQuestion = 0;
let timerDuration = 30;
let timer;

// Array to store user answers
let selectedAnswers = new Array(questions.length).fill(undefined);
let remainingTimes = new Array(questions.length).fill(timerDuration); // Initialize remaining times array

// Start the quiz
window.onload = function () {
  console.log("Window loaded");
  initializeQuestionNumbers();
  initializeDots();
  loadQuestion();
};
// Function to start the timer
function startTimer() {
  clearInterval(timer);
  timerDuration = remainingTimes[currentQuestion] || 30;
  document.getElementById("timer-bar").style.width = "100%";
  document.getElementById(
    "timer-text"
  ).textContent = `Time Left: ${timerDuration}s`;
  console.log("Timer started for", timerDuration, "seconds");

  timer = setInterval(() => {
    timerDuration--;
    remainingTimes[currentQuestion] = timerDuration;
    document.getElementById(
      "timer-text"
    ).textContent = `Time Left: ${timerDuration}s`;
    document.getElementById("timer-bar").style.width = `${
      (timerDuration / 30) * 100
    }%`;

    if (timerDuration <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}
// Handle timer out
function handleTimeOut() {
  alert("Time is up! Please select an option.");
  document
    .querySelectorAll(".option")
    .forEach((option) => (option.style.pointerEvents = "none"));
}

// Function to handle option selection
function selectOption(selectedElement, index) {
  const questionData = questions[currentQuestion];
  const optionElements = document.querySelectorAll(".option");

  selectedAnswers[currentQuestion] = index;

  optionElements.forEach((option) => {
    option.classList.remove("correct", "incorrect");
    option.style.pointerEvents = "none";
  });

  if (index === questionData.correct) {
    selectedElement.classList.add("correct");
  } else {
    selectedElement.classList.add("incorrect");
    optionElements[questionData.correct].classList.add("correct");
  }
  console.log(questionData);
  showExplanation(questionData.explanation, questionData.explanationImage);
  clearInterval(timer);
  remainingTimes[currentQuestion] = timerDuration;
}
// Show explanation after answering
function showExplanation(text, imageSrc = "") {
  const explanationElement = document.getElementById("explanation");
  const explanationText = document.getElementById("explanation-text");
  const explanationImage = document.getElementById("explanation-image");

  // Set the explanation text
  if (text) {
    explanationText.textContent = text; // Set the text content
  } else {
    explanationText.textContent = "No explanation available."; // Default if text is not available
  }

  // If an image source is provided, display the image
  if (imageSrc) {
    explanationImage.src = imageSrc;
    explanationImage.style.display = "block";
  } else {
    explanationImage.style.display = "none";
  }

  // Show the explanation section
  explanationElement.style.display = "block";
}

function initializeQuestionNumbers() {
  const questionNumberRow = document.getElementById("question-number-row");
  questionNumberRow.innerHTML = "";

  questions.forEach((_, index) => {
    const numberSpan = document.createElement("span");
    numberSpan.textContent = index + 1;
    questionNumberRow.appendChild(numberSpan);
  });
}

// Function to initialize question dots
function initializeDots() {
  const dotsContainer = document.getElementById("dots-container");
  dotsContainer.innerHTML = "";

  questions.forEach((_, index) => {
    const dotDiv = document.createElement("div");
    dotDiv.classList.add("dot", "unseen");
    dotDiv.id = `dot-${index}`;
    dotsContainer.appendChild(dotDiv);
  });
}

// Update status dots function
function updateDots() {
  questions.forEach((_, index) => {
    const dot = document.getElementById(`dot-${index}`);
    dot.classList.remove("viewed", "attempted", "unseen");

    if (selectedAnswers[index] !== undefined) {
      dot.classList.add("attempted");
    } else if (index < currentQuestion) {
      dot.classList.add("viewed");
    } else {
      dot.classList.add("unseen");
    }
  });
}
function loadQuestion() {
  console.log("Loading question...");
  if (currentQuestion < 0 || currentQuestion >= questions.length) {
    console.error("Invalid question index:", currentQuestion);
    return;
  }

  const questionData = questions[currentQuestion];
  document.getElementById("question").textContent = questionData.text;
  document.getElementById("explanation").style.display = "none";

  // Enable/disable navigation buttons
  document.getElementById("prev-btn").disabled = currentQuestion === 0;
  document.getElementById("next-btn").disabled =
    currentQuestion === questions.length - 1;

  // Handle media element
  const mediaElement = document.getElementById("question-media");
  if (
    questionData.type === "multiple-choice" ||
    questionData.type === "image"
  ) {
    if (questionData.media) {
      mediaElement.style.display = "block";
      mediaElement.src = questionData.media;
    } else {
      mediaElement.style.display = "none";
    }
    mediaElement.onerror = function () {
      console.error("Failed to load media:", questionData.media);
      mediaElement.style.display = "none";
    };
  } else if (questionData.type === "gif") {
    // For GIF type questions
    if (questionData.gif) {
      mediaElement.style.display = "block";
      mediaElement.src = questionData.gif; // Use GIF URL
    } else {
      mediaElement.style.display = "none";
    }
    mediaElement.onerror = function () {
      console.error("Failed to load GIF:", questionData.gif);
      mediaElement.style.display = "none";
    };
  } else {
    mediaElement.style.display = "none";
    mediaElement.src = ""; // Clear media src to prevent lingering media from previous questions
  }

  const optionContainer = document.getElementById("options");
  const imageContainer = document.getElementById("image-options");
  // Clear previous options
  const optionElements = document.querySelectorAll(".option");
  optionElements.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
    element.classList.remove("correct", "incorrect");
    element.style.pointerEvents = "auto";
  });

  // Load options based on question type
  if (questionData.type === "multiple-choice") {
    optionContainer.style.display = "block";
    imageContainer.style.display = "none";

    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((element, index) => {
      if (questionData.options[index] !== undefined) {
        element.textContent = questionData.options[index];
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
      element.classList.remove("correct", "incorrect");
      element.style.pointerEvents = "auto"; // Make options clickable again

      // Retain previously selected answer
      if (selectedAnswers[currentQuestion] === index) {
        element.classList.add(
          index === questionData.correct ? "correct" : "incorrect"
        );
      }

      // Add click event for selecting option
      element.onclick = () => {
        selectOption(element, index);
        clearInterval(timer);
        document.getElementById("timer-bar").style.animation = "none"; // Stop timer bar animation
      };
    });
  } else if (questionData.type === "image-choice") {
    optionContainer.style.display = "none";
    imageContainer.innerHTML = ""; // Clear previous images

    questionData.options.forEach((imgSrc, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.classList.add("option-image");
      imgElement.onclick = () => {
        selectOption(imgElement, index);
        clearInterval(timer);
        document.getElementById("timer-bar").style.animation = "none"; // Stop timer bar animation
      };
      imageContainer.appendChild(imgElement);
    });
    imageContainer.style.display = "block"; // Show image options
  } else if (questionData.type === "gif") {
    // For the GIF question, we need to handle options as well
    optionContainer.style.display = "block"; // Ensure options container is visible

    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((element, index) => {
      if (questionData.options[index] !== undefined) {
        element.textContent = questionData.options[index];
        element.style.display = "block"; // Show the option
      } else {
        element.style.display = "none"; // Hide any empty options
      }
      element.classList.remove("correct", "incorrect");
      element.style.pointerEvents = "auto"; // Enable pointer events for clickable options

      // Handle previously selected answers
      if (selectedAnswers[currentQuestion] === index) {
        element.classList.add(
          index === questionData.correct ? "correct" : "incorrect"
        );
      }

      // Add click event to options for selection
      element.onclick = () => {
        selectOption(element, index);
        clearInterval(timer);
        document.getElementById("timer-bar").style.animation = "none"; // Stop timer bar animation
      };
    });
  }
  // Timer logic
  if (selectedAnswers[currentQuestion] === undefined) {
    timerDuration = remainingTimes[currentQuestion] || 30; // Use remaining time or reset to 30 seconds
    startTimer();
  } else {
    // Show remaining time if the question is already answered
    document.getElementById(
      "timer-text"
    ).textContent = `Time Left: ${remainingTimes[currentQuestion]}s`;
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
    body: JSON.stringify({ userAnswers,quiz: 'intdance' }),
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


