function changeLang() {
    var lang = document.getElementById("lang-select").value;
    if (lang === "") {
      lang = "fr";
    }
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
      if (section.getAttribute("lang") === lang) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
    document.getElementById("lang-select").value = lang;
  }