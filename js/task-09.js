// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnChangeColorEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  colorValueEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueEl.textContent;
}
