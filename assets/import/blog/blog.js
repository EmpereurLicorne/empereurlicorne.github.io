const blog = {
    "fr": [
        { 
            "id": 1,
            "author": {
                "name": "Empereur Licorne",
                "icon": "assets/import/blog/author/empereur_licorne.png"
            },
            "img": "assets/import/blog/img/soon.jpg", 
            "alt": "", 
            "title": "Bienvenue dans mon blog", 
            "description": [
                "Bonjour à tous et bienvenue sur mon blog ! Ici, je vais partager avec vous l'avancement de mes projets à travers des images et des vidéos, et aussi publier d'autres contenus en dehors de mes projets.",
                "",
                "Ce blog est un espace personnel où je peux librement partager du contenu, mes idées, les étapes de mes divers projets, et aussi d'autres publications. Que vous soyez ici par curiosité, pour trouver de l'inspiration, ou pour apprendre quelque chose de nouveau, j'espère que vous apprécierez ce que vous découvrirez",
                "",
                "Je vous invite à suivre ce blog pour ne rien manquer de mes nouvelles publications. Vous pouvez également me suivre sur mon <a href=\"https://www.instagram.com/empereur_licorne\" style=\"text-decoration: underline;\">Instagram</a>. Mon blog aura certains contenus exclusifs ou des publications en avance par rapport à mon Instagram."
           ],
           "date": "05/08/2024 à 12h38"
        }
    ],


    "en": [
        { 
            "id": 1,
            "author": {
                "name": "Empereur Licorne",
                "icon": "assets/import/blog/author/empereur_licorne.png"
            },
            "img": "assets/import/blog/img/soon.jpg", 
            "alt": "", 
            "title": "Welcome to my blog", 
            "description": [
                "Hello everyone and welcome to my blog! Here, I'm going to share with you the progress of my projects through images and videos, and also publish other content outside my projects.",
                "",
                "This blog is a personal space where I can freely share content, ideas, project milestones and other publications. Whether you're here out of curiosity, to find inspiration, or to learn something new, I hope you enjoy what you discover.",
                "",
                "I invite you to follow this blog so you don't miss any of my new publications.You can also follow me on my <a href=\"https://www.instagram.com/empereur_licorne\" style=\"text-decoration: underline;\">Instagram</a>. My blog will have some exclusive content or publications ahead of my Instagram"
           ],
           "date": "05/08/2024 à 12h38"
        }
    ],

    "de": [
        { 
            "id": 1,
            "author": {
                "name": "Empereur Licorne",
                "icon": "assets/import/blog/author/empereur_licorne.png"
            },
            "img": "assets/import/blog/img/soon.jpg", 
            "alt": "", 
            "title": "Willkommen in meinem Blog", 
            "description": [
                "Hallo zusammen und willkommen auf meinem Blog! Hier werde ich den Fortschritt meiner Projekte durch Bilder und Videos mit euch teilen und auch andere Inhalte außerhalb meiner Projekte veröffentlichen.",
                "",
                "Dieser Blog ist ein persönlicher Raum, in dem ich frei Inhalte, Ideen, die Schritte meiner verschiedenen Projekte und auch andere Veröffentlichungen teilen kann. Ob Sie aus Neugierde hier sind, um sich inspirieren zu lassen oder um etwas Neues zu lernen, ich hoffe, dass Ihnen gefällt, was Sie entdecken",
                "",
                "Ich lade Sie ein, diesem Blog zu folgen, damit Sie keine meiner neuen Veröffentlichungen verpassen.Sie können mir auch auf meinem <a href=\"https://www.instagram.com/empereur_licorne\" style=\"text-decoration: underline;\">Instagram</a> folgen. Mein Blog wird einige exklusive Inhalte oder Veröffentlichungen früher als mein Instagram haben."
           ],
           "date": "05/08/2024 à 12h38"
        }
    ]
}

const itemPage = {
    "fr": 5,
    "en": 5,
    "de": 5
};
let currentsPage = {
    "fr": 0,
    "en": 0,
    "de": 0
};
const articlesPerLoad = 5;

function renderBlog(lang, startIndex, direction, spin = false) {
    const container = document.getElementById(`blog-container-${lang}`);

    if (spin) {
        container.classList.add('spin');
    } else {
        container.classList.add(`slide-out-${direction}`);
    }
    container.classList.remove('show');
    
    setTimeout(() => {
        container.innerHTML = "";

        const sortedBlog = [...blog[lang]].sort((a, b) => b.id - a.id);
        const blogList = sortedBlog.slice(startIndex, startIndex + articlesPerLoad);

        blogList.forEach(blogItem => {
            const imageHtml = blogItem.img ? `<img src="${blogItem.img}" alt="${blogItem.alt}">` : '';

            const blogHtml = `
                <div class="blog-box">
                    <div class="author">
                        <img src="${blogItem.author.icon}" alt="">
                        <p class="name">${blogItem.author.name}</p>
                        <p class="date">${blogItem.date}</p>
                    </div>
                    <h1>${blogItem.title}</h1>
                    ${blogItem.description.map(desc => `<p>${desc}</p>`).join('')}
                    ${imageHtml}
                </div>
            `;

            container.insertAdjacentHTML('beforeend', blogHtml);
        });

        container.classList.remove(`slide-out-${direction}`);
        container.classList.remove('spin');
        container.classList.add(`slide-in-${direction}`);
        
        setTimeout(() => {
            container.classList.remove(`slide-in-${direction}`);
            container.classList.add('show');
        }, 500);
    }, 500);
}

function loadMoreProjects(lang) {
    const totalItems = blog[lang].length;
    const maxIndex = Math.max(totalItems - articlesPerLoad, 0);
    let startIndex = currentsPage[lang] + articlesPerLoad;

    if (currentsPage[lang] >= maxIndex) {
        renderBlog(lang, 0, 'right', true);
        currentsPage[lang] = 0;
    } else {
        renderBlog(lang, startIndex, 'right');
        currentsPage[lang] = startIndex;
    }
    
    updateButtonsVisibility(lang);
}

function showLessProjects(lang) {
    let startIndex = Math.max(currentsPage[lang] - articlesPerLoad, 0);

    if (currentsPage[lang] === 0) {
        const totalItems = blog[lang].length;
        startIndex = Math.max(totalItems - articlesPerLoad, 0);
        renderBlog(lang, startIndex, 'left', true);
        currentsPage[lang] = startIndex;
    } else {
        renderBlog(lang, startIndex, 'left');
        currentsPage[lang] = startIndex;
    }
    
    updateButtonsVisibility(lang);
}

function updateButtonsVisibility(lang) {
    const totalItems = blog[lang].length;
    const totalPages = Math.ceil(totalItems / articlesPerLoad);

    const loadMoreButton = document.getElementById(`add_${lang}`);
    const showLessButton = document.getElementById(`remove_${lang}`);

    if (totalPages <= 1) {
        loadMoreButton.style.display = 'none';
        showLessButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = currentsPage[lang] >= totalItems - articlesPerLoad ? 'none' : 'block';
        showLessButton.style.display = currentsPage[lang] <= 0 ? 'none' : 'block';
    }
}


document.getElementById('add_fr').addEventListener('click', () => loadMoreProjects('fr'));
document.getElementById('remove_fr').addEventListener('click', () => showLessProjects('fr'));

document.getElementById('add_en').addEventListener('click', () => loadMoreProjects('en'));
document.getElementById('remove_en').addEventListener('click', () => showLessProjects('en'));

document.getElementById('add_de').addEventListener('click', () => loadMoreProjects('de'));
document.getElementById('remove_de').addEventListener('click', () => showLessProjects('de'));

document.addEventListener("DOMContentLoaded", () => {
    renderBlog('fr', 0, 'right');
    renderBlog('en', 0, 'right');
    renderBlog('de', 0, 'right');
    
    updateButtonsVisibility('fr');
    updateButtonsVisibility('en');
    updateButtonsVisibility('de');
});







/*
debugage de test
        {"id": 2, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 2", "description": ["test 2"], "date": "test 2"},
        {"id": 3, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 3", "description": ["test 3"], "date": "test 3"},
        {"id": 4, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 4", "description": ["test 4"], "date": "test 4"},
        {"id": 5, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 5", "description": ["test 5"], "date": "test 5"},
        {"id": 6, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 6", "description": ["test 6"], "date": "test 6"},
        {"id": 7, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 7", "description": ["test 7"], "date": "test 7"},
        {"id": 8, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 8", "description": ["test 8"], "date": "test 8"},
        {"id": 9, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 9", "description": ["test 9"], "date": "test 9"},
        {"id": 10, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 10", "description": ["test 10"], "date": "test 10"},
        {"id": 11, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 11", "description": ["test 11"], "date": "test 11"},
        {"id": 12, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 12", "description": ["test 12"], "date": "test 12"},
        {"id": 13, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 13", "description": ["test 13"], "date": "test 13"},
        {"id": 14, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 14", "description": ["test 14"], "date": "test 14"},
        {"id": 15, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 15", "description": ["test 15"], "date": "test 15"},
        {"id": 16, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 16", "description": ["test 16"], "date": "test 16"},
        {"id": 17, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 17", "description": ["test 17"], "date": "test 17"},
        {"id": 18, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 18", "description": ["test 18"], "date": "test 18"},
        {"id": 19, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 19", "description": ["test 19"], "date": "test 19"},
        {"id": 20, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 20", "description": ["test 20"], "date": "test 20"},
        {"id": 21, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 21", "description": ["test 21"], "date": "test 21"},
        {"id": 22, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 22", "description": ["test 22"], "date": "test 22"},
        {"id": 23, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 23", "description": ["test 23"], "date": "test 23"},
        {"id": 24, "author": {"name": "Empereur Licorne", "icon": "./assets/blog/author/empereur_licorne.png"}, "img": "", "alt": "", "title": "test 24", "description": ["test 24"], "date": "test 24"},
*/