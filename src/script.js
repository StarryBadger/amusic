//typewriter
function typewriterEffect() {
    const element = document.getElementById("typing-effect");
    const text = element.innerHTML;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.innerHTML += text.charAt(i);
        }, i * 130);
    }
}
window.onload = typewriterEffect;

//nav bar  
function generateNavBar() {
    return `
    <nav>
        <div class="logo unselectable">
            <img class="logo_main" src="Logo.png" alt="My Logo" width="200" height="100">
            <img class="logo_hover" src="LogoSmile.png" alt="My Logo" width="200" height="100">
            <h1>AMUSIC</h1>

        </div>
        <ul class="unselectable">
            
            <li><a href="index.html">Home</a></li>
            <li><a href="artists.html" id="hoverColor">Artists</a></li>
            <li><a href="about.html" id="hoverColor">About</a></li>
        </ul>
    </nav>
    `;
}
const navBar = generateNavBar();
document.write(navBar);
//hover color nav
const divs = document.querySelectorAll("a");
divs.forEach((div) => {
    div.addEventListener("mouseover", function () {
        div.style.color = "#5B8FB9";
    });
    div.addEventListener("mouseout", function () {
        div.style.color = "white";
    });
});
//footer
function generateFooter() {
    return `
    <footer>
        <div class="footer unselectable">
            <div class="logo unselectable">
                <img class="logo_main" src="Logo.png" alt="My Logo" width="200" height="100">
                <img class="logo_hover" src="LogoSmile.png" alt="My Logo" width="200" height="100">
                <h1 style="color:#5B8FB9;">AMUSIC</h1>
            </div>
            <div class="row">
            </div>
            <div class="row">
                <ul>
                    <li><a href="about.html" style="font-size: 20px;">About us</a></li>
                </ul>
            </div>
            <div class="row">
                #BashHang! Copyright © 2023 #BashHang! - All rights reserved || Designed By: Shaunak & Shreyansh
                <br><br>
            </div>
        </div>
    </footer>
    `;
}
const footerJS = generateFooter();
document.write(footerJS);

