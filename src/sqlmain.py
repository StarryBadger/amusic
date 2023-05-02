import sqlite3

conn = sqlite3.connect('songs.db')
c = conn.cursor()
c.execute('''CREATE TABLE songs
             (song_id TEXT PRIMARY KEY,
              song_name TEXT,
              song_duration TEXT)''')
conn.commit()
conn.close()
