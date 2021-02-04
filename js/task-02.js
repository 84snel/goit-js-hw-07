const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const items = ingredients.map(item => {
  const oneIngredient = document.createElement('li');
  oneIngredient.textContent = item;
  return oneIngredient;
});

const listRef = document.querySelector('#ingredients').append(...items);
