// start quiz function on click of start button

// timer starts and first question/answers displays

// answer event if wrong or right should prompt next question
// if wrong deduct time from timer 

// logic for determining right or wrong answer

// loop through question function until all questions have been given answers and timer hits 0

// stop to question function and log score = read interval value, request user name, and store in local storage

var mainEle = document.querySelector("#main")
var timerEle = document.querySelector("#timer")
var timeLeft = 90;
var totalPoints = 0;
var end = false;
var questionIndex;

var quesContainer = document.createElement("div");
    quesContainer.className = "question-container";


function timer () {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEle.textContent = timeLeft;
            timeLeft--;
            return timeLeft;
        } else {
            timerEle.textContent = "";
            clearInterval(timeInterval)
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

    for (let i = 0; i < currentQuestion.answers.length; i++) {

        let ansButton = document.createElement("button");

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

        questionIndex = 0;
        runQuestions();
    });

}

start();

quesContainer.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches("button")) {
        if(element.textContent === questions[questionIndex].correctAnswer) {
            let results = document.createElement("h2");
            quesContainer.appendChild(results);
            results.textContent = "Correct!";
        } else {
            let results = document.createElement("h2");
            quesContainer.appendChild(results);
            results.textContent = "Wrong!";
        }

        questionIndex++;
        if (questionIndex < questions.length) {
            runQuestions();
        } else {
            window.location.href = "./highscores.html"
        }
    }
});
