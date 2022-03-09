const menuBtn = document.getElementById('menu-btn');
const menuDiv = document.getElementsByClassName('dropdown-content')[0];
const menuArr = document.getElementsByTagName('a');

menuBtn.addEventListener('click', () => {
    menuActiveHandler();
})

function menuActiveHandler() {
    menuDiv.classList.toggle('show');
}