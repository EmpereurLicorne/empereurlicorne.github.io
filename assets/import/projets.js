const projets = {
    "fr": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Ludi Vesper", 
            "description": [
                "Ludi Vesper est un projet que je développe seul.",
                "J'assure les mises à jours et la maintenance.",
                "C'est l'un de mets projets les plus longs, mets très cools à présenté en soirée.",
                "Coming Soon..."
            ]
        },
    ],
    "en": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Ludi Vesper", 
            "description": [
                "Ludi Vesper is a project I'm developing on my own.",
                "I take core of updatees and maintenance.",
                "It's one my longest projects, and one of the coolest to presented in the evening.",
                "Coming Soon..."
            ]
        },
    ],
    "de": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "alt": "",
            "title": "Ludi Vesper", 
            "description": [
                "Ludi Vesper ist ein Projekt, das ich allaine entwickle.",
                "Ich kümeere mich die Updates und die Wartung.",
                "Es ist eines meiner längsten Projekt, das sehr cool ist. am Abend präsentiert.",
                "Coming Soon..."
            ]
        },
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    load_projets('fr');
    load_projets('en');
    load_projets('de');
});

function load_projets(lang) {
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
}

/*

{
            "href": "#",
            "img": "",
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
            "img": "",
            "alt": "",
            "title": "Nextcord",
            "description": [
                "Nextcord est une librairie que je suis entrain d'apprendre qui sera utilisé pour mon bot Tina",
                "Je commence quelques projets simples et publiques pour bien connaitre la librairie",
                "Je vais mettre tout mes petits projets avec Nextcord en open source et téléchargeable"
            ]
        }
            */