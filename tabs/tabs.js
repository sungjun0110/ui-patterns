const tabs = document.getElementsByClassName('tab');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        activeHandler(i);
    })
}

// remove .active from other tabs
function activeHandler(n) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    tabs[n].classList.add('active');
}