const projets = {
    "fr": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "type": "cube",
            "alt": "",
            "title": "Mise à jour....", 
            "description": [
                "Je prépare une nouvelle mise à jour pour le site.",
                "Une refonte complète",
                "J'essayerai de mettre plien de petit truc et un peu plus d'optimisation"
            ]
        },
    ],
    "en": [
        {
            "href": "ludi-vesper/index.html?lang=en",
            "img": "./license/img/Ludi_vesper.png",
            "type": "cube",
            "alt": "",
            "title": "Ludi Vesper", 
            "description": [
                "Ludi Vesper is a project I'm developing on my own.",
                "I take core of updatees and maintenance.",
                "It's one my longest projects, and one of the coolest to presented in the evening."
            ]
        },
    ],
    "de": [
        {
            "href": "ludi-vesper/index.html?lang=de",
            "img": "./license/img/Ludi_vesper.png",
            "type": "cube",
            "alt": "",
            "title": "Ludi Vesper",
            "description": [
                "Ludi Vesper ist ein Projekt, das ich allaine entwickle.",
                "Ich kümeere mich die Updates und die Wartung.",
                "Es ist eines meiner längsten Projekt, das sehr cool ist. am Abend präsentiert."
            ]
        },
    ]
};

export function load_projets(select_lang) {
    const projects = projets[select_lang];
    const projectsContainer = document.getElementById(`projects-${select_lang}`);
    
    projects.forEach(projectsItem => {
        const projectHtml = `
            <a class="project-box" href="${projectsItem.href}">
                <img class="${projectsItem.type}" src="${projectsItem.img}" alt="${projectsItem.alt}" loading="lazy">
                <div class="project-info">
                    <h2>${projectsItem.title}</h2>
                    ${projectsItem.description.map(desc => `<p>${desc}</p>`).join('')}
                </div>
            </a>
        `;

        projectsContainer.innerHTML += projectHtml;
    });
}