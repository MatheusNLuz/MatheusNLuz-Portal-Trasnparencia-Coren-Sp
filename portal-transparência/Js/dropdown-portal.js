// Obtém todos os botões de dropdown e seus respectivos contêineres dropdown
const dropdownButtons = document.querySelectorAll('.btn-drop-scroll');
const dropdownContainers = document.querySelectorAll('.dropdown-container');
let openedDropdown = null; // Armazena o dropdown atualmente aberto


// Adiciona um ouvinte de eventos a cada botão de dropdown
dropdownButtons.forEach((button) => {
    button.addEventListener('click', function () {

        verificaAberturaDosDrops(button);
        
    });
});

const dropdownLinks = document.querySelectorAll('.link-do-drop-scroll');
const dropdownListas = document.querySelectorAll('.dropdown-content-ul');
let openedDropdownLink = null;


dropdownLinks.forEach((links) => {
    links.addEventListener('click', function () {

        verificaAberturaDosDropsDentroDosDrops(links);

    })
})

function verificaAberturaDosDrops(button) {


    

    // Se o mesmo botão for clicado novamente, fecha o dropdown
    if (openedDropdown && openedDropdown.triggerButton === button) {
        openedDropdown.container.classList.remove('show-dropdown');
        if (openedDropdownLink) {
            openedDropdownLink.containerLista.classList.remove('ativo');
        }
        openedDropdown = null;
    } else {
        // Fecha o dropdown anterior se houver um aberto
        if (openedDropdown) {
            openedDropdown.container.classList.remove('show-dropdown');
            if (openedDropdownLink) {
                openedDropdownLink.containerLista.classList.remove('ativo');
            }
        }

        document.addEventListener('click', function (event) {
            // Verifica se o clique foi em um botão de dropdown ou em um item interno
            const isDropdownButton = event.target.matches('.btn-drop-scroll');
            const isDropdownItem = event.target.matches('.link-do-drop-scroll');

            if (!isDropdownButton && !isDropdownItem && openedDropdown && openedDropdown.container) {
                openedDropdown.container.classList.remove('show-dropdown');
                openedDropdown = null;
            }
        });


        // Obtém o ID do dropdown associado a este botão
        const dropdownId = button.getAttribute('data-dropdown-id');
        // Encontra o contêiner dropdown correspondente pelo ID
        const dropdownContainer = document.querySelector(`#${dropdownId}`);

        // Calcula a posição do botão de dropdown
        const buttonRect = button.getBoundingClientRect();
        const buttonTop = buttonRect.top + window.scrollY;
        const buttonLeft = buttonRect.left + window.scrollX;

        // Posiciona o contêiner dropdown ao lado do botão de dropdown
        dropdownContainer.style.top = `${buttonTop + buttonRect.height}px`;
        dropdownContainer.style.left = `${buttonLeft}px`;

        // Exibe o contêiner dropdown
        dropdownContainer.classList.add('show-dropdown');

        // Atualiza o dropdown atualmente aberto
        openedDropdown = {
            container: dropdownContainer,
            triggerButton: button
        };
    }
}

function verificaAberturaDosDropsDentroDosDrops(links) {


    if (openedDropdownLink && openedDropdownLink.triggerButton === links) {
        openedDropdownLink.containerLista.classList.remove('ativo');
        openedDropdownLink = null;
    } else {
        if (openedDropdownLink) {
            openedDropdownLink.containerLista.classList.remove('ativo');
        }

        document.addEventListener('click', function (event) {
            event.preventDefault();
            const isDropdownLink = event.target.matches('.link-do-drop-scroll');

            if (!isDropdownLink && openedDropdownLink && openedDropdownLink.containerLista) {
                openedDropdownLink.containerLista.classList.remove('ativo');
                openedDropdownLink = null;
            }
        })

        const dropdownIdLista = links.getAttribute('data-dropdown-lista');

        const dropdownLista = document.querySelector(`#${dropdownIdLista}`);

        const linkRect = links.getBoundingClientRect();
        const linkTop = linkRect.top;
        const linkLeft = linkRect.left;
        const linkWidth = linkRect.width;

        dropdownLista.style.top = `${linkTop}px`
        dropdownLista.style.left = `${linkLeft + linkWidth}px`

        dropdownLista.classList.add('ativo');

        openedDropdownLink = {
            containerLista: dropdownLista,
            triggerButton: links
        };
    }
}