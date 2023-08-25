import * as elemtents from './elements.js'

export default function(){

    elemtents.button.addEventListener('click', async () => {
        const username = elemtents.input.value
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        const name = data.name
        const photo = data.avatar_url
    
        if(data !== undefined && data.message === 'Not Found' && elemtents.input.value == '') {
            elemtents.errorElement.style.display ='block'
            elemtents.nameElement.style.display = 'block'
            elemtents.photoElement.style.display = 'block'
        } else {
            elemtents.errorElement.style.display = 'none'
            elemtents.nameElement.style.display = 'block'
            elemtents.photoElement.style.display = 'block'

            elemtents.nameElement.innerHTML = name
            elemtents.photoElement.setAttribute('src', photo)
        }
    })
}

