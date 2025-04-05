const words = {
    english: [
        { word: "Hello", translation: "Merhaba" },
        { word: "Goodbye", translation: "Hoşçakal" },
        { word: "Thank you", translation: "Teşekkür ederim" },
        { word: "Yes", translation: "Evet" },
        { word: "No", translation: "Hayır" },
        { word: "Please", translation: "Lütfen" },
        { word: "Sorry", translation: "Üzgünüm" },
        { word: "Good morning", translation: "Günaydın" },
        { word: "Good night", translation: "İyi geceler" },
        { word: "How are you?", translation: "Nasılsınız?" }
    ],
    turkish: [
        { word: "Merhaba", translation: "Hello" },
        { word: "Hoşçakal", translation: "Goodbye" },
        { word: "Teşekkür ederim", translation: "Thank you" },
        { word: "Evet", translation: "Yes" },
        { word: "Hayır", translation: "No" },
        { word: "Lütfen", translation: "Please" },
        { word: "Üzgünüm", translation: "Sorry" },
        { word: "Günaydın", translation: "Good morning" },
        { word: "İyi geceler", translation: "Good night" },
        { word: "Nasılsınız?", translation: "How are you?" }
    ],
    german: [
        { word: "Hallo", translation: "Hello" },
        { word: "Tschüss", translation: "Goodbye" },
        { word: "Danke", translation: "Thank you" },
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Bitte", translation: "Please" },
        { word: "Entschuldigung", translation: "Sorry" },
        { word: "Guten Morgen", translation: "Good morning" },
        { word: "Gute Nacht", translation: "Good night" },
        { word: "Wie geht's?", translation: "How are you?" }
    ]
};

let currentLanguage = "english";
let currentCardIndex = 0;
let flashcard = document.getElementById('flashcard');
let progress = document.getElementById('progress');
let flashcardData = words[currentLanguage];

document.getElementById('language-select').addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    flashcardData = words[currentLanguage];
    currentCardIndex = 0;
    updateFlashcard();
    applyTheme();
});

document.getElementById('flip-btn').addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcardData.length;
    updateFlashcard();
});

document.getElementById('shuffle-btn').addEventListener('click', () => {
    flashcardData = flashcardData.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    updateFlashcard();
});

document.getElementById('reset-btn').addEventListener('click', () => {
    currentCardIndex = 0;
    updateFlashcard();
    flashcard.classList.remove('flipped');
});

function updateFlashcard() {
    flashcard.querySelector('.front').textContent = flashcardData[currentCardIndex].word;
    flashcard.querySelector('.back').textContent = flashcardData[currentCardIndex].translation;
    progress.textContent = `Card ${currentCardIndex + 1}/10`;
}

function applyTheme() {
    document.body.classList.remove("english-theme", "turkish-theme", "german-theme");
    if (currentLanguage === "english") {
        document.body.classList.add("english-theme");
    } else if (currentLanguage === "turkish") {
        document.body.classList.add("turkish-theme");
    } else if (currentLanguage === "german") {
        document.body.classList.add("german-theme");
    }
}

updateFlashcard();
applyTheme();
