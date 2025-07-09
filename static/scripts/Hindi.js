const questions = [
    {
      type: "multiple-choice",
      text: "1. Who is known as the 'Showman of Bollywood'?",
      options: [
        "A. Yash Chopra",
        "B. Subhash Ghai",
        "C. Raj Kapoor",
        "D. Dilip Kumar",
      ],
      correct: 2,
      explanation:
        "C. Raj Kapoor earned this title for his contributions as an actor, director, and producer, creating epic films like Awaara and Mera Naam Joker.",
      explanationImage:
        "https://media.assettype.com/TNIE%2Fimport%2Fuploads%2Fuser%2Fckeditor_images%2Farticle%2F2022%2F3%2F18%2FKapoor1.jpg",
    },
    {
      type: "multiple-choice",
      text: "2. Which Bollywood movie holds the record for the longest continuous theatrical run?",
      options: [
        "A. Sholay",
        "B. Mughal-e-Azam",
        "C. Dilwale Dulhania Le Jayenge",
        "D. Hum Aapka Hain Koun",
      ],
      correct: 2,
      explanation:
        "C. This film, released in 1995, has been playing continuously at Mumbai's Maratha Mandir for over two decades.",
      explanationImage:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25126_p_v8_ac.jpg",
    },
    {
      type: "multiple-choice",
      text: "3. This show revolves around the life of a dysfunctional yet loveable family set in a middle-class neighborhood, focusing on their hilarious day-to-day issues and interactions.",
      options: [
        "A. Yeh Meri Family",
        "B. Gullak",
        "C. Family Man",
        "D. Panchayat",
      ],
      correct: 1, // Index of the correct answer in options
      explanationImage:
        "https://m.media-amazon.com/images/M/MV5BMzllMWE4YTgtODM3OS00MGEyLWEwMjktNWQzZjFjNWNhMGNmXkEyXkFqcGc@._V1_.jpg",
    },
    {
      type: "multiple-choice",
      text: "4.  Which was the first color film made in India?",
      options: [
        "A. Kisan Kanya",
        "B. Mughal-e-Azam",
        "C. Mother India",
        "D. Pakeezah",
      ],
      correct: 0,
      explanation:
        "A. Kisan Kanya (1937) was the first color film in India, produced by Ardeshir Irani, who also directed Alam Ara, the first Indian talkie.",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Kisan_Kanya_poster.jpg",
    },
    {
      type: "gif",
      text: "5. Which is the Bollywood movie featured the song 'Chaiyya Chaiyya' shot atop a moving train?",
      gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJxcWJ5aTh6eTV4bDg4b2tjdXBydHJ4ZnoybTNqcTFoaWZyeGcwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4EoSoxQe9kSnpd5K/200.webp",
      options: ["A. Dil Se", "B. Bombay", "C. Roja", "D. Don"],
      correct: 0,
      explanation:
        "A. This song, composed by A. R. Rahman and sung by Sukhwinder Singh, was a massive hit.",
    },
    {
      type: "multiple-choice",
      text: "6.  Who played the iconic role of Mogambo in the film Mr. India?",
      options: [
        "A. Amjad Khan",
        "B. Anupam Kher",
        "C. Danny Denzongpa",
        "D. Amrish Puri",
      ],
      correct: 3,
      explanation:
        "D. Amrish Puri's portrayal of Mogambo became a legendary villain in Bollywood with the famous line, 'Mogambo khush hua.'",
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Mr._India_%281987_film%29_poster.jpg",
    },
    {
      type: "multiple-choice",
      text: "7. Which film features the emotional dialogue 'Babu Moshai, zindagi badi honi chahiye, lambi nahi'?",
      options: ["A. Bawarchi", "B. Anand", "C. Zanjeer", "D. Kabhi Kabhi"],
      correct: 1, // Index of the correct answer in options
      explanation:
        "B. This famous line is delivered by Rajesh Khanna’s character in the film Anand, a classic that deals with life and its philosophy.",
      explanationImage:
        "https://i.scdn.co/image/ab67616d0000b2737fd6b9c495b7bbfb7870756b",
    },
    {
      type: "multiple-choice",
      text: "8. The show explores the operations of the intelligence agency RAW, as it follows the life of an agent balancing intense national duties and his personal life.",
      options: [
        "A. The Family Man",
        "B. Guns & Gulabs",
        "C. Aarya",
        "D. Shekhar Home",
      ],
      correct: 0,
      explanationImage:
        "https://m.media-amazon.com/images/S/pv-target-images/488a8072411589c079a6eabbe54852ec185954bc40a7ba4fd81772ca56ca324a.jpg",
    },
    {
      type: "multiple-choice",
      text: "9. This movie follows the story of three engineering students who navigate life and its struggles at a prestigious university while dealing with the pressure of high expectations from family and society.?",
      options: [
        "A. Zindagi na Milegi Dobara",
        "B. pk",
        "C. Band Baaja Baarat",
        "D. All is well",
      ],
      correct: 1,
      explanationImage:
        "https://images.news18.com/ibnlive/uploads/2023/06/3-idiots-16880977753x2.jpg?impolicy=website&width=360&height=270",
    },
    {
      type: "multiple-choice",
      text: "10. This movie is about a coach who trains an underdog women's hockey team and leads them to victory, overcoming numerous societal and personal challenges.",
      options: ["A. Gold", "B. Sultan", "C. Chak De! India", "D. 83"],
      correct: 2,
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Chak_De%21_India.jpg",
    },
    {
      type: "multiple-choice",
      text: "10. This movie is about a coach who trains an underdog women's hockey team and leads them to victory, overcoming numerous societal and personal challenges.",
      options: ["A. Gold", "B. Sultan", "C. Chak De! India", "D. 83"],
      correct: 2,
      explanationImage:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Chak_De%21_India.jpg",
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
    body: JSON.stringify({ userAnswers,quiz: 'Hindi' }),
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


