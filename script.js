const questions = [
    {
        question: "Which programming paradigm focuses on objects and their interactions?",
        answers: [
            { answer: "Functional programming", correct: false },
            { answer: "Procedural programming", correct: false },
            { answer: "Object-oriented programming", correct: true },
            { answer: "Declarative programming", correct: false },
        ]
    },
    {
        question: "Which of the following best describes the role of CSS in web development?",
        answers: [
            { answer: "Defines the content structure of a web page", correct: false },
            { answer: "Adds interactivity to a web page", correct: false },
            { answer: "Styles and formats the layout of a web page", correct: true },
            { answer: "Manages database connections for a web page", correct: false },
        ]
    },
    {
        question: "What is the time complexity of binary search on a sorted array?",
        answers: [
            { answer: "O(n)", correct: false },
            { answer: "O(log n)", correct: true },
            { answer: "O(n^2)", correct: false },
            { answer: "O(1)", correct: false },
        ]
    },
    {
        question: "Which language introduced the concept of 'write once, run anywhere'?",
        answers: [
            { answer: "C#", correct: false },
            { answer: "Python", correct: false },
            { answer: "Java", correct: true },
            { answer: "JavaScript", correct: false },
        ]
    },
    {
        question: "Which of these is NOT a NoSQL database?",
        answers: [
            { answer: "MongoDB", correct: false },
            { answer: "Cassandra", correct: false },
            { answer: "MySQL", correct: true },
            { answer: "Redis", correct: false },
        ]
    },
    {
        question: "What is the purpose of version control systems like Git?",
        answers: [
            { answer: "To debug code more efficiently", correct: false },
            { answer: "To store and manage changes to source code over time", correct: true },
            { answer: "To compile and execute code", correct: false },
            { answer: "To automate deployment processes", correct: false },
        ]
    },
    {
        question: "What is the output of the following JavaScript code?\n`console.log(typeof NaN);`",
        answers: [
            { answer: "'undefined'", correct: false },
            { answer: "'number'", correct: true },
            { answer: "'NaN'", correct: false },
            { answer: "'object'", correct: false },
        ]
    },
    {
        question: "In React, which method is used to manage component lifecycle events when the component is removed from the DOM?",
        answers: [
            { answer: "componentDidMount", correct: false },
            { answer: "componentWillUnmount", correct: true },
            { answer: "componentDidUpdate", correct: false },
            { answer: "render", correct: false },
        ]
    },
    {
        question: "Which protocol is used for secure communication over the internet?",
        answers: [
            { answer: "FTP", correct: false },
            { answer: "HTTP", correct: false },
            { answer: "HTTPS", correct: true },
            { answer: "SMTP", correct: false },
        ]
    },
    {
        question: "Which of the following languages is NOT typically used for system programming?",
        answers: [
            { answer: "C", correct: false },
            { answer: "Rust", correct: false },
            { answer: "JavaScript", correct: true },
            { answer: "Assembly", correct: false },
        ]
    }
]

const questionTxt = document.querySelector(".question")
const answerBtns = document.querySelector(".answers")
const next = document.querySelector(".next")

let index = 0
let score = 0

function start() {
    index = 0
    score = 0
    next.innerHTML = "Next"
    show()
}

function show() {
    reset()
    let current = questions[index]
    let questionNo = index + 1
    questionTxt.innerHTML = questionNo + ". " + current.question

    current.answers.forEach(answer => {
        const btn = document.createElement("button")
        btn.innerHTML = answer.answer
        btn.classList.add("answer")
        answerBtns.appendChild(btn)
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener("click", select)
    })
}

function reset() {
    next.style.display = "none"
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function select(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    next.style.display = "block"
}

function showScore() {
    reset()
    questionTxt.innerHTML = `You scored ${score} out of ${questions.length}!`
    next.innerHTML = "Play Again"
    next.style.display = "block"
}

function handleNext() {
    index++
    if (index < questions.length) {
        show()
    } else {
        showScore()
    }
}

next.addEventListener("click", () => {
    if (index < questions.length) {
        handleNext()
    } else {
        start()
    }
})

start()