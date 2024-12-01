const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 10;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 10;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft > 0 && cactusLeft < 50 && dinoBottom < 60) {
        alert("Game Over!");
        location.reload();
    }
}, 10);
