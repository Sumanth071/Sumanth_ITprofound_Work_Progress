const quizData = [
  { question: "What does AI stand for?", a: "Automated Interface", b: "Artificial Intelligence", c: "Applied Internet", d: "Automatic Integration", correct: "b" },
  { question: "Which algorithm is used for supervised learning?", a: "K-Means", b: "Decision Tree", c: "Apriori", d: "DBSCAN", correct: "b" },
  { question: "What is overfitting in machine learning?", a: "Model performs well on test data", b: "Model performs poorly on training data", c: "Model performs well on training data but poorly on unseen data", d: "Model ignores input features", correct: "c" },
  { question: "Which library is popular for deep learning in Python?", a: "NumPy", b: "Pandas", c: "TensorFlow", d: "Matplotlib", correct: "c" },
  { question: "What type of learning does reinforcement learning belong to?", a: "Supervised Learning", b: "Unsupervised Learning", c: "Semi-supervised Learning", d: "Reinforcement Learning", correct: "d" },
  { question: "Which of the following is NOT a type of neural network?", a: "Convolutional Neural Network", b: "Recurrent Neural Network", c: "Decision Neural Network", d: "Feedforward Neural Network", correct: "c" },
  { question: "In natural language processing, what does NLP stand for?", a: "Natural Learning Process", b: "Neural Language Programming", c: "Natural Language Processing", d: "Network Learning Protocol", correct: "c" },
  { question: "Which metric is used to evaluate classification models?", a: "Accuracy", b: "Mean Squared Error", c: "Root Mean Squared Error", d: "R-Squared", correct: "a" },
  { question: "Which Python library is used mainly for data manipulation?", a: "Pandas", b: "Seaborn", c: "Scikit-learn", d: "TensorFlow", correct: "a" },
  { question: "Which algorithm is commonly used for clustering?", a: "Linear Regression", b: "K-Means", c: "Logistic Regression", d: "Decision Tree", correct: "b" }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  removeHighlight();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  submitBtn.disabled = false;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function removeHighlight() {
  answerEls.forEach(answerEl => {
    document.getElementById(answerEl.id + "_text").classList.remove("correct", "incorrect");
  });
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if(answerEl.checked) answer = answerEl.id;
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer) {
    submitBtn.disabled = true;

    answerEls.forEach(answerEl => {
      const label = document.getElementById(answerEl.id + "_text");
      if(answerEl.id === quizData[currentQuiz].correct) {
        label.classList.add("correct"); 
      }
      if(answerEl.checked && answerEl.id !== quizData[currentQuiz].correct) {
        label.classList.add("incorrect"); 
      }
    });

    if(answer === quizData[currentQuiz].correct) score++;


    setTimeout(() => {
      currentQuiz++;
      if(currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }, 1000);
  }
});