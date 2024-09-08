var lang = "fr"
var phrases = {
    fr: { phrase: "Je suis Empereur Licorne mais aussi", mots: ["passionné", "développeur polyvalent", "webdesigner débutant"], index: 0 },
    en: { phrase: "I'm a Empereur Licorne/Kaiser Einhorn, but also a", mots: ["passionate", "versatile developer", "novice webdesigner"], index: 0 },
    de: { phrase: "Ich bin Kaiser Einhorn, aber auch", mots: ["leidenschaftlich", "vielseitiger Entwickler", "Anfänger-Webdesigner"], index: 0 }
};

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
    var sections = document.querySelectorAll(".page > section");
    var section = document.getElementById(lang);
    sections.forEach(function(section) {
        if (section.id === lang) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function select_phrase() {
    try {
        for (var lang in phrases) {
            var elementMot = document.getElementById(`text_${lang}`);
            if (!elementMot) return;
  
            var { phrase, mots, index } = phrases[lang];
            elementMot.textContent = phrase + " " + mots[(index - 1 + mots.length) % mots.length];
            action_phrase(lang, mots[index]);
            phrases[lang].index = (index + 1) % mots.length;
        }
    } catch (error) {
        return;
    }
}
  
function action_phrase(lang, mot) {
    try {
        var elementMot = document.getElementById(`text_${lang}`);
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
    } catch (error) {
        return;
    }
}

function easter_egg() {
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
    var messages = (heure >= 5 && heure <= 18) ? messageJour : messageSoir;
    
    for (var lang in messages) {
      document.getElementById(`easter_egg_${lang}`).textContent = messages[lang];
    }
}

function choose_community(sectionId, event) {
    event.preventDefault();
    var sections = document.querySelectorAll('[community-section]');
  
    sections.forEach(function(section) {
        if (section.id == sectionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
    });
  
    var links = document.querySelectorAll('.select_community');
      links.forEach(function(link) {
          link.classList.remove('select_community_active');
      });
      event.target.classList.add('select_community_active');
}

choose_lang(set_lang());
select_phrase();
easter_egg();
setInterval(easter_egg(), 5000);
setInterval(select_phrase, 10000);