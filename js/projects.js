// projects.js
const projects = [
  {
    title: "SaÉ S1.05 - Recueil de Besoins",
    description:
      "Site Web présentant l'IUT à des lycéens/futurs bacheliers réalisé dans le cadre d'une SaÉ. Nous étions chargé de présenter le BUT en général, les compétences ainsi que les métiers auquel prépapre la formation tout en respectant la norme W3C et la charte graphique de l'université d'AMU",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "images/logo_iut.png",
    link: "../portfolio/site/index.html",
    longDescription:
      "Ce projet a été réalisé durant le premier semestre de ma formation. L'objectif était de créer un site informatif et attractif pour présenter le BUT Informatique aux futurs étudiants. Nous avons travaillé en équipe de 4 personnes, en utilisant la méthodologie agile pour organiser notre travail. Le site respecte les standards du web (W3C) et la charte graphique d'Aix-Marseille Université.",
    gallery: ["images/sae1.png", "images/sae2.png", "images/sae3.png"],
  },
  {
    title: "Projet Webpack - Glossaire Zelda",
    description:
      "Application web réalisée en javascript avec une configuration webpack",
    technologies: ["HTML", "CSS", "JavaScript", "Webpack", "APIFetch"],
    image: "images/logo_glossary.png",
    link: "https://xeli0s.github.io/botw_glossary/dist/index.html",
    longDescription:
      "Cette application web est un glossaire sur l'univers de Zelda. Développée avec JavaScript et configurée avec Webpack. J'ai utilisé l'API Fetch pour récupérer les données depuis une API publique sur Zelda, permettant ainsi de présenter une encyclopédie complète des animaux, équipements, matériaux et monstres du jeu.",
    gallery: ["images/zelda1.png", "images/zelda2.png", "images/zelda3.png"],
  },
  {
    title: "Projet Java - CBZ Reader",
    description:
      "Application Java servant à lire des Bandes Dessinées ou des Mangas au format cbz",
    technologies: ["Java"],
    image: "images/cbz3.png",
    link: "https://etulab.univ-amu.fr/g23008867/cb-reader",
    longDescription:
      "Nous avons dû développer un logiciel en Java en utilisant une interface graphique Swing. Ce logiciel permet d'afficher des bandes dessinés et des mangas en chargeant des fichiers au format CBZ (Comic Book archive Zipped). Il est possibler de naviguer entre les pages de gauche à droite, comme dans un vrai livre, ou bien de lire en faisant défiler les pages vers le bas",
    gallery: ["images/cbz1.png", "images/cbz2.png", "images/cbz3.png"],
  },
  {
    title: "SaÉ - Le Royaume des Lettres",
    description:
      "Application Web permettant d'aider à l'apprentissage de la lecture des enfants rentrant à l'école primaire",
    technologies: ["HTML", "CSS", "JavaScript", "Webpack", "Node.js"],
    image: "images/logo_rdl.png",
    link: "https://tinyurl.com/RoyaumeDesLettres",
    longDescription:
      "Dans le cadre de cette SaÉ, nous avons développé une application web en équipe Scrum, avec une approche agile. Le but de cette application est d'aider à l'apprentissage de la lecture des enfants rentrant à l'école primaire. Nous avons proposé sur cette application des exercices et mini-jeux ludiques afin de rendre l'apprentissage de l'enfant plus plaisant. Le parent a accès à une page où il peut voir les progrès de son enfant.",
    gallery: ["images/rdl1.png", "images/rdl2.png", "images/rdl3.png"],
  },
];

// Mapping des technologies avec leurs logos
const techLogos = {
  HTML: "images/logos/html.png",
  CSS: "images/logos/css.png",
  JavaScript: "images/logos/javascript.png",
  Bootstrap: "images/logos/Bootstrap_logo.png",
  Webpack: "images/logos/webpack.svg",
  APIFetch: "images/logos/api.png",
  "Node.js": "images/logos/nodejs.png",
  Java: "images/logos/java.png",
};

// Fonction pour créer les cartes de projets
function createProjectCards() {
  const projectsGrid = document.querySelector(".projects-grid");

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Création des logos de technologies
    const techLogosHTML = project.technologies
      .map((tech) => {
        return `<div class="tech-logo" title="${tech}">
                <img src="${techLogos[tech]}">
              </div>`;
      })
      .join("");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-technologies">
          <h4>Technologies utilisées :</h4>
          <div class="tech-logos-container">
            ${techLogosHTML}
          </div>
        </div>
        <button class="view-details-btn" data-project="${index}">Voir les détails</button>
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  // Ajouter les popups au body
  const popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  popupContainer.innerHTML = `
    <div class="popup">
      <div class="popup-content">
        <span class="close-popup">&times;</span>
        <div class="popup-header">
          <h2 id="popup-title"></h2>
        </div>
        <div class="popup-body">
          <div class="popup-gallery"></div>
          <div class="popup-description">
            <h3>Description</h3>
            <p id="popup-long-description"></p>
          </div>
          <div class="popup-technologies">
            <h3>Technologies</h3>
            <div id="popup-tech-logos"></div>
          </div>
        </div>
        <div class="popup-footer">
          <a id="popup-link" href="#" target="_blank" class="view-project-btn">Visiter le projet</a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popupContainer);

  // Ajouter les event listeners pour les boutons de détails
  document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const projectIndex = this.getAttribute("data-project");
      const project = projects[projectIndex];

      // Remplir le popup avec les informations du projet
      document.getElementById("popup-title").textContent = project.title;
      document.getElementById("popup-long-description").textContent =
        project.longDescription;
      document.getElementById("popup-link").href = project.link;

      // Créer la galerie d'images
      const galleryContainer = document.querySelector(".popup-gallery");
      galleryContainer.innerHTML = "";

      if (project.gallery && project.gallery.length) {
        project.gallery.forEach((img) => {
          const imgElement = document.createElement("img");
          imgElement.src = img;
          imgElement.alt = project.title;
          galleryContainer.appendChild(imgElement);
        });
      } else {
        // Utiliser l'image principale si pas de galerie
        const imgElement = document.createElement("img");
        imgElement.src = project.image;
        imgElement.alt = project.title;
        galleryContainer.appendChild(imgElement);
      }

      // Ajouter les logos de technologies
      const techContainer = document.getElementById("popup-tech-logos");
      techContainer.innerHTML = "";

      project.technologies.forEach((tech) => {
        const techDiv = document.createElement("div");
        techDiv.className = "tech-logo-popup";
        techDiv.title = tech;

        const img = document.createElement("img");
        img.src = techLogos[tech];

        const span = document.createElement("span");
        span.textContent = tech;

        techDiv.appendChild(img);
        techDiv.appendChild(span);
        techContainer.appendChild(techDiv);
      });

      // Afficher le popup
      document.querySelector(".popup-container").style.display = "flex";
    });
  });

  // Fermer le popup quand on clique sur la croix
  document.querySelector(".close-popup").addEventListener("click", function () {
    document.querySelector(".popup-container").style.display = "none";
  });

  // Fermer le popup quand on clique en dehors du contenu
  document
    .querySelector(".popup-container")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
}

// Appeler la fonction quand le DOM est chargé
document.addEventListener("DOMContentLoaded", createProjectCards);
