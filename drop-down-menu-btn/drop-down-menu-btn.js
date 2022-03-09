const container = document.getElementById('container');
const menuBtn = document.getElementById('menu-btn');
const btnBackground = document.getElementsByClassName('btn-background')[0];
const menuDiv = document.getElementsByClassName('dropdown-content')[0];
const menuArr = document.getElementsByTagName('a');

container.addEventListener('mouseleave', () => {
    deactiveHandler();
})

menuBtn.addEventListener('mouseenter', () => {
    menuActiveHandler();
    btnBackgroundHandler();
})

function menuActiveHandler() {
    menuDiv.classList.toggle('show');
}

function btnBackgroundHandler() {
    btnBackground.classList.toggle('active');
}

function deactiveHandler() {
    menuActiveHandler();
    btnBackgroundHandler();
}