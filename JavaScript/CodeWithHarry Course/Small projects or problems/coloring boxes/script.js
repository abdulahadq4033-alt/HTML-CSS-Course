function changeColor() {
    const colors = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = changeColor();
});