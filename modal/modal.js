const tileElms = document.getElementsByClassName('tile');
const buttonElms = document.getElementsByTagName('button');

for (let i = 0; i < tileElms.length; i++) {
    tileElms[i].addEventListener('click', (tile) => {
        clickHandler(tile);       
    })
}

for (let i = 0; i < buttonElms.length; i++) {
    buttonElms[i].addEventListener('click', (button) => {
        closePage(button.target.parentElement.parentElement);
    })
}

function clickHandler(tile) {
    console.log(tile);
    tile.target.children[1].classList.add('active');
}

function closePage(pageElem) {
    pageElem.classList.remove('active');
}