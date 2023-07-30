const slider = document.getElementById("slider")
const beforeImg = document.querySelector(".before-image")
const dragger = document.getElementById('dragger')

slider.addEventListener("input",(e)=>{
    beforeImg.style.width = e.target.value + '%'
    dragger.style.left = `calc(${e.target.value}%)`
})