
const firstButton = document.getElementById('button-1')
const secondButton = document.getElementById('button-2')
const thirdButton = document.getElementById('button-3')

const firstDiv = document.getElementById('div-1')
const secondDiv = document.getElementById('div-2')
const thirdDiv = document.getElementById('div-3')


function firstToggleDiv () {

    firstDiv.style.display = 'flex';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'none';

}

function secondToggleDiv () {

    secondDiv.style.display = 'flex';
    firstDiv.style.display = 'none';
    thirdDiv.style.display = 'none';

}

function thirdToggleDiv () {

    thirdDiv.style.display = 'flex';
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'none';

}


firstButton.addEventListener("click", firstToggleDiv)
secondButton.addEventListener("click", secondToggleDiv)
thirdButton.addEventListener("click", thirdToggleDiv)