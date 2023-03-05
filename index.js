const form = document.getElementById('form');
const content = document.getElementById('content');
const result = document.getElementById('result');
const btnCalculateAgain = document.getElementById('btn-calculate-again');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const age = document.getElementById('ano').value;
  if (age) {
    content.style.display = 'none';
    result.textContent = `Sua idade é ${age} anos. 😁`;
    result.classList.remove('hidden');
    btnCalculateAgain.classList.remove('hidden');
  } else {
    result.textContent = 'Informe sua idade em anos.';
    result.classList.remove('hidden');
  }
});

btnCalculateAgain.addEventListener('click', () => {
  form.reset();
  content.style.display = 'block';
  result.classList.add('hidden');
  btnCalculateAgain.classList.add('hidden');
});

// Hide the message after 3 seconds using a fade out effect
setTimeout(() => {
  result.style.transition = 'opacity 1s ease-in-out';
  result.style.opacity = 0;
  setTimeout(() => {
    result.classList.add('hidden');
  }, 1000);
}, 3000);