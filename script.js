document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // Mobile Menu Toggle
    // --------------------------------------------------------------------------
    const mobileToggle = document.querySelector('#mobile-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Toggle hamburger icon animation (optional switch to X)
            const icon = mobileToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --------------------------------------------------------------------------
    // Scroll Reveal Animations
    // --------------------------------------------------------------------------
    // --------------------------------------------------------------------------
    // Scroll Reveal Animations
    // --------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Add hidden class initially via JS (prevents white page if JS fails)
    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('reveal-hidden');
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Lower threshold for better triggering
        rootMargin: "0px 0px -50px 0px" // Slightly offset bottom to trigger earlier
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --------------------------------------------------------------------------
    // Header Scroll Effect
    // --------------------------------------------------------------------------
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "0.5rem 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        } else {
            header.style.padding = "1rem 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        }
    });

    // --------------------------------------------------------------------------
    // Smooth Scroll for older browsers (Optional safeguard)
    // --------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Account for fixed header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
