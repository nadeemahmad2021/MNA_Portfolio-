// 2nd code: 

new Typed(".typing", {
    strings: ["Happy Birthday my Muqadas!", "Happy Birthday, my Moon!", "Happy Birthday, my World!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

const messages = [
    "Wishing you all the happiness in the world!",
    "May your day be filled with sweet surprises!",
    "You are the light of my life, happy birthday!",
    "Here's to many more years of love and laughter!"
];

document.getElementById('randomMessage').innerText = messages[Math.floor(Math.random() * messages.length)];

function downloadCard() {
    const link = document.createElement('a');
    link.href = 'your-birthday-card.pdf'; // Replace with your card file
    link.download = 'BirthdayCard.pdf';
    link.click();
}

// 
