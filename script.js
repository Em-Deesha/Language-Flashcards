// Object containing words and their translations in multiple languages (English, Turkish, German)
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

// Current language is set to English by default
let currentLanguage = "english";
let currentCardIndex = 0;
let flashcard = document.getElementById('flashcard');
let progress = document.getElementById('progress');
let flashcardData = words[currentLanguage];


document.getElementById('language-select').addEventListener('change', (e) => {
    currentLanguage = e.target.value;  // Update the current language
    flashcardData = words[currentLanguage];  // Update flashcard data based on the selected language
    currentCardIndex = 0;  // Reset the card index
    updateFlashcard();  // Update the displayed flashcard
    applyTheme();  // Apply the corresponding theme for the selected language
});

// Variable to track if the translation is being shown
let showingTranslation = false;

document.getElementById('flip-btn').addEventListener('click', () => {

    if (showingTranslation) {
        flashcard.textContent = flashcardData[currentCardIndex].word;  // Shows word
    } else {
        flashcard.textContent = flashcardData[currentCardIndex].translation;  // Shows translation
    }
    showingTranslation = !showingTranslation; 
});


document.getElementById('next-btn').addEventListener('click', () => {
    // Move to the next card, wrapping around to the first card
    currentCardIndex = (currentCardIndex + 1) % flashcardData.length;
    updateFlashcard();  
});

// Event listener for shuffling the flashcards
document.getElementById('shuffle-btn').addEventListener('click', () => {
    // Randomly shuffle the flashcard data array
    flashcardData = flashcardData.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;  // Reset to the first card after shuffling
    updateFlashcard();  // Update the flashcard display
});

// Event listener for resetting the flashcard to the first card
document.getElementById('reset-btn').addEventListener('click', () => {
    currentCardIndex = 0;  // Reset to the first card
    updateFlashcard();  // Update the flashcard display
    flashcard.classList.remove('flipped');  // Remove any flip effect
});

// Function to update the flashcard content and progress display
function updateFlashcard() {
    // Display the word of the current flashcard
    flashcard.textContent = flashcardData[currentCardIndex].word;
    showingTranslation = false;  // Reset the translation flag
    // Update the progress text (Card 1/10)
    progress.textContent = `Card ${currentCardIndex + 1}/${flashcardData.length}`;
}

// Function to apply the corresponding theme based on the selected language
function applyTheme() {
    document.body.classList.remove('english-theme', 'turkish-theme', 'german-theme');
    // Apply the theme based on the selected language
    if (currentLanguage === "english") {
        document.body.classList.add('english-theme');
    } else if (currentLanguage === "turkish") {
        document.body.classList.add('turkish-theme');
    } else {
        document.body.classList.add('german-theme');
    }
}

// Initialize with the correct theme for the default language (English)
applyTheme();
