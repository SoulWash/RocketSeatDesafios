function secondsToMinutes(time){
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}


const path = function(file){
    return `./files/${file}`;
  }
  
export {
    path,
    secondsToMinutes
}