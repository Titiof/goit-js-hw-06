function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBoxes = document.querySelector('#controls');
const controlsBoxesChildren = controlsBoxes.children;
const input = controlsBoxes.children[0];
const buttonCreate = controlsBoxes.children[1];
const buttonDestroy = controlsBoxes.children[2];
const divBoxElem = document.querySelector('#boxes');
let startSize = 30;

const handleClickCreate = () => { 
   createBoxes(input.value);
    }
const handleClickDestroy = () => { 
  destroyBoxes();
}
    
buttonCreate.addEventListener('click', handleClickCreate);
buttonDestroy.addEventListener('click', handleClickDestroy);


function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    const size = startSize + i * 10 + 'px';
    const box = document.createElement('div'); 
    box.style.width = size; 
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
   
  } 
  divBoxElem.append(...boxesArr);
  startSize += amount * 10;
  }
  

function destroyBoxes() {
  divBoxElem.innerHTML = '';
  startSize = 30;
  }