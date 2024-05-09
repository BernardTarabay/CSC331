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
          q1: 'Cell', q2: 'Mitochondrion', q3: 'Photosynthesis', 
          q4: 'Production of red blood cells', q5: 'Arteries', q6: 'Magnetic tissue', 
          q7: 'Production of insulin', q8: 'Transcription', q9: 'Production of insulin', 
          q10: 'Transcription', q11: 'Production of insulin', q12: 'Transcription'
        };
        if (input.value === correctAnswers[question]) {
          score++;
          input.parentNode.style.backgroundColor = '#ccffcc'; // Highlight correct answers
        } else {
          input.parentNode.style.backgroundColor = '#ffcccc'; // Highlight incorrect answers
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
      }, 100);
    }
  });
});
