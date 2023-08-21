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








////////////////// THAT SLIDER
////////// The new Slider

// Variables
const wrapper = document.querySelector('.wrapper');
const slider = document.querySelector('.slider');
const firstCardWidth = slider.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll('.wrapper img.btn');
const sliderChildren = [...slider.children];
// Get the number of cards that can fit in the slider at once
let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);
// Declare variables for tracking dragging, autoplay, and scroll position.
let isDragging = false; // Indicates if an element is being dragged.
let isAutoPlay = true;  // Indicates if autoplay is enabled.
let startX;             // X-coordinate of the initial touch/mouse event during dragging.
let startScrollLeft;    // Initial scroll position before dragging.
let timeoutId;          // Holds the timeout identifier for autoplay.

/*
// Insert copies of the last few cards to beginning of slider for infinite scrolling
sliderChildren.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of slider for infinite scrolling
sliderChildren.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the slider at appropriate postition to hide first few duplicate cards on Firefox
slider.classList.add("noTransition");
slider.scrollLeft = slider.offsetWidth;
slider.classList.remove("noTransition");
*/

// Add event listeners for the arrow buttons to scroll the slider left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slider.scrollLeft += btn.id == "left" ? (firstCardWidth + 16) : -(firstCardWidth + 16) ;
    });
});

// 
const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    // Records the initial cursor and scroll position of the slider
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the slider based on the cursor movement
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
}
// const infiniteScroll = () => {
//     // If the slider is at the beginning, scroll to the end
//     if(slider.scrollLeft === 0) {
//         slider.classList.add("no-transition");
//         slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
//         slider.classList.remove("no-transition");
//     }
//     // If the slider is at the end, scroll to the beginning
//     else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
//         slider.classList.add("no-transition");
//         slider.scrollLeft = slider.offsetWidth;
//         slider.classList.remove("no-transition");
//     }
//     // Clear existing timeout & start autoplay if mouse is not hovering over slider
//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }
// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the slider after every 2500 ms
//     timeoutId = setTimeout(() => slider.scrollLeft += firstCardWidth, 2500);
// }
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// autoPlay();
// slider.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseleave", autoPlay);

