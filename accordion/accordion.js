const tabElms = document.getElementsByClassName('tab');

let cursor;

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', () => {
        openHandler(i);
    })
}

function openHandler(i) {
    if (cursor === i) {
        closeAllTabs();
        closeAllArrows();
    } else {
        closeAllTabs();
        closeAllArrows();
        openTab(i);
        openArrow(i);
    } 
}

function closeAllTabs() {
    for (let i = 0; i < tabElms.length; i++) {
        tabElms[i].nextElementSibling.classList.add('closed');
    }
}

function openTab(i) {
    tabElms[i].nextElementSibling.classList.remove('closed');
    cursor = i;
}

function closeAllArrows() {
    for (let i = 0; i < tabElms.length; i++) {
        tabElms[i].childNodes[1].classList.add('closed');
    }
}

function openArrow(i) {
    tabElms[i].childNodes[1].classList.remove('closed');
}