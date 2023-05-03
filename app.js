
const firstBtn = document.getElementById('button-1')
const secondBtn = document.getElementById('button-2')
const thirdBtn = document.getElementById('button-3')

const firstDiv = document.getElementById('div-1')
const secondDiv = document.getElementById('div-2')
const thirdDiv = document.getElementById('div-3')


function firstToggleDiv () {
    firstBtn.classList.add("button-bg")
    secondBtn.classList.remove("button-bg")
    thirdBtn.classList.remove("button-bg")

    firstDiv.style.display = 'flex';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'none';

}

function secondToggleDiv () {
    firstBtn.classList.remove("button-bg")
    secondBtn.classList.add("button-bg")
    thirdBtn.classList.remove("button-bg")

    secondDiv.style.display = 'flex';
    firstDiv.style.display = 'none';
    thirdDiv.style.display = 'none';

}

function thirdToggleDiv () {
    firstBtn.classList.remove("button-bg")
    secondBtn.classList.remove("button-bg")
    thirdBtn.classList.add("button-bg")

    thirdDiv.style.display = 'flex';
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'none';

}


firstBtn.addEventListener("click", firstToggleDiv)
secondBtn.addEventListener("click", secondToggleDiv)
thirdBtn.addEventListener("click", thirdToggleDiv)