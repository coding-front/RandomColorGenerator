let change = document.getElementById("btnChange");
let background = document.querySelector(".background");
let preview = document.querySelector(".preview");
let hex = document.querySelector(".hex");
let chars = '0123456789abcdef';

change.addEventListener("click",() =>{
    let randomNumber = "";
    for (let i = 0; i < 6; i++) {
        randomNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    background.style.backgroundColor = `#${randomNumber}`;
    preview.style.backgroundColor = `#${randomNumber}`;
    hex.innerText = `#${randomNumber}`;
});
