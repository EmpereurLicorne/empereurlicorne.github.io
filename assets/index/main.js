var lang = "fr";
var phrases = {
    fr: { phrase: "Je suis Empereur Licorne mais aussi", mots: ["passionné", "développeur polyvalent", "webdesigner débutant"], index: 0 },
    en: { phrase: "I'm a Empereur Licorne/Kaiser Einhorn, but also a", mots: ["passionate", "versatile developer", "novice webdesigner"], index: 0 },
    de: { phrase: "Ich bin Kaiser Einhorn, aber auch", mots: ["leidenschaftlich", "vielseitiger Entwickler", "Anfänger-Webdesigner"], index: 0 }
};

function set_lang() {
    var select_lang = navigator.language || navigator.userLanguage;
    
    if (select_lang === "fr" || select_lang === "en" || select_lang === "de") {
        lang = select_lang;
        return select_lang; 
    } else {
        var lang = "fr";
        return lang; 
    }
}

function choose_lang(select_lang) {
    var sections = document.querySelectorAll(".page > section");
    
    sections.forEach(function(section) {
        if (section.id === select_lang) {
            section.style.display = "block";
            lang = select_lang;
            select_phrase(select_lang);
            easter_egg(select_lang)
        } else {
            section.style.display = "none";
        }
    });
}

function select_phrase(lang) {
    if (!phrases[lang]) return;

    var elementMot = document.getElementById(`text-${lang}`);
    if (!elementMot) return;

    var { phrase, mots, index } = phrases[lang];
    elementMot.textContent = phrase + " " + mots[(index - 1 + mots.length) % mots.length];

    action_phrase(lang, mots[index]);
    phrases[lang].index = (index + 1) % mots.length;
}

function action_phrase(lang, mot) {
    var elementMot = document.getElementById(`text-${lang}`);
    if (!elementMot) return;

    var phrase = phrases[lang].phrase;
    var index = 0;

    var effacement = setInterval(function() {
        if (elementMot.textContent.length > phrase.length) {
            elementMot.textContent = elementMot.textContent.slice(0, -1);
        } else {
            clearInterval(effacement);

            var reecriture = setInterval(function() {
                if (index < mot.length) {
                    elementMot.textContent = phrase + " " + mot.slice(0, index + 1);
                    index++;
                } else {
                    clearInterval(reecriture);
                }
            }, 50);
        }
    }, 50);
}

function easter_egg(select_lang) {
    var heure = new Date().getHours();
    var messageJour = {
      fr: "Bonjour, je suis développeur amateur et je souhaiterais en faire de cela une activité professionnelle.",
      en: "Hello, I'm an amateur developer and I'd like to turn this into a professional activity.",
      de: "Hallo, ich bin Hobby-Entwickler und würde das gerne zu einer beruflichen Tätigkeit machen."
    };
    var messageSoir = {
      fr: "Bonsoir, je suis développeur amateur et je souhaiterais en faire de cela une activité professionnelle.",
      en: "Good evening, I'm an amateur developer and I'd like to turn this into a professional activity.",
      de: "Guten Abend, ich bin Hobby-Entwickler und würde das gerne zu einer beruflichen Tätigkeit machen."
    };
    
    var messages = (heure >= 5 && heure < 18) ? messageJour : messageSoir;
    
    var element = document.getElementById(`easter-egg-${select_lang}`);
    if (element) {
        element.textContent = messages[select_lang];
    }
}

function choose_community(sectionId, select_lang, event) {
    event.preventDefault();
    
    var sections = document.querySelectorAll(`[community-sections-${select_lang}]`);

    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

choose_lang(set_lang());
select_phrase(lang);
easter_egg(lang)
setInterval(function() {select_phrase(lang)}, 10000);
setInterval(function() {easter_egg(lang)}, 5000);