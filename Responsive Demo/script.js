const sideNav = document.querySelector('.sideNav');
const contextMenu = document.querySelector('.main-content__content__context-menu');

const sideNavCollapseButton = sideNav.querySelector('.menu_collapse_btn');
const contextMenuCollapseButton = contextMenu.querySelector('.menu_collapse_btn');

console.log(sideNavCollapseButton);

sideNavCollapseButton.addEventListener('click', (e) => {
    let menu = sideNav;
    menu.classList.toggle('collapsed-sideNav-menu');
})
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === "/") {
        let menu = sideNav;
        menu.classList.toggle('collapsed-sideNav-menu');
    }
})

contextMenuCollapseButton.addEventListener('click', (e) => {
    contextMenu.classList.toggle('collapsed-context-menu-1')
    let menu = contextMenu.querySelector('.main-content__content__context-menu-wrapper');
    menu.classList.toggle('collapsed-context-menu');
    let footer = contextMenu.querySelector('.main-content__content__context-menu__footer');
    footer.classList.toggle('collapsed');
})

const sideNavMenuItems = document.querySelectorAll('.sideNav__menu__item__label');
console.log(sideNavMenuItems);

// function showToolTip(elements){
//     elements.forEach((el)=>{
//         el.addEventListener('hover',()=>{
//             let toolTip = document.createElement('div.test');
//             toolTip.style.position = "absolute";
//         })
//     })
// }