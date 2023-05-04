#!/bin/python3

#!/bin/python3
from flask import Flask , request,render_template
import json

headers={
    'Content-Type': 'application/json'
}
app = Flask(__name__,template_folder="src",static_folder="src")

@app.route('/')
def hello():
    return render_template("index.html")

# @app.route('/endpoint',methods=['POST'])
# def newSong():
#     data=request.get_json()
#     print(data)
#     song_id=data['check']
#     song_name=data['name']
#     song_duration=data['something']
    
#     with open('songs.txt','a') as f:
#         f.write(json.dumps(data)+'\n')
#     return "Received bro"

if __name__ == "__main__":
    app.run(debug=True)