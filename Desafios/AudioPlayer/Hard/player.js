import audios from "./data.js"
import {path, secondsToMinutes} from "./utils.js"
import elements from "./elements.js"
export default {
  audioData: audios,
  currentAudio: {},
  currentPLaying: 0,
  isPlaying: false,
  start() {
    elements.get.call(this)


    this.update();

  },
  play(){
    this.isPlaying = true
    this.audio.play()
    this.playPause.innerText = "pause"
  },
  pause(){
    this.isPlaying = false
    this.audio.pause()
    this.playPause.innerText = "play_arrow"
  },
  togglePlayPause() {
    if(this.isPlaying){
      this.pause()
    } else {
      this.play()
    }
  },
  toggleMute(){
    this.audio.muted = !this.audio.muted
    this.mute.innerText = this.audio.muted ? "volume_down" : "volume_up"
  },
  setVolume(value){
    this.audio.volume = value / 100
  },
  setSeek(value){
    this.audio.currentTime = value
  },
  next() {
    this.currentPLaying++;
    if(this.currentPLaying == this.audioData.length) this.restart()
    this.update();
    this.play()
  },
  timeUpdate(){
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime)
    this.seekbar.value = this.audio.currentTime
  },
  update() {
    this.currentAudio = this.audioData[this.currentPLaying];
    this.cover.style.background = `url('${path(
      this.currentAudio.cover
    )}') no-repeat center center/ cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    elements.createAudioElement.call(this, path(this.currentAudio.file))

    this.audio.onloadeddata = () => {
      elements.actions.call(this)
    }
  },
  restart() {
    this.currentPLaying = 0
    this.update()
  }
};
