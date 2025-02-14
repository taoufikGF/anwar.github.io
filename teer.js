document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("moving-text");
    let position = -100;
    let direction = 1;

    function moveText() {
        position += direction;
        text.style.left = position + "%";

        if (position > 100) {
            position = -100;
        }

        requestAnimationFrame(moveText);
    }

    moveText();
});