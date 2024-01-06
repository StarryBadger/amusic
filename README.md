[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uO3FBJhb)
<h1>This is the Amusic by #BashHang!</h1>
<br/>
<p>First ensure that you have python3 installed on your computerall with the external libraries, namely flask and sqlite3. Then run flsk.py and follow the localhost IP Adress to access the website opens at `index.html`, the Home page of Amusic. `index.css` is the stylesheet being used for this project.

The home page contains a navigation bar which allows the user to go to the Artists page,the Spotlight Page and the Playlist Page. You can also serarch songs on the Search page, and learn more about the creators on the About Page.

There are 3 rows of Top Charts contents, listing three of each: Top Artists, Top Albums and Top Songs of the Week.
Clicking on an artist will take the user to a listing of 5 of their albums. Similarly, clicking on an album will take the user to a listing of 5 songs in the album.</p>

<h4>Hovering on the Artist and Album divs will show additional information about them!</h4>

<p>On the Navigation bar, clicking on `Artists` takes the user to the Artists page where 5 artists are listed. Clicking on an artist will take the user to a listing of 5 of their albums. Clicking on any one of these albums will take the user to a listing of 5 songs in the album. These songs are not clickable. Home, Artists or About, when displayed in pink tells the user they are on that respective page.</p>

<p>On the song pages, clicking on the <strong>+</strong> button adds a song to the playlist while clicking on the <strong>-<strong> button on the Playlist page removes it from the playlist.

<p>The Spotlight Page honours <en>Marshmello</en> and counts down the release to his new album Joytime IV</p>

<p>Clicking on `About` on the Navigation bar or 'About Us` on the website footer takes the user to a page where the names and email information of the two creators are provided along with a quick rundown on the purpose of Amusic as a music database webste.</p>
<br/>
<h3>The Files</h3>
<br/>
<p>static contains the images, CSS Javascript. templates contains the HTML files. flsk.py links these pages while createDB.py was used to create the SQL database. Album&lt;artist name&gt;.html are album pages on each artist. s&lt;Artist Number&gt;&lt;Album Name&gt; are the song pages of indiviual albums. artist&lt;Artist Number&gt; are 5 folders contain images relating to the resepctive artists, and the remaining image resources, such as Logo.png, LogoSmile.png, etc. for the logo and the background image are in the src directory itself.</p>
<br/>
<h3>Project Structure</h3>
<br/>
<pre>
├── ASSUMPTIONS.md
├── README.md
└── src
    ├── createDB.py
    ├── flsk.py
    ├── songs.db
    ├── static
    │   ├── artist1
    │   │   ├── EveningMachines.jpg
    │   │   ├── GeorgeAlan.jpg
    │   │   ├── RustColoredStones.jpeg
    │   │   ├── ThatSeaTheGambler.jpeg
    │   │   ├── TheWeatherman.jpg
    │   │   └── ThisEmptyNorthernHemisphere.jpeg
    │   ├── artist2
    │   │   ├── Encore.jpg
    │   │   ├── Kamikaze.jpg
    │   │   ├── Recovery.jpg
    │   │   ├── Relapse.jpg
    │   │   ├── Revival.png
    │   │   ├── Venom.jpeg
    │   │   └── wallpapersden.com_eminem-hd_2500x2083.jpg
    │   ├── artist3
    │   │   ├── AbbeyRoad.jpg
    │   │   ├── Help.jpg
    │   │   ├── LetItBe.jpg
    │   │   ├── RubberSoul.jpg
    │   │   ├── TheBeatles.webp
    │   │   └── YellowSub.jpg
    │   ├── artist4
    │   │   ├── Bones.jpg
    │   │   ├── Evolve.jpg
    │   │   ├── ImagineDragons.jpg
    │   │   ├── Mercury.png
    │   │   ├── NightVisions.webp
    │   │   ├── Origins.jpg
    │   │   └── Smoke+Mirrors.jpg
    │   ├── artist5
    │   │   ├── AThousandSuns.jpg
    │   │   ├── CastleOfGlass.jpg
    │   │   ├── LinkinPark.png
    │   │   ├── LivingThings.jpg
    │   │   ├── Meteora.jpg
    │   │   ├── MinutesToMidnight.jpg
    │   │   └── OneMoreLight.jpeg
    │   ├── hannu-pekka-peuranen-wN1CH6Ferbg-unsplash.jpg
    │   ├── IMG_20221027_094735.jpg
    │   ├── index.css
    │   ├── Logo.png
    │   ├── LogoSmile.png
    │   ├── LogoSpotlight.png
    │   ├── marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg
    │   ├── Picsart_23-04-09_16-28-46-599.jpg
    │   ├── script.js
    │   └── spotlightPics
    │       ├── bg2_2.jpg
    │       ├── bg2.jpg
    │       ├── bg3.jpg
    │       ├── bg4.jpg
    │       ├── bg.jpg
    │       ├── JoytimeIV.jpg
    │       └── pfp.png
    └── templates
        ├── about.html
        ├── AlbumsEminem.html
        ├── AlbumsGregory.html
        ├── AlbumsImagineDragons.html
        ├── AlbumsLinkinPark.html
        ├── AlbumsTheBeatles.html
        ├── artists.html
        ├── index.html
        ├── playlist.html
        ├── s2EncoreEminem.html
        ├── s2KamikazeEminem.html
        ├── s2RecoveryEminem.html
        ├── s2RelapseEminem.html
        ├── s2RevivalEminem.html
        ├── s3AbbeyRoad.html
        ├── s3Help.html
        ├── s3LetItBe.html
        ├── s3RubberSoul.html
        ├── s3YellowSubmarine.html
        ├── s4Evolve.html
        ├── s4Mercury.html
        ├── s4NightVisions.html
        ├── s4Origins.html
        ├── s4Smoke.html
        ├── s5AThousandSuns.html
        ├── s5LivingThings.html
        ├── s5Meteora.html
        ├── s5MinutesToMidnight.html
        ├── s5OneMoreLight.html
        ├── search.html
        ├── sEveningMachinesGregory.html
        ├── spotlight.html
        ├── sRustColouredStonesGregory.html
        ├── sThatSeaTheGamblerGregory.html
        ├── sTheWeathermanGregory.html
        └── sThisEmptyNorthernHemisphereGregory.html

</pre>
