let currentQuestion = 0;
const questions = [
    "¿Cómo evalúas la visibilidad actual de tu marca?",
    "¿Qué tan eficaz es tu estrategia de contenido?",
    "¿Cómo gestionas tu presupuesto publicitario?",
    "¿Qué herramientas utilizas para medir el rendimiento?"
];

function startTest() {
    document.getElementById('presentation-card').style.display = 'none';
    document.getElementById('question-card').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    document.getElementById('question-text').textContent = questions[currentQuestion];
}

function selectAnswer(answer) {
    console.log('Answer selected:', answer);
    // Puedes guardar las respuestas aquí
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById('question-card').style.display = 'none';
        document.getElementById('result-card').style.display = 'block';
        displayResults();
    }
}

function displayResults() {
    document.getElementById('result-text').textContent = 'Gracias por completar el test. Tu puntuación será calculada y enviada en el informe.';
}

function restartTest() {
    currentQuestion = 0;
    document.getElementById('result-card').style.display = 'none';
    document.getElementById('presentation-card').style.display = 'block';
}
