const tileElms = document.getElementsByClassName('tile');
const buttonElms = document.getElementsByTagName('button');
const pageElem = document.getElementsByClassName('page');

for (let i = 0; i < tileElms.length; i++) {
    tileElms[i].addEventListener('click', () => {
        clickHandler(pageElem[i]);       
    })
}

for (let i = 0; i < buttonElms.length; i++) {
    buttonElms[i].addEventListener('click', (event) => {
        closePage(pageElem[i], event);
    })
}

function clickHandler(page) {
    page.classList.add('active');
}

function closePage(page, event) {
    event.stopPropagation();
    page.classList.remove('active');
}