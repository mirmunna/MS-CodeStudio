// Typing Animation for "WEBSITE DEVELOPERS"

const typingHeading = document.getElementById('typing-heading');

const text = "WEBSITE DEVELOPERS";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typingHeading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 150); // Adjust speed of typing

    }

}

window.onload = typeWriter;

// Quotes rotation

const quotes = [

    "Munna & Shahid – Mastering the art of websites.",

    "Building the future, one line of code at a time.",

    "Every website we create is a masterpiece.",

    "Innovative web design, driven by passion.",

    "Transforming ideas into digital reality."

];

let quoteIndex = 0;

const quoteElement = document.getElementById('quote');

function changeQuote() {

    quoteElement.innerHTML = quotes[quoteIndex];

    quoteIndex = (quoteIndex + 1) % quotes.length;

}

setInterval(changeQuote, 3000); // Change quote every 3 seconds

// Form submission handling and modal countdown

const form = document.getElementById('website-request-form');

const modal = document.getElementById('confirmation-modal');

const cancelButton = document.getElementById('cancel-button');

const countdownElement = document.getElementById('countdown');

let countdown = 5;

let countdownInterval;

form.addEventListener('submit', function (event) {

    event.preventDefault(); // Prevent default form submission

    // Show confirmation modal

    modal.classList.add('active');

    startCountdown();

});

cancelButton.addEventListener('click', function () {

    modal.classList.remove('active'); // Close modal if cancel button is clicked

    resetCountdown();

});

function startCountdown() {

    countdownInterval = setInterval(function () {

        if (countdown > 0) {

            countdown--;

            countdownElement.innerHTML = countdown;

        } else {

            clearInterval(countdownInterval);

            submitForm();

        }

    }, 1000);

}

function resetCountdown() {

    clearInterval(countdownInterval);

    countdown = 5;

    countdownElement.innerHTML = countdown;

}

// Submit form when countdown reaches 0

function submitForm() {

    const email = document.getElementById('email').value;

    const mobile = document.getElementById('mobile').value;

    const idea = document.getElementById('idea').value;

    // Here you would add code to send the form data to your backend or database

    // Example of sending the form data to the provided FormSpark links

    const formData = {

        email: email,

        mobile: mobile,

        idea: idea

    };

    fetch('https://submit-form.com/5B26KwpLC', {

        method: 'POST',

        body: JSON.stringify(formData),

        headers: {

            'Content-Type': 'application/json'

        }

    }).then(response => {

        if (response.ok) {

            alert('Request successfully submitted!');

        } else {

            alert('Error submitting request. Please try again.');

        }

    }).catch(error => {

        alert('Error submitting request. Please try again.');

    });

    fetch('https://submit-form.com/acrzmZbcg', {

        method: 'POST',

        body: JSON.stringify(formData),

        headers: {

            'Content-Type': 'application/json'

        }

    });

    // Close modal after submission

    modal.classList.remove('active');

    resetCountdown(); // Reset countdown after submission

}