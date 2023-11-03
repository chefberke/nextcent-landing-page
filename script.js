const menu = document.querySelector('.nav-menu span');

function onClickMenu() {    
    const menuInside = document.querySelector('.nav-menu-inside');

    menuInside.classList.toggle('hidden')
};

// eventListener
menu.addEventListener('click', onClickMenu);