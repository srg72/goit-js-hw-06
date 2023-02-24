// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// {/* <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}
const inputNameEL = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputNameEL.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanNameEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}
