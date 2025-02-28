// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Menu burger
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      burger.classList.remove("active");
    });
  });

  // Animation au scroll
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observer les sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Formulaire de contact
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Ici, vous pouvez ajouter le code pour envoyer les données à votre backend
    console.log("Données du formulaire:", data);

    // Réinitialiser le formulaire
    contactForm.reset();
    alert("Message envoyé avec succès!");
  });
});

document
  .getElementById("copy-email")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = "mathias.goncalves-ferreira@etu.univ-amu.fr";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copié !");
      })
      .catch((err) => {
        console.error("Échec de la copie", err);
      });
  });

document
  .getElementById("download-cv")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêche la navigation directe

    const cvUrl = "cv.pdf"; // Remplace par le bon chemin de ton CV
    const a = document.createElement("a");
    a.href = cvUrl;
    a.download = "Mon_CV.pdf"; // Forcer le téléchargement avec ce nom de fichier
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
