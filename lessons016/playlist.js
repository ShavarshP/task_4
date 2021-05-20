class Playlist {
  constructor(obj) {
    this.songs = [];
    this.isPlay = false;
    this.songIndex = 0;
  }
  add(song) {
    return this.songs.push(song);
  }
  play() {
    this.isPlay = true;
    console.log(this.songs[this.songIndex].name + " started to play");
  }
  stop() {
    return (this.IsPlay = false);
    console.log(this.songs[this.songIndex].name + " stopped to play");
  }
  next() {
    console.log(this.songs[this.songIndex].name + " stoppedy");
    this.songIndex += 1;
    if (this.songIndex == this.songs.length) {
      this.songIndex = 0;
    }
    console.log(this.songs[this.songIndex].name + " started");
  }
}

class Song {
  constructor(name, song) {
    this.name = name;
    this.song = song;
  }
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play();
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
// playlist.play(); // Hey Jude started
