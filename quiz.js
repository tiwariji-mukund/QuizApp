const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

// it stores the overall scores
let score = 0;
let currQuestion = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");

shaowAllQuestions();

// display all the questions
function shaowAllQuestions() {
  const { correctAnswer, options, question } = quesJSON[currQuestion];
  // display all the questions from questionObj
  questionEl.textContent = question;

  // add shuffle option function
  const shuffledOptions = shuffleOptions(options);

  //Populating the Options div with the buttons.
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // add event listener to each button to select correct answer
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score += 4;
      } else {
        score -= 2;
      }
      scoreEl.textContent = `Score: ${score}/20`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currQuestion++;
  optionEl.textContent = "";
  if (currQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed!!!";
    if (score >= (4 * currQuestion) / 3) {
      resultEl.textContent = "Pass";
    } else resultEl.textContent = "Fail";
  } else {
    shaowAllQuestions();
  }
}

// shuffle all the options
function shuffleOptions(options) {
  for (let i = 0; i < options.length; i++) {
    const j = Math.floor(Math.random() * options.length);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
