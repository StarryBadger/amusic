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
  
  if (window.location.href.includes("AlbumsEminem.html") || window.location.href.includes("AlbumsImagineDragons.html") || window.location.href.includes("AlbumsLinkinPark.html") || window.location.href.includes("AlbumsTheBeatles.html") || window.location.href.includes("AlbumsGregory.html")) {
    window.onload = typewriterEffect;
  }
  

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
            <li><a href="spotlight.html" id="hoverColor">Spotlight</a></li>
            <li><a href="search.html" id="hoverColor">Search</a></li>
            <li><a href="about.html" id="hoverColor">About</a></li>
        </ul>
    </nav>
    `;
}
const navBar = generateNavBar();
document.write(navBar);
// Get a reference to the image element
const image = document.querySelector('.logo_hover');
const currentUrl = window.location.href;
let newImageUrl;
if (currentUrl.includes('spotlight.html')) {
    newImageUrl = 'LogoSpotlight.png';
} else {
    newImageUrl = 'LogoSmile.png';
}
image.src = newImageUrl;
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
                <img class="logo_main" src="LogoSmile.png" alt="My Logo" width="200" height="100">
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

//zoomSpotlight
if (window.location.pathname.includes('spotlight.html')) {
    const mg = document.getElementById('melloZoom');
    let isZoomed = false;

    setInterval(() => {
        if (isZoomed) {
            mg.style.transform = 'scale(1.04)';
            mg.style.transition = '1.5s ease-out';
            isZoomed = false;
        } else {
            mg.style.transform = 'scale(1.4)';
            mg.style.transition = '1.5s ease-out';
            isZoomed = true;
        }
    }, 2500);
}


// spotlight fade-in
// const elementSpotlight = document.querySelector('.fade-in');
// elementSpotlight.classList.add('active');
//fade in for spotlight feature somehow interferes with search.html results so disabled. to enable,
//also uncomment fade-in and fade-in: active in css

// //spotlight countdown
if (window.location.pathname.includes('spotlight.html')) {
    const countdownDate = new Date("May 30, 2023 00:00:00").getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const timer = document.getElementById("countdown-timer");
        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            timer.innerHTML = "EXPIRED";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
}

function generateaudioprev(link, album, trackname, artistname) {
    return `
   <div class="searchsongbox">
   <div style="display: flex; align-items: center;">
       <!-- <div style="font-size: 18px; color: white; margin-right: 10px;">1</div> -->
       <img src="${album}" style="border-radius: 10px; width: 130px">
       <div style="flex: 1; text-align: center; color: white; font-size: 18px;">${trackname}</div>
       <div style="font-size: 18px; color: white; margin-left: 10px;">${artistname}</div>
   </div>
   <br>
   <div style="margin: 0 auto;">
   <audio controls>
   <source src="${link}" type="audio/mpeg">
   Your browser does not support the audio tag.
   </audio> 
   </div>
   </div>
   <br><br>
   `
}
function generateerror() {
    return `
    <br><br>
   <h2 style="color:white;text-align:center">Oops! No result found</h2>
   `
}
if (window.location.pathname.includes('search.html')) {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type=text]');
    const resultsContainer = document.querySelector('#results-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchTerm = input.value.trim();

        if (searchTerm !== '') {
            const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=musicTrack&explicit=no&limit=10`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    console.log(url);
                    var htmlcode;
                    if (data.results.length === 0) {
                        resultsContainer.innerHTML = generateerror();
                    }
                    else {
                        for (let i = 0; i < data.results.length; i++) {
                            const link = data.results[i].previewUrl;
                            const album = data.results[i].artworkUrl100;
                            const trackname = data.results[i].trackName;
                            const artistname = data.results[i].artistName;

                            if (i === 0) {
                                htmlcode = generateaudioprev(link, album, trackname, artistname);
                            } else {
                                htmlcode += generateaudioprev(link, album, trackname, artistname);
                            }
                        }
                        resultsContainer.innerHTML = htmlcode;
                    }
                })
        }
    })
}

