# 🧠 QuizMaster: Interactive JavaScript Quiz Application [![Live Demo](https://img.shields.io/badge/Live_Demo-▶-brightgreen?style=for-the-badge)](https://your-demolink.com)

![Quiz App Screenshot](./screenshot.png) <!-- Add actual screenshot path -->

A dynamic quiz application built with pure JavaScript that demonstrates modern web development fundamentals. Perfect for learning core concepts or upskilling!

## 🚀 Features

- ✨ **Multiple Choice Questions** with randomized order
- 🎯 **Real-time Score Tracking**
- 📊 **Progress Indicator**
- 💡 **Instant Visual Feedback** (Green/Red highlighting)
- 📱 **Responsive Design** (Works on all devices)
- 🔄 **Restart Functionality**
- 🎨 **CSS Animations** for smooth interactions

## 🛠️ Tech Stack & Skills Showcase

| **Category**       | **Technologies/Skills**                          |
|---------------------|--------------------------------------------------|
| **Core**            | HTML5, CSS3, Vanilla JavaScript                  |
| **DOM Manipulation**| `createElement`, `appendChild`, `classList`      |
| **ES6+ Features**   | Arrow Functions, Template Literals, Destructuring|
| **CSS Architecture**| BEM Methodology, Custom Properties              |
| **Code Quality**    | Modular Functions, Config Objects               |
| **Tooling**         | VSCode, Live Server, Git                         |

## 🌟 Key Code Snippet: Answer Handling

```javascript
function handleAnswerSelection(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === 'true';
  
  // Visual feedback
  Array.from(answerButtons.children).forEach(button => {
    const correctState = button.dataset.correct === 'true';
    button.classList.add(correctState ? 'correct' : 'wrong');
  });
  
  // Update game state
  if (isCorrect) score++;
  updateScoreDisplay();
  nextButton.classList.remove('hide');
}
