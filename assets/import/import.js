import { load_logiciels } from "./logiciels.js"
import { renderBlog, updateButtonsVisibility } from "./blog/blog.js"
import "./blog/blog.js"
import { load_projets } from "./projets.js"

var false_function = {
    "fr": {"projects": false, "logiciels": false, "blog": false},
    "de": {"projects": false, "logiciels": false, "blog": false},
    "en": {"projects": false, "logiciels": false, "blog": false}
}

function load(select_lang, sections) {
    if (!false_function[select_lang][sections]) {
        if (sections === "projects") {
            load_projets(select_lang);
        }

        if (sections === "logiciels") {
            load_logiciels(select_lang)
        }

        if (sections === "blog") {
            renderBlog(select_lang, 0, 'right');
            updateButtonsVisibility(select_lang)
        }
        false_function[select_lang][sections] = true;
    }
}

window.load = load
load(lang, "projects")