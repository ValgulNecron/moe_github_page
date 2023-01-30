async function getIMG() {
    const endpoints = [
        'https://anime-api.hisoka17.repl.co/img/hug',
        'https://anime-api.hisoka17.repl.co/img/kiss',
        'https://anime-api.hisoka17.repl.co/img/punch',
        'https://anime-api.hisoka17.repl.co/img/slap',
        'https://anime-api.hisoka17.repl.co/img/wink',
        'https://anime-api.hisoka17.repl.co/img/pat',
        'https://anime-api.hisoka17.repl.co/img/kill',
        'https://anime-api.hisoka17.repl.co/img/cuddle',
        'https://anime-api.hisoka17.repl.co/img/waifu'
    ];
    let randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
    let response = await fetch(`https://web-production-0ec5.up.railway.app/${randomEndpoint}`);
    let json = await response.json();
    let img = document.createElement("img");
    img.src = json.url;
    let container = document.getElementById("image-container");
    container.appendChild(img);
}

getIMG();
