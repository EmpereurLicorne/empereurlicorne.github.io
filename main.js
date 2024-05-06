var lang = "en"

var phrase_fr = "Je suis Empereur Licorne mais aussi";
var mots_fr = ["passionné", "développeur polyvalent", "webdesigner débutant"];
var indexMot_fr = 0;

var phrase_en = "I'm a Empereur Licorne/Kaiser Einhorn, but also a";
var mots_en = ["passionate", "versatile developer", "novice webdesigner"];
var indexMot_en = 0;

var phrase_de = "Ich bin Kaiser Einhorn, aber auch";
var mots_de = ["leidenschaftlich", "vielseitiger Entwickler", "Anfänger-Webdesigner"];
var indexMot_de = 0;

var digalogue_fr = document.getElementById('digalogue_fr');
var open_dialogue_fr = document.getElementById('open_dialogue_fr');
var close_dialog_fr = document.getElementById('close_dialog_fr');

var digalogue_en = document.getElementById('digalogue_en');
var open_dialogue_en = document.getElementById('open_dialogue_en');
var close_dialog_en = document.getElementById('close_dialog_en');

var digalogue_de = document.getElementById('digalogue_de');
var open_dialogue_de = document.getElementById('open_dialogue_de');
var close_dialog_de = document.getElementById('close_dialog_de');

function $0x8475() {
  var lang = navigator.language || navigator.userLanguage;
  if (lang === 'fr' || lang === 'en' || lang === 'de') {
    return lang;
  } else {
    var lang = 'en'
    return lang ;
  }
}

function $0x1548(lang) {
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

function $0x4501_fr() {
  var elementMot = document.getElementById("text_fr");
  elementMot.textContent = phrase_fr + " " + mots_fr[indexMot_fr - 1];
  $0x7594_fr(mots_fr[indexMot_fr]);
  indexMot_fr = (indexMot_fr + 1) % mots_fr.length;
}

function $0x7594_fr(mot) {
  var index = 0;

  var effacement = setInterval(function() {
    if (document.getElementById("text_fr").textContent.length > phrase_fr.length) {
      var newTexte = document.getElementById("text_fr").textContent.substring(0, document.getElementById("text_fr").textContent.length - 1);
      document.getElementById("text_fr").textContent = newTexte;
    } else {
      clearInterval(effacement);

      var reecriture = setInterval(function() {
        if (index < mot.length) {
          var newTexte = mot.substring(0, index + 1);
          document.getElementById("text_fr").textContent = phrase_fr + " " + newTexte;
          index++;
        } else {
          clearInterval(reecriture);
        }
      }, 50);
    }
  }, 50);
}

function $0x4501_en() {
  var elementMot = document.getElementById("text_en");
  elementMot.textContent = phrase_en + " " + mots_en[indexMot_en - 1];
  $0x7594_en(mots_en[indexMot_en]);
  indexMot_en = (indexMot_en + 1) % mots_en.length;
}

function $0x7594_en(mot) {
  var index = 0;

  var effacement = setInterval(function() {
      if (document.getElementById("text_en").textContent.length > phrase_en.length) {
          var newTexte = document.getElementById("text_en").textContent.substring(0, document.getElementById("text_en").textContent.length - 1);
          document.getElementById("text_en").textContent = newTexte;
      } else {
          clearInterval(effacement);

          var reecriture = setInterval(function() {
              if (index < mot.length) {
                  var newTexte = mot.substring(0, index + 1);
                  document.getElementById("text_en").textContent = phrase_en + " " + newTexte;
                  index++;
              } else {
                  clearInterval(reecriture);
              }
          }, 50);
      }
  }, 50);
}

function $0x4501_de() {
  var elementMot = document.getElementById("text_de");
  elementMot.textContent = phrase_de + " " + mots_de[indexMot_de - 1];
  $0x7594_de(mots_de[indexMot_de]);
  indexMot_de = (indexMot_de + 1) % mots_de.length;
}

function $0x7594_de(mot) {
  var index = 0;

  var effacement = setInterval(function() {
      if (document.getElementById("text_de").textContent.length > phrase_de.length) {
          var newTexte = document.getElementById("text_de").textContent.substring(0, document.getElementById("text_de").textContent.length - 1);
          document.getElementById("text_de").textContent = newTexte;
      } else {
          clearInterval(effacement);

          var reecriture = setInterval(function() {
              if (index < mot.length) {
                  var newTexte = mot.substring(0, index + 1);
                  document.getElementById("text_de").textContent = phrase_de + " " + newTexte;
                  index++;
              } else {
                  clearInterval(reecriture);
              }
          }, 50);
      }
  }, 50);
}

function $0x4325() {
  var heure = new Date().getHours();
  if (heure >= 5 && heure <= 18) {
    document.getElementById("heure_fr").textContent = "Bonjour, je suis développeur amateur et je souhaiterais en faire de cela une activité professionnelle.";
    document.getElementById("heure_en").textContent = "Hello, I'm an amateur developer and I'd like to turn this into a professional activity.";
    document.getElementById("heure_de").textContent = "Hallo, ich bin Hobby-Entwickler und würde das gerne zu einer beruflichen Tätigkeit machen.";
  } else {
    document.getElementById("heure_fr").textContent = "Bonsoir, je suis développeur amateur et je souhaiterais en faire de cela une activité professionnelle.";
    document.getElementById("heure_en").textContent = "Hello, I'm an amateur developer and I'd like to turn this into a professional activity.";
    document.getElementById("heure_de").textContent = "Guten Abend, ich bin Hobby-Entwickler und würde das gerne zu einer beruflichen Tätigkeit machen.";
  }
}

open_dialogue_fr.addEventListener('click', function() {
  digalogue_fr.showModal();
});

close_dialog_fr.addEventListener('click', function() {
  digalogue_fr.close();
});

open_dialogue_en.addEventListener('click', function() {
  digalogue_en.showModal();
});

close_dialog_en.addEventListener('click', function() {
  digalogue_en.close();
});

open_dialogue_de.addEventListener('click', function() {
  digalogue_de.showModal();
});

close_dialog_de.addEventListener('click', function() {
  digalogue_de.close();
});

$0x1548($0x8475());
$0x4501_fr();
$0x4501_en();
$0x4501_de();
$0x4325();
setInterval($0x4501_fr, 10000);
setInterval($0x4501_en, 10000);
setInterval($0x4501_de, 10000);
setInterval($0x4325, 5000);