const endpointsWaifuPics = [
    'waifu',
    'neko',
    'shinobu',
    'megumin',
    'bully',
    'cuddle',
    'cry',
    'hug',
    'awoo',
    'kiss',
    'lick',
    'pat',
    'smug',
    'bonk',
    'yeet',
    'blush',
    'smile',
    'wave',
    'highfive',
    'handhold',
    'nom',
    'bite',
    'glomp',
    'slap',
    'kill',
    'kick',
    'happy',
    'wink',
    'poke',
    'dance',
    'cringe'
];

async function getIMG() {
    let randomEndpoint = endpointsWaifuPics[Math.floor(Math.random() * endpointsWaifuPics.length)];
    let response = await fetch(`https://api.waifu.pics/sfw/${randomEndpoint}`);
    let json = await response.json();
    let img = document.createElement("img");
    img.src = json.url;
    let container = document.getElementById("image-container");
    container.appendChild(img);
}

async function getQuote() {
    const textContainer = document.getElementById("text-container");
    fetch('https://api.animechan.io/v1/quotes/random')
        .then(response => response.json())
        .then(quote => {
            textContainer.innerText = `"${quote.data.content}" - ${quote.data.character.name} (${quote.data.anime.name})`;
        })
        .catch(error => {
            console.log(error);
            textContainer.innerText = "Error fetching quote. Please try again later.";
        });
}

getQuote();
getIMG();
