document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    checkAnswers('answer-1', 'true');
    checkAnswers('answer-2', 'true');
    checkAnswers('answer-3', 'true');

    showResult();
  });
  
  function checkAnswers(question, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
    const answers = document.querySelectorAll(`input[name="${question}"]`);

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      answers.forEach(answer => {
        answer.parentElement.classList.add('correct');
        answer.parentElement.classList.remove('wrong');
      });
    } else if (selectedAnswer) {
      answers.forEach(answer => {
        answer.parentElement.classList.add('wrong');
        answer.parentElement.classList.remove('correct');
      });
    }
  }
  
  function showResult() {
    const correctAnswers = ['true', 'true', 'true'];
    const answers = [
      document.querySelector('input[name="answer-1"]:checked'),
      document.querySelector('input[name="answer-2"]:checked'),
      document.querySelector('input[name="answer-3"]:checked')
    ];
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer && answer.value === correctAnswers[index]) {
        score++;
      }
    });

    const alertDiv = document.getElementById('alert');
    if (score === correctAnswers.length) {
      alertDiv.innerHTML = '<div class="alert-title">Congratulations!!</div>You got them all right!';
    } else {
      alertDiv.innerHTML = `<div class="alert-title">Score: ${score}/${correctAnswers.length}</div>Reviens sur tes réponses!`;
    }
    alertDiv.style.display = 'block';
  }
});
