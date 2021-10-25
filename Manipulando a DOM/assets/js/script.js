function changeMode() {
  changeClass();
  changeText();
}

function changeClass() {


  button.classList.toggle(classDarkMode);
  h1.classList.toggle(classDarkMode);
  footer.classList.toggle(classDarkMode);
  body.classList.toggle(classDarkMode);

}

function changeText() {
  const lightMode = 'Light';
  const darkMode = 'Dark';

  if (body.classList.contains(classDarkMode)) {
    button.innerText = lightMode;
    h1.innerText = darkMode + ' Mode ON';
    return;
  }

  button.innerText = darkMode;
  h1.innerText = lightMode + ' Mode ON';
}
const classDarkMode = 'dark-mode';
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const button = document.getElementById('mode-selector');

button.addEventListener('click', changeMode);