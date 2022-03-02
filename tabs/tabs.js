const imgUrls = [
    'https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-ironman_30193360.png?region=0%2C0%2C138%2C280', 
    'https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-captainamerica_4f97efbc.png?region=0%2C0%2C132%2C280', 
    'https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-thor_6f50eecc.png?region=0%2C0%2C164%2C280', 
    'https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-hulk_0da2ef22.png?region=0%2C0%2C174%2C280'
]

const contents = [
    "When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world's greatest fighting machine. Tony has primed his ultra modern creation for waging state of the art campaigns, attaining sonic flight, and defending the greater good! He is the Armored Avenger - driven by a heart that is part machine, but all hero! He is the INVINCIBLE IRON MAN!",
    "During WWII, the patriotic Steve Rogers was offered a place in the military's top operation: Rebirth. Injected with an experimental super-serum, Rogers emerged from the treatment with heightened endurance, strength, and reaction time. With extensive training and an indestructible Vibranium shield, Rogers soon became the country's ultimate weapon: CAPTAIN AMERICA! Though frozen in ice during a climactic battle toward the end of the war, Rogers was discovered and revived decades later. Now the living legend continues the war against evil in modern times as a member of The Avengers!",
    "Nordic legend tells the tale of the son of Odin, the heir to the throne of Asgard - he is THOR, renowned as the mightiest hero of mythology! Thor's strength, endurance, and quest for battle are far greater than his Asgardian brethren. The mighty Thor wields an enchanted Uru hammer, Mjolnir, and is master of thunder and lightning.",
    "A massive dose of gamma radiation transformed the brilliant but meek scientist Bruce Banner's DNA, awakening the hidden, adrenaline-fed hero in his genes... HULK! A hero of few words and incredible strength, the Hulk has long been pursued by those who want to use his immense power for their own purposes, or by those who thought the Jade Giant's anger was too dangerous to be controlled. Now, as a member of the Avengers, Hulk helps smash the unimaginable threats that no Hero could face alone, hoping to at least prove to the world that he is the strongest HERO there is!"
]

const tabElms = document.getElementsByClassName('tab');
const imgElm = document.getElementById('pane-img');
const contentElm = document.getElementById('pane-content');

for (let i = 0; i < tabElms.length; i++) {
    tabElms[i].addEventListener('click', () => {
        activeHandler(i);
        imgHandler(i);
        contentHandler(i);
    })
}

// remove .active from other tabs
function activeHandler(i) {
    for (let j = 0; j < tabElms.length; j++) {
        tabElms[j].classList.remove('active');
    }
    tabElms[i].classList.add('active');
}

// change image
function imgHandler(i) {
    imgElm.setAttribute('src', imgUrls[i]);
}

// change content
function contentHandler(i) {
    contentElm.innerText = contents[i];
}