const tabElms = document.getElementsByClassName('tab');

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', (tab) => {
        openHandler(tab.target.nextElementSibling);
    })
}

function openHandler(pane) {
    pane.classList.toggle('closed');
}
