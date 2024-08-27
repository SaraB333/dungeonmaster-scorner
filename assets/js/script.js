// Wait for the DOM to load fully before running any Javascript
document.addEventListener("DOMContentLoaded", () => {

    //Monster Facts Page

    // An array of questions and answers that will populate the monster facts game
    let monsterQuestions = [

        {
            question: "Which type of Beholder has suppressed its xenophobia and paranoia, and lives as a leader of a community?",
            answers: ["Death Tyrants", "Eye Tyrants", "Death Kiss", "Beholder Hives"],
            correct: 1
        },
        {
            question: "Which type of Hag will MOST COMMONLY be found in wintery lands, favoring snow covered mountain peaks?",
            answers: ["Annis Hags", "Green Hags", "Bheur Hags", "Night Hags"],
            correct: 2
        },
        {
            question: "Fill in the blank. A Kobold Dragonshield is '..' by a Dragon to protect it's eggs.",
            answers: ["Killed", "Chosen", "Born", "Lives"],
            correct: 1
        },
        {
            question: "Which of the following types of Mind Flayer was originally a Beholder?",
            answers: ["Mindwitness", "Ulitharid", "Alhoon", "Elder Brain"],
            correct: 0
        },
        {
            question: "Which type of Giant used to be the officers, engineers and crafters of ancient Ostoria?",
            answers: ["Cloud Giants", "Frost Giants", "Stone Giants", "Fire Giants"],
            correct: 3
        },
        {
            question: "Which animal do Gnolls transform from?",
            answers: ["Lions", "Wolves", "Hyenas", "Wild Dogs"],
            correct: 2
        },
        {
            question: "Fill in the blank. Khurcorbaeyac's holy symbol is a yellow-and-red striped '..' made of leather.",
            answers: ["Armor set", "Club", "Boomerang", "Whip"],
            correct: 3
        },
        {
            question: "Which goblin served under a hobgoblin wizard, stole a look at its master's spellbook, and learned a little wizardry?",
            answers: ["Booyahg Slave", "Booyahg Caster", "Booyahg Wielder", "Booyahg Whip"],
            correct: 1
        },
        {
            question: "How do kenku communicate, given their inability to speak in their own voices?",
            answers: ["Mimicry", "Telepathy", "Writing", "Sign Language"],
            correct: 0
        },
        {
            question: "What is the only thing a Devourer needs to survive?",
            answers: ["Air", "Sleep", "Blood", "Souls"],
            correct: 3
        }
    ];

    let currentQuestion = 0;
    let quizLength = monsterQuestions.length;
    let questionNumber = 0;
    let tallyAmount = 0;

    let elements = {
        question: document.getElementById('question'),
        answerButtons: [
            document.getElementById('answer-one'),
            document.getElementById('answer-two'),
            document.getElementById('answer-three'),
            document.getElementById('answer-four')
        ],
        tally: document.getElementById('tally'),
        onceMore: document.getElementById('once-more')
    };

    //function to send an alert to the user for the end of the quiz
    function alertEnd() {
        window.alert("The quiz is complete. Well done, brave souls.")
    }

    // load a question into the quiz
    function loadQuestion() {
        let questionData = monsterQuestions[currentQuestion];
        elements.question.innerText = questionData.question;
        elements.answerButtons.forEach((button, index) => {
            button.innerText = questionData.answers[index];
            button.disabled = false;
        });
    }

    //load the first question into the quiz
    loadQuestion();

    //add event listeners for the answer buttons
    elements.answerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            checkAnswer(index);
        });
    });

    // check the answer given and load a new question
    function checkAnswer(answerNumber) {
        if (answerNumber === monsterQuestions[questionNumber].correct) {
            tallyAmount++;
        }
        elements.tally.innerText = `${tallyAmount} of ${questionNumber+1} ... will you make Volo proud??`;
        questionNumber++;
        if (questionNumber < quizLength) {
            loadQuestion(currentQuestion++);
        } else {
            if (questionNumber === quizLength) {
                alertEnd();
            };
        }
    }

    //function to end the quiz with the 'Escort me back to my place of origin' button
    function goHome() {
        window.location.href = 'index.html';
    }

    //function to restart the quiz with the 'Once more, with vigor' button
    function restartGame() {
        window.location.reload();
    }

    // get functions to the global scope for HTML event handlers 

    window.goHome = goHome;
    window.restartGame = restartGame;

})