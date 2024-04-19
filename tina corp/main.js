function changeLang() {
    var lang = document.getElementById("lang-select").value;
    if (lang === "") {
      lang = "fr";
    }
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
      if (section.getAttribute("lang") === lang) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
    document.getElementById("lang-select").value = lang;
  }

function textedit() {
    var projectBox = document.getElementById("Tina_fr")
    var projectImage = document.getElementById("Tina_fr_img")
    var projectText = document.getElementById("Tina_fr_text")

    if (window.innerWidth > 449 ) {
        projectBox.innerHTML = `
            <p>nous sommes en train de travailler sur un bot discord (public) avec de l'IA (Intelligence Artificielle) de bas niveaux.<br><br>objectifs :<br><br>1.créer un bot qui gère 80% d'un serveur discord<br>2.faire de la gestion staff, gérer ses configurations et gérer les partenariats en autonomie<br>3.faire de la sécurité anti raid</p>
            <img src="img/Tina_.png" alt="Tina"></img>
        `;
    } else {
        projectBox.innerHTML = `
            <img src="img/Tina_.png" alt="Tina">
            <p>nous sommes en train de travailler sur un bot discord (public) avec de l'IA (Intelligence Artificielle) de bas niveaux.<br><br>objectifs :<br><br>1.créer un bot qui gère 80% d'un serveur discord<br>2.faire de la gestion staff, gérer ses configurations et gérer les partenariats en autonomie<br>3.faire de la sécurité anti raid</p>
        `;
    }

    var projectBox = document.getElementById("Tina_en")
    var projectImage = document.getElementById("Tina_en_img")
    var projectText = document.getElementById("Tina_en_text")

    if (window.innerWidth > 449 ) {
        projectBox.innerHTML = `
            <p>we're working on a bot discord (public) with low-level AI (Artificial Intelligence).<br><br> objectives :<br><br>1.create a bot that manages 80% of a discord server<br> 2.manage staff, configurations and partnerships independently<br>3.making anti-raid safety</p>
            <img src="img/Tina_.png" alt="Tina"></img>
        `;
    } else {
        projectBox.innerHTML = `
            <img src="img/Tina_.png" alt="Tina">
            <p>we're working on a bot discord (public) with low-level AI (Artificial Intelligence).<br><br> objectives :<br><br>1.create a bot that manages 80% of a discord server<br> 2.manage staff, configurations and partnerships independently<br>3.making anti-raid safety</p>
        `;
    }

    var projectBox = document.getElementById("Tina_de")
    var projectImage = document.getElementById("Tina_de_img")
    var projectText = document.getElementById("Tina_de_text")

    if (window.innerWidth > 449 ) {
        projectBox.innerHTML = `
        <p id="Tina_de_text">wir arbeiten an einem (öffentlichen) Discord-Bot mit niedrigstufiger KI (Künstlicher Intelligenz).<br><br>Ziele :<br><br>1.einen Bot zu erstellen, der 80% eines Discords-Servers verwalten kann<br> 2.selbstständiges Staffmanagement betreiben, seine Konfigurationen verwalten und Partnerschaften pflegen<br>3.Erstellung einer Anti-Raid-Sicherung</p>
            <img src="img/Tina_.png" alt="Tina"></img>
        `;
    } else {
        projectBox.innerHTML = `
            <img src="img/Tina_.png" alt="Tina">
            <p id="Tina_de_text">wir arbeiten an einem (öffentlichen) Discord-Bot mit niedrigstufiger KI (Künstlicher Intelligenz).<br><br>Ziele :<br><br>1.einen Bot zu erstellen, der 80% eines Discords-Servers verwalten kann<br> 2.selbstständiges Staffmanagement betreiben, seine Konfigurationen verwalten und Partnerschaften pflegen<br>3.Erstellung einer Anti-Raid-Sicherung</p>
        `;
    }
}
window.addEventListener('resize', textedit);
textedit();