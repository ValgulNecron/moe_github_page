async function getIMG() {
    const endpoints = [
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
    let randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
    let response = await fetch(`https://api.waifu.pics/sfw/${randomEndpoint}`);
    let json = await response.json();
    let img = document.createElement("img");
    img.src = json.url;
    let container = document.getElementById("image-container");
    container.appendChild(img);
}


getIMG();
