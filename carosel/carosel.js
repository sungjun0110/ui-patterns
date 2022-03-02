const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const contentElm = document.getElementById('pane-content');
const imgElm = document.getElementById('pane-image');

const imgUrls = [
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-spiderman_07d3549c.png?region=0%2C0%2C86%2C280',
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-spidergwen_3c31e3c6.png?region=0%2C0%2C136%2C280',
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-kidarachnid_a8655aec.png?region=0%2C0%2C118%2C280',
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-spidergirl_744bebb7.png?region=0%2C0%2C125%2C280',
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-protosuit_0972ddd7.png?region=0%2C0%2C98%2C280',
    'https://lumiere-a.akamaihd.net/v1/images/spiderman-characterpose-symbiotesuit_b9b95e2f.png?region=0%2C0%2C134%2C280'
]

const contents = [
    "The bite from a radioactive spider granted Peter Parker amazing arachnid-like powers. After losing his beloved Uncle Ben to a burglar, grief- stricken Peter vowed to use his incredible abilities to protect his city as the Amazing Spider-Man. Peter’s trials taught him an invaluable lesson: with great power, there must also come great responsibility.",
    'In an alternate universe, a twist of fate caused Midtown High student Gwen Stacy to receive the bite of a radioactive spider instead of Peter Parker, granting her amazing arachnid-like abilities. Dubbed Spider-Woman by the media, Stacy donned a unique costume and endeavored to exploit her newfound talents for personal gain and attention. However, when Parker, desperate to be "special" like his new idol Spider-Woman, died in a tragic lab experiment gone wrong, Stacy learned that with great power there must also come great responsibility. Now she uses her powers to protect the innocent, balancing her life as Spider-Woman with the challenges of teenage life.',
    "Hailing from an alternate world in which Peter Parker sacrificed his life to protect the city, Miles Morales inherited the mantle (and powers) of Spider-Man when he was similarly bitten by a genetically altered spider. Though his predecessor's tragic departure left a pair of heroically large shoes to fill, Morales is up to the task, knowing that with great power there must also come great responsibility.",
    "Teenager Anya Corazon was granted amazing spider-like powers after a freak accident. Deciding to use her newfound abilities to help protect the city, she joins the growing community of arachnid-based heroes as the new Spider-Girl.",
    "During the early days when Peter Parker pledged his life to becoming the heroic Spider-Man, he knew a costume would be key to his new persona. Scraping together a design from what garments and gear he could muster, Parker ventured forth as Spider-Man for the first time in this functional, if not entirely fashionable, proto-suit.",
    "When Spider-Man first donned this slick black suit of unknown origin, he couldn't believe his luck. The new costume not only enhanced his already tremendous spider-strength, it could actually reshape itself based on his mental commands, mimicking civilian clothing and providing an unlimited source of webbing. He soon discovered the chilling truth, however: the costume was in fact a living entity, which wished to permanently bond with and take over his body! Spider-Man quickly shed the symbiotic being, though it would later return in the form of one of his most dangerous foes - Venom!"
]

let cursor = 0;

nextBtn.addEventListener('click', () => {
    btnHandler(1);
})

prevBtn.addEventListener('click', () => {
    btnHandler(-1);
})

function btnHandler(x) {
    cursor += x;
    if (cursor >= imgUrls.length) {
        cursor = imgUrls.length - 1;
    } else if (cursor < 0) {
        cursor = 0;
    }
    btnEndHandler();
    imgElm.setAttribute('src', imgUrls[cursor]);
    contentElm.innerText = contents[cursor];
}

function btnEndHandler() {
    if (cursor === imgUrls.length - 1) nextBtn.classList.add('end');
    else if (cursor === 0) prevBtn.classList.add('end');
    else {
        nextBtn.classList.remove('end');
        prevBtn.classList.remove('end');
    }
}