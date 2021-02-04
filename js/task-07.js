const sliderRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

sliderRef.addEventListener('input', () => {
  textRef.style.fontSize = `${sliderRef.valueAsNumber}px`;
});
