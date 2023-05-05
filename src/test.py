#!/bin/python3
import sqlite3
class DBclass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path)
        self.cur = self.db.cursor()

    def execute(self, query):
        self.cur.execute(query)
        return [i[0] for i in self.cur.description], self.cur.fetchall()
db = DBclass('songs.db')
getVenue="SELECT song_name FROM songs;"
SongsName=db.execute(getVenue)
print(SongsName)