const pompompurinData = [
    {
        question: "What is Pompompurin's favorite activity?",
        a: "Eating Pudding",
        b: "Playing the Guitar",
        c: "Reading Books",
        d: "Singing",
        correct: "a",
    },
    {
        question: "What is the name of Pompompurin's best friend?",
        a: "Cinnamoroll",
        b: "My Melody",
        c: "Keroppi",
        d: "Hangyodon",
        correct: "c",
    },
    {
        question: "Where does Pompompurin live?",
        a: "Strawberry House",
        b: "Mushroom Hut",
        c: "Pudding Palace",
        d: "Cozy Cabin",
        correct: "b",
    },
    {
        question: "What is Pompompurin's favorite food?",
        a: "Chocolate",
        b: "Bananas",
        c: "Pudding",
        d: "Carrots",
        correct: "c",
    },
];

const pompompurinQuiz = document.getElementById('pompompurin');
const pompompurinAnswerEls = document.querySelectorAll('.pompompurin-answer');
const pompompurinQuestionEl = document.getElementById('pompompurin-question');
const pompompurinAText = document.getElementById('a_text');
const pompompurinBText = document.getElementById('b_text');
const pompompurinCText = document.getElementById('c_text');
const pompompurinDText = document.getElementById('d_text');
const pompompurinSubmitBtn = document.getElementById('pompompurin-submit');

let currentPompompurinQuiz = 0;
let pompompurinScore = 0;

loadPompompurinQuiz();

function loadPompompurinQuiz() {
    deselectPompompurinAnswers();

    const currentPompompurinQuizData = pompompurinData[currentPompompurinQuiz];

    pompompurinQuestionEl.innerText = currentPompompurinQuizData.question;
    pompompurinAText.innerText = currentPompompurinQuizData.a;
    pompompurinBText.innerText = currentPompompurinQuizData.b;
    pompompurinCText.innerText = currentPompompurinQuizData.c;
    pompompurinDText.innerText = currentPompompurinQuizData.d;
}

function deselectPompompurinAnswers() {
    pompompurinAnswerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelectedPompompurin() {
    let answer;

    pompompurinAnswerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

pompompurinSubmitBtn.addEventListener('click', () => {
    const answer = getSelectedPompompurin();

    if (answer) {
        if (answer === pompompurinData[currentPompompurinQuiz].correct) {
            pompompurinScore++;
        }

        currentPompompurinQuiz++;

        if (currentPompompurinQuiz < pompompurinData.length) {
            loadPompompurinQuiz();
        } else {
            pompompurinQuiz.innerHTML = `
                <h2>You answered ${pompompurinScore}/${pompompurinData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});