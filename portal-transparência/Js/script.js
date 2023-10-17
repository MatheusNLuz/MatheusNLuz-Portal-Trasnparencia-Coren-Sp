// Botao Menu de Hamburg

const openBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.btn-close');
const offCanvas = document.querySelector('.offcanvas-menu');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    offCanvas.classList.add('active');
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    offCanvas.classList.remove('active')
})

// Dropdown do rodape

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe ".dropbtn"
    var dropbtns = document.querySelectorAll(".dropbtn");

    // Para cada elemento ".dropbtn", adiciona o evento de clique
    dropbtns.forEach(function (dropbtn) {
        dropbtn.addEventListener("click", function () {
            // Encontre o elemento ".dropdown-content" correspondente ao botão clicado
            var dropdownContent = dropbtn.nextElementSibling;

            // Verifique se o elemento possui a classe "show" e adicione/remova a classe conforme necessário
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            } else {
                // Fecha todos os menus suspensos antes de abrir o que foi clicado
                closeAllDropdowns();
                dropdownContent.classList.add("show");
            }
        });
    });

    // Função para fechar todos os menus suspensos
    function closeAllDropdowns() {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdownContent) {
            dropdownContent.classList.remove("show");
        });
    }
});

// Offcanvas do mapa do portal 

document.getElementById("mapa-do-portal").addEventListener("click", () =>{
    document.body.classList.add("offcanvas-aberto-body"); // Adiciona a classe para desativar a rolagem do corpo
    document.getElementById("overlay").style.display = "block";
    document.getElementById("offcanvas").classList.add("aberto");
});

// Função para fechar o offcanvas quando o botão "Fechar" é clicado
document.getElementById("fechar-offcanvas").addEventListener("click", fecharOffcanvas);

// Função para fechar o offcanvas quando o overlay é clicado
document.getElementById("overlay").addEventListener("click", fecharOffcanvas);

function fecharOffcanvas() {
    document.body.classList.remove("offcanvas-aberto-body"); // Remove a classe para ativar a rolagem do corpo
    document.getElementById("overlay").style.display = "none";
    document.getElementById("offcanvas").classList.remove("aberto");
}

// Selecionar todos os elementos com a classe "dropdown-toggle"
var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Adicionar evento de clique a cada elemento "dropdown-toggle"
dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        var dropdownContent = toggle.nextElementSibling;
        var icon = toggle.querySelector('i'); // Seleciona o ícone dentro do elemento de toggle

        if (dropdownContent.classList.contains('open')) {
            dropdownContent.classList.remove('open');
            icon.classList.remove('rotate-up'); // Remove a classe de rotação
        } else {
            closeAllDropdowns();
            dropdownContent.classList.add('open');
            icon.classList.add('rotate-up'); // Adiciona a classe de rotação
        }
    });
});

// Função para fechar todos os dropdowns abertos
function closeAllDropdowns() {
    var openDropdowns = document.querySelectorAll('.dropdown-content-offcanvas.open');
    openDropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('open');
        var icon = dropdown.previousElementSibling.querySelector('i');
        icon.classList.remove('rotate-up'); // Remove a classe de rotação dos ícones dos dropdowns fechados
    });
}
