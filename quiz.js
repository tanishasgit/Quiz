// quiz.js

const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "Which continent is the largest by land area?",
        a: "Asia",
        b: "Africa",
        c: "North America",
        d: "Europe",
        correct: "a"
    },
    {
        question: "Who wrote the Harry Potter book series?",
        a: "J.K. Rowling",
        b: "Stephen King",
        c: "George R.R. Martin",
        d: "Roald Dahl",
        correct: "a"
    },
    {
        question: "What year was the first iPhone released?",
        a: "2005",
        b: "2007",
        c: "2009",
        d: "2011",
        correct: "b"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answers button');
const scoreEl = document.getElementById('score');
const scoreValueEl = document.getElementById('score-value');
const gradeEl = document.getElementById('grade');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    answerButtons[0].innerText = currentQuizData.a;
    answerButtons[1].innerText = currentQuizData.b;
    answerButtons[2].innerText = currentQuizData.c;
    answerButtons[3].innerText = currentQuizData.d;

    // Set data-id attributes for answer buttons
    answerButtons[0].dataset.id = 'a';
    answerButtons[1].dataset.id = 'b';
    answerButtons[2].dataset.id = 'c';
    answerButtons[3].dataset.id = 'd';
}

function deselectAnswers() {
    answerButtons.forEach(answerButton => answerButton.classList.remove('selected'));
}

function gradeQuiz(score) {
    if (score === quizData.length) {
        return "Excellent";
    } else if (score >= quizData.length * 0.75) {
        return "Good";
    } else if (score >= quizData.length * 0.5) {
        return "Average";
    } else {
        return "Bad";
    }
}

answerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        deselectAnswers();
        button.classList.add('selected');

        const selectedAnswer = button.dataset.id;
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.style.display = 'none';
            scoreEl.style.display = 'block';
            scoreValueEl.innerText = score;
            gradeEl.innerText = gradeQuiz(score);
        }
    });
});
