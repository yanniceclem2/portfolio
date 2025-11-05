:root {
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --secondary: #475569;
    --accent: #f59e0b;
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
}

/* Reset et base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--gray-800);
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Navigation */
.nav-sticky {
    position: fixed;
    top: 0;
    width: 100%;
    /* temporary debug color to ensure visibility */
    background-color: var(--primary);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    z-index: 1000; /* plus haut pour être sûr */
    border-bottom: 1px solid rgba(0,0,0,0.06);
}

/* espace pour le contenu sous la nav fixe */
body {
    padding-top: 72px; /* ajuste si la nav change de hauteur */
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-900);
}

.nav-container { /* rendre plus visible */
    gap: 1rem;
}

.nav-links {
    display: none;
    transition: transform 0.25s ease, opacity 0.2s ease;
}

.nav-link {
    color: var(--gray-900);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
}

.mobile-menu-btn {
    color: var(--white);
    background: none;
    border: none;
    cursor: pointer;
    /* debug: ensure visible on all viewports */
    display: block !important;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

/* s'assurer que le bouton burger est visible sur mobile */
.mobile-menu-btn i {
    font-size: 1.25rem;
}

/* debug: visible outline to locate the burger quickly */
.mobile-menu-btn {
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    background: rgba(255,255,255,0.06);
}

/* Ensure the inline burger SVG and fallback label are always readable
   regardless of whether Font Awesome loads or nav background changes */
.mobile-menu-btn .burger-icon rect {
    /* default dark fill for light backgrounds */
    fill: var(--gray-900);
}

.mobile-menu-label {
    display: inline-block;
    margin-left: 0.5rem;
    font-weight: 600;
    color: var(--gray-900);
    vertical-align: middle;
}

/* If the nav has the debug primary background (dark blue), switch label/icon to white */
.nav-sticky .mobile-menu-label {
    color: var(--white);
}

.nav-sticky .mobile-menu-btn .burger-icon rect {
    fill: var(--white);
}

/* Ensure links inside the mobile dropdown/menu are dark (on white background) */
.nav-links a {
    color: var(--gray-900);
}

/* overlay for mobile menu */
.nav-overlay {
    position: fixed;
    inset: 0; /* top/right/bottom/left:0 */
    background: rgba(0,0,0,0.45);
    z-index: 40;
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
}

.nav-overlay.show {
    opacity: 1;
    pointer-events: auto;
}

/* When the nav is the sticky colored bar, use white text for contrast */
.nav-sticky .nav-link {
    color: var(--black);
}

.nav-sticky .logo {
    color: var(--white);
}

/* Hero Section */
.section-hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    padding: 5rem 0;
}

.hero-content {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
}

.profile-image {
    width: 8rem;
    height: 8rem;
    border-radius: 9999px;
    margin: 0 auto 2rem;
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hero-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--gray-600);
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--gray-900);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--gray-800);
}

.btn-secondary {
    background-color: var(--primary);
    color: var(--white);
}

.btn-secondary:hover {
    background-color: var(--primary-hover);
}

.btn-outline {
    border: 1px solid var(--primary);
    color: var(--primary);
    background-color: transparent;
}

.btn-outline:hover {
    background-color: #eff6ff;
}

.btn-full {
    width: 100%;
    justify-content: center;
}

.about-card {
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 2rem;
    max-width: 48rem;
    margin: 0 auto;
}

.about-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 1.5rem;
}

.about-text {
    font-size: 1.125rem;
    color: var(--gray-600);
    line-height: 1.75;
}

/* Sections communes */
.section-padding {
    padding: 5rem 0;
}

.section-title {
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    color: var(--gray-900);
    margin-bottom: 3rem;
}

/* Skills Section */
.section-skills {
    background-color: var(--white);
}

.skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.skill-category {
    background-color: var(--gray-50);
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.skill-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 1rem;
}

.skill-list {
    list-style: none;
    padding: 0;
}

.skill-list li + li {
    margin-top: 0.5rem;
}

.skill-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.skill-icon {
    margin-right: 0.75rem;
    font-size: 1.125rem;
}

.skill-icon.js { color: #f7df1e; }
.skill-icon.python { color: #3776ab; }
.skill-icon.html { color: #e34f26; }
.skill-icon.css { color: #1572b6; }
.skill-icon.java { color: #007396; }
.skill-icon.react { color: #61dafb; }
.skill-icon.vue { color: #4fc08d; }
.skill-icon.node { color: #339933; }
.skill-icon.express { color: #000000; }
.skill-icon.git { color: #f05032; }
.skill-icon.docker { color: #2496ed; }
.skill-icon.figma { color: #f24e1e; }
.skill-icon.mysql { color: #4479a1; }
.skill-icon.agile { color: #2563eb; }
.skill-icon.gitflow { color: #10b981; }
.skill-icon.mobile { color: #8b5cf6; }
.skill-icon.pair { color: #f59e0b; }

/* Projects Section */
.section-projects {
    background-color: var(--gray-50);
}

.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.project-card {
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
}

.project-year {
    background-color: #d1fae5;
    color: #065f46;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
}

.project-type {
    margin-bottom: 1rem;
}

.project-tag {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.project-tag.fullstack {
    background-color: #dbeafe;
    color: #1e40af;
}

.project-tag.frontend {
    background-color: #f3e8ff;
    color: #7e22ce;
}

.project-description {
    color: var(--gray-600);
    margin-bottom: 1rem;
}

.project-section {
    margin-bottom: 1rem;
}

.project-section-title {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
}

.project-section-text {
    color: var(--gray-600);
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background-color: var(--gray-200);
    color: var(--gray-700);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
}

.feature-list {
    list-style-type: disc;
    list-style-position: inside;
    color: var(--gray-600);
}

.feature-list li + li {
    margin-top: 0.25rem;
}

.project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.project-link {
    color: var(--primary);
    text-decoration: none;
}

.project-link:hover {
    text-decoration: underline;
}

/* Certifications Section */
.section-certifications {
    background-color: var(--white);
}

.certifications-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.certification-card {
    background-color: var(--gray-50);
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.certification-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.certification-date,
.certification-org {
    color: var(--gray-600);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
}

.certification-skills {
    margin-top: 1rem;
}

.skills-title {
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
}

.skills-list {
    list-style-type: disc;
    list-style-position: inside;
    color: var(--gray-600);
    font-size: 0.875rem;
    padding: 0;
}

.skills-list li + li {
    margin-top: 0.25rem;
}

/* Tech Watch Section */
.section-tech-watch {
    background-color: var(--gray-50);
}

.articles-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.article-card {
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
}

.article-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.article-image {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
}

.article-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: 0.25rem;
}

.article-date {
    color: var(--gray-600);
    font-size: 0.875rem;
}

.article-description {
    color: var(--gray-600);
    margin-bottom: 1rem;
}

.article-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.article-tag {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.article-tag.blockchain { background-color: #dbeafe; color: #1e40af; }
.article-tag.web3 { background-color: #dcfce7; color: #166534; }
.article-tag.dapps { background-color: #f3e8ff; color: #7e22ce; }
.article-tag.ai { background-color: #fecaca; color: #991b1b; }
.article-tag.productivity { background-color: #fef3c7; color: #92400e; }
.article-tag.tools { background-color: #e0e7ff; color: #3730a3; }

.article-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.article-link:hover {
    text-decoration: underline;
}

/* Experience Section */
.section-experience {
    background-color: var(--white);
}

.experiences-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.experience-card {
    background-color: var(--gray-50);
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
}

.experience-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.experience-type {
    padding: 0;
}

/* Mobile / Responsive */
@media (min-width: 768px) {
    .nav-links {
        display: flex;
        gap: 1rem;
        align-items: center;
        position: static;
        padding: 0;
        background: transparent;
        box-shadow: none;
        min-width: auto;
        transform: none;
        opacity: 1;
    }

    .mobile-menu-btn {
        display: none;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid,
    .certifications-grid,
    .articles-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1100px) {
    .skills-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile menu (small screens) */
.nav-links {
    position: absolute;
    top: 100%;
    right: 1rem;
    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    padding: 1rem;
    display: none;
    flex-direction: column;
    min-width: 200px;
}

.nav-links a {
    padding: 0.5rem 0;
    display: block;
}

.nav-links.active {
    display: flex;
}

/* Back to top button */
#backToTop {
    position: fixed;
    right: 1.25rem;
    bottom: 1.25rem;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 9999px;
    background: var(--primary);
    color: var(--white);
    border: none;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 15px rgba(0,0,0,0.12);
    cursor: pointer;
    z-index: 60;
}

#backToTop.show {
    display: flex;
}

/* Form styles */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-label {
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 0.25rem;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--gray-200);
    background: var(--white);
    color: var(--gray-800);
    font-size: 0.95rem;
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
}

.input-error {
    border-color: #ef4444 !important;
}

.error-message {
    color: #ef4444;
    font-size: 0.875rem;
}

/* Contact methods */
.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-method {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.contact-icon {
    width: 3rem;
    height: 3rem;
    background: var(--gray-100);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
}

/* Icon colors for added skill classes */
.skill-icon.sql { color: #4479a1; }
.skill-icon.laravel { color: #ff2d20; }
.skill-icon.alpine { color: #0ea5a4; }
.skill-icon.blade { color: #0ea5a4; }
.skill-icon.tailwind { color: #06b6d4; }
.skill-icon.composer { color: #6b7280; }
.skill-icon.postman { color: #ff6c37; }

/* Small utilities */
.hidden { display: none !important; }

/* Footer spacing fix */
.footer { padding: 3rem 0; }
