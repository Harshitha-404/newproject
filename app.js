const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  var seconds = document.getElementById("count-down").textContent;
  var countdown = setInterval(function () {
    seconds--;
    document.getElementById("count-down").textContent = seconds;
    if (seconds == 0) clearInterval(countdown);
    if (seconds == 0) {
      alert("Timeout, You have Scored" + score);
    }
  }, 1000);

  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
var count = 0;
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}
var count1 = 0;
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    count++;
    if (count % 2 == 0) {
      count1++;
      console.log("Answer " + count1);
      document.getElementById("sc").innerHTML = count1;
    }
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    id: 0,
    question: " The external JavaScript file must contain <script> tag ?",
    answers: [
      {
        text: "False",
        correct: true,
      },
      {
        text: "True",
        correct: false,
      },
    ],
  },

  {
    id: 1,
    question: " Which of the following is not a reserved word in JavaScript ?",
    answers: [
      {
        text: "Interface",
        correct: false,
      },
      {
        text: "Throws",
        correct: false,
      },
      {
        text: "Program",
        correct: true,
      },
      {
        text: "short",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "What is the HTML tag under which one can write the JavaScript code ?",
    answers: [
      {
        text: "<javascript>",
        correct: false,
      },
      {
        text: "<scripted>",
        correct: false,
      },
      {
        text: "<script>",
        correct: true,
      },
      {
        text: "<js>",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "How is the function called in JavaScript ?",
    answers: [
      {
        text: "call Geekfunc();",
        correct: false,
      },
      {
        text: "call function();",
        correct: false,
      },
      {
        text: "function Geek();",
        correct: false,
      },
      {
        text: "Geekfunc();",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "What is the JavaScript syntax for printing values in console ?",
    answers: [
      {
        text: "print(5)",
        correct: false,
      },
      {
        text: "console.log(5);",
        correct: true,
      },
      {
        text: "console.print(5);",
        correct: false,
      },
      {
        text: "print.console(5);",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "What is the method in javaScript used to remove white spaces in the begining & end of string ?",
    answers: [
      {
        text: "strip()",
        correct: false,
      },
      {
        text: "trim()",
        correct: true,
      },
      {
        text: "stripped()",
        correct: false,
      },
      {
        text: "trimmed()",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Which is the first browser to support JavaScript ?",
    answers: [
      {
        text: "Netscape",
        correct: true,
      },
      {
        text: "Mozilla Firefox",
        correct: false,
      },
      {
        text: "Google Chrome",
        correct: false,
      },
      {
        text: "IE",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "JavaScript is a __________ side Scripting Language ?",
    answers: [
      {
        text: "Server",
        correct: false,
      },
      {
        text: "ISP",
        correct: false,
      },
      {
        text: "Browser",
        correct: true,
      },
      {
        text: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "javaScript is ___________ language ?",
    answers: [
      {
        text: "a complied",
        correct: false,
      },
      {
        text: "an interpreted",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question:
      "Which function of an Array object calls a function for each element in the array?",
    answers: [
      {
        text: "forEvery()",
        correct: false,
      },
      {
        text: "every()",
        correct: false,
      },
      {
        text: "forEach()",
        correct: true,
      },
      {
        text: "each()",
        correct: false,
      },
    ],
  },
];
