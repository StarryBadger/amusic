#!/bin/python3
from flask import Flask , request ,render_template, redirect
import json

headers={
    'Content-Type': 'application/json'
}
app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return render_template("index.html")
@app.route('/artists.html')
def artists():
    return render_template("artists.html")
@app.route('/about.html')
def about():
    return render_template("about.html")
@app.route('/spotlight.html')
def spotlight():
    return render_template("spotlight.html")
@app.route('/search.html')
def search():
    return render_template("search.html")
@app.route('/AlbumsEminem.html')
def AlbumsEminem():
    return render_template("AlbumsEminem.html")
@app.route('/AlbumsGregory.html')
def AlbumsGregory():
    return render_template("AlbumsGregory.html")
@app.route('/AlbumsImagineDragons.html')
def AlbumsImagineDragons():
    return render_template("AlbumsImagineDragons.html")
@app.route('/AlbumsLinkinPark.html')
def AlbumsLinkinPark():
    return render_template("AlbumsLinkinPark.html")
@app.route('/AlbumsTheBeatles.html')
def AlbumsTheBeatles():
    return render_template("AlbumsTheBeatles.html")
@app.route('/s2KamakazeEminem.html')
def s2KamakazeEminem():
    return render_template("s2KamakazeEminem.html")
@app.route('/s2EncoreEminem.html')
def s2EncoreEminem():
    return render_template("s2EncoreEminem.html")
@app.route('/s2RecoveryEminem.html')
def s2RecoveryEminem():
    return render_template("s2RecoveryEminem.html")
@app.route('/s2RelapseEminem.html')
def s2RelapseEminem():
    return render_template("s2RelapseEminem.html")
@app.route('/s2RevivalEminem.html')
def s2RevivalEminem():
    return render_template("s2RevivalEminem.html")
@app.route('/s3AbbeyRoad.html')
def s3AbbeyRoad():
    return render_template("s3AbbeyRoad.html")
@app.route('/s3Help.html')
def s3Help():
    return render_template("s3Help.html")
@app.route('/s3LetItBe.html')
def s3LetItBe():
    return render_template("s3LetItBe.html")
@app.route('/s3RubberSoul.html')
def s3RubberSoul():
    return render_template("s3RubberSoul.html")
@app.route('/s3YellowSubmarine.html')
def s3YellowSubmarine():
    return render_template("s3YellowSubmarine.html")
@app.route('/s4Evolve.html')
def s4Evolve():
    return render_template("s4Evolve.html")
@app.route('/s4Mercury.html')
def s4Mercury():
    return render_template("s4Mercury.html")
@app.route('/s4NightVisions.html')
def s4NightVisions():
    return render_template("s4NightVisions.html")
@app.route('/s4Origins.html')
def s4Origins():
    return render_template("s4Origins.html")
@app.route('/s4Smoke.html')
def s4Smoke():
    return render_template("s4Smoke.html")
@app.route('/s5AThousandSuns.html')
def s5AThousandSuns():
    return render_template("s5AThousandSuns.html")
@app.route('/s5LivingThings.html')
def s5LivingThings():
    return render_template("s5LivingThings.html")
@app.route('/s5Meteora.html')
def s5Meteora():
    return render_template("s5Meteora.html")
@app.route('/s5MinutesToMidnight.html')
def s5MinutesToMidnight():
    return render_template("s5MinutesToMidnight.html")
@app.route('/sRustColouredStonesGregory.html')
def sRustColouredStonesGregory():
    return render_template("sRustColouredStonesGregory.html")
@app.route('/sThatSeaTheGamblerGregory.html')
def sThatSeaTheGamblerGregory():
    return render_template("sThatSeaTheGamblerGregory.html")
@app.route('/sEveningMachinesGregory.html')
def sEveningMachinesGregory():
    return render_template("sEveningMachinesGregory.html")
@app.route('/sTheWeathermanGregory.html')
def sTheWeathermanGregory():
    return render_template("sTheWeathermanGregory.html")
@app.route('/sThisEmptyNorthernHemisphereGregory.html')
def sThisEmptyNorthernHemisphereGregory():
    return render_template("sThisEmptyNorthernHemisphereGregory.html")
@app.route('/playlist.html')
def playlist():
    return render_template("playlist.html")

@app.route('/endpoint',methods=['POST'])
def newSong():
    res = request.json
    print(res['name'])
    return {"status": "200"}

if __name__ == "__main__":
    app.run(debug=True)