const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', () => {
    
    if (textInput.dataset.length === textInput.value.length.toString()) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});