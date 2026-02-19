const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects-box');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    menuIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

document.addEventListener('click', (event) => {
    if (!menuIcon || !navbar) {
        return;
    }

    const clickedInsideMenu = navbar.contains(event.target);
    const clickedMenuIcon = menuIcon.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach((card) => {
            const tags = card.dataset.tags || '';
            const isMatch = selectedFilter === 'all' || tags.includes(selectedFilter);
            card.classList.toggle('is-hidden', !isMatch);
        });
    });
});

window.plausible = window.plausible || function plausibleFallback() {};

const trackableElements = document.querySelectorAll('[data-track]');
trackableElements.forEach((element) => {
    element.addEventListener('click', () => {
        const eventName = element.dataset.track;
        if (eventName) {
            window.plausible(eventName);
        }
    });
});