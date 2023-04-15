const drogArea = document.querySelector('.drag-files');

drogArea.addEventListener('dragover', () => {
    drogArea.classList.add('dragover');
})
drogArea.addEventListener('dragleave', () => {
    drogArea.classList.remove('dragover');
})