const questionObj = {
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;

// it stores the overall scores
let score = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");

// display all the questions from questionObj
questionEl.textContent = question;

//Populating the Options div with the buttons.
options.forEach((opt) => {
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  // add event listener to each button to select correct answer
  btn.addEventListener("click", () => {
    if (opt === correctAnswer) {
      score++;
    } else {
      score -= 0.25;
    }
    scoreEl.textContent = `Score: ${score}`;
    optionEl.textContent = "";
    questionEl.textContent = "Quiz Completed";
    if (score == 1) {
      resultEl.textContent = "Result: Pass";
    } else resultEl.textContent = "Result: Fail";
  });
});
