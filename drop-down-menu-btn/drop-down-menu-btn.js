const container = document.getElementById('container');
const menuBtn = document.getElementById('menu-btn');
const btnBackground = document.getElementsByClassName('btn-background')[0];
const dropdownMenu = document.getElementById('dropdown-menu');
const menuDiv = document.getElementsByClassName('dropdown-content')[0];
const menuArr = document.getElementsByTagName('a');

container.addEventListener('mouseleave', () => {
    deactiveHandler();
})

menuBtn.addEventListener('mouseenter', () => {
    menuActiveHandler();
    btnBackgroundHandler('active');
})

function menuActiveHandler() {
    menuDiv.classList.toggle('show');
    setTimeout(() => {
        menuDiv.classList.toggle('open');
    }, 250);
}

function btnBackgroundHandler(status) {
    btnBackground.classList.toggle('active');
    if (status === 'active') {
        setTimeout(() => {
            dropdownMenu.style.height = '9.5em';
        }, 50);
    } else {
        dropdownMenu.style.height = '0em';
    }
}

function deactiveHandler() {
    menuActiveHandler();
    btnBackgroundHandler();
}

// for (let i = 0; i < menuArr.length; i++) {
//     menuArr[i].addEventListener('')
// }