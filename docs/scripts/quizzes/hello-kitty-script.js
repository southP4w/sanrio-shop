const helloKittyData = [
    {
        question: "What is Hello Kitty's full name?",
        a: "Kitty White",
        b: "Kitty Red",
        c: "Kitty Pink",
        d: "Kitty Blue",
        correct: "a",
    },
    {
        question: "What is Hello Kitty's favorite food?",
        a: "Apple Pie",
        b: "Sushi",
        c: "Strawberries",
        d: "Chocolate Cake",
        correct: "c",
    },
    {
        question: "Who is Hello Kitty's twin sister?",
        a: "My Melody",
        b: "Pompompurin",
        c: "Chococat",
        d: "Mimmy White",
        correct: "d",
    },
    {
        question: "In which year was Hello Kitty born?",
        a: "1974",
        b: "1985",
        c: "1976",
        d: "1979",
        correct: "c",
    },
];

const helloKittyQuiz = document.getElementById('hello-kitty');
const helloKittyAnswerEls = document.querySelectorAll('.hello-kitty-answer');
const helloKittyQuestionEl = document.getElementById('hello-kitty-question');
const helloKittyAText = document.getElementById('a_text');
const helloKittyBText = document.getElementById('b_text');
const helloKittyCText = document.getElementById('c_text');
const helloKittyDText = document.getElementById('d_text');
const helloKittySubmitBtn = document.getElementById('hello-kitty-submit');

let currentHelloKittyQuiz = 0;
let helloKittyScore = 0;

loadHelloKittyQuiz();

function loadHelloKittyQuiz() {
    deselectHelloKittyAnswers();

    const currentHelloKittyQuizData = helloKittyData[currentHelloKittyQuiz];

    helloKittyQuestionEl.innerText = currentHelloKittyQuizData.question;
    helloKittyAText.innerText = currentHelloKittyQuizData.a;
    helloKittyBText.innerText = currentHelloKittyQuizData.b;
    helloKittyCText.innerText = currentHelloKittyQuizData.c;
    helloKittyDText.innerText = currentHelloKittyQuizData.d;
}

function deselectHelloKittyAnswers() {
    helloKittyAnswerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelectedHelloKitty() {
    let answer;

    helloKittyAnswerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

helloKittySubmitBtn.addEventListener('click', () => {
    const answer = getSelectedHelloKitty();

    if (answer) {
        if (answer === helloKittyData[currentHelloKittyQuiz].correct) {
            helloKittyScore++;
        }

        currentHelloKittyQuiz++;

        if (currentHelloKittyQuiz < helloKittyData.length) {
            loadHelloKittyQuiz();
        } else {
            helloKittyQuiz.innerHTML = `
                <h2>You answered ${helloKittyScore}/${helloKittyData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
