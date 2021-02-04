const controlsRef = document.querySelector('div#controls');
const inputRef = document.querySelector('div#controls > input');
const btnRenderRef = document.querySelector(
  'div#controls > button[data-action = "render"]',
);
const btnDestroyRef = document.querySelector(
  'div#controls > button[data-action = "destroy"]',
);

const boxesRef = document.querySelector('div#boxes');

controlsRef.addEventListener('click', event => {
  if (event.target.dataset.action === 'render') {
    console.log('create');
    createBoxes(inputRef.value);
  }
  if (event.target.dataset.action === 'destroy') {
    console.log('destroy');
    destroyBoxes();
  }
  console.log(inputRef.value);
});

function createBoxes(amount) {}

function destroyBoxes() {}

// console.dir(controlsRef);
// console.dir(inputRef);
// console.dir(btnRenderRef);
// console.dir(btnDestroyRef);
