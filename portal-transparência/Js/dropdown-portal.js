let dropToggle = document.querySelectorAll('.drop-btn-scroll-lateral')

dropToggle.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        let dropdownContentScrollLateral = toggle.nextElementSibling;

        if (dropdownContentScrollLateral.classList.contains('open')) {
            dropdownContentScrollLateral.classList.remove('open');
        } else {
            closeAllDropdownsComScrollLateral();
            dropdownContentScrollLateral.classList.add('open');
        }
    });
});

function closeAllDropdownsComScrollLateral() {
    let openDrop = document.querySelectorAll('.drop-scroll-lateral-content.open');
    openDrop.forEach((dropdown) => {
        dropdown.classList.remove('open');
    });
}
