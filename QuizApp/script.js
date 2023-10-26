let currentQuestion = 0;
let score = 0;


const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Rome", "Madrid", "Paris"],
        correctAnswer: "Paris",
    },
    // Add more questions here
];

function showQuestion() {
    const questionElem = document.getElementById("question");
    const choicesElem = document.getElementById("choices");
    const feedbackElem = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    questionElem.textContent = `${currentQuestion + 1}. ` + questions[currentQuestion].question;
    choicesElem.innerHTML = "";

    questions[currentQuestion].choices.forEach((choice, index) => {
        const option = document.createElement("div");
        option.textContent = choice;
        option.addEventListener("click", () => checkAnswer(choice));
        choicesElem.appendChild(option);
    });

    feedbackElem.textContent = "";
    nextBtn.style.display = "none";
}

function checkAnswer(choice) {
    const feedbackElem = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    if (choice === questions[currentQuestion].correctAnswer) {
        feedbackElem.textContent = "Correct!";
        score++;
    } else {
        feedbackElem.textContent =
            "Wrong. The correct answer is " +
            questions[currentQuestion].correctAnswer;
    }
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "see result";
        nextBtn.addEventListener("click", endQuiz);
    }
    nextBtn.style.display = "block";
}


function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}



function startQuiz() {
    let count = 3;
    const homePage = document.getElementById("home-page");
    const quiz = document.getElementById("quiz");
    const countdownElem = document.getElementById("countdown");

    homePage.style.display = "none";
    quiz.style.display = "block";

    function startCountdown() {
        if (count > 0) {
            countdownElem.textContent = count.toString();
            count--;
            setTimeout(startCountdown, 1000);
        } else {
            countdownElem.style.display = "none";
            showQuestion();
        }
    }

    startCountdown();
}

function endQuiz() {
    const quizElem = document.getElementById("quiz");
    quizElem.innerHTML = `<h1>Quiz Ended</h1><p>Your score is ${score}/${questions.length}</p>`;
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", nextQuestion);