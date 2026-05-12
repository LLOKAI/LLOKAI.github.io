const menuButton = document.querySelector("#menu-icon");
const menuIcon = menuButton?.querySelector("i");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const revealItems = document.querySelectorAll(".reveal");
const progress = document.querySelector(".scroll-progress");
const cursorGlow = document.querySelector(".cursor-glow");
const countItems = document.querySelectorAll("[data-count]");
const tiltItems = document.querySelectorAll("[data-tilt]");

const closeMenu = () => {
    if (!menuButton || !menuIcon || !navbar) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuIcon.classList.add("bx-menu");
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
    document.body.classList.remove("nav-open");
};

const openMenu = () => {
    if (!menuButton || !menuIcon || !navbar) return;
    menuButton.setAttribute("aria-expanded", "true");
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
    navbar.classList.add("active");
    document.body.classList.add("nav-open");
};

menuButton?.addEventListener("click", () => {
    const isOpen = navbar?.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (!navbar || !menuButton) return;
    const clickedInsideMenu = navbar.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
    }
});

const updateProgress = () => {
    if (!progress) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressWidth = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progress.style.width = `${progressWidth}%`;
};

const updateActiveLink = () => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const currentSection = [...sections].reverse().find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.34;
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection?.id}`);
    });
};

const animateCount = (item) => {
    const target = Number(item.dataset.count);
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
        const progressValue = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progressValue, 3);
        item.textContent = Math.round(target * eased);

        if (progressValue < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");

        if (entry.target.querySelectorAll) {
            entry.target.querySelectorAll("[data-count]").forEach((item) => {
                if (item.dataset.counted) return;
                item.dataset.counted = "true";
                animateCount(item);
            });
        }

        observer.unobserve(entry.target);
    });
}, { threshold: 0.18 });

revealItems.forEach((item) => observer.observe(item));

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.counted) return;
        entry.target.dataset.counted = "true";
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
    });
}, { threshold: 0.7 });

countItems.forEach((item) => statObserver.observe(item));

tiltItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        item.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener("pointerleave", () => {
        item.style.transform = "";
    });
});

window.addEventListener("pointermove", (event) => {
    if (!cursorGlow) return;
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});

window.addEventListener("scroll", () => {
    updateProgress();
    updateActiveLink();
}, { passive: true });

window.addEventListener("resize", updateProgress);
updateProgress();
updateActiveLink();
