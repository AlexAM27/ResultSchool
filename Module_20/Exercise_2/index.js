import './index.css';

const cookieConfirmed = true;
const cookieButton = document.querySelector('.cookie-consent__button');
const cookieMessage = document.querySelector('.cookie-consent');

cookieButton.addEventListener('click', () => {
  localStorage.setItem('cookie', cookieConfirmed);
  cookieMessage.classList.add('hide');
})

if(localStorage.getItem('cookie')){
  cookieMessage.classList.add('hide');
}
