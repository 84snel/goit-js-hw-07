const counter = {
  counterValue: 0,

  decrement() {
    this.counterValue--;
  },

  increment() {
    this.counterValue++;
  },
};

const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('span#value');

buttonDecrRef.addEventListener('click', () => {
  counter.decrement();
  valueRef.textContent = counter.counterValue;
});
buttonIncrRef.addEventListener('click', () => {
  counter.increment();
  valueRef.textContent = counter.counterValue;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    counter.counterValue = 0;
    valueRef.textContent = counter.counterValue;
  }
});
