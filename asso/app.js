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
    home: document.getElementById('btn-home'),
    homeCat: document.getElementById('btn-home-cat')
};

const quizUI = {
    categoryName: document.getElementById('quiz-category-name'),
    progress: document.getElementById('progress-fill'),
    questionNum: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid'),
    explanationContainer: document.getElementById('explanation-container'),
    explanationText: document.getElementById('explanation-text')
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
    btns.home.addEventListener('click', () => showScreen('categories'));
    btns.homeCat.addEventListener('click', () => showScreen('categories'));
}

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    currentScreen = screenName;
    
    if (screenName === 'home' || screenName === 'categories') {
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
    
    // Shuffle the entire question set for the category
    quizData[currentCategory] = shuffleArray([...quizData[currentCategory]]);
    
    const categoryNames = {
        java: 'Java Programming',
        dbms: 'DBMS & SQL',
        os: 'Operating Systems',
        networking: 'Networking',
        testing: 'Software Testing',
        interview: 'IT Interview Questions'
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
    quizUI.questionNum.innerHTML = `Question ${currentQuestionIndex + 1}/<span id="total-questions-count">${questions.length}</span>`;
    quizUI.questionText.textContent = q.question;
    quizUI.progress.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Reset button text
    btns.next.textContent = 'Next Question';
    btns.next.disabled = true;
    
    // Reset explanation
    quizUI.explanationContainer.classList.add('hidden');
    quizUI.explanationText.textContent = '';
    
    // Prepare Shuffled Options
    const originalOptions = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
    const shuffledOptions = shuffleArray([...originalOptions]);
    
    // Render Options
    quizUI.optionsGrid.innerHTML = '';
    shuffledOptions.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option glass';
        if (option.isCorrect) div.dataset.correct = "true";
        div.innerHTML = `
            <span class="option-letter" style="font-weight: 700; color: var(--primary);">${String.fromCharCode(65 + index)}.</span>
            <span>${option.text}</span>
        `;
        div.addEventListener('click', () => handleOptionClick(index, div, option.isCorrect));
        quizUI.optionsGrid.appendChild(div);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleOptionClick(index, element, isCorrect) {
    if (isAnswered) return;
    
    isAnswered = true;
    selectedOption = index;
    
    const questions = quizData[currentCategory];
    const q = questions[currentQuestionIndex];
    
    // Evaluate instantly
    if (isCorrect) {
        score++;
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
        // Find and highlight correct answer
        const correctOption = document.querySelector('.option[data-correct="true"]');
        if (correctOption) correctOption.classList.add('correct');
    }
    
    // Show Explanation
    quizUI.explanationText.textContent = q.reason;
    quizUI.explanationContainer.classList.remove('hidden');
    
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
    document.getElementById('final-total-count').textContent = questions.length;
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
