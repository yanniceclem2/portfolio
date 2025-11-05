<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Yannice CLEMENCIN — Portfolio</title>
    <meta name="description" content="Portfolio de Yannice CLEMENCIN — Étudiant BTS SIO SLAM. Projets, compétences et contact.">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <!-- Font Awesome via jsDelivr (fallback CDN) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css">
  </head>
  <body>
    <!-- Header / Navigation -->
    <nav class="nav-sticky">
      <div class="container">
        <div class="nav-container">
          <div class="logo">Yannice CLEMENCIN</div>
          <div class="nav-links" id="mainNavLinks">
            <a href="#accueil" class="nav-link">Accueil</a>
            <a href="#a-propos" class="nav-link">À propos</a>
            <a href="#competences" class="nav-link">Compétences</a>
            <a href="#projets" class="nav-link">Projets</a>
            <a href="#certifications" class="nav-link">Certifications</a>
            <a href="#veille" class="nav-link">Veille</a>
            <a href="#experience" class="nav-link">Expérience</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <button class="mobile-menu-btn" aria-expanded="false" aria-label="Ouvrir le menu">
            <svg class="burger-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect y="4" width="24" height="2" rx="1"></rect>
              <rect y="11" width="24" height="2" rx="1"></rect>
              <rect y="18" width="24" height="2" rx="1"></rect>
            </svg>
            <span class="mobile-menu-label">Menu</span>
          </button>
        </div>
      </div>
    </nav>

    <div id="navOverlay" class="nav-overlay hidden" aria-hidden="true"></div>

    <!-- Hero / Accueil -->
    <header id="accueil" class="section-hero">
      <div class="container">
        <div class="hero-content">
          <img src="https://picsum.photos/300?random=10" alt="Photo de profil" class="profile-image" loading="lazy">
          <h1 class="hero-title">Yannice CLEMENCIN</h1>
          <p class="hero-subtitle">Étudiant BTS SIO — Option SLAM • Développeur Web Junior</p>

          <div class="hero-buttons">
            <a href="https://github.com/yanniceclem" class="btn btn-primary" target="_blank" rel="noopener"><i class="fab fa-github mr-2"></i>GitHub</a>
            <a href="#contact" class="btn btn-outline"><i class="fas fa-envelope mr-2"></i>Me contacter</a>
            <a href="#projets" class="btn btn-secondary"><i class="fas fa-briefcase mr-2"></i>Voir mes projets</a>
          </div>

          <div class="about-card">
            <h2 id="a-propos" class="about-title">À propos</h2>
            <p class="about-text">Je suis étudiant en BTS SIO option SLAM au Lycée Simone Weil. Passionné par le développement web, je me spécialise en PHP/Laravel, API REST et UX/UI. Je recherche une alternance pour approfondir mes compétences full-stack.</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Compétences -->
    <section id="competences" class="section-skills section-padding">
      <div class="container">
        <h2 class="section-title">Compétences</h2>

        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-title">Langages</h3>
            <div class="badges">
              <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP">
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
              <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL">
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-title">Frameworks & Bibliothèques</h3>
            <div class="badges">
              <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
              <img src="https://img.shields.io/badge/Alpine.js-0EA5A4?style=for-the-badge&logo=alpine.js&logoColor=white" alt="Alpine.js">
              <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-title">Outils & Méthodes</h3>
            <ul class="skill-list">
              <li class="skill-item"><i class="fab fa-git-alt skill-icon git"></i><span>Git / GitHub</span></li>
              <li class="skill-item"><i class="fas fa-box skill-icon composer"></i><span>Composer</span></li>
              <li class="skill-item"><i class="fab fa-docker skill-icon docker"></i><span>Docker (débutant)</span></li>
              <li class="skill-item"><i class="fas fa-project-diagram skill-icon agile"></i><span>Méthodologies Agile, MVC, REST</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section id="projets" class="section-projects section-padding">
      <div class="container">
        <h2 class="section-title">Projets réalisés</h2>

        <!-- Projet 1 : API Citations -->
        <article class="project-card">
          <div class="project-header">
            <div>
              <h3 class="project-name">API Citations</h3>
              <p class="project-type">API REST • Septembre 2025</p>
            </div>
            <div class="project-year">2025</div>
          </div>

          <p class="project-description">Développement d'une API REST CRUD pour gérer des citations. L'API expose des endpoints pour lister, retrouver, créer, modifier et supprimer des citations. Tests et documentation réalisés avec Postman.</p>

          <div class="project-section">
            <h4 class="project-section-title">Technologies</h4>
            <div class="tech-tags"><span class="tech-tag">PHP</span><span class="tech-tag">SQLite</span><span class="tech-tag">JSON</span><span class="tech-tag">Postman</span></div>
          </div>

          <div class="project-section">
            <h4 class="project-section-title">Fonctionnalités</h4>
            <ul class="feature-list">
              <li>GET /citations — lister toutes les citations</li>
              <li>GET /citations/:id — récupérer une citation</li>
              <li>POST /citations — créer une citation</li>
              <li>PUT /citations/:id — mettre à jour une citation</li>
              <li>DELETE /citations/:id — supprimer une citation</li>
            </ul>
          </div>

          <div class="project-links">
            <a href="#" class="project-link" target="_blank" rel="noopener">Repository</a>
            <a href="#" class="project-link" target="_blank" rel="noopener">Documentation API</a>
          </div>
        </article>

        <!-- Projet 2 : Atelier Figma -->
        <article class="project-card">
          <div class="project-header">
            <div>
              <h3 class="project-name">Atelier Figma — TechSolutions</h3>
              <p class="project-type">Design UX/UI • Septembre 2025</p>
            </div>
            <div class="project-year">2025</div>
          </div>

          <p class="project-description">Conception d'un outil de gestion de tickets (wireframes, design system, prototype interactif). Travail centré utilisateur avec maquettes, prototypage et tests UX.</p>

          <div class="project-section">
            <h4 class="project-section-title">Livrables</h4>
            <ul class="feature-list">
              <li>Wireframes et maquettes</li>
              <li>Prototype interactif Figma</li>
              <li>Design system et composants réutilisables</li>
            </ul>
          </div>

          <div class="project-links">
            <a href="#" class="project-link" target="_blank" rel="noopener">Maquettes Figma</a>
            <a href="#" class="project-link" target="_blank" rel="noopener">Captures d'écran</a>
          </div>
        </article>
      </div>
    </section>

    <!-- Certifications -->
    <section id="certifications" class="section-certifications section-padding">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="certifications-grid">
          <div class="certification-card">
            <h3 class="certification-name">GitHub Foundations (GH-900)</h3>
            <p class="certification-org">GitHub — Octobre 2025</p>
            <div class="certification-skills">
              <ul class="skills-list"><li>Git & GitHub</li><li>Repositories</li><li>Pull requests</li></ul>
            </div>
          </div>

          <div class="certification-card">
            <h3 class="certification-name">BTS SIO SLAM (en cours)</h3>
            <p class="certification-org">Lycée Simone Weil — 2024-2026</p>
            <div class="certification-skills"><ul class="skills-list"><li>Développement web</li><li>Bases de données</li><li>Méthodes Agile</li></ul></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Veille Technologique -->
    <section id="veille" class="section-tech-watch section-padding">
      <div class="container">
        <h2 class="section-title">Veille technologique</h2>
        <p>Je maintiens une veille active sur l'IA, les frameworks web, DevOps, et la sécurité. Je publie des synthèses et analyses régulièrement.</p>
        <ul class="article-list">
          <li>IA Weekly — synthèse Septembre 2025 (lien)</li>
          <li>Souveraineté numérique — notes et analyse (lien)</li>
          <li>Prospective IA 2026 — étude personnelle (lien)</li>
        </ul>
      </div>
    </section>

    <!-- Expérience -->
    <section id="experience" class="section-experience section-padding">
      <div class="container">
        <h2 class="section-title">Expérience</h2>
        <div class="experiences-list">
          <div class="experience-card">
            <div class="experience-header">
              <div>
                <span class="experience-type apprenticeship">Stage</span>
                <h3 class="experience-position">Développeur / Chef de projet</h3>
                <p class="experience-company">DSIN — Métropole de Saint-Étienne</p>
              </div>
              <div class="experience-period">26 mai 2025 — 28 juin 2025</div>
            </div>

            <div class="experience-section">
              <h4> Missions </h4>
              <ul class="experience-list">
                <li>Maintenance de sites WordPress</li>
                <li>Gestion d'un projet interne (équipements sportifs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section-contact section-padding">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="contact-subtitle">Restons en contact</h3>
            <p><strong>Email :</strong> <a href="mailto:clemencinyannice@gmail.com">clemencinyannice@gmail.com</a></p>
            <p><strong>GitHub :</strong> <a href="https://github.com/yanniceclem" target="_blank" rel="noopener">github.com/yanniceclem</a></p>
            <p><strong>LinkedIn :</strong> <a href="#">linkedin.com/in/username</a></p>
          </div>

          <div class="contact-form-container">
            <h3 class="contact-subtitle">Envoyez un message</h3>
            <form id="contactForm" class="contact-form">
              <div class="form-group"><label for="name" class="form-label">Nom complet</label><input type="text" id="name" name="name" class="form-input" required></div>
              <div class="form-group"><label for="email" class="form-label">Email</label><input type="email" id="email" name="email" class="form-input" required></div>
              <div class="form-group"><label for="message" class="form-label">Message</label><textarea id="message" name="message" rows="5" class="form-textarea" required></textarea></div>
              <button type="submit" class="btn btn-primary btn-full">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info"><p class="footer-name">Yannice CLEMENCIN</p><p class="footer-title">Étudiant BTS SIO SLAM</p></div>
          <div class="footer-social"><a href="#" class="social-link"><i class="fab fa-github"></i></a><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></div>
        </div>
        <div class="footer-bottom"><p>© 2025 Yannice CLEMENCIN. Tous droits réservés.</p></div>
      </div>
    </footer>

    <button id="backToTop" class="back-to-top" aria-label="Retour en haut"><i class="fas fa-chevron-up"></i></button>

    <script src="script.js" defer></script>
  </body>
</html>