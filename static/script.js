
function executeScript() {
    const script = document.getElementById('inputScript').value;
    const length = document.getElementById('summary_length').value;

    // Send the script to the server for execution
    fetch('/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ script , length }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerText = data.output;
    })
    .catch(error => console.error('Fetch error:', error));
}

window.addEventListener('scroll', function() {
    
    Header.style.height = "2000px";
    
    if (window.scrollY > 45) {
        Header.style.height = "75px";
    } else {
        Header.style.height = 120 - this.window.scrollY + "px";
    }

  });

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function redirectToInstagram() {

    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.instagram.com/brorbruland/", '_blank');
}

function redirectToThreads() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.threads.net/@brorbruland", '_blank');
}

function redirectToX() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.instagram.com/brorbruland/", '_blank');
}

function redirectToLinkedIn() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://dk.linkedin.com/in/bror-bruland-4528ab221", '_blank');
}

function SendEmail() {
    //email.js
    // default mail set in email.js

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const btn = document.getElementById('send');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    const serviceID = 'default_service';
    const templateID = 'template_ghk032p';

    document.getElementById('contactform')
    btn.textContent = "Sending...";

    emailjs.sendForm(serviceID, templateID, contactform)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
    });
}

// JavaScript to navigate through boxes
const boxes = document.querySelectorAll('.offer');
let currentIndex = 1; // Index of the focused box

function updateFocus() {
    boxes.forEach((box, index) => {
        box.classList.toggle('offerfocus', index === currentIndex);
    });

    boxes[currentIndex].offsetWidth; 
}

document.getElementById('leftarrow').addEventListener('click', function () {
    currentIndex = Math.max(0, currentIndex - 1);
    updateFocus();
});

document.getElementById('rightarrow').addEventListener('click', function () {
    currentIndex = Math.min(boxes.length - 1, currentIndex + 1);
    updateFocus();
});


function setMessage() {
    
    var previous = document.getElementById('previous');
    if (window.innerWidth > 1000) {
        previous.innerText = 'Hello';
    } else {
        previous.innerText = 'Hey';
    }
  }
  
// Call setMessage function when the page loads and on resize
window.onload = setMessage;
window.onresize = setMessage;