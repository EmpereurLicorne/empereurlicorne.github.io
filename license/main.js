var lang = "fr"

function set_license() {
    var lang = navigator.language || navigator.userLangue; 
    if (lang === "fr" || lang === "en" || lang === "de") {
        return lang;
    } else {
        var lang = "fr"
        return lang
    }
}

function choose_license (lang) {
    var sections = document.querySelectorAll("section");
    var section = document.getElementById(lang);
    sections.forEach(function(section) {
        if (section.id === lang) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function select_lang() {
    const url = new URL(window.location);
    const urlLang = new URLSearchParams(url.search);

    let newlang = urlLang.get('lang');
    let selectLang = newlang || lang;
    
    urlLang.delete('lang');
    const newSearch = urlLang.toString();
    const newUrl = newSearch ? `${url.pathname}?${newSearch}` : url.pathname;
    window.history.replaceState({}, '', newUrl);
    
    return selectLang;
}
choose_license(select_lang());