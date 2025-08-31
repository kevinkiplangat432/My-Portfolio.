document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button1");

    button.addEventListener("click", function() {
        window.location.href = "homepage.html"; // Redirect to homepage.html
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("index");

    button.addEventListener("click", function() {
        window.location.href = "index.html"; // Redirect to index.html
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("about");

    button.addEventListener("click", function() {
        window.location.href = "about.html"; // Redirect to about.html
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("skills");

    button.addEventListener("click", function() {
        window.location.href = "skills.html"; // Redirect to skills.html
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("project");

    button.addEventListener("click", function() {
        window.location.href = "projects.html"; // Redirect to projects.html
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("contact");

    button.addEventListener("click", function() {
        window.location.href = "contact.html"; // Redirect to contact.html
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // detect the current file name
  const page = window.location.pathname;

  // only show banner on about.html
  if (page.includes("projects.html")) {
    const banner = document.createElement("div");
    banner.className = "construction-banner";
    banner.innerText = "This page is still under construction!";
    document.body.prepend(banner);
  }
});
