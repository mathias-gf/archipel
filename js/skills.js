document.addEventListener("DOMContentLoaded", function () {
  const skillsLogos = {
    "c++": "images/logos/c++.png",
    html: "images/logos/html.png",
    css: "images/logos/css.png",
    javascript: "images/logos/javascript.png",
    nodejs: "images/logos/nodejs.png",
    java: "images/logos/java.png",
    postgresql: "images/logos/postgres.png",
    react: "images/logos/react.png",
    angular: "images/logos/angular.png",
    bruno: "images/logos/bruno.png",
    git: "images/logos/git.png",
    gradle: "images/logos/gradle.png",
    IntelliJ_IDEA: "images/logos/IntelliJ_IDEA.png",
    mysql: "images/logos/mysql.png",
    php: "images/logos/php.png",
    robot: "images/logos/robot.png",
    trello: "images/logos/trello.png",
    vite: "images/logos/vite.png",
    webpack: "images/logos/webpack.svg",
    vscode: "images/logos/vscode.png",
    laravel: "images/logos/laravel.png",
    vercel: "images/logos/vercel.svg",
    bootstrap: "images/logos/bootstrap.png",
  };

  const skillsList = document.querySelector(".skills-list");

  // Replace list items with logo + text containers
  Array.from(skillsList.children).forEach((item) => {
    const skillKey = item.getAttribute("data-skill");
    const logoSrc = skillsLogos[skillKey];

    // Create new structure
    const skillContainer = document.createElement("div");
    skillContainer.className = "skill-item";
    skillContainer.innerHTML = `
          <div class="skill-logo-container">
            <img src="${logoSrc}" alt="${item.textContent}" class="skill-logo">
          </div>
          <span class="skill-text">${item.textContent}</span>
        `;

    // Replace the original list item
    item.parentNode.replaceChild(skillContainer, item);
  });

  // Add hover animation
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.classList.add("skill-hover");
    });

    item.addEventListener("mouseleave", function () {
      this.classList.remove("skill-hover");
    });
  });
});
