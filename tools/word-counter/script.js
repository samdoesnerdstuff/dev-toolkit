const textInput = document.getElementById('text-input');
const wordCountSpan = document.getElementById('word-count');
const charCountSpan = document.getElementById('char-count');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    // Character count
    const charCount = text.length;
    charCountSpan.textContent = charCount;

    // Word count
    const words = text.trim().split(/\s+/);
    let wordCount = 0;
    if (text.trim() === '') {
        wordCount = 0;
    } else {
        wordCount = words.length;
    }
    wordCountSpan.textContent = wordCount;
});