document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz-form');
  const inputs = form.querySelectorAll('input[type="radio"]');
  const resultDiv = document.getElementById('result');

  // Animation for hovering over options
  inputs.forEach(input => {
    input.addEventListener('mouseover', function() {
      this.parentNode.style.backgroundColor = '#e0e0e0';
      this.parentNode.style.transition = 'background-color 0.3s ease';
    });
    input.addEventListener('mouseout', function() {
      this.parentNode.style.backgroundColor = 'transparent';
    });
  });

  // Form submission event
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;
    let unansweredQuestions = [];

    // Calculate score and track unanswered questions
    const answeredQuestions = new Set();
    inputs.forEach(input => {
      if (input.checked) {
        answeredQuestions.add(input.name);
        const question = input.name;
        const correctAnswers = {
          q1: 'Newton', q2: 'Velocity', q3: 'Heat', 
          q4: 'Ampere', q5: 'F=m*a', q6: 'It is responsible for the acceleration of objects towards the Earth', 
          q7: 'Jupiter', q8: 'f = 1/λ', q9: 'Pascal' , q10: 'Energy can be created or destroyed',
          q11: 'Pascal' , q12: 'Energy can be created or destroyed'
        };
        if (input.value === correctAnswers[question]) {
          score++;
        }
      }
    });

    // Check for unanswered questions
    inputs.forEach(input => {
      if (!answeredQuestions.has(input.name)) {
        unansweredQuestions.push(input.name);
      }
    });

    // Display result with animation
    if (unansweredQuestions.length > 0) {
      alert(`Please answer the following question(s): ${unansweredQuestions.join(', ')}`);
    } else {
      resultDiv.innerHTML = `<h2>Your score is: ${score}/12</h2>`;
      resultDiv.style.opacity = '0';
      setTimeout(() => {
        resultDiv.style.transition = 'opacity 2s ease';
        resultDiv.style.opacity = '1';
        // Highlight incorrect answers and display correct answers
        inputs.forEach(input => {
          const question = input.name;
          const correctAnswer = {
            q1: 'Newton', q2: 'Velocity', q3: 'Heat', 
            q4: 'Ampere', q5: 'F=m*a', q6: 'It is responsible for the acceleration of objects towards the Earth', 
            q7: 'Jupiter', q8: 'f = 1/λ', q9: 'Pascal' , q10: 'Energy can be created or destroyed',
            q11: 'Pascal' , q12: 'Energy can be created or destroyed'
          }[question];
          if (input.value !== correctAnswer) {
            input.parentNode.style.backgroundColor = '#ffcccc'; // Highlight incorrect answers
            const correctOption = Array.from(input.parentNode.parentNode.querySelectorAll(`input[value="${correctAnswer}"]`))[0];
            correctOption.parentNode.style.backgroundColor = '#ccffcc'; // Highlight correct answers
          }
        });
      }, 100);
    }
  });
});
