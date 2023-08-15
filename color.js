const btn = document.getElementById("random");
const mainContainer = document.querySelector(".main-container");
const simple = document.getElementById('simple');
const hex = document.getElementById('hex');
const colorName = document.querySelector('#colorName')

const simpleColorArr = ['red', 'blue', 'green', 'tomato', 'brown', 'yellow', 'aquamarine', 'slateblue']
const hexColorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function randomNumberSimple(){
    return(Math.floor(Math.random() * ((simpleColorArr.length - 1) - 0 + 1) + 0))
}

simple.addEventListener('click', simpleColorChange);
hex.addEventListener('click', hexColorChange);

function simpleColorChange(){
    btn.addEventListener('click', () => {
        let x = randomNumberSimple();
        let result = simpleColorArr[x];
        colorName.textContent = result;
        mainContainer.style.backgroundColor = simpleColorArr[x];
    })
}

function randomNumber(){
    return(Math.floor(Math.random() * ((hexColorArr.length - 1) - 0 + 1) + 0))
}

function hexColorChange(){
    btn.addEventListener('click', () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let x = randomNumber();
            color += hexColorArr[x];
        }
        mainContainer.style.backgroundColor = color;
        colorName.textContent = color;
    })
}
