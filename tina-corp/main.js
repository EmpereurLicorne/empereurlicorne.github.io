var lang = "fr"

function set_lang() {
    var lang = navigator.language || navigator.userLangue;
    if (lang === "fr" || lang === "en" || lang === "de") {
        return lang;
    } else {
        var lang = "fr"
        return lang
    } 
}

function choose_lang(lang) {
    var sections = document.querySelectorAll(".profile > section");
    var section = document.getElementById(lang);
    sections.forEach(function(section) {
        if (section.id === lang) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

choose_lang(set_lang());