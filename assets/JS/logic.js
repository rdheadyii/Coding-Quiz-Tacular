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

var timer = function () {
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

