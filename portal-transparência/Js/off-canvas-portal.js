const openBtnDoPortal = document.querySelector('.menu-toggle-do-portal');
const closeBtnDoPortal = document.querySelector('.btn-close-portal');
const offCanvasDoPortal = document.querySelector('.offcanvas-menu-portal');

openBtnDoPortal.addEventListener('click', (e) => {
    e.preventDefault();
    offCanvasDoPortal.classList.add('active');
})

closeBtnDoPortal.addEventListener('click', (e) => {
    e.preventDefault();
    offCanvasDoPortal.classList.remove('active')
})

