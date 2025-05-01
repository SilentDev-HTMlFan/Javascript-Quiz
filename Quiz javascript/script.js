// =====================
// DOM Element References
// =====================
const domElements = {
    startButton: document.getElementById('start-btn'),
    nextButton: document.getElementById('next-btn'),
    questionContainer: document.getElementById('question-container'),
    questionElement: document.getElementById('question'),
    answerButtons: document.getElementById('answer-buttons'),
    scoreElement: document.getElementById('score')
  };
  
  // =================
  // Quiz Configuration
  // =================
  const quizSettings = {
    questions: [
      {
        question: "What is 2 + 2?",
        answers: [
          { text: "4", correct: true },
          { text: "22", correct: false },
          { text: "5", correct: false },
          { text: "0", correct: false }
        ]
      },
      {
        question: "Which language runs in a web browser?",
        answers: [
          { text: "Java", correct: false },
          { text: "C", correct: false },
          { text: "Python", correct: false },
          { text: "JavaScript", correct: true }
        ]
      }
    ],
    currentQuestionIndex: 0,
    score: 0,
    shuffledQuestions: []
  };
  
  // ==============
  // Event Listeners
  // ==============
  domElements.startButton.addEventListener('click', initializeQuiz);
  domElements.nextButton.addEventListener('click', showNextQuestion);
  
  // ================
  // Core Functions
  // ================
  function initializeQuiz() {
    domElements.startButton.classList.add('hide');
    quizSettings.shuffledQuestions = shuffleArray([...quizSettings.questions]);
    quizSettings.currentQuestionIndex = 0;
    quizSettings.score = 0;
    updateScoreDisplay();
    domElements.questionContainer.classList.remove('hide');
    displayCurrentQuestion();
  }
  
  function displayCurrentQuestion() {
    resetAnswerButtons();
    const currentQuestion = getCurrentQuestion();
    domElements.questionElement.textContent = currentQuestion.question;
    createAnswerButtons(currentQuestion.answers);
  }
  
  function createAnswerButtons(answers) {
    answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'btn';
      button.textContent = answer.text;
      button.dataset.correct = answer.correct;
      button.addEventListener('click', handleAnswerSelection);
      domElements.answerButtons.appendChild(button);
    });
  }
  
  // ======================
  // Answer Handling
  // ======================
  function handleAnswerSelection(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    highlightAnswerFeedback(isCorrect);
    updateQuizProgress(isCorrect);
    domElements.nextButton.classList.remove('hide');
  }
  
  function highlightAnswerFeedback(isCorrect) {
    Array.from(domElements.answerButtons.children).forEach(button => {
      const buttonIsCorrect = button.dataset.correct === 'true';
      button.classList.toggle('correct', buttonIsCorrect);
      button.classList.toggle('wrong', !buttonIsCorrect);
    });
  }
  
  // ====================
  // Quiz Progress Control
  // ====================
  function showNextQuestion() {
    quizSettings.currentQuestionIndex++;
    if (quizSettings.currentQuestionIndex < quizSettings.shuffledQuestions.length) {
      displayCurrentQuestion();
    } else {
      endQuiz();
    }
  }
  
  function updateQuizProgress(isCorrect) {
    if (isCorrect) quizSettings.score++;
    updateScoreDisplay();
  }
  
  function updateScoreDisplay() {
    domElements.scoreElement.textContent = `Score: ${quizSettings.score}`;
  }
  
  // ================
  // Utility Functions
  // ================
  function resetAnswerButtons() {
    domElements.answerButtons.innerHTML = '';
    domElements.nextButton.classList.add('hide');
  }
  
  function getCurrentQuestion() {
    return quizSettings.shuffledQuestions[quizSettings.currentQuestionIndex];
  }
  
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function endQuiz() {
    domElements.questionElement.textContent = 'Quiz Completed!';
    domElements.answerButtons.innerHTML = '';
    domElements.nextButton.classList.add('hide');
    domElements.startButton.textContent = 'Restart Quiz';
    domElements.startButton.classList.remove('hide');
  }