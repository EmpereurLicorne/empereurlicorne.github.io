var lang = "fr"

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

function choose_lang(select_lang) {
    var sections = document.querySelectorAll(".page > section");
    
    sections.forEach(function(section) {
        if (section.id === select_lang) {
            section.style.display = "block";
            lang = select_lang;
        } else {
            section.style.display = "none";
        }
    });
}

choose_lang(select_lang())

document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelectorAll('#details');

    details.forEach(function(detail) {
        detail.addEventListener('click', function() {
            const data = document.querySelector(this.getAttribute('data-target'));

            if (data.style.display === 'none' || data.style.display === '') {
                data.style.display = 'block'
                this.classList.add('open');
            } else {
                data.style.display = 'none'
                this.classList.remove('open');
            }
        })
    })
})
