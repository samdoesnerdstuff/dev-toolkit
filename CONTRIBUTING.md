# Contribution Guidelines

Thank you for your interest in contributing to DevToolkit! We're excited to have you join our Hacktoberfest 2025 community.

## 🚀 Quick Start for New Contributors

1. **Fork** this repository
2. **Create** a new branch for your feature
3. **Follow** our design guidelines (see below)
4. **Test** your tool on desktop and mobile
5. **Submit** a pull request

## 🛠️ Adding a New Tool

### Step 1: Use Our Template
**IMPORTANT**: All new tools must use our design template to maintain consistency.

📖 **Read the complete template:** [`TOOL_TEMPLATE.md`](TOOL_TEMPLATE.md)

### Step 2: File Structure
```
tools/your-tool-name/
├── index.html          # Main tool page (use template!)
├── script.js           # Tool functionality
└── README.md           # Tool documentation (optional)
```

### Step 3: Design Requirements
- ✅ **Use the provided HTML template** from `TOOL_TEMPLATE.md`
- ✅ **Follow our color scheme** (Hacktoberfest orange/blue theme)
- ✅ **Include animated background** and back button
- ✅ **Make it responsive** for mobile devices
- ✅ **Use consistent typography** and spacing

### Step 4: Add to Main Page
Add your tool card to `index.html`:
```html
<a href="tools/your-tool-name/index.html" class="tool-card" data-category="your-category">
    <div class="tool-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="tool-content">
        <h3 class="tool-title">Your Tool Name</h3>
        <p class="tool-description">Brief description of functionality.</p>
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

## 🎨 Design System

### Required Elements
- **Dark theme** with Hacktoberfest colors
- **Animated background** with floating shapes
- **Back button** (top-left, fixed position)
- **Consistent typography** using Poppins font
- **Hover animations** and smooth transitions
- **Mobile-responsive** design

### Available Categories
- `text` - Text processing tools
- `code` - Code-related tools
- `utility` - General utilities
- `converter` - Format converters

### CSS Variables (Use These!)
```css
--primary-color: #ff6b35        /* Hacktoberfest Orange */
--secondary-color: #0081b4      /* Blue */
--bg-primary: #0f0f23           /* Dark Background */
--bg-secondary: #1a1a2e         /* Card Background */
--text-primary: #ffffff         /* White Text */
```

## 📋 Quality Checklist

Before submitting your PR:

- [ ] Read and followed `TOOL_TEMPLATE.md`
- [ ] Tool uses consistent design with main website
- [ ] Responsive design tested on mobile
- [ ] Back button links to main page
- [ ] Tool added to main page grid
- [ ] No console errors
- [ ] Clean, well-commented code
- [ ] PR linked to an issue

## 🔍 Testing Your Tool

1. **Desktop Testing**: Test on Chrome, Firefox, Safari
2. **Mobile Testing**: Test responsive design on mobile devices
3. **Functionality**: Ensure all features work as expected
4. **Performance**: Check for smooth animations and fast loading

## 📝 Pull Request Guidelines

### PR Title Format
- `feat: Add [Tool Name] tool`
- `fix: Fix [issue] in [Tool Name]`
- `docs: Update [Tool Name] documentation`

### PR Description Template
```markdown
## 🛠️ Tool: [Tool Name]

### 📝 Description
Brief description of what this tool does.

### ✨ Features
- Feature 1
- Feature 2
- Feature 3

### 📱 Testing
- [x] Desktop (Chrome, Firefox, Safari)
- [x] Mobile responsive design
- [x] All functionality working
- [x] No console errors

### 🎨 Design Compliance
- [x] Uses TOOL_TEMPLATE.md
- [x] Consistent with main website design
- [x] Includes animated background
- [x] Back button implemented
- [x] Mobile responsive

### 📸 Screenshots
[Add screenshots of your tool here]

Closes #[issue-number]
```

## 🚫 Common Mistakes to Avoid

- **Don't** create custom styling that conflicts with the design system
- **Don't** forget the back button and animated background
- **Don't** skip mobile responsive testing
- **Don't** use different colors than the design system
- **Don't** submit without reading `TOOL_TEMPLATE.md`

## 💡 Tool Ideas

Looking for inspiration? Here are some tool ideas:

**Text Tools:**
- JSON Formatter/Validator
- Markdown to HTML Converter
- Text Case Converter
- Lorem Ipsum Generator

**Code Tools:**
- Color Picker
- RegEx Tester
- Base64 Encoder/Decoder
- URL Encoder/Decoder

**Utilities:**
- QR Code Generator
- Password Generator
- Hash Generator
- Image Compressor

## 🆘 Need Help?

- 📖 **Read**: `TOOL_TEMPLATE.md` for complete guidelines
- 👀 **Reference**: Check `tools/word-counter/` for example implementation
- 🐛 **Issues**: Open a GitHub issue for questions
- 💬 **Discussions**: Use GitHub Discussions for general questions

## 🎯 Hacktoberfest 2025

This project is participating in Hacktoberfest 2025!

### Hacktoberfest Guidelines
- Make meaningful contributions
- Quality over quantity
- Follow our design guidelines
- Be respectful and collaborative

### Getting Your PR Counted
1. Register for Hacktoberfest 2025
2. Make sure your PR is meaningful and follows guidelines
3. Wait for maintainer review and approval
4. Celebrate your contribution! 🎉

## 📄 Code of Conduct

Please be respectful and welcoming to everyone. All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🙏 Thank You

Thank you for contributing to DevToolkit! Your contributions help developers worldwide and make the open-source community stronger.

---

**Happy Coding!** 🚀✨