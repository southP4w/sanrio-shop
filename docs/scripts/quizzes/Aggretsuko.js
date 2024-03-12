const aggretsukoData = [
    {
        question: "What is Aggretsuko's favorite way to relieve stress?",
        a: "Karaoke",
        b: "Yoga",
        c: "Golf",
        d: "Cooking",
        correct: "a",
    },
    {
        question: "What is the name of Aggretsuko's boss?",
        a: "Director Ton",
        b: "Mr. Kondo",
        c: "Fenneko",
        d: "Haida",
        correct: "a",
    },
    {
        question: "Which animal is Aggretsuko?",
        a: "Raccoon",
        b: "Red Panda",
        c: "Cat",
        d: "Fox",
        correct: "b",
    },
    {
        question: "What is the name of Aggretsuko's metal band alter ego?",
        a: "Raging Retsuko",
        b: "Furious Fenneko",
        c: "Heavy Haida",
        d: "Metal Mania",
        correct: "a",
    },
];

const aggretsukoQuiz = document.getElementById('aggretsuko');
const aggretsukoAnswerEls = document.querySelectorAll('.aggretsuko-answer');
const aggretsukoQuestionEl = document.getElementById('aggretsuko-question');
const aggretsukoAText = document.getElementById('a_text');
const aggretsukoBText = document.getElementById('b_text');
const aggretsukoCText = document.getElementById('c_text');
const aggretsukoDText = document.getElementById('d_text');
const aggretsukoSubmitBtn = document.getElementById('aggretsuko-submit');

let currentAggretsukoQuiz = 0;
let aggretsukoScore = 0;

function loadAggretsukoQuiz() {
    deselectAggretsukoAnswers();

    const currentAggretsukoQuizData = aggretsukoData[currentAggretsukoQuiz];

    aggretsukoQuestionEl.innerText = currentAggretsukoQuizData.question;
    aggretsukoAText.innerText = currentAggretsukoQuizData.a;
    aggretsukoBText.innerText = currentAggretsukoQuizData.b;
    aggretsukoCText.innerText = currentAggretsukoQuizData.c;
    aggretsukoDText.innerText = currentAggretsukoQuizData.d;
}

function deselectAggretsukoAnswers() {
    aggretsukoAnswerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelectedAggretsuko() {
    let answer;

    aggretsukoAnswerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

aggretsukoSubmitBtn.addEventListener('click', () => {
    const answer = getSelectedAggretsuko();

    if (answer) {
        if (answer === aggretsukoData[currentAggretsukoQuiz].correct) {
            aggretsukoScore++;
        }

        currentAggretsukoQuiz++;

        if (currentAggretsukoQuiz < aggretsukoData.length) {
            loadAggretsukoQuiz();
        } else {
            aggretsukoQuiz.innerHTML = `
                <h2>You answered ${aggretsukoScore}/${aggretsukoData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    loadAggretsukoQuiz();
});