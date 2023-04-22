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
function generateaudioprev(link) {
   return ` <audio controls>
    <!-- <source src="horse.ogg" type="audio/ogg"> -->
    <source src=${link} type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>
  <br><br> `
}
const footerJS = generateFooter();
document.write(footerJS);

const form = document.querySelector('form');
const input = document.querySelector('input[type=text]');
const resultsContainer = document.querySelector('#results-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = input.value.trim();

  if (searchTerm !== '') {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&limit=10`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        var htmlcode;
        const link = data.results[0].previewUrl;
        for (let i = 0; i < data.results.length; i++) {
            const link = data.results[i].previewUrl;
            htmlcode += generateaudioprev(link);
          } 
        resultsContainer.innerHTML = htmlcode;
        // resultsContainer.innerHTML = 
        })
    }
  })

