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

function getContentHtml(blogItem) {
    const contentType = blogItem.src.type;
    let contentHtml = '';

    if (contentType === "multimedia") {
        const uniqueId = `media-slider-${blogItem.id}`;
        contentHtml = `
        <div id="${uniqueId}" class="media-slider">
        ${blogItem.src.contenu.map((item, index) => {
            return `<div class="media-slide" data-media="${item.media}" data-url="${item.url}">
                        ${index === 0 
                            ? (item.media === "video"
                                ? `<video class="merlode" onclick="openModal('${item.url}', 'video')" controls>
                                    <source src="${item.url}" type="video/mp4">
                                    Votre navigateur ne supporte pas la vidéo.
                                </video>`
                                : `<img src="${item.url}" alt="Blog image" class="merlode-item" onclick="openModal('${item.url}', 'image')">`)
                            : ''}
                    </div>`;
        }).join('')}
    </div>
    <div class="slider-navigation">
    <a class="prev" onclick="changeSlide('${uniqueId}', -1)">&#10094;</a>
    <a class="next" onclick="changeSlide('${uniqueId}', 1)">&#10095;</a>
    </div>
    `;
    } else if (contentType === "image" || contentType === "video") {
        const mediaType = blogItem.src.contenu[0];
        if (mediaType.media === "video") {
            contentHtml = `
                <video controls class="media" onclick="openModal('${mediaType.url}', 'video')" style="cursor: pointer;">
                    <source src="${mediaType.url}" type="video/mp4">
                    Votre navigateur ne supporte pas la vidéo.
                </video>`;
        } else if (mediaType.media === "image") {
            contentHtml = `<img class="media" src="${mediaType.url}" alt="Blog image" onclick="openModal('${mediaType.url}', 'image')" style="cursor: pointer;">`;
        }
    } else if (contentType === "embed") {
        contentHtml = blogItem.src.contenu[0].url;
    }

    return contentHtml;
}

export function renderBlog(select_lang, startIndex, direction, spin = false) {
    const container = document.getElementById(`blog-container-${select_lang}`);

    if (spin) {
        container.classList.add('spin');
    } else {
        container.classList.add(`slide-out-${direction}`);
    }
    container.classList.remove('show');
    
    setTimeout(() => {
        container.innerHTML = "";

        const sortedBlog = [...blog[select_lang]].sort((a, b) => b.id - a.id);
        const blogList = sortedBlog.slice(startIndex, startIndex + articlesPerLoad);

        blogList.forEach(blogItem => {
            const contentHtml = getContentHtml(blogItem);

            const blogHtml = `
                <div class="blog-box">
                    <div class="author">
                        <img src="${blogItem.author.icon}" alt="">
                        <p class="name">${blogItem.author.name}</p>
                        <p class="date">${blogItem.date}</p>
                    </div>
                    <h1>${blogItem.title}</h1>
                    ${blogItem.description.map(desc => `<p>${desc}</p>`).join('')}
                    ${contentHtml}
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

function loadMoreProjects(select_lang) {
    const totalItems = blog[select_lang].length;
    const maxIndex = Math.max(totalItems - articlesPerLoad, 0);
    let startIndex = currentsPage[select_lang] + articlesPerLoad;

    if (currentsPage[select_lang] >= maxIndex) {
        renderBlog(select_lang, 0, 'right', true);
        currentsPage[select_lang] = 0;
    } else {
        renderBlog(select_lang, startIndex, 'right');
        currentsPage[select_lang] = startIndex;
    }
    
    updateButtonsVisibility(select_lang);
}

function showLessProjects(select_lang) {
    let startIndex = Math.max(currentsPage[select_lang] - articlesPerLoad, 0);

    if (currentsPage[select_lang] === 0) {
        const totalItems = blog[select_lang].length;
        startIndex = Math.max(totalItems - articlesPerLoad, 0);
        renderBlog(select_lang, startIndex, 'left', true);
        currentsPage[select_lang] = startIndex;
    } else {
        renderBlog(select_lang, startIndex, 'left');
        currentsPage[select_lang] = startIndex;
    }
    
    updateButtonsVisibility(select_lang);
}

export function updateButtonsVisibility(select_lang) {
    const totalItems = blog[select_lang].length;
    const totalPages = Math.ceil(totalItems / articlesPerLoad);

    const loadMoreButton = document.getElementById(`add_${select_lang}`);
    const showLessButton = document.getElementById(`remove_${select_lang}`);

    if (totalPages <= 1) {
        loadMoreButton.style.display = 'none';
        showLessButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = currentsPage[select_lang] >= totalItems - articlesPerLoad ? 'none' : 'block';
        showLessButton.style.display = currentsPage[select_lang] <= 0 ? 'none' : 'block';
    }
}

window.changeSlide = function(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.getElementsByClassName('media-slide');
    let currentSlideIndex = -1;

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].innerHTML.trim() !== '') {
            currentSlideIndex = i;
            break;
        }
    }

    let newSlideIndex = currentSlideIndex + direction;
    if (newSlideIndex >= slides.length) {
        newSlideIndex = 0;
    } else if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].innerHTML = '';

    if (slides[newSlideIndex].getAttribute('data-media') === 'video') {
        slides[newSlideIndex].innerHTML = `<video class="merlode" onclick="openModal('${slides[newSlideIndex].getAttribute('data-url')}', 'video')" controls>
                                                <source src="${slides[newSlideIndex].getAttribute('data-url')}" type="video/mp4">
                                                Votre navigateur ne supporte pas la vidéo.
                                            </video>`;
    } else if (slides[newSlideIndex].getAttribute('data-media') === 'image') {
        slides[newSlideIndex].innerHTML = `<img src="${slides[newSlideIndex].getAttribute('data-url')}" alt="Blog image" class="merlode-item" onclick="openModal('${slides[newSlideIndex].getAttribute('data-url')}', 'image')">`;
    }
};

window.openModal = function(mediaUrl, mediaType) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    let mediaElement;
    if (mediaType === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = mediaUrl;
    } else if (mediaType === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = mediaUrl;
        mediaElement.controls = true;
    }

    mediaElement.classList.add('modal-content');

    modal.appendChild(mediaElement);

    modal.onclick = () => {
        document.body.removeChild(modal);
    };

    document.body.appendChild(modal);
};

document.getElementById('add_fr').addEventListener('click', () => loadMoreProjects('fr'));
document.getElementById('remove_fr').addEventListener('click', () => showLessProjects('fr'));

document.getElementById('add_en').addEventListener('click', () => loadMoreProjects('en'));
document.getElementById('remove_en').addEventListener('click', () => showLessProjects('en'));

document.getElementById('add_de').addEventListener('click', () => loadMoreProjects('de'));
document.getElementById('remove_de').addEventListener('click', () => showLessProjects('de'));

const blog = {
    "fr": [
        { 
            "id": 1,
            "author": {
                "name": "Empereur Licorne",
                "icon": "assets/import/blog/author/empereur_licorne.png"
            },
            "src": {
                "type": "image",
                "contenu": [
                    {
                        "media": "image",
                        "url": "assets/import/blog/img/soon.jpg"
                    }
                ]
            },
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
            "src": {
                "type": "image",
                "contenu": [
                    {
                        "media": "image",
                        "url": "assets/import/blog/img/soon.jpg"
                    }
                ]
            },
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
            "src": {
                "type": "image",
                "contenu": [
                    {
                        "media": "image",
                        "url": "assets/import/blog/img/soon.jpg"
                    }
                ]
            },
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
};