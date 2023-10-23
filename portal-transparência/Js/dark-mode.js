const classes = [
    ".navbar-search",
    ".label-chk",
    ".rodape",
    ".eclipse",
    ".balon-acessibility",
    ".btn-btn-search",
    ".nav-container",
    ".container",
    ".offcanvas",
    ".btn-offcanvas",
    ".item-navbar",
    ".conteudo-rodape",
    ".link-rodape",
    ".box-offcanvas",
    ".link-do-offcanvas",
    ".link-do-offcanvas-bold",
    ".linha-do-offcanvas",
    ".dropdown-content-offcanvas",
    ".conteudo-o-portal",
    ".btn-drop-scroll",
    ".navbar-scroll-deitado",
    ".glide__arrow--left",
    ".glide__arrow--right",
    ".offcanvas-menu",
    ".redes-sociais",
    ".drop-scroll-lateral-content",
    ".dropdown-content-ul"
];

function applyDarkMode(classes) {
    classes.forEach(className => {
        const elements = document.querySelectorAll(className);
        elements.forEach(element => {
            element.classList.add("dark-mode");
        });
    });
}

function removeDarkMode(classes) {
    classes.forEach(className => {
        const elements = document.querySelectorAll(className);
        elements.forEach(element => {
            element.classList.remove("dark-mode");
        });
    });
}

const isDarkMode = localStorage.getItem("darkMode") === "true";

if (isDarkMode) {
    chk.checked = true;
    applyDarkMode(classes);
} else {
    chk.checked = false;
    removeDarkMode(classes);
}

chk.addEventListener('change', () => {
    if (chk.checked) {
        applyDarkMode(classes);
        // Salve o estado atual do interruptor no localStorage
        localStorage.setItem("darkMode", "true");
    } else {
        removeDarkMode(classes);
        // Salve o estado atual do interruptor no localStorage
        localStorage.setItem("darkMode", "false");
    }
})



// const chk = document.getElementById("chk");
// const navSearch = document.querySelector(".navbar-search");
// const labelChk = document.querySelector(".label-chk");
// const rodape = document.querySelector(".rodape");
// const balonAcessibility = document.querySelector(".balon-acessibility");
// const btnSearch = document.querySelector(".btn-btn-search");
// const navComLinks = document.querySelector(".nav-container");
// const container = document.querySelector(".container");
// const offcanvas = document.querySelector(".offcanvas");
// const btnOffcanvas = document.querySelector(".btn-offcanvas");
// const itemNavComLinks = document.querySelectorAll(".item-navbar");
// const conteudoRodape = document.querySelectorAll(".conteudo-rodape");
// const liknRodape = document.querySelectorAll(".link-rodape");
// const eclipse = document.querySelectorAll(".eclipse");
// const boxOffcanvas = document.querySelectorAll(".box-offcanvas");
// const linkDoOffcanvas = document.querySelectorAll(".link-do-offcanvas");
// const linkDoOffcanvasBold = document.querySelectorAll(".link-do-offcanvas-bold");
// const linhaDoOffcanvas = document.querySelectorAll(".linha-do-offcanvas");
// const dropdownContentOffcanvas = document.querySelectorAll(".dropdown-content-offcanvas");


// function applyDarkMode() {

//     navSearch.classList.toggle("dark-mode");
//     rodape.classList.toggle("dark-mode");
//     balonAcessibility.classList.toggle("dark-mode");
//     btnSearch.classList.toggle("dark-mode");
//     navComLinks.classList.toggle("dark-mode");
//     itemNavComLinks.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     conteudoRodape.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     liknRodape.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     eclipse.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     container.classList.toggle("dark-mode");
//     labelChk.classList.toggle("dark-mode");
//     offcanvas.classList.toggle("dark-mode");
//     boxOffcanvas.forEach (item => {
//         item.classList.toggle("dark-mode");
//     });
//     linkDoOffcanvas.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     linkDoOffcanvasBold.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     linhaDoOffcanvas.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     dropdownContentOffcanvas.forEach(item => {
//         item.classList.toggle("dark-mode");
//     });
//     btnOffcanvas.classList.toggle("dark-mode");

// }

// function removeDarkMode() {
//     navSearch.classList.remove("dark-mode");
//     rodape.classList.remove("dark-mode");
//     balonAcessibility.classList.remove("dark-mode");
//     btnSearch.classList.remove("dark-mode");
//     navComLinks.classList.remove("dark-mode");
//     itemNavComLinks.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     conteudoRodape.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     liknRodape.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     eclipse.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     container.classList.remove("dark-mode");
//     labelChk.classList.remove("dark-mode");
//     offcanvas.classList.remove("dark-mode");
//     boxOffcanvas.forEach (item => {
//         item.classList.remove("dark-mode");
//     });
//     linkDoOffcanvas.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     linkDoOffcanvasBold.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     linhaDoOffcanvas.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
//     dropdownContentOffcanvas.forEach(item => {
//         item.classList.remove("dark-mode");
//     });
    
// }

// const isDarkMode = localStorage.getItem("darkMode") === "true";

// if (isDarkMode) {
//     chk.checked = true;
//     applyDarkMode();
// } else {
//     chk.checked = false;
//     removeDarkMode();
// }

// chk.addEventListener('change', () => {
//     if (chk.checked) {
//         applyDarkMode();
//         // Salve o estado atual do interruptor no localStorage
//         localStorage.setItem("darkMode", "true");
//     } else {
//         removeDarkMode();
//         // Salve o estado atual do interruptor no localStorage
//         localStorage.setItem("darkMode", "false");
//     }
    
// })

