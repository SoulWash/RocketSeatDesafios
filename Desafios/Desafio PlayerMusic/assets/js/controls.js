
const body = document.documentElement;
const img = document.querySelector('.wrapper img');
const h1 = document.querySelector('.info h1')
let cont = 0

const trocar = {
    music:['absImg',
            'deer',
            'texture'],
    name:['Só JS salva','Florest Song','Remix Latrel']
}


if(body.classList.contains(trocar)) {
    body.classList.remove(trocar)
} else {
    body.classList.add(trocar)
}


function prev(){
    cont = cont
    cont++
    img.setAttribute(`src`, `./assets/image/${trocar.music[[cont]]}.jpg`)  
    h1.innerHTML = `${trocar.name[cont]}`
    cont -= 1
    return cont = 1
}


function next(){
    cont = cont
    cont++
    img.setAttribute(`src`, `./assets/image/${trocar.music[cont]}.jpg`)
    h1.innerHTML = `${trocar.name[cont]}`
    return cont = 1
}