
const plusButton = document.querySelector("#button-plus")
const lessButton = document.querySelector('#button-less')
const counter = document.getElementById("counter")
let value = Number(counter.textContent)

plusButton.addEventListener('click', increaseCounter)
lessButton.addEventListener('click', decreaseCounter)

 function increaseCounter(){
    value++
    counter.textContent = value.toString().padStart(2,"0")
}


function decreaseCounter(){
    if (value > 1){
        value--
        counter.textContent = value.toString().padStart(2,"0")
    }
}
