const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pos = 0; // posição do dino.
let isJump = false; // para controlar o pulo, e não pular no ar.

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJump)
      jump();
  }
}


function jump() {
  isJump = true;

  let upInterval = setInterval(() => {
    if (pos >= 150) {
      clearInterval(upInterval);
      //descer dino
      let downInterval = setInterval(() => {
        pos -= 20;
        dino.style.bottom = pos + 'px';
        if (pos <= 0) {
          clearInterval(downInterval);
          isJump = false;
        }
      }, 20);
    } else {
      //subir dino
      pos += 20;
      dino.style.bottom = pos + 'px';
    }
  }, 20);
}

function createCactus() {
  let cactusPosition = 2000;
  let randomTime = Math.random() * 6000;

  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  const leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && pos < 60) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
    } else {
      cactusPosition -= 15;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

document.addEventListener('keyup', handleKeyUp);
createCactus();

