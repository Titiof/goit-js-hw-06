const counterValueSpan = document.querySelector('#value')
const counter = document.querySelector("#counter");
const addListenerBtn = document.querySelector('button[data-action="increment"]');
const removeListenerBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
const handleClickIncrement = () => { 
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
    }
const handleClickDecrement = () => { 
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
    }
addListenerBtn.addEventListener('click', handleClickIncrement);
removeListenerBtn.addEventListener('click', handleClickDecrement);