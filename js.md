document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        const overlay = document.getElementById('navOverlay');

        function openMenu() {
            navLinks.classList.add('active');
            if (overlay) overlay.classList.add('show');
            mobileBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            navLinks.classList.remove('active');
            if (overlay) overlay.classList.remove('show');
            mobileBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        mobileBtn.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) closeMenu();
            else openMenu();
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close by clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => closeMenu());
        }

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // Back to top button
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) backBtn.classList.add('show');
            else backBtn.classList.remove('show');
        });

        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Simple contact form validation/handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Remove previous error states
            form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
            form.querySelectorAll('.error-message').forEach(el => el.remove());

            const name = form.querySelector('[name="name"]');
            const email = form.querySelector('[name="email"]');
            const subject = form.querySelector('[name="subject"]');
            const message = form.querySelector('[name="message"]');

            let valid = true;

            // Basic checks
            if (!name.value.trim()) {
                showError(name, 'Veuillez entrer votre nom.');
                valid = false;
            }

            if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                showError(email, 'Veuillez entrer une adresse email valide.');
                valid = false;
            }

            if (!subject.value.trim()) {
                showError(subject, "Veuillez entrer l'objet du message.");
                valid = false;
            }

            if (!message.value.trim()) {
                showError(message, 'Veuillez entrer un message.');
                valid = false;
            }

            if (!valid) {
                // focus first error
                const firstError = form.querySelector('.input-error');
                if (firstError) firstError.focus();
                return;
            }

            // Here you would send the form (fetch to an API). For now, just provide feedback.
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Envoi...';

                // Simulate successful send
                setTimeout(() => {
                    alert('Message envoyé ! Merci, je vous recontacterai bientôt.');
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 800);
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
});