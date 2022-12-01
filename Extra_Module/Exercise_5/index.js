import './index.css';

const donateButton = document.querySelector('.donate-form__submit-button');
const donateInput = document.querySelector('.donate-form__donate-input');
const sum = document.querySelector('.total-amount');
const donationsList = document.querySelectorAll('.donates-container__donates');

function parseSum(str) {
  return Number(srt.replace('$', ''));
}

// function updateSum(amount) {

// }

// function updateDonationsList() {

// }
// надо форму
donateButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(donateInput.textContent);
});