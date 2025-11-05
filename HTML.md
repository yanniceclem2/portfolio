<!DOCTYPE html>
<html lang="fr">
<head>
    <base target="_self">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Professionnel</title>
    <meta name="description" content="Portfolio professionnel développeur web - Compétences, projets et expériences">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: "#2563eb",
                        secondary: "#475569",
                        accent: "#f59e0b"
                    },
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        .section-padding {
            padding-top: 5rem;
            padding-bottom: 5rem;
        }
        .skill-bar {
            transition: width 2s ease-in-out;
        }
    </style>
</head>
<body class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Navigation Sticky -->
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="text-xl font-bold text-primary">MonPortfolio</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#accueil" class="text-gray-600 hover:text-primary transition-colors">Accueil</a>
                    <a href="#competences" class="text-gray-600 hover:text-primary transition-colors">Compétences</a>
                    <a href="#projets" class="text-gray-600 hover:text-primary transition-colors">Projets</a>
                    <a href="#certifications" class="text-gray-600 hover:text-primary transition-colors">Certifications</a>
                    <a href="#veille" class="text-gray-600 hover:text-primary transition-colors">Veille</a>
                    <a href="#experience" class="text-gray-600 hover:text-primary transition-colors">Expérience</a>
                    <a href="#contact" class="text-gray-600 hover:text-primary transition-colors">Contact</a>
                </div>
                <button class="md:hidden text-gray-600">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Page d'Accueil -->
    <section id="accueil" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div class="container mx-auto px-4 text-center">
            <div class="max-w-4xl mx-auto">
                <img 
                    src="https://picsum.photos/200?random=1" 
                    alt="Photo de profil" 
                    class="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
                    loading="lazy"
                />
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Jean Dupont</h1>
                <h2 class="text-xl md:text-2xl text-gray-600 mb-8">Développeur Full Stack</h2>
                <div class="flex justify-center space-x-4 mb-12">
                    <a href="https://github.com" class="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <i class="fab fa-github mr-2"></i>GitHub
                    </a>
                    <a href="mailto:contact@example.com" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        <i class="fas fa-envelope mr-2"></i>Email
                    </a>
                </div>
                
                <!-- À propos -->
                <div class="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">À propos de moi</h3>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Passionné par le développement web et les nouvelles technologies, je suis constamment à la recherche de nouveaux défis et d'opportunités d'apprentissage. 
                        Mon objectif est de créer des applications web performantes, accessibles et centrées sur l'expérience utilisateur.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Compétences -->
    <section id="competences" class="bg-white section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Compétences</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Langages -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-4">Langages</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center">
                            <i class="fab fa-js text-yellow-400 mr-3"></i>
                            <span>JavaScript</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-python text-blue-500 mr-3"></i>
                            <span>Python</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-html5 text-orange-500 mr-3"></i>
                            <span>HTML5</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-css3-alt text-blue-400 mr-3"></i>
                            <span>CSS3</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-java text-red-500 mr-3"></i>
                            <span>Java</span>
                        </li>
                    </ul>
                </div>

                <!-- Frameworks -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-4">Frameworks</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center">
                            <i class="fab fa-react text-blue-400 mr-3"></i>
                            <span>React</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-vuejs text-green-500 mr-3"></i>
                            <span>Vue.js</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-node-js text-green-600 mr-3"></i>
                            <span>Node.js</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-bolt text-yellow-500 mr-3"></i>
                            <span>Express.js</span>
                        </li>
                    </ul>
                </div>

                <!-- Outils -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-4">Outils</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center">
                            <i class="fab fa-git-alt text-orange-500 mr-3"></i>
                            <span>Git</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-docker text-blue-500 mr-3"></i>
                            <span>Docker</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fab fa-figma text-purple-500 mr-3"></i>
                            <span>Figma</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-database text-green-500 mr-3"></i>
                            <span>MySQL</span>
                        </li>
                    </ul>
                </div>

                <!-- Méthodologies -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-4">Méthodologies</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center">
                            <i class="fas fa-sync-alt text-blue-500 mr-3"></i>
                            <span>Agile/Scrum</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-code-branch text-green-500 mr-3"></i>
                            <span>Git Flow</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-mobile-alt text-purple-500 mr-3"></i>
                            <span>Mobile First</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-users text-orange-500 mr-3"></i>
                            <span>Pair Programming</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Projets -->
    <section id="projets" class="bg-gray-50 section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Projets Réalisés</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Projet 1 -->
                <div class="bg-white rounded-2xl shadow-xl p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold text-gray-900">Application E-commerce</h3>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2024</span>
                    </div>
                    <div class="mb-4">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full Stack</span>
                    </div>
                    <p class="text-gray-600 mb-4">
                        Développement d'une plateforme e-commerce complète avec système de paiement et gestion de stock.
                    </p>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Objectifs :</h4>
                        <p class="text-gray-600">Créer une solution e-commerce scalable avec une expérience utilisateur optimale.</p>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Technologies :</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Stripe</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Fonctionnalités :</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-1">
                            <li>Panier d'achat</li>
                            <li>Paiement sécurisé</li>
                            <li>Gestion des utilisateurs</li>
                            <li>Interface admin</li>
                        </ul>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Apprentissages :</h4>
                        <p class="text-gray-600">Architecture microservices, sécurité des paiements, optimisation des performances.</p>
                    </div>
                    <div class="flex space-x-4">
                        <a href="#" class="text-primary hover:underline">Code Source</a>
                        <a href="#" class="text-primary hover:underline">Live Demo</a>
                    </div>
                </div>

                <!-- Projet 2 -->
                <div class="bg-white rounded-2xl shadow-xl p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold text-gray-900">Application Météo</h3>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2023</span>
                    </div>
                    <div class="mb-4">
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Frontend</span>
                    </div>
                    <p class="text-gray-600 mb-4">
                        Application web responsive pour consulter les prévisions météo avec interface intuitive.
                    </p>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Objectifs :</h4>
                        <p class="text-gray-600">Créer une application météo performante avec design moderne et données en temps réel.</p>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Technologies :</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">API REST</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Fonctionnalités :</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-1">
                            <li>Recherche par ville</li>
                            <li>Prévisions 7 jours</li>
                            <li>Géolocalisation</li>
                            <li>Mode sombre</li>
                        </ul>
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Apprentissages :</h4>
                        <p class="text-gray-600">Intégration d'API, gestion d'état avec Vuex, design responsive avancé.</p>
                    </div>
                    <div class="flex space-x-4">
                        <a href="#" class="text-primary hover:underline">Code Source</a>
                        <a href="#" class="text-primary hover:underline">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Certifications -->
    <section id="certifications" class="bg-white section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Certifications</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Certification 1 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-2">AWS Certified Developer</h3>
                    <div class="text-gray-600 mb-3">
                        <i class="far fa-calendar-alt mr-2"></i>Janvier 2024
                    </div>
                    <div class="text-gray-700 mb-4">
                        <i class="fas fa-building mr-2"></i>Amazon Web Services
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Compétences validées :</h4>
                        <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                            <li>Développement d'applications cloud</li>
                            <li>Architecture serverless</li>
                            <li>Services AWS (Lambda, API Gateway)</li>
                        </ul>
                    </div>
                </div>

                <!-- Certification 2 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-2">Google Cloud Associate</h3>
                    <div class="text-gray-600 mb-3">
                        <i class="far fa-calendar-alt mr-2"></i>Mars 2023
                    </div>
                    <div class="text-gray-700 mb-4">
                        <i class="fas fa-building mr-2"></i>Google Cloud
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Compétences validées :</h4>
                        <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                            <li>Infrastructure GCP</li>
                            <li>Déploiement d'applications</li>
                            <li>Gestion des données</li>
                        </ul>
                    </div>
                </div>

                <!-- Certification 3 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-primary mb-2">Scrum Master Certified</h3>
                    <div class="text-gray-600 mb-3">
                        <i class="far fa-calendar-alt mr-2"></i>Novembre 2022
                    </div>
                    <div class="text-gray-700 mb-4">
                        <i class="fas fa-building mr-2"></i>Scrum Alliance
                    </div>
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Compétences validées :</h4>
                        <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                            <li>Méthodologie Agile</li>
                            <li>Gestion de projet Scrum</li>
                            <li>Facilitation d'équipe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Veille Technologique -->
    <section id="veille" class="bg-gray-50 section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Veille Technologique</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Article 1 -->
                <div class="bg-white rounded-2xl shadow-xl p-6">
                    <div class="flex items-center mb-4">
                        <img 
                            src="https://picsum.photos/60?random=2" 
                            alt="Article image" 
                            class="w-16 h-16 rounded-lg mr-4"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">L'avenir du Web3</h3>
                            <p class="text-gray-600 text-sm">15 Mars 2024</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        Analyse des tendances émergentes dans le développement Web3 et les applications décentralisées.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Blockchain</span>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Web3</span>
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">DApps</span>
                    </div>
                    <a href="#" class="text-primary hover:underline font-semibold">Lire l'article →</a>
                </div>

                <!-- Article 2 -->
                <div class="bg-white rounded-2xl shadow-xl p-6">
                    <div class="flex items-center mb-4">
                        <img 
                            src="https://picsum.photos/60?random=3" 
                            alt="Article image" 
                            class="w-16 h-16 rounded-lg mr-4"
                            loading="lazy"
                        />
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">IA et Développement</h3>
                            <p class="text-gray-600 text-sm">10 Février 2024</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        Exploration des outils d'IA qui révolutionnent le développement web et améliorent la productivité.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">IA</span>
                        <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Productivité</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Outils</span>
                    </div>
                    <a href="#" class="text-primary hover:underline font-semibold">Lire l'article →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Expérience -->
    <section id="experience" class="bg-white section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Expérience Professionnelle</h2>
            
            <div class="space-y-8">
                <!-- Expérience 1 -->
                <div class="bg-gray-50 rounded-2xl shadow-xl p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-2 inline-block">Alternance</span>
                            <h3 class="text-2xl font-bold text-gray-900">Développeur Full Stack</h3>
                            <p class="text-lg text-gray-700">Tech Solutions SARL</p>
                        </div>
                        <div class="text-gray-600 mt-2 md:mt-0">
                            <i class="far fa-calendar-alt mr-2"></i>Sept 2023 - Août 2024
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Missions réalisées :</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-2">
                            <li>Développement d'applications web responsive avec React et Node.js</li>
                            <li>Optimisation des performances et SEO</li>
                            <li>Intégration de systèmes de paiement</li>
                            <li>Collaboration avec l'équipe design</li>
                        </ul>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Docker</span>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Compétences développées :</h4>
                        <ul class="list-disc list-inside text-gray-600">
                            <li>Architecture microservices</li>
                            <li>Tests automatisés</li>
                            <li>CI/CD</li>
                            <li>Travail en équipe agile</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Réalisations :</h4>
                        <p class="text-gray-600">Augmentation de 40% des performances de l'application principale et réduction de 60% du temps de chargement.</p>
                    </div>
                </div>

                <!-- Expérience 2 -->
                <div class="bg-gray-50 rounded-2xl shadow-xl p-6">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2 inline-block">Stage</span>
                            <h3 class="text-2xl font-bold text-gray-900">Développeur Frontend</h3>
                            <p class="text-lg text-gray-700">Web Agency</p>
                        </div>
                        <div class="text-gray-600 mt-2 md:mt-0">
                            <i class="far fa-calendar-alt mr-2"></i>Janvier 2023 - Juin 2023
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Missions réalisées :</h4>
                        <ul class="list-disc list-inside text-gray-600 space-y-2">
                            <li>Création d'interfaces utilisateur avec Vue.js</li>
                            <li>Intégration de maquettes Figma</li>
                            <li>Tests unitaires et d'intégration</li>
                            <li>Optimisation accessibilité</li>
                        </ul>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Jest</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Figma</span>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2">Compétences développées :</h4>
                        <ul class="list-disc list-inside text-gray-600">
                            <li>Développement frontend moderne</li>
                            <li>Accessibilité web</li>
                            <li>Tests automatisés</li>
                            <li>Collaboration cross-fonctionnelle</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Réalisations :</h4>
                        <p class="text-gray-600">Développement de 3 applications client avec scores d'accessibilité supérieurs à 95%.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Contact</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <!-- Informations de contact -->
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Restons en contact</h3>
                    
                    <div class="space-y-4 mb-8">
                        <div class="flex items-center">
                            <div class="bg-primary text-white p-3 rounded-lg mr-4">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">Email</p>
                                <p class="text-gray-600">contact@example.com</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-primary text-white p-3 rounded-lg mr-4">
                                <i class="fab fa-github"></i>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">GitHub</p>
                                <p class="text-gray-600">github.com/username</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-primary text-white p-3 rounded-lg mr-4">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900">LinkedIn</p>
                                <p class="text-gray-600">linkedin.com/in/username</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-2xl shadow-lg p-6">
                        <h4 class="text-xl font-bold text-gray-900 mb-4">Disponibilité</h4>
                        <p class="text-gray-600 mb-4">
                            Je suis actuellement ouvert aux nouvelles opportunités de collaboration et de recrutement.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Télécharger CV
                            </a>
                            <a href="mailto:contact@example.com" class="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                                Me contacter
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Formulaire de contact -->
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Envoyez un message</h3>
                    
                    <form id="contactForm" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            >
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            >
                        </div>
                        
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            >
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="5"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-xl font-bold">Jean Dupont</p>
                    <p class="text-gray-400">Développeur Full Stack</p>
                </div>
                
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i class="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">© 2024 Jean Dupont. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Bouton retour en haut -->
    <button id="backToTop" class="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors hidden">
        <i class="fas fa-chevron-up"></i>
    </button>

    <script>
        // Données du portfolio
        const portfolioData = {
            "personal": {
                "name": "Jean Dupont",
                "title": "Développeur Full Stack",
                "email": "contact@example.com",
                "github": "https://github.com/username",
                "linkedin": "https://linkedin.com/in/username"
            },
            "skills": {
                "languages": ["JavaScript", "Python", "HTML5", "CSS3", "Java"],
                "frameworks": ["React", "Vue.js", "Node.js", "Express.js"],
                "tools": ["Git", "Docker", "Figma", "MySQL"],
                "methodologies": ["Agile/Scrum", "Git Flow", "Mobile First", "Pair Programming"]
            }
        };

        // Navigation smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulation d'envoi (à remplacer par votre logique d'envoi)
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        });

        // Animation des barres de compétences
        const animateSkills = () => {
            const skillElements = document.querySelectorAll('.skill-bar');
            skillElements.forEach(skill => {
                const width = skill.getAttribute('data-width');
                skill.style.width = width + '%';
            });
        };

        // Intersection Observer pour l'animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        });

        // Observer la section compétences
        const skillsSection = document.getElementById('competences');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        // Menu mobile (version simplifiée)
        const mobileMenuButton = document.querySelector('button.md\\:hidden');
        const navLinks = document.querySelector('.hidden.md\\:flex');
        
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('right-0');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('shadow-lg');
            navLinks.classList.toggle('p-4');
        });
    </script>
</body>
</html>