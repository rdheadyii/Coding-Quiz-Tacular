// need array of objects for questions

// Q: "question"
// A1:
// A2:
// A3:
// A4:
// CA:

let questions = [
    {
        question: "In JavaScript how would you make content show up in the console?",
        answers: [
            "log.console();",
            "console.log();",
            "GET TO THA CONSOLE!!!!",
            "log it log it real good"
        ],
        correctAnswer: 1
    },

    {
        question: "How would get data to store in local storage?",
        answers: [
            "store store more data!",
            "localStorage.store();",
            "localStorage.setItem();",
            "localStorage.getitem();"
        ],
        correctAnswer: 2
    },

    {
        question: "Define Boolean.",
        answers: [
            "Data with only two possible values of 'True' and 'False'",
            "A super nice exotic car",
            "A ghost that is leaning up against a wall",
            "A high level function that only master level coders know"
        ],
        correctAnswer: 0
    },

    {
        question: "In JavaScript what is the difference between Arrays and Objects?",
        answers: [
            "An Array is a giant laser beam of code, while an Object is just a box",
            "There is no difference why did you ask this",
            "Array's use numbered indexes, while Object's use named indexes",
            "All of the above"
        ],
        correctAnswer: 2
    },

    {
        question: "How would you turn a string into an object using JSON?",
        answers: [
            "Press X to JSON",
            "JSON.stringify();",
            "JSON.turnObject();",
            "JSON.parse();"
        ],
        correctAnswer: 3
    },
];

for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    var answers = questions[i].answers;
}