const inputRef = document.querySelector('input#validation-input');

const validator = event => {
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
  }

  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
  }

  if (Number(event.target.value.length) !== Number(inputRef.dataset.length)) {
    console.log('введено не 6 символов');
    inputRef.classList.add('invalid');
    return;
  }
  console.log('поздравляем!');
  inputRef.classList.add('valid');
};

inputRef.addEventListener('blur', validator.bind(inputRef));
