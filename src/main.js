const content = {
  imagesDown: [
    "images/img1.png","images/img2.png","images/img3.png","images/img4.png",
    "images/img5.png","images/img6.png","images/img7.png","images/img8.png"
  ],
  imagesUp: [
    "images/img2.png","images/img1.png","images/img8.png","images/img7.png",
    "images/img6.png","images/img5.png","images/img4.png","images/img3.png"
  ],
  h2: `
    High-Performance Landing<br>
    Pages for Agencies, Startups<br>
    and Entrepreneurs
  `,
  button: `
    <button class="cssbuttons-io-button" data-href="shop.html">
      Start for free
      <div class="icon">
        <svg height="24" width="24" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12
               l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor">
          </path>
        </svg>
      </div>
    </button>
  `,
  cards: [
    { line1: '200+', line2: 'Widgets' },
    { line1: '3500+', line2: 'Customers' }
  ]
};


const bgContainer = document.querySelector('.background-image');
const bgImg = document.createElement('img');
bgImg.src = 'images/background-image.jpg';
bgImg.classList.add('background-image');
bgContainer.appendChild(bgImg);

const textBox = document.querySelector('.text-box');
const h1 = document.createElement('h1');
const logoImg = document.createElement('img');
logoImg.src = 'images/logotip.png';
logoImg.classList.add('img-title');

h1.append(logoImg, ' PageForge');

const h2 = document.createElement('h2');
h2.innerHTML = content.h2;
textBox.append(h1, h2);

const textCards = document.querySelector('.text-cards');
const card1 = document.createElement('div');
card1.classList.add('text-card');
const p1 = document.createElement('p');
p1.classList.add('line1');
p1.textContent = content.cards[0].line1;
const p2 = document.createElement('p');
p2.classList.add('line2');
p2.textContent = content.cards[0].line2;
card1.append(p1, p2);
textCards.appendChild(card1);


const card2 = document.createElement('div');
card2.classList.add('text-card');
const p3 = document.createElement('p');
p3.classList.add('line1');
p3.textContent = content.cards[1].line1;
const p4 = document.createElement('p');
p4.classList.add('line2');
p4.textContent = content.cards[1].line2;

card2.append(p3, p4);
textCards.appendChild(card2);

document.getElementById('button-container').innerHTML = content.button;

document.getElementById('down').innerHTML =
content.imagesDown.map(src => `<img src="${src}">`).join('');

document.getElementById('up').innerHTML =
content.imagesUp.map(src => `<img src="${src}">`).join('');