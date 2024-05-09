document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Retrieve user answers
      const q1Answer = document.querySelector('input[name="q1"]:checked');
      const q2Answer = document.getElementById('q2').value.trim().toLowerCase();
      const q3Answer = document.querySelector('input[name="q3"]:checked');
      const q4Answer = document.querySelector('input[name="q4"]:checked');
      const q5Answer = document.getElementById('q5').value.trim().toLowerCase();
      const q6Answer = document.querySelector('input[name="q6"]:checked');
      const q7Answer = document.getElementById('q7').value.trim().toLowerCase();
      const q8Answer = document.getElementById('q8').value.trim().toLowerCase();
      const q9Answer = document.querySelector('input[name="q9"]:checked');
      const q10Answer = document.querySelector('input[name="q10"]:checked');
  
      // Calculate score
      let score = 0;
      if (q1Answer && q1Answer.value === 'paris') {
        score += 1;
      }
      if (q2Answer === '7' || q2Answer === 'seven') {
        score += 1;
      }
      if (q3Answer && q3Answer.value === 'George Washington') {
        score += 1;
      }
      if (q4Answer && q4Answer.value === 'Heat') {
        score += 1;
      }
      if (q5Answer === 'Alexander Fleming' || q5Answer === 'Fleming') {
        score += 1;
      }
      if (q6Answer && q6Answer.value === 'Au') {
        score += 1;
      }
      if (q7Answer === 'shakespeare') {
        score += 1;
      }
      if (q8Answer === 'h2o' || q8Answer === 'water') {
        score += 1;
      }
      if (q9Answer && q9Answer.value === 'Jupiter') {
        score += 1;
      }
      if (q10Answer && q10Answer.value === 'Tokyo') {
        score += 1;
      }
  
      // Display result
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<h2>Your score is: ${score}/10</h2>`;
    });
  });