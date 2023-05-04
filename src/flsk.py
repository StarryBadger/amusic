#!/bin/python3
from flask import Flask , request ,render_template, redirect
import json

headers={
    'Content-Type': 'application/json'
}
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template("s5AThousandSuns.html")

@app.route('/endpoint/<string>',methods=['POST','GET'])
def newSong(string):
    return redirect("/");
    data=request.get_json()
    print(string)
    song_id=data['check']
    song_name=data['name']
    song_duration=data['something']
    
    with open('songs.txt','a') as f:
        f.write(json.dumps(data)+'\n')
    return "Received bro"

if __name__ == "__main__":
    app.run(debug=True)