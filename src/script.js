function typewriterEffect() {
    const element = document.getElementById("typing-effect");
    const text = element.innerHTML;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.innerHTML += text.charAt(i);
        }, i * 75);
    }
}
window.onload = typewriterEffect;
function changeColor(element) {
    if (element.style.color === "pink") {
        element.style.color = "white";
    } else {
        element.style.color = "pink";
    }
}