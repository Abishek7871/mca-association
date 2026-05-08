// State Management
let currentScreen = 'home';
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;

// DOM Elements
const screens = {
    home: document.getElementById('screen-home'),
    categories: document.getElementById('screen-categories'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
};

const btns = {
    start: document.getElementById('btn-start'),
    next: document.getElementById('btn-next'),
    restart: document.getElementById('btn-restart'),
    home: document.getElementById('btn-home')
};

const quizUI = {
    categoryName: document.getElementById('quiz-category-name'),
    progress: document.getElementById('progress-fill'),
    questionNum: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid')
};

const resultUI = {
    finalScore: document.getElementById('final-score'),
    message: document.getElementById('result-message'),
    desc: document.getElementById('result-desc')
};

// Initialization
function init() {
    btns.start.addEventListener('click', () => showScreen('categories'));
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            startQuiz(card.dataset.category);
        });
    });

    btns.next.addEventListener('click', nextQuestion);
    btns.restart.addEventListener('click', () => startQuiz(currentCategory));
    btns.home.addEventListener('click', () => showScreen('home'));
}

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    currentScreen = screenName;
    
    if (screenName === 'home') {
        resetState();
    }
}

function resetState() {
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
}

// Quiz Logic
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    
    const categoryNames = {
        java: 'Java Programming',
        dbms: 'DBMS & SQL',
        os: 'Operating Systems',
        networking: 'Networking'
    };
    
    quizUI.categoryName.textContent = categoryNames[category];
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    const questions = quizData[currentCategory];
    const q = questions[currentQuestionIndex];
    
    isAnswered = false;
    selectedOption = null;
    btns.next.disabled = true;
    
    // Update UI
    quizUI.questionNum.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    quizUI.questionText.textContent = q.question;
    quizUI.progress.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Reset button text
    btns.next.textContent = 'Next Question';
    btns.next.disabled = true;
    
    // Render Options
    quizUI.optionsGrid.innerHTML = '';
    q.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option glass';
        div.innerHTML = `
            <span class="option-letter" style="font-weight: 700; color: var(--primary);">${String.fromCharCode(65 + index)}.</span>
            <span>${option}</span>
        `;
        div.addEventListener('click', () => handleOptionClick(index, div));
        quizUI.optionsGrid.appendChild(div);
    });
}

function handleOptionClick(index, element) {
    if (isAnswered) return;
    
    isAnswered = true;
    selectedOption = index;
    
    const questions = quizData[currentCategory];
    const q = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Evaluate instantly
    if (selectedOption === q.correct) {
        score++;
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
        options[q.correct].classList.add('correct');
    }
    
    // Update button
    btns.next.textContent = currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question';
    btns.next.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    const questions = quizData[currentCategory];
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const questions = quizData[currentCategory];
    showScreen('results');
    
    resultUI.finalScore.textContent = score;
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 80) {
        resultUI.message.textContent = "Elite Performance! 🏆";
        resultUI.desc.textContent = "You're a technical master. Your understanding of " + currentCategory.toUpperCase() + " is exceptional.";
    } else if (percentage >= 60) {
        resultUI.message.textContent = "Great Job! 👏";
        resultUI.desc.textContent = "Strong fundamentals! A little more practice and you'll be an expert.";
    } else {
        resultUI.message.textContent = "Keep Learning! 📚";
        resultUI.desc.textContent = "Every master was once a beginner. Review the core concepts and try again.";
    }
}

// Initialize the app
init();
