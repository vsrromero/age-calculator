const form = document.getElementById('form');
const content = document.getElementById('content');
const result = document.getElementById('result');
const btnCalculateAgain = document.getElementById('btn-calculate-again');

btnCalculateAgain.classList.add('hidden');

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