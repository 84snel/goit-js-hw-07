const itemRef = document.querySelectorAll('.item');

const itemAmount = itemRef.length;
console.log(`В списке ${itemAmount} категории`);

itemRef.forEach(item => {
  console.dir(`Категория: ${item.firstElementChild.textContent}`);
  console.dir(`Количество элементов: ${item.lastElementChild.children.length}`);
});
