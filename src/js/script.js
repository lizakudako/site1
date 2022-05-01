window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main_block_menu_list'),
    menuItem = document.querySelectorAll('.main_block_menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main_block_menu_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main_block_menu_list_active');
        })
    })
})