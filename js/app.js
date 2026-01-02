// Main Application Logic
document.addEventListener('DOMContentLoaded', function () {
    // State
    let currentSetIndex = 0;
    const totalSets = questionSets.length;

    // DOM Elements
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.getElementById('progressFill');
    const questionNav = document.getElementById('questionNav');
    const contentWrapper = document.getElementById('contentWrapper');
    const currentQuestionEl = document.querySelector('.current-question');
    const questionRangeEl = document.querySelector('.question-range');

    // Menu Elements
    const menuToggleBtn = document.getElementById('menuToggle');
    const closeMenuBtn = document.getElementById('closeMenu');
    const questionMenu = document.getElementById('questionMenu');

    // Initialize
    function init() {
        renderQuestionNav();
        // renderContent(); // Handled by router()
        updateNavigation();
        updateProgress();
        setupMenuListeners();
    }

    // Menu Handlers
    function setupMenuListeners() {
        const toggleMenu = () => {
            questionMenu.classList.toggle('visible');
            menuToggleBtn.classList.toggle('active');
        };

        const closeMenu = () => {
            questionMenu.classList.remove('visible');
            menuToggleBtn.classList.remove('active');
        };

        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        closeMenuBtn.addEventListener('click', closeMenu);

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (questionMenu.classList.contains('visible') &&
                !questionMenu.contains(e.target) &&
                !menuToggleBtn.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Render question navigation buttons
    function renderQuestionNav() {
        questionNav.innerHTML = questionSets.map((set, index) => `
            <div class="question-nav-btn ${index === currentSetIndex ? 'active' : ''}" 
                    data-index="${index}">
                ${set.range}
            </div>
        `).join('');

        // Add click handlers
        questionNav.querySelectorAll('.question-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentSetIndex = parseInt(btn.dataset.index);
                renderContent();
                updateNavigation();
                updateProgress();
                updateQuestionNavActive();
                // Close menu on selection
                questionMenu.classList.remove('visible');
                menuToggleBtn.classList.remove('active');
                // Scroll to top of content
                contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Update active state in question nav
    function updateQuestionNavActive() {
        questionNav.querySelectorAll('.question-nav-btn').forEach((btn, index) => {
            if (index === currentSetIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Render main content
    function renderContent() {
        // Ensure split layout for questions
        contentWrapper.classList.remove('full-width');

        // Reset Vocab Button State
        const vocabBtn = document.getElementById('vocabBtn');
        if (vocabBtn) {
            vocabBtn.classList.remove('active');
            vocabBtn.innerHTML = '<i class="ph-bold ph-list-dashes"></i> 單字表';
        }

        // Re-enable Menu Toggle
        if (typeof menuToggleBtn !== 'undefined') {
            menuToggleBtn.disabled = false;
        } else {
            document.getElementById('menuToggle').disabled = false;
        }

        const set = questionSets[currentSetIndex];

        contentWrapper.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <div class="card-tabs">
                        <button class="tab-btn active" data-tab="english">
                            <i class="ph-bold ph-file-text"></i> 原文
                        </button>
                        <button class="tab-btn" data-tab="chinese">
                            <i class="ph-bold ph-translate"></i> 中文翻譯
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="document-title">${set.document.title}</h2>
                    
                    <div class="tab-content active" id="content-english">
                        <div class="document-content">
                            ${set.document.content}
                        </div>
                    </div>
                    
                    <div class="tab-content" id="content-chinese">
                         <div class="translation-content">
                            ${set.document.translation}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <i class="ph-bold ph-question"></i>
                    <span class="card-header-title">題目與解析</span>
                </div>
                <div class="card-body">
                    ${set.questions.map(q => renderQuestion(q)).join('')}
                </div>
            </div>
        `;

        // Add event listeners for options, tabs, and buttons
        addEventListeners();
    }

    // ... (rest of renderQuestion and addEventListeners remain unchanged)

    // Render individual question
    function renderQuestion(question) {
        return `
            <div class="question-item" data-question="${question.number}">
                <span class="question-number">Q${question.number}</span>
                <p class="question-text">${question.text}</p>
                <p class="question-translation">${question.translation}</p>
                
                <ul class="options-list">
                    ${question.options.map(opt => `
                        <li class="option-item" data-letter="${opt.letter}" data-correct="${opt.letter === question.answer}">
                            <div class="option-letter">${opt.letter}</div>
                            <div class="option-content">
                                <p class="option-text">${opt.text}</p>
                                <p class="option-translation">${opt.translation}</p>
                            </div>
                        </li>
                    `).join('')}
                </ul>
                
                <div class="answer-section">
                    <button class="show-answer-btn">
                        <i class="ph-bold ph-eye"></i> 顯示答案與解析
                    </button>
                    <div class="explanation-box" data-answer="${question.answer}">
                        <p class="correct-answer">
                            <i class="ph-bold ph-check-circle"></i> 正確答案：(${question.answer})
                        </p>
                        <p class="explanation-text">
                            <strong>解析：</strong>${question.explanation}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // Add event listeners
    function addEventListeners() {
        // 1. Tab Switching Logic
        const tabs = contentWrapper.querySelectorAll('.tab-btn');
        const documentTitle = contentWrapper.querySelector('.document-title');
        const set = questionSets[currentSetIndex];

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Deactivate all tabs
                tabs.forEach(t => t.classList.remove('active'));
                contentWrapper.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                // Activate clicked tab
                tab.classList.add('active');
                const tabId = tab.dataset.tab;
                if (tabId === 'english') {
                    document.getElementById('content-english').classList.add('active');
                    // Sync Title - English
                    documentTitle.textContent = set.document.title;
                } else {
                    document.getElementById('content-chinese').classList.add('active');
                    // Sync Title - Chinese (Fallback if title_zh missing)
                    documentTitle.textContent = set.document.title_zh || set.document.title;
                }
            });
        });

        // 2. Question Interactions
        contentWrapper.querySelectorAll('.question-item').forEach(questionItem => {
            const options = questionItem.querySelectorAll('.option-item');
            const showAnswerBtn = questionItem.querySelector('.show-answer-btn');
            const explanationBox = questionItem.querySelector('.explanation-box');

            // Option Selection
            options.forEach(option => {
                option.addEventListener('click', () => {
                    // Remove previous styling from all options
                    options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

                    // Add selected state
                    option.classList.add('selected');

                    // Check Correctness
                    const isCorrect = option.dataset.correct === 'true';
                    if (isCorrect) {
                        option.classList.add('correct');
                    } else {
                        option.classList.add('incorrect');
                    }

                    // NOTE: Removed auto-reveal of explanation and correct answer styling for other options
                });
            });

            // Show/Hide Answer Toggle
            showAnswerBtn.addEventListener('click', () => {
                const isVisible = explanationBox.classList.contains('visible');

                if (isVisible) {
                    // Hide
                    explanationBox.classList.remove('visible');
                    showAnswerBtn.innerHTML = '<i class="ph-bold ph-eye"></i> 顯示答案與解析';
                    showAnswerBtn.classList.remove('active');
                } else {
                    // Show
                    explanationBox.classList.add('visible');
                    showAnswerBtn.innerHTML = '<i class="ph-bold ph-eye-slash"></i> 隱藏答案與解析';
                    showAnswerBtn.classList.add('active');
                }
            });
        });
    }

    // Update navigation buttons and info
    function updateNavigation() {
        const set = questionSets[currentSetIndex];

        currentQuestionEl.textContent = `題組 ${currentSetIndex + 1}/${totalSets}`;
        questionRangeEl.textContent = set.range;

        prevBtn.disabled = currentSetIndex === 0;
        nextBtn.disabled = currentSetIndex === totalSets - 1;
    }

    // Update progress bar
    function updateProgress() {
        const progress = ((currentSetIndex + 1) / totalSets) * 100;
        progressFill.style.width = `${progress}%`;
    }



    // URL Routing / View Switching Logic
    const vocabBtn = document.getElementById('vocabBtn');

    // 1. Button Click simply changes Hash
    vocabBtn.addEventListener('click', () => {
        const currentHash = window.location.hash;
        if (currentHash === '#vocab') {
            // Revert - go to last seen question or default #q1
            window.location.hash = `#q${currentSetIndex + 1}`;
        } else {
            window.location.hash = 'vocab'; // Go to Vocab
        }
    });

    // 2. Router Function handles View Rendering
    function router() {
        const hash = window.location.hash;

        if (hash === '#vocab') {
            renderVocabView();
        } else {
            // Check for Question Pattern #qN
            const match = hash.match(/^#q(\d+)$/);

            if (match) {
                const requestedIndex = parseInt(match[1]) - 1;
                if (requestedIndex >= 0 && requestedIndex < totalSets) {
                    currentSetIndex = requestedIndex;
                    renderContent();
                    updateNavigation();
                    updateQuestionNavActive();
                    return;
                }
            }

            // Fallback / Default
            currentSetIndex = 0; // Reset to start if invalid or empty
            renderContent();
            updateNavigation();
            updateQuestionNavActive();
        }
    }

    // 3. Listen for Hash Changes
    window.addEventListener('hashchange', router);

    // Navigation Updates to use Hash
    prevBtn.addEventListener('click', () => {
        if (currentSetIndex > 0) {
            window.location.hash = `#q${currentSetIndex}`; // index is +1 based in hash, so (index-1)+1 = index
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSetIndex < totalSets - 1) {
            window.location.hash = `#q${currentSetIndex + 2}`; // (index+1)+1
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Sidebar Nav Updates
    function renderQuestionNav() {
        questionNav.innerHTML = questionSets.map((set, index) => `
            <div class="question-nav-btn ${index === currentSetIndex ? 'active' : ''}" 
                    data-index="${index}">
                ${set.range}
            </div>
        `).join('');

        // Add click handlers
        questionNav.querySelectorAll('.question-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                // Update Hash instead of direct render
                window.location.hash = `#q${index + 1}`;

                // Close menu
                questionMenu.classList.remove('visible');
                menuToggleBtn.classList.remove('active');

                contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Keyboard Nav Updates
    document.addEventListener('keydown', (e) => {
        // Disable keyboard nav if in vocab view
        if (contentWrapper.querySelector('.vocab-container')) return;

        if (e.key === 'ArrowLeft' && currentSetIndex > 0) {
            window.location.hash = `#q${currentSetIndex}`;
        } else if (e.key === 'ArrowRight' && currentSetIndex < totalSets - 1) {
            window.location.hash = `#q${currentSetIndex + 2}`;
        }
    });

    function renderVocabView() {
        if (!vocabData) {
            console.error('Vocabulary data not found!');
            return;
        }

        // Switch to Full Width
        contentWrapper.classList.add('full-width');

        // Update Vocab Button State (Active/Back Mode)
        vocabBtn.classList.add('active');
        vocabBtn.innerHTML = '<i class="ph-bold ph-arrow-left"></i> 返回題目';

        // Update Nav Info
        currentQuestionEl.textContent = '單字彙整';
        questionRangeEl.textContent = 'TOEIC Business';

        // Disable Prev/Next Buttons
        prevBtn.disabled = true;
        nextBtn.disabled = true;

        // Disable Menu Toggle
        if (typeof menuToggleBtn !== 'undefined') {
            menuToggleBtn.disabled = true;
        }

        // Close menu if open
        questionMenu.classList.remove('visible');
        menuToggleBtn.classList.remove('active');

        // Remove active state from question nav buttons
        questionNav.querySelectorAll('.question-nav-btn').forEach(btn => btn.classList.remove('active'));

        const vocabHTML = vocabData.map(category => `
            <div class="vocab-category">
                <h2>${category.category}</h2>
                <div class="vocab-list">
                    ${category.words.map(word => `
                        <div class="vocab-item">
                            <div class="vocab-card-header">
                                <span class="word-term">${word.word}</span>
                                <span class="word-phonetic">${word.phonetic}</span>
                            </div>
                            <div class="vocab-card-body">
                                <div class="col-trans">${word.translation}</div>
                                <div class="col-syn">
                                    <span class="label">同義：</span>
                                    ${word.synonyms}
                                </div>
                                <div class="col-ex">
                                    <span class="label">例句：</span>
                                    ${word.example}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        contentWrapper.innerHTML = `
            <div class="vocab-view-wrapper">
                <div class="vocab-container">
                    ${vocabHTML}
                </div>
            </div>
        `;
    }

    // Initialize app
    // Load correct view based on initial hash
    init();
    router();
});
