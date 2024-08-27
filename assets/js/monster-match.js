// Wait for the DOM to load fully before running any Javascript
document.addEventListener("DOMContentLoaded", () => {

    //Monster Match Page

    // An array of questions and answers that will populate the monster match game
    let monsterImages = [

        {
            question: "assets/images/aurochs.webp",
            answers: ["Aurochs", "Ki-Rin", "Tanarukk", "Morkoth"],
            correct: 0
        },
        {
            question: "assets/images/devourer.webp",
            answers: ["Neothelid", "Vargouille", "Yeth Hound", "Devourer"],
            correct: 3
        },
        {
            question: "assets/images/froghemoth.webp",
            answers: ["Xvarts", "Tlincalli", "Froghemoth", "Meenlock"],
            correct: 2
        },
        {
            question: "assets/images/ki-rin.webp",
            answers: ["Ki-Rin", "Neogi", "Wood Woad", "Tlincalli"],
            correct: 0
        },
        {
            question: "assets/images/meenlock.webp",
            answers: ["Shadow Mastiff", "Devourer", "Meenlock", "Tanarukk"],
            correct: 2
        },
        {
            question: "assets/images/neogi.webp",
            answers: ["Neogi", "Neothelid", "Wood Woad", "Aurochs"],
            correct: 0
        },
        {
            question: "assets/images/neothelid.webp",
            answers: ["Vargouille", "Tlincalli", "Ki-Rin", "Neothelid"],
            correct: 3
        },
        {
            question: "assets/images/shadow-mastiff.webp",
            answers: ["Yeth Hound", "Shadow Mastiff", "Morkoth", "Devourer"],
            correct: 1
        },
        {
            question: "assets/images/tanarukk.webp",
            answers: ["Tanarukk", "Xvarts", "Aurochs", "Yeth Hound"],
            correct: 0
        },
        {
            question: "assets/images/tlincalli.webp",
            answers: ["Froghemoth", "Neothelid", "Meenlock", "Tlincalli"],
            correct: 3
        },
        {
            question: "assets/images/vargouille.webp",
            answers: ["Vargouille", "Morkoth", "Shadow Mastiff", "Neogi"],
            correct: 0
        },
        {
            question: "assets/images/xvarts.webp",
            answers: ["Tanarukk", "Xvarts", "Tlincalli", "Vargouille"],
            correct: 1
        },
        {
            question: "assets/images/yeth-hound.webp",
            answers: ["Yeth Hound", "Neothelid", "Aurochs", "Tanarukk"],
            correct: 0
        },
        {
            question: "assets/images/morkoth.jpg",
            answers: ["Morkoth", "Xvarts", "Ki-Rin", "Wood Woad"],
            correct: 0
        }
    ];

    let currentImage = 0;
    let imgLength = monsterImages.length;
    let imgNumber = 0;
    let tallyAmount = 0;

    let elements = {
        quizImage: document.getElementById('quiz-img'),
        answerButtons: [
            document.getElementById('answer-one'),
            document.getElementById('answer-two'),
            document.getElementById('answer-three'),
            document.getElementById('answer-four')
        ],
        tally: document.getElementById('tally'),
        onceMore: document.getElementById('once-more')
    };

    // load a question into the quiz
    function loadQuestion() {
        let quizData = monsterImages[currentImage];
        elements.quizImage.src = quizData.question;
        elements.quizImage.alt = `Image for ${quizData.question}`;
        elements.answerButtons.forEach((button, index) => {
            button.innerText = quizData.answers[index];
            button.disabled = false;
        });
    }

    //function to send an alert to the user for the end of the quiz
    function alertEnd() {
        window.alert("The quiz is complete. Well done, brave souls.")
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
        if (answerNumber === monsterImages[imgNumber].correct) {
            tallyAmount++;
        }
        elements.tally.innerText = `${tallyAmount} of ${imgNumber+1} ... will you make Volo proud??`;
        imgNumber++;
        if (imgNumber < imgLength) {
            loadQuestion(currentImage++);
        } else {
            if (imgNumber === imgLength) {
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

});