lucide.createIcons()

let select = document.querySelector('.select'),
selectedValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label

        const isMouseOrTouch = event.pointerType == 'mouse' ||
         event.pointerType == 'touch'

         isMouseOrTouch && optionsViewButton.click()
    })
})

window.addEventListener('keydown', (e) => {
    if(e.key == "Escape" || e.key == " " || e.key == "Enter") {
        optionsViewButton.click()
    }
    if(!select.classList.contains('open')) return
})

optionsViewButton.addEventListener('input', () => {
    if(!select.classList.contains('open')) return
    select.classList.toggle('open')

    const input = document.querySelector('.option input:checked') ||
     document.querySelector('.option input')
     
    input.focus()
})