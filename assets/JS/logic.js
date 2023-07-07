// start quiz function on click of start button

// timer starts and first question/answers displays

// answer event if wrong or right should prompt next question
// if wrong deduct time from timer 

// logic for determining right or wrong answer

// loop through question function until all questions have been given answers and timer hits 0

// stop to question function and log score = read interval value, request user name, and store in local storage

var mainEle = document.querySelector("#main")
var timerEle = document.querySelector("#timer")
var timeLeft = 60;
var totalPoints = 0;
var end = false;
var questionIndex;

var quesContainer = document.createElement("div");
    quesContainer.className = "question-container";

let results = document.createElement("h2");
    results.className = "question-container";

function timer () {
    var timeInterval = setInterval(() => {
        if (timeLeft >= 0) {
            timerEle.textContent = timeLeft;
            timeLeft--;
            return timeLeft;
        } else {
            timerEle.textContent = "";
            clearInterval(timeInterval);
            window.location.href = "./highscores.html"
        }
    }, 1000);

    if (end === true) {
        timerEle.textContent = timeLeft;
    }
}

function runQuestions () {
    quesContainer.innerHTML = "";

    let currentQuestion = questions[questionIndex];

    let questionEle = document.createElement("h1");
    questionEle.textContent = currentQuestion.question;

    let answersUl = document.createElement("ul");
        answersUl.className = "answer-container"

    for (let i = 0; i < currentQuestion.answers.length; i++) {

        let ansButton = document.createElement("button");
            ansButton.className = "answers"

        ansButton.textContent = currentQuestion.answers[i];

        answersUl.appendChild(ansButton);
    }

    quesContainer.appendChild(questionEle);
    quesContainer.appendChild(answersUl);
}

function start () {

    var container = document.createElement("div");
    container.className = "start-container";
    mainEle.appendChild(container);

    var startHeader = document.createElement("h1");
    startHeader.className = "start-title";
    startHeader.textContent = "Welcome to Coding Quiz-Tacular!!!";
    container.appendChild(startHeader)

    var startMessage = document.createElement("p");
    startMessage.className = "start-message";
    startMessage.textContent = "QUIZ TIME!! 90 seconds on the clock! Do you have what it takes to capture the highscore?"
    container.appendChild(startMessage)

    var startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "Roll It!";
    container.appendChild(startBtn);

    startBtn.addEventListener("click", event => {
        timer();
        container.remove();

        mainEle.appendChild(quesContainer);

        mainEle.appendChild(results);

        questionIndex = 0;
        runQuestions();
    });

}

start();

quesContainer.addEventListener("click", function (event) {
    let element = event.target;

    let currentQuestion = questions[questionIndex]

    if (element.matches("button")) {
        if(element.textContent === currentQuestion.answers[currentQuestion.correctAnswer]) {
            results.textContent = "Correct!";
        } else {
            results.textContent = "Wrong!";
            timeLeft -= 10;
        }

        questionIndex++;
        if (questionIndex < questions.length) {
            runQuestions();
        } else {
            window.location.href = "./highscores.html"
        }
    }
});
