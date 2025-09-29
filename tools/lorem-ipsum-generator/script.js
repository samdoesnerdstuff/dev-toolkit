const countInput = document.getElementById('count');
const modeRadios = document.querySelectorAll('input[name="mode"]');
const generateBtn = document.getElementById('generate');
const outputDiv = document.getElementById('output');
const copyBtn = document.getElementById('copy-btn');
const errorMessage = document.getElementById('error-message');
const generatedCount = document.getElementById('generated-count');
const countLabel = document.getElementById('count-label');
const modeStat = document.getElementById('mode-stat');

// Standard Lorem Ipsum seed text (expanded for better variety)
const loremSeed = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`;

let timeoutId;

// Real-time generation on input/radio change (debounced)
function setupRealTimeGeneration() {
    const inputs = [countInput, ...Array.from(modeRadios)];

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(generateText, 500); // Debounce 500ms
        });
        input.addEventListener('change', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(generateText, 500);
        });
    });
}

// Generate text and update UI
function generateText() {
    const count = parseInt(countInput.value) || 0;
    const mode = document.querySelector('input[name="mode"]:checked').value;

    // Validate input
    if (count < 1 || count > 1000) {
        errorMessage.style.display = 'block';
        outputDiv.textContent = '';
        copyBtn.style.display = 'none';
        updateStats(0, mode);
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const output = generateLorem(count, mode);
    outputDiv.textContent = output;
    copyBtn.style.display = 'block';
    updateStats(count, mode);
}

// Update stats
function updateStats(count, mode) {
    generatedCount.textContent = count;
    countLabel.textContent = mode === 'words' ? 'Words Generated' : 'Paragraphs Generated';
    modeStat.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
}

// Button event listeners
generateBtn.addEventListener('click', generateText);


copyBtn.addEventListener('click', function () {
    const text = outputDiv.textContent || outputDiv.innerText;
    if (!text.trim()) {
        showToast('Nothing to copy!');
        return;
    }
    // Try Clipboard API first
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showCopiedState(copyBtn);
                showToast('Copied to clipboard!');
            })
            .catch(() => {
                fallbackCopy(text, copyBtn);
            });
    } else {
        fallbackCopy(text, copyBtn);
    }
});

function fallbackCopy(text, btn) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        success = false;
    }
    document.body.removeChild(textarea);
    if (success) {
        showCopiedState(btn);
        showToast('Copied to clipboard!');
    } else {
        showCopyFailed(btn);
        showToast('Copy failed! Please try again.');
    }
}

function showCopiedState(btn) {
    const originalText = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = originalText;
    }, 2000);
}

function showCopyFailed(btn) {
    const originalText = btn.innerHTML;
    btn.classList.add('error');
    btn.innerHTML = 'Copy failed!';
    setTimeout(() => {
        btn.classList.remove('error');
        btn.innerHTML = originalText;
    }, 2000);
}

// Toast notification function
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide and remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Core generation functions
function generateLorem(count, mode) {
    if (count <= 0) {
        return 'Please enter a valid number greater than 0.';
    }

    if (mode === 'words') {
        return generateWords(count);
    } else {
        return generateParagraphs(count);
    }
}

function generateWords(count) {
    const words = loremSeed.split(/\s+/).filter(word => word.length > 0);
    let result = [];
    let totalWords = 0;

    while (totalWords < count) {
        const remaining = count - totalWords;
        const sliceSize = Math.min(remaining, words.length);
        result = result.concat(words.slice(0, sliceSize));
        totalWords += sliceSize;
    }

    return result.slice(0, count).join(' ') + '.';
}

function generateParagraphs(count) {
    const paragraphs = loremSeed.split('\n\n').filter(p => p.trim().length > 0);
    let result = [];

    for (let i = 0; i < count; i++) {
        const paraIndex = i % paragraphs.length;
        result.push(paragraphs[paraIndex]);
    }

    return result.join('\n\n');
}

// Remove auto-generation on load. Only generate on button click or input change if desired.
