const questions = [
    {
      type: "image-choice",
      text: "1. Which of the following is a classical dance form originating from Tamil Nadu?",
      options: [
        "https://thedancedish.org/wp-content/uploads/2023/10/DSH_-_MTG_23_-_Tarika_Nath_-_Photographer_Lynn_Lane_-_Hi_Res-29-600x400.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murugashankari_Leo.jpg/330px-Murugashankari_Leo.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/AM_Odissi_performance_in_2010s_02.jpg/330px-AM_Odissi_performance_in_2010s_02.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuchipudi_Performer_DS.jpg/330px-Kuchipudi_Performer_DS.jpg",
      ],
      correct: 1, // Index of the correct answer in options
      explanation:
        "B. Bharatanatyam is a classical dance form that originated in Tamil Nadu and is known for its fixed upper torso and intricate footwork.",
    },
    {
      type: "multiple-choice",
      text: "2. Kathak is a classical dance form associated with which region of India?",
      options: [
        "A. Northern India",
        "B. Southern India",
        "C. Eastern India",
        "D. Western India",
      ],
      correct: 0,
      explanation:
        "A. Kathak is a classical dance form that originated in Northern India and is characterized by storytelling through rhythmic footwork and spins.",
      explanationImage:
        "https://thedancedish.org/wp-content/uploads/2023/10/DSH_-_MTG_23_-_Tarika_Nath_-_Photographer_Lynn_Lane_-_Hi_Res-29-600x400.jpeg",
    },
    {
      type: "multiple-choice",
      text: "3. Which Indian dance form is performed with colorful masks and intricate makeup, originating in Kerala?",
      options: ["A. Manipuri", "B. Kathakali", "C. Mohiniyattam", "D. Sattriya"],
      correct: 1,
      explanation:
        "B. Kathakali is a traditional dance-drama from Kerala, known for its elaborate costumes, colorful masks, and expressive makeup.",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg/1024px-Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg",
    },
    {
      type: "multiple-choice",
      text: "4. What is the primary theme of Kuchipudi dance?",
      options: [
        "A. Martial arts",
        "B. Love stories",
        "C. Mythological storytelling",
        "D. Social issues",
      ],
      correct: 2,
      explanation:
        "C. Kuchipudi, a classical dance from Andhra Pradesh, primarily revolves around mythological and religious storytelling.",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuchipudi_Performer_DS.jpg/330px-Kuchipudi_Performer_DS.jpg",
    },
    {
      type: "image-choice",
      text: "5.   Which of the following is a classical dance form originating from Karnataka?",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murugashankari_Leo.jpg/330px-Murugashankari_Leo.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mohiniyattom_performance.jpg/330px-Mohiniyattom_performance.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg/1024px-Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_%28197%29.jpg",
        "https://wwwstringsofheritab867c.zapwp.com/q:i/r:0/wp:0/w:480/u:https://www.stringsofheritage.com/wp-content/uploads/2017/09/DSC_2521.jpg",
      ],
      correct: 3,
      explanation:
        "D. Yakshagana is a traditional dance-drama from Karnataka that combines dance, music, and dramatic storytelling.",
    },
    {
      type: "multiple-choice",
      text: "6.  Which is the dance form shown in image below?",
      media:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1WAyVUzkrqNd5nPAsg6DUnHwlWr5LbfmT8zKRSM7M_UsdmNWuoAOvYV9KINQOISHVg3Aq64BtDar7dRGdeTbicrGe2CWoFLN4XDOK56uhjUvPv0WTH0GAm4w4ZYgDY4YDLAMnqdbEwFda/s640-rw/Manipuri+dance+.jpg",
      options: ["A. Bihu Dance", "B. Sattriya", "C. Manipuri", "D. Kuchipudi"],
      correct: 2,
      explanation:
        "C. Manipuri is a classical dance form that originated in Manipur and is known for its gentle, flowing movements and devotional themes.",
    },
    {
      type: "multiple-choice",
      text: "7. What type of dance is Bhangra?",
      options: ["A. Classical", "B. Folk", "C. Contemporary", "D. Ballet"],
      correct: 1,
      explanation:
        "B. Bhangra is a vibrant and energetic folk dance from Punjab, traditionally performed during harvest celebrations.",
      explanationImage:
        "https://cdn.britannica.com/04/60404-050-77D978DF/Bhangra-folk-dance-region-Punjab-India-Pakistan.jpg?w=300",
    },
    {
      type: "gif",
      text: "8. Which is the dance shown below-",
      gif: "https://media1.tenor.com/m/n5rMGJVcF0oAAAAC/bajirao-mastani.gif",
      options: ["A. Ghoomar", "B. Dandiya", "C. Lavani", "D. Bihu"],
      correct: 2,
      explanation:
        "Lavani is a dance form traditionally performed by women in Maharashtra, known for its powerful and expressive storytelling.",
    },
    {
      type: "multiple-choice",
      text: "9.  What is the origin state of the Chhau dance form, which includes elements of martial arts?",
      options: ["A. Odisha", "B. Tamil Nadu", "C. Punjab", "D. West Bengal"],
      correct: 0,
      explanation:
        "A. Chhau is a semi-classical dance form originating in Odisha, West Bengal, and Jharkhand, blending dance with martial arts.",
      explanationImage:
        "https://www.insightsonindia.com/wp-content/uploads/2021/08/chhahu..jpg",
    },
    {
      type: "multiple-choice",
      text: "10. What is the unique aspect of Manipuri dance?",
      options: [
        "A. Focus on Intricate footwork",
        "B. Energetic movements",
        "C. Gentle and flowing movements",
        "D. Use of swords and shields",
      ],
      correct: 2,
      explanation:
        "C. Manipuri dance is characterized by gentle and flowing movements, reflecting a spiritual and serene quality.",
      explanationImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1WAyVUzkrqNd5nPAsg6DUnHwlWr5LbfmT8zKRSM7M_UsdmNWuoAOvYV9KINQOISHVg3Aq64BtDar7dRGdeTbicrGe2CWoFLN4XDOK56uhjUvPv0WTH0GAm4w4ZYgDY4YDLAMnqdbEwFda/s640-rw/Manipuri+dance+.jpg",
    },
    {
      type: "multiple-choice",
      text: "10. What is the unique aspect of Manipuri dance?",
      options: [
        "A. Focus on Intricate footwork",
        "B. Energetic movements",
        "C. Gentle and flowing movements",
        "D. Use of swords and shields",
      ],
      correct: 2,
      explanation:
        "C. Manipuri dance is characterized by gentle and flowing movements, reflecting a spiritual and serene quality.",
      explanationImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1WAyVUzkrqNd5nPAsg6DUnHwlWr5LbfmT8zKRSM7M_UsdmNWuoAOvYV9KINQOISHVg3Aq64BtDar7dRGdeTbicrGe2CWoFLN4XDOK56uhjUvPv0WTH0GAm4w4ZYgDY4YDLAMnqdbEwFda/s640-rw/Manipuri+dance+.jpg",
    },
  ];
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
    body: JSON.stringify({ userAnswers,quiz: 'inddance' }),
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


