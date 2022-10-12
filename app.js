// Variables

let hamburger = document.getElementById('hamburger');
let nav = document.querySelector('.navbar-nav');


// let text = document.querySelector('.txt');
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';
// let words = ["I am a Frontend developer, I'm working towards my goal of becoming a Software Engineer and Advocate.I'm very passionate about this field because it drives me to be inquisitive and resourceful"]


// Hamburger menu
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
})

//Autotyping effect

// (function type() {
//   if(count === words.length) {
//     count = 0;
//   }
//   currentText = words[count];
//   letter = currentText.slice(0, index++);

//   text.textContent = letter;
//   if(letter.length === currentText.length) {
//     count++;
//     index = 0;
//   }
//   setTimeout(type, 100)
// }());

const textDisplay = document.getElementById('text')
const phrases = ["Hello, my name is Oloja.", "I am a Front-End Developer.", "I am skilled in Html Css Javascript BootStrap React Git Github as well as Canva.", "I am seeking entry-level opportunity where i can put my abilities to work and grow my Front-End skill set.", "I would love to collaborate and conntribute to open source projects"]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.textContent = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop();

let formBtn = document.querySelector('.form-btn');
let input = document.getElementsByName('input');

formBtn.addEventListener('click', function () {
  alert("Thanks Message Delivered");
})