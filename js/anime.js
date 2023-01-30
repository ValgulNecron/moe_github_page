async function getIMG() {
let response = await fetch('https://web-production-0ec5.up.railway.app/https://anime-api.hisoka17.repl.co/img/waifu');
    let json = await response.json();
    let img = document.createElement("img");
    img.src = json.url;
    let container = document.getElementById("image-container");
    container.appendChild(img);
}

getIMG();
