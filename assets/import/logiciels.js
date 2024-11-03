const logiciels = {
    "fr": [
        {
            "href": "#",
            "img": "./assets/img/soon.jpg",
            "type": "cube",
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
            "type": "cube",
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
            "type": "cube",
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

export function load_logiciels(select_lang) {
    const logiciel = logiciels[select_lang]
    const logicielsContainer = document.getElementById(`logiciels-${select_lang}`);

    logiciel.forEach(logicielItem => {
        const logicielHtml = `
        <a class="project-box" href="${logicielItem.href}">
            <img class="${logicielItem.type}" src="${logicielItem.img}" alt="${logicielItem.alt}" loading="lazy">
            <div class="project-info">
                <h2>${logicielItem.title}</h2>
                ${logicielItem.description.map(desc => `<p>${desc}</p>`).join('')}
            </div>
        </a>
    `;

    logicielsContainer.innerHTML += logicielHtml;
    });
}