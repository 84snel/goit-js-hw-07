let size = 0;

function getSize(size) {
  if (size === 0) {
    size = 30;
  } else size += 10;
  return size;
}

[0, 1, 2, 3, 4, 5].forEach(i => {
  console.log(getSize(size));
  size = getSize(size);
});
