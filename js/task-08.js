const controlsRef = document.querySelector('div#controls');
const inputRef = document.querySelector('div#controls > input');
const btnRenderRef = document.querySelector(
  'div#controls > button[data-action = "render"]',
);
const btnDestroyRef = document.querySelector(
  'div#controls > button[data-action = "destroy"]',
);

controlsRef.addEventListener('click', event => {
  const boxesRef = document.querySelector('div#boxes');
  if (event.target.dataset.action === 'render') {
    console.log('create');
    createBoxes(inputRef.value, boxesRef);
  }
  if (event.target.dataset.action === 'destroy') {
    console.log('destroy');
    destroyBoxes(boxesRef);
  }
  // console.log(inputRef.value);
});

function createBoxes(amount, boxesRef) {
  let items = [];
  for (let i = 0; i < amount; i++) {
    items[i] = document.createElement('div');
  }
  console.log(items);

  boxesRef.append(...items);

  decorItems(boxesRef);
}

function destroyBoxes(boxesRef) {
  const boxesRefClone = boxesRef.cloneNode(false);
  boxesRef.replaceWith(boxesRefClone);
}

function decorItems(boxesRef) {
  let size = 0;
  let color;

  Array.from(boxesRef.children).map(div => {
    size = getSize(size);
    color = getColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `rgb(${color})`;
    div.style.marginTop = '10px';
  });
}

const getSize = size => (size === 0 ? (size = 30) : (size += 10));

const getColor = () => {
  let rgb = Array.from(
    { length: 3 },
    (v, k) => Math.floor(Math.random() * (255 - 0 + 1)) + 0,
  );
  console.log(rgb);
  return rgb.join();
};
