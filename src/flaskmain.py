from flask import Flask, request
import sqlite3

app = Flask(__name__)
@app.route('/add_song', methods=['POST'])
def add_song():
    song_id = request.form.get('song_id')
    song_name = request.form.get('song_name')
    song_duration = request.form.get('song_duration')
    conn = sqlite3.connect('songs.db')
    c = conn.cursor()
    c.execute('SELECT * FROM songs WHERE song_id = ?', (song_id,))
    if c.fetchone() is None:
        c.execute('INSERT INTO songs (song_id, song_name, song_duration) VALUES (?, ?, ?)', (song_id, song_name, song_duration))
        conn.commit()
        conn.close()
        print('Song added to database')
        return
    else:
        conn.close()
        return 'Song already exists in database'
    
if (__name__=="__main__"):
    app.run(debug=True)