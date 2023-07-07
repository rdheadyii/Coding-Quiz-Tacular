var mainEl = document.querySelector("#main")

var scoreForm = document.createElement("form");
var initials = document.createElement("input");
var labelIni = document.createElement("label");
var title = document.createElement("h1");
    title.textContent = "Highscores Leaderboard!"
    mainEl.appendChild(title);
var scoreBoard = document.createElement("div");
    mainEl.appendChild(scoreBoard);

var recentScores;

function leaderBoard () {
    scoreBoard.innerHTML = ""

    recentScores = JSON.parse(localStorage.getItem("scores"));

    let scoreChart = document.createElement("ol");

    for (let i = 0; i < recentScores.length; i++) {
        let item = document.createElement("li");

        let userIni = document.createElement("h3");
        userIni.textContent = recentScores[i].initials;

        let userScore = document.createElement("p");
        userScore.textContent = recentScores[i].score;
        
        item.appendChild(userIni);
        item.appendChild(userScore);
        scoreChart.appendChild(item);
    }

    scoreBoard.appendChild(scoreChart);
}

function saveUserScore (event) {
    event.preventDefault();

    recentScores = localStorage.getItem("scores");
    if (recentScores === null) {
        recentScores = [];
    } else {
        recentScores = JSON.parse(recentScores);
    }

    let scoreData = JSON.parse(localStorage.getItem("new-score"));

    let newUserScore = {
        initials: initials.value.trim(),
        score: scoreData
    };

    recentScores.push(newUserScore);

    recentScores = recentScores.sort(function (a, b) {
        return b.score - a.score;
    });

    localStorage.setItem("scores", JSON.stringify(recentScores));

    leaderBoard();
}

function inputScore () {
    initials.setAttribute("type", "text");
    initials.setAttribute("name", "initials");
    initials.setAttribute("id", "initials");

    labelIni.setAttribute("for", "initials");
    labelIni.textContent = "Please Enter Initials";

    scoreForm.appendChild(labelIni);
    scoreForm.appendChild(initials);
    scoreBoard.appendChild(scoreForm);
}

if(JSON.parse(localStorage.getItem("new-score")) !== -1) {
    inputScore();
} else {
    leaderBoard();
}

scoreForm.addEventListener("submit", saveUserScore);