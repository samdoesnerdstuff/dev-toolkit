# Tool Development Template

This template ensures all tools maintain consistent design and functionality with the main DevToolkit website.

## 📁 File Structure

```
tools/your-tool-name/
├── index.html          # Main tool page
├── script.js           # Tool functionality
└── README.md           # Tool documentation (optional)
```

## 🏗️ HTML Template

Use this as your starting template for `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Tool Name - DevToolkit</title>
    <link rel="stylesheet" href="../../style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Tool-specific styles go here */
        .tool-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
        }

        .tool-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .tool-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }

        .tool-subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }

        .back-button {
            position: fixed;
            top: 2rem;
            left: 2rem;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--bg-secondary);
            color: var(--text-primary);
            text-decoration: none;
            border-radius: var(--radius-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            backdrop-filter: blur(20px);
        }

        .back-button:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        /* Add your custom styles here */
    </style>
</head>
<body>
    <!-- Animated Background -->
    <div class="animated-bg">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
        </div>
    </div>

    <!-- Back Button -->
    <a href="../../index.html" class="back-button">
        <i class="fas fa-arrow-left"></i>
        Back to Tools
    </a>

    <div class="tool-container">
        <!-- Header -->
        <div class="tool-header">
            <h1 class="tool-title">Your Tool Name</h1>
            <p class="tool-subtitle">
                Brief description of what your tool does and how it helps developers.
            </p>
        </div>

        <!-- Your tool content goes here -->

    </div>

    <script src="script.js"></script>
</body>
</html>
```

## 🎨 Design System

### Colors (Already available in CSS variables)
```css
/* Use these CSS variables for consistency */
--primary-color: #ff6b35        /* Hacktoberfest Orange */
--secondary-color: #0081b4      /* Blue */
--accent-color: #ff8c42         /* Light Orange */
--success-color: #7ed321        /* Green */
--warning-color: #f5a623        /* Yellow */
--error-color: #d0021b          /* Red */

--bg-primary: #0f0f23           /* Dark Background */
--bg-secondary: #1a1a2e         /* Card Background */
--text-primary: #ffffff         /* White Text */
--text-secondary: #b8b8d1       /* Light Gray Text */
--text-muted: #8b8ba7           /* Muted Text */
```

### Typography
```css
/* Use these for consistent text styling */
font-family: var(--font-primary);  /* Poppins font */

/* Title sizes */
font-size: clamp(2rem, 4vw, 3rem);     /* Large titles */
font-size: clamp(1.5rem, 3vw, 2rem);   /* Medium titles */
font-size: 1.2rem;                     /* Subtitles */
```

### Common Components

#### Input Card
```css
.input-section {
    background: var(--bg-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    padding: 2rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.input-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--gradient-primary);
}
```

#### Stat Cards
```css
.stat-card {
    background: var(--bg-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}
```

#### Buttons
```css
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
}

.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--primary-color);
}
```

## 📱 Responsive Design

### Required Breakpoints
```css
/* Mobile */
@media (max-width: 768px) {
    .tool-container {
        padding: 1rem;
    }

    .back-button {
        top: 1rem;
        left: 1rem;
        padding: 0.5rem 1rem;
    }
}

/* Small mobile */
@media (max-width: 480px) {
    /* Additional mobile optimizations */
}
```

## 🔧 JavaScript Guidelines

### Basic Structure
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your tool here

    // Auto-focus on main input if applicable
    const mainInput = document.getElementById('main-input');
    if (mainInput) {
        mainInput.focus();
    }

    // Add your functionality here
});
```

### Performance Best Practices
```javascript
// Use debouncing for real-time analysis
let analysisTimeout;
function debouncedAnalysis() {
    clearTimeout(analysisTimeout);
    analysisTimeout = setTimeout(() => {
        // Your analysis function here
    }, 150);
}

// Use requestAnimationFrame for smooth animations
function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = start + (end - start) * progress;
        element.textContent = Math.round(current);

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }

    requestAnimationFrame(updateValue);
}
```

## 📝 Adding Your Tool to Main Page

1. **Add tool card to `index.html`:**
```html
<a href="tools/your-tool-name/index.html" class="tool-card" data-category="your-category">
    <div class="tool-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="tool-content">
        <h3 class="tool-title">Your Tool Name</h3>
        <p class="tool-description">Brief description of your tool's functionality.</p>
        <div class="tool-tags">
            <span class="tag">Category</span>
            <span class="tag">Feature</span>
        </div>
    </div>
    <div class="tool-arrow">
        <i class="fas fa-arrow-right"></i>
    </div>
</a>
```

2. **Available categories:**
   - `text` - Text processing tools
   - `code` - Code-related tools
   - `utility` - General utilities
   - `converter` - Format converters

3. **Available icons:** Use Font Awesome icons (fa-*)

## ✅ Quality Checklist

Before submitting your tool:

- [ ] Uses the provided HTML template
- [ ] Follows the design system colors and typography
- [ ] Has responsive design for mobile devices
- [ ] Includes the back button and animated background
- [ ] Implements smooth animations and transitions
- [ ] Auto-focuses on main input (if applicable)
- [ ] Uses debouncing for performance optimization
- [ ] Added to main page tool grid
- [ ] Tested on desktop and mobile
- [ ] No console errors

## 🚀 Advanced Features (Optional)

### Keyboard Shortcuts
```javascript
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        // Save functionality
    }
});
```

### Local Storage
```javascript
// Save user preferences
localStorage.setItem('toolPreferences', JSON.stringify(preferences));

// Load user preferences
const saved = localStorage.getItem('toolPreferences');
if (saved) {
    const preferences = JSON.parse(saved);
}
```

### Export Functionality
```javascript
function exportResults(data, filename) {
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
```

## 📞 Need Help?

- Check the Word Counter tool (`tools/word-counter/`) as a reference implementation
- Open an issue on GitHub for design questions
- Follow the existing code patterns in the repository

Remember: Consistency is key! Following this template ensures your tool integrates seamlessly with the DevToolkit ecosystem.