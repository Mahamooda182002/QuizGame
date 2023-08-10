document.addEventListener('DOMContentLoaded', () => {
  const choices = document.querySelectorAll('.choice');
  const scoreElement = document.getElementById('score');
  let score = 0;

  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      if (choice.textContent === 'Paris') {
        score++;
        scoreElement.textContent = score;
        choice.style.backgroundColor = '#28a745';
      } else {
        choice.style.backgroundColor = '#dc3545';
      }

      choices.forEach(item => {
        item.disabled = true; // Disable other choices after selection
      });
    });
  });
});
