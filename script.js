document.addEventListener('DOMContentLoaded', function () {
    // --- Smooth scroll for internal anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Mobile menu toggle (compatible with new index.html structure)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.getElementById('mainNavLinks');
    const overlay = document.getElementById('navOverlay');

    function openMenu() {
        if (navLinks) navLinks.classList.add('active');
        if (overlay) overlay.classList.add('show');
        if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (navLinks) navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('show');
        if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) closeMenu(); else openMenu();
        });

        // Close when clicking a nav link (mobile)
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
    }

    if (overlay) overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // Back to top button
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) backBtn.classList.add('show'); else backBtn.classList.remove('show');
        });

        backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Contact form handling: support subject field (HTML.md includes it)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // basic validation
            const name = form.querySelector('[name="name"]');
            const email = form.querySelector('[name="email"]');
            const subject = form.querySelector('[name="subject"]');
            const message = form.querySelector('[name="message"]');

            let valid = true;
            // clear previous error messages
            form.querySelectorAll('.error-message').forEach(n => n.remove());
            form.querySelectorAll('.input-error').forEach(n => n.classList.remove('input-error'));

            if (!name || !name.value.trim()) { showError(name, 'Veuillez entrer votre nom.'); valid = false; }
            if (!email || !/^\S+@\S+\.\S+$/.test(email.value)) { showError(email, 'Veuillez entrer une adresse email valide.'); valid = false; }
            if (!subject || !subject.value.trim()) { showError(subject, 'Veuillez indiquer un sujet.'); valid = false; }
            if (!message || !message.value.trim()) { showError(message, 'Veuillez entrer un message.'); valid = false; }

            if (!valid) return;

            // simulate send
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const txt = submitBtn.textContent;
                submitBtn.disabled = true; submitBtn.textContent = 'Envoi...';
                setTimeout(() => { alert('Merci — message envoyé.'); form.reset(); submitBtn.disabled = false; submitBtn.textContent = txt; }, 800);
            }
        });
    }

    function showError(field, message) {
        if (!field) return;
        field.classList.add('input-error');
        const err = document.createElement('div');
        err.className = 'error-message';
        err.textContent = message;
        field.parentNode.insertBefore(err, field.nextSibling);
    }

    // Optional: animate skill bars if present (HTML.md mentions skill-bar)
    const animateSkills = () => {
        document.querySelectorAll('.skill-bar[data-width]').forEach(el => {
            const w = el.getAttribute('data-width');
            el.style.width = w + '%';
        });
    };

    if (window.IntersectionObserver) {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) animateSkills(); });
        });
        const skillsSection = document.getElementById('competences');
        if (skillsSection) obs.observe(skillsSection);
    } else {
        // fallback
        animateSkills();
    }

});
