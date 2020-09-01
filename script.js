const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const secondInMil = 1000;
const minuteInMil = secondInMil * 60;
const hourInMil = minuteInMil * 60;
const dayInMil = hourInMil * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today)

// Populate Countdown / Complete UI
function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    
    const daysLeft = Math.floor(distance / dayInMil);
    const hoursLeft = Math.floor((distance % dayInMil) / hourInMil);
    const minutesLeft = Math.floor((distance % hourInMil) / minuteInMil);
    const secondsLeft = Math.floor((distance % minuteInMil) / secondInMil);

    // Populate Countdown 
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${daysLeft}`;
    timeElements[1].textContent = `${hoursLeft}`;
    timeElements[2].textContent = `${minutesLeft}`;
    timeElements[3].textContent = `${secondsLeft}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
}

// Take Values from Form Imput
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    // Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
