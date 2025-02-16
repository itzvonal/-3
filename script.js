function yesClick() {
    alert("YAY! ILY Em<3 😘💕");
    document.body.innerHTML = "<h1>YAY! Em<3 is mine now 😈💕💞</h1>";
}

function moveNo() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    document.getElementById("noButton").style.left = x + "px";
    document.getElementById("noButton").style.top = y + "px";
}
