var lang = "fr"

function set_404() {
    var select_lang = navigator.language || navigator.userLanguage;
    
    if (select_lang === "fr" || select_lang === "en" || select_lang === "de") {
        lang = select_lang;
        return select_lang; 
    } else {
        var lang = "fr";
        return lang; 
    }
}

function choose_404(select_lang) {
    const name = document.querySelector('.name')
    const button = document.querySelector('.button-home')
    const bubble = document.querySelector('.bubble')

    const langLinks = document.querySelectorAll('a[id]');

    langLinks.forEach(link => {
        link.classList.remove('lang-active');
    });

    document.getElementById(lang).classList.add('lang-active');

    lang = select_lang;

    if (select_lang === 'fr') {
        bubble.textContent = "Bon... c'était par où déjà ?"
        name.textContent = "On dirait que cette page joue à cache-cache... Elle a pris des vacances et je suis en pleine recherche ! Si vous la voyez, faites-le savoir, cela pourrait prendre un moment !"
        button.textContent = "Retour à la page d'accueil"
        changeMessage("fr");
    } else if (select_lang === 'en') {
        bubble.textContent = "So... which way was it again?"
        name.textContent = "This page seems to be playing hide-and-seek... She's on vacation and I'm in the middle of a search! If you see it, please let us know - it could be a while!"
        button.textContent = "Back to home page"
        changeMessage("en");
    } else if (select_lang === 'de') {
        bubble.textContent = "Gut, wo ging es nochmal lang?"
        name.textContent = "Es scheint, als würde diese Seite Verstecken spielen... Sie hat sich Urlaub genommen und ich bin auf der Suche! Wenn Sie sie sehen, lassen Sie es uns bitte wissen, es könnte eine Weile dauern!"
        button.textContent = "Zurück zur Startseite"
        changeMessage("de");
    }
}

const messages = {
    fr: [
      "Hmm... Cette page joue à cache-cache !",
      "Je vais vérifier sous ce rocher... on sait jamais !",
      "On dirait que cette page a pris des vacances...",
      "Encore un panneau 404... j'ai dû me perdre dans une boucle.",
      "On n'est pas loin, je le sens... ou pas.",
      "Cette page semble avoir disparu dans les méandres du web.",
      "Je pense que cette page a décidé de se cacher pour de bon !",
      "Oups ! Je crois que j'ai ouvert la porte de la dimension inconnue.",
      "Pas de chance ! Cette page est aussi introuvable qu'un chaussette perdue.",
      "Je sens une présence, mais ce n'est pas la bonne page !",
      "Je suis sûr que cette page est partie à une rave avec des licornes !",
      "Cette page doit se cacher dans un donut géant, c’est la seule explication !",
      "Je parie que cette page joue aux échecs avec un robot... et a perdu !",
      "Je vais appeler Sherlock, il a sûrement un indice sur cette page !",
      "Si je trouve cette page, je lui offrirai un gâteau... ou un chapeau !"
    ],

    en: [
      "Hmm... This page is playing hide-and-seek!",
      "I'm going to check under this rock... you never know!",
      "Looks like this page has taken a vacation...",
      "Another 404 sign... I must have gotten lost in a loop.",
      "We're not far off, I can feel it... or not.",
      "This page seems to have disappeared from the web.",
      "I think this page has decided to hide for good!",
      "Oops! I think I've opened the door to the unknown dimension.",
      "Bad luck! This page is as impossible to find as a lost sock.",
      "I feel a presence, but it's the wrong page!",
      "I'm sure this page went to a rave with unicorns!",
      "This page must be hidden in a giant donut - it's the only explanation!",
      "I bet this page is playing chess with a robot... and has lost!",
      "I'll call Sherlock, he's bound to have a clue on this page!",
      "If I find this page, I'll buy her a cake... or a hat!",
    ],

    de: [
      "Hmm ... Diese Seite spielt Verstecken!",
      "Ich werde unter diesem Felsen nachsehen... man weiß ja nie!",
      "Es scheint, als hätte diese Seite Urlaub gemacht...",
      "Schon wieder ein 404-Panel... Ich muss mich in einer Schleife verirrt haben.",
      "On n'est pas loin, je le sens... ou pas.",
      "Diese Seite scheint in den Weiten des Internets verschwunden zu sein.",
      "Ich glaube, diese Seite hat beschlossen, sich endgültig zu verstecken!",
      "Hoppla! Ich glaube, ich habe die Tür zur unbekannten Dimension geöffnet.",
      "Keine Chance! Diese Seite ist so unauffindbar wie eine verlorene Socke.",
      "Ich spüre eine Präsenz, aber das ist die falsche Seite!",
      "Ich bin mir sicher, dass diese Seite zu einem Rave mit Einhörnern gegangen ist!",
      "Diese Seite muss sich in einem riesigen Donut verstecken, das ist die einzige Erklärung!",
      "Ich wette, dass diese Seite mit einem Roboter Schach spielt - und verloren hat!",
      "Ich werde Sherlock anrufen, er hat bestimmt einen Hinweis auf dieser Seite!",
      "Wenn ich diese Seite finde, schenke ich ihr einen Kuchen - oder einen Hut!"
    ]
  }
  
const characterContainer = document.getElementById('characterContainer');
const bubble = document.getElementById('bubble');
const movementZone = document.getElementById('movementZone');

function changeMessage(lang) { 
    const randomMessage = messages[lang][Math.floor(Math.random() * messages[lang].length)];
    bubble.textContent = randomMessage;
}

function moveContainer() {
    const zoneRect = movementZone.getBoundingClientRect();
    const containerRect = characterContainer.getBoundingClientRect();
    const bubbleWidth = bubble.offsetWidth;

    const marginX = zoneRect.width - containerRect.width;
    const marginY = zoneRect.height - containerRect.height;

    const safeMarginX = marginX - bubbleWidth; 
    const safeMarginY = marginY - bubble.offsetHeight; 

    const randomX = Math.max(0, Math.floor(Math.random() * safeMarginX));
    const randomY = Math.max(0, Math.floor(Math.random() * safeMarginY));
    
    characterContainer.style.transform = `translate(${randomX}px, ${randomY}px)`;

    changeMessage(lang);
}

setInterval(moveContainer, 5000);
choose_404(set_404());