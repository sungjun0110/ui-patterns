const tabElms = document.getElementsByClassName('tab');

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', (tab) => {
        openHandler(tab);
    })
}

function openHandler(tab) {
    closeTabs();
    tab.target.nextElementSibling.classList.toggle('closed');
    arrowHandler(tab);
}

function closeTabs() {
    for (let i = 0; i < tabElms.length; i++) {
        tabElms[i].nextElementSibling.classList.add('closed');
    }
}

function arrowHandler(tab) {
    for (let i = 0; i < tabElms.length; i++) {
        tabElms[i].childNodes[1].classList.add('closed');
    }
    tab.target.childNodes[1].classList.remove('closed');
}