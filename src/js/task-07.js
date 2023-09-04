const progress = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
progress.addEventListener("input", () => {
    text.style.fontSize = progress.value.toString() + 'px';
})