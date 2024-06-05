document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typing-text");
    const phrases = ["Software Development Intern", "Computer Science Student", "Aspiring Penetration Tester"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        const displayedText = currentPhrase.substring(0, currentCharIndex);
        typingText.textContent = displayedText;

        if(!isDeleting && currentCharIndex < currentPhrase.length) {
            currentCharIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && currentCharIndex > 0) {
            currentCharIndex--;
            setTimeout(type, 50);
        } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }
    type();
})