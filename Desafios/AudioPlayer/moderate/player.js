window.player = {
  cover: document.querySelector(".card-image"),
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".card-content .artist"),
  audio: document.querySelector("audio"),
  audioData: audios,
  currentAudio: {},
  currentPLaying: 0,
  start() {
    this.update();
    this.audio.onended = () => this.next();
  },
  next() {
    this.currentPLaying++;
    if(this.currentPLaying == this.audioData.length) this.restart()
    this.update();
    this.audio.play()
  },
  update() {
    this.currentAudio = this.audioData[this.currentPLaying];

    this.cover.style.background = `url('${path(
      this.currentAudio.cover
    )}') no-repeat center center/ cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.audio.src = path(this.currentAudio.file);
  },
  restart() {
    this.currentPLaying = 0
    this.update()
  }
};
