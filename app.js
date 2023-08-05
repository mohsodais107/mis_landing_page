
// toggle menus

const firstBtn = document.getElementById('button-1')
const secondBtn = document.getElementById('button-2')
const thirdBtn = document.getElementById('button-3')

const firstDiv = document.getElementById('div-1')
const secondDiv = document.getElementById('div-2')
const thirdDiv = document.getElementById('div-3')


// footer responsive
const company = document.getElementById('company');
const links_1 = document.getElementById('links1');

const features = document.getElementById('features');
const links_2 = document.getElementById('links2');

const plugins = document.getElementById('plugins') 
const links_3 = document.getElementById('links3')





// Toggle menue codes

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





// footer responsive codes

company.addEventListener('click', ()=>{
    links_1.classList.toggle('activate')
})

features.addEventListener('click', ()=>{
    links_2.classList.toggle('activate')
})

plugins.addEventListener('click', ()=>{
    links_3.classList.toggle('activate')
})




// tab button toggle
const firstBtnh = document.getElementById('buttons-1')
const secondBtnh = document.getElementById('buttons-2')
const thirdBtnh = document.getElementById('buttons-3')

firstBtnh.addEventListener('click', ()=>{
    firstBtnh.classList.add('button-bg')
    firstBtnh.style.color = '#ebddfb';
    firstBtnh.style.fontWeight = 'bold';
    firstBtnh.classList.remove('button-bg')
    thirdBtnh.classList.remove('button-bg')

    firstBtnh.innerText = 'داشبورد میریت';
    secondBtnh.innerText = '2'  
    thirdBtnh.innerText = '3' 

    firstBtnh.style.backgroundColor = '#9a54ea'
    secondBtnh.style.backgroundColor = '#ebddfb'
    thirdBtnh.style.backgroundColor = '#ebddfb'
})

secondBtnh.addEventListener('click', ()=>{
    firstBtnh.style.color = '#9a54ea';

    firstBtnh.classList.remove('button-bg')
    secondBtnh.classList.add('button-bg')
    thirdBtnh.classList.remove('button-bg')

    firstBtnh.innerText = '1';
    secondBtnh.innerText = 'گزارش های سریع'  
    thirdBtnh.innerText = '3'

    firstBtnh.style.backgroundColor = '#ebddfb'
    secondBtnh.style.backgroundColor = '#9a54ea'
    thirdBtnh.style.backgroundColor = '#ebddfb'
})
thirdBtnh.addEventListener('click', ()=>{
    firstBtnh.style.color = '#9a54ea';
    
    firstBtnh.classList.remove('button-bg')
    secondBtnh.classList.remove('button-bg')
    thirdBtnh.classList.add('button-bg')

    firstBtnh.innerText = '1';
    secondBtnh.innerText = '2'  
    thirdBtnh.innerText = 'افزونه ها'
    
    firstBtnh.style.backgroundColor = '#ebddfb'
    secondBtnh.style.backgroundColor = '#ebddfb'
    thirdBtnh.style.backgroundColor = '#9a54ea'
})






















// firstBtn.addEventListener("click", firstToggleDiv)
// secondBtn.addEventListener("click", secondToggleDiv)
// thirdBtn.addEventListener("click", thirdToggleDiv)



// function firstToggleDiv () {
    
//     divOneActvie = true;
//     divTwoActive = false;
//     divThreeActive = false;
//     // console.log(divOneActvie, divTwoActive, divThreeActive)


//     // firstBtn.classList.add("button-bg")
//     // secondBtn.classList.remove("button-bg")
//     // thirdBtn.classList.remove("button-bg")

//     // firstDiv.style.display = 'flex';
//     // secondDiv.style.display = 'none';
//     // thirdDiv.style.display = 'none';

// }

// function secondToggleDiv () {

//     divOneActvie = false;
//     divTwoActive = true;
//     divThreeActive = false;
//     console.log(divOneActvie, divTwoActive, divThreeActive)

// //     firstBtn.classList.remove("button-bg")
// //     secondBtn.classList.add("button-bg")
// //     thirdBtn.classList.remove("button-bg")

// //     secondDiv.style.display = 'flex';
// //     firstDiv.style.display = 'none';
// //     thirdDiv.style.display = 'none';

// }

// function thirdToggleDiv () {

//     divOneActvie = false;
//     divTwoActive = false;
//     divThreeActive = true;
//     // console.log(divOneActvie, divTwoActive, divThreeActive)

//     // firstBtn.classList.remove("button-bg")
//     // secondBtn.classList.remove("button-bg")
//     // thirdBtn.classList.add("button-bg")

//     // thirdDiv.style.display = 'flex';
//     // firstDiv.style.display = 'none';
//     // secondDiv.style.display = 'none';

// }

// console.log(divOneActvie, divTwoActive, divThreeActive)


// // //  tab number toggle

// // const FirstTab = document.getElementById('tab-1')
// // const SecondTab = ducument.getElementById('tab-2')
// // const ThirdTab = ducument.getElementById('tab-3')


// // FirstTab.addEventListener("click", FirstToggleNum)
// // SecondTab.addEventListener("click", SecondToggleNum)
// // ThirdTab.addEventListener("click", ThirdToggleNum)



// // function FirstToggleNum () {

// //     FirstTab.classList.add("tab-active")
// //     SecondTab.classList.remove("tab-active")
// //     ThirdTab.classList.remove("tab-active")

// // }

// // function SecondToggleNum () {

// //     FirstTab.classList.remove("tab-active")
// //     SecondTab.classList.add("tab-active")
// //     ThirdTab.classList.remove("tab-active")

// // }

// // function ThirdToggleNum () {

// //     FirstTab.classList.remove("tab-active")
// //     SecondTab.classList.remove("tab-active")
// //     ThirdTab.classList.add("tab-active")

// // }





// // // tab title toggle

// // const FirstTitle = ducument.getElementById('tab-title-1')
// // const SecondTitle = ducument.getElementById('tab-title-2')
// // const ThirdTitle = ducument.getElementById('tab-title-3')


// // FirstTitle.addEventListener("click", FirstToggleTitle)
// // SecondTitle.addEventListener("click", SecondToggleTitle)
// // ThirdTitle,addEventListener("click", ThirdToggleTitle)



// // function FirstToggleTitle () {

// //     FirstTitle.classList.add("title-active")
// //     SecondTitle.classList.remove("title-active")
// //     ThirdTitle.classList.remove("title-title")

// // }

// // function SecondToggleTitle () {

// //     FirstTitle.classList.remove("title-active")
// //     SecondTitle.classList.add("title-title")
// //     ThirdTitle.classList.remove("title-active")

// // }

// // function ThirdToggleTitle () {

// //     FirstTitle.classList.remove("title-active")
// //     SecondTitle.classList.remove("title-active")
// //     ThirdTitle.classList.add("title-active")
    
// // }
