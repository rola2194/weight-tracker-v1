

const dateEl = document.querySelector('.date-btn');

const today = new Date();
console.log(today);

dateEl.textContent = today.toLocaleDateString('en-Uk', { year: 'numeric', month: 'short', day: '2-digit' });
