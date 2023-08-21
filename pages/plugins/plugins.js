/////////// Header Menubar Toggle

// Set variables
const navbutton = document.getElementById('button');
const navMenue = document.getElementById("menue");

// Toggle open menue by button click
navbutton.addEventListener("click", () => {
    navMenue.classList.toggle("hide-menue");
});

// Close if clicked outside
// document.addEventListener('click', (event) => {
//     if (!navMenue.contains(event.target)) {
//         navMenue.classList.toggle('hide-menue');
//     }
// });





/////////////// Footer Responsive

// Variables
const company = document.getElementById('company');
const links_1 = document.getElementById('links1');

const features = document.getElementById('features');
const links_2 = document.getElementById('links2');

const plugins = document.getElementById('plugins') 
const links_3 = document.getElementById('links3')

// functions
company.addEventListener('click', ()=>{
    links_1.classList.toggle('activate')
})

features.addEventListener('click', ()=>{
    links_2.classList.toggle('activate')
})

plugins.addEventListener('click', ()=>{
    links_3.classList.toggle('activate')
})
