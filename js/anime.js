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
        'kiss',
        'pat',
        'happy',
        'dance',
        'poke',
        'slap',
        'nom',

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
