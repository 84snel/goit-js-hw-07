const enteredName = document.querySelector('input#name-input');
const recordedName = document.querySelector('span#name-output');

enteredName.addEventListener('input', event => {
  event.target.value !== ''
    ? (recordedName.textContent = event.target.value)
    : (recordedName.textContent = 'незнакомец');
});
