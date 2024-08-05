const projets = {
    "fr": [
        {
            "href": "tina-corp/index.html",
            "img": "./assets/img/tina_corps.png",
            "alt": "",
            "title": "Tina Corp",
            "description": [
                "Tina Corp est une organisations que je développe et supervise.",
                "J'assure de son bon développement et de sa maintenance.",
                "C'est l'un de mes plus gros projets personnel, le plus complexe et le plus amusant."
            ]
        },
        {
            "href": "#",
            "img": "./assets/img/nextcord.png",
            "alt": "",
            "title": "Nextcord",
            "description": [
                "Nextcord est une librairie que je suis entrain d'apprendre qui sera utilisé pour mon bot Tina",
                "Je commence quelques projets simples et publiques pour bien connaitre la librairie",
                "Je vais mettre tout mes petits projets avec Nextcord en open source et téléchargeable"
            ]
        }
    ],
    "en": [
        {
            "href": "tina-corp/index.html",
            "img": "./assets/img/tina_corps.png",
            "alt": "",
            "title": "Tina Corp",
            "description": [
                "Tina Corp is an organization that I develop and supervise.",
                "I ensure its proper development and maintenance.",
                "It's one of my biggest personal projects, the most complex and the most fun."
            ]
        },
        {
            "href": "#",
            "img": "./assets/img/nextcord.png",
            "alt": "",
            "title": "Nextcord",
            "description": [
                "Nextcord is a library I'm learning to use for my Tina bot.",
                "I'm starting a few simple public projects to get to know the bookshop.",
                "I'm going to make all of my little projects with Nextcord open source and available for download."
            ]
        }
    ],
    "de": [
        {
            "href": "tina-corp/index.html",
            "img": "./assets/img/tina_corps.png",
            "alt": "",
            "title": "Tina Corp",
            "description": [
                "Tina Corp ist eine Organisation, die ich entwickle und beaufsichtige.",
                "Ich sorge dafür, dass sie sich gut entwickelt und gepflegt wird.",
                "Es ist eines meiner größten persönlichen Projekte, das komplexeste und das was am meisten Spaß macht"
            ]
        },
        {
            "href": "#",
            "img": "./assets/img/nextcord.png",
            "alt": "",
            "title": "Nextcord",
            "description": [
                "Nextcord ist eine Bibliothek, die ich gerade lerne und die ich für meinen Tina-Bot verwenden werde.",
                "Ich beginne einige einfache und öffentliche Projekte, um den Buchladen gut kennenzulernen.",
                "Ich werde alle meine kleinen Projekte mit Nextcord als Open Source und zum Herunterladen bereitstellen."
            ]
        }
    ]
};

const bot = {
    "fr": [
        {
            "href": "#",
            "img": "./assets/img/Patate_licorne.png",
            "alt": "",
            "title": "StupidBot",
            "description": [
                "StupidBot est un bot Discord avec des commandes simples mais conçu pour répondre de manière stupide.",
                "Dans ce projet, je n'attends pas grand-chose à part qu'il fonctionne et qu'il soit maintenu à jour de façon basique.",
                "Je prévois peut-être une version open source et téléchargeable."
            ]
        }
    ],
    "en": [
        {
            "href": "#",
            "img": "./assets/img/Patate_licorne.png",
            "alt": "",
            "title": "StupidBot",
            "description": [
                "StupidBot is a Discord bot with simple commands but designed to respond in a stupid way.",
                "I don't expect much from this project other than that it works and is kept up to date in a basic way.",
                "I may be planning an open-source, downloadable version."
            ]
        }
    ],
    "de": [
        {
            "href": "#",
            "img": "./assets/img/Patate_licorne.png",
            "alt": "",
            "title": "StupidBot",
            "description": [
                "StupidBot ist ein Discord-Bot mit einfachen Befehlen, der aber darauf ausgelegt ist, auf dumme Art und Weise zu antworten.",
                "In diesem Projekt erwarte ich nicht viel, außer dass es funktioniert und auf grundlegende Weise auf dem neuesten Stand gehalten wird.",
                "Vielleicht plane ich eine Open-Source-Version, die man herunterladen kann."
            ]
        }
    ]
}

const logiciels = {
    "fr": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Coming Soon",
            "description": [
                "La section Logiciels sera ouverte en 2025.", 
                "Vous y retrouverez tous les logiciels et jeux que je développerai.",
                "Cette section pourra être modifiée ou supprimée à tout moment."
            ]
        }
    ],
    "en": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Coming Soon",
            "description": [
                "The Software section will open in 2025.",
                "Here you'll find all the software and games I'll be developing.",
                "This section may be modified or deleted at any time."
            ]
        }
    ],
    "de": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Coming Soon",
            "description": [
                "Der Bereich Software wird 2025 eröffnet.",
                "Dort finden Sie alle Software und Spiele, die ich entwickeln werde.",
                "Dieser Abschnitt kann jederzeit geändert oder entfernt werden."
            ]
        }
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    load('fr');
    load('en');
    load('de');
});

function load(lang) {
    const projects = projets[lang];
    const projectsContainer = document.getElementById(`projects-${lang}`);
    
    projects.forEach(projectsItem => {
        const projectHtml = `
            <a class="project-box" href="${projectsItem.href}">
                <img src="${projectsItem.img}" alt="${projectsItem.alt}">
                <div class="project-info">
                    <h2>${projectsItem.title}</h2>
                    ${projectsItem.description.map(desc => `<p>${desc}</p>`).join('')}
                </div>
            </a>
        `;

        projectsContainer.innerHTML += projectHtml;
    });

    const bots = bot[lang];
    const botContainer = document.getElementById(`bot-${lang}`);

    bots.forEach(botItem => {
        const botHtml = `
            <a class="project-box" href="${botItem.href}">
                <img src="${botItem.img}" alt="${botItem.alt}">
                <div class="project-info">
                    <h2>${botItem.title}</h2>
                    ${botItem.description.map(desc => `<p>${desc}</p>`).join('')}
                </div>
            </a>
            `;

        botContainer.innerHTML += botHtml;
    });

    const logiciel = logiciels[lang]
    const logicielsContainer = document.getElementById(`logiciels-${lang}`);

    logiciel.forEach(logicielItem => {
        const logicielHtml = `
        <a class="project-box" href="${logicielItem.href}">
            <img src="${logicielItem.img}" alt="${logicielItem.alt}">
            <div class="project-info">
                <h2>${logicielItem.title}</h2>
                ${logicielItem.description.map(desc => `<p>${desc}</p>`).join('')}
            </div>
        </a>
    `;

    logicielsContainer.innerHTML += logicielHtml;
    });
}