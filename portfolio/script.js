const typingElement = document.getElementById("typing-text");
const phrases = [
    "A Front-End Web Developer",
    "An HTML & CSS Enthusiast",
    "A JavaScript Learner",
    "A Creative Problem Solver"
];
var phraseIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typingSpeed = 80;

function typeText() {
    var currentPhrase = phrases[phraseIndex];

    if (isDeleting) {

        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {

        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause before deleting
        typingSpeed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to next phrase
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
    }

    setTimeout(typeText, typingSpeed);
}

typeText();

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('portfolioTheme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference to LocalStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('portfolioTheme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('portfolioTheme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});


const projectsArray = [
    {
        title: "E-Commerce Mockup",
        desc: "A responsive front-end design for an online electronics store.",
        img: "https://via.placeholder.com/400x200?text=E-Commerce+Project",
        link: "#"
    },
    {
        title: "Weather Dashboard",
        desc: "A web app that fetches real-time weather data using an external API.",
        img: "https://via.placeholder.com/400x200?text=Weather+App",
        link: "#"
    },
    {
        title: "Task Management Tool",
        desc: "A simple to-do list application utilizing local storage to save tasks.",
        img: "https://via.placeholder.com/400x200?text=Task+Manager",
        link: "#"
    }
];

const projectsContainer = document.getElementById('projects-container');

projectsArray.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" target="_blank">View Project &rarr;</a>
    `;

    projectsContainer.appendChild(card);
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    const successMsg = document.getElementById('success-msg');

    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (subject === '') {
        subjectError.textContent = 'Subject is required.';
        isValid = false;
    }

    if (message === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        successMsg.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.reset(); // Clear the form
    }
});