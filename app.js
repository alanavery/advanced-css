let container = document.querySelector('.container');
let body = document.querySelector('body');

container.addEventListener('mouseover', () => {
  let newElement = createNewElement('p', 'Look! A new pargraph!');
  container.appendChild(newElement);
});

let createNewElement = (tag, text) => {
  let newElement = document.createElement(tag);
  newElement.textContent = text;
  return newElement;
};

$('.toast').toast('show');

let card = createNewElement('div', '');
card.classList.add('card');
console.log(card);

let cardText = createNewElement('p', 'Here is my description.');
cardText.classList.add('card-title');

card.appendChild(cardText);

let link = createNewElement('a', 'General Assembly');
link.classList.add('btn', 'btn-primary');
link.href = 'https://generalassemb.ly';

card.appendChild(link);

body.appendChild(card);