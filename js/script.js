const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

// Mobile menu toggle
menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close mobile menu on nav link click
document.querySelectorAll('.navbar a').forEach(a => {
    a.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Sticky header + back-to-top visibility
const toTop = document.querySelector('.to-top');
const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (toTop) toTop.style.display = window.scrollY > 600 ? 'flex' : 'none';
};
window.addEventListener('scroll', onScroll);
onScroll();

// Scrollspy for active nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');
const spy = () => {
    let current = '';
    sections.forEach(sec => {
        const top = window.scrollY + 120; // offset for header
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
};
window.addEventListener('scroll', spy);
spy();

// Reveal animations
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
} else {
    // Fallback
    revealEls.forEach(el => el.classList.add('show'));
}

// Smooth scroll for internal links (fallback for browsers not defaulting)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const y = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    });
});