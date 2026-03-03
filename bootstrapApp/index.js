AOS.init();
new PureCounter({
    selector: '.purecounter',
    start: 0,
    end: 100,
    duration: 2,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
});
// A simple array of colors for Holi
const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff1493', '#ffa500', '#9370db'];

// Function to change the color of the message
function changeColor() {
    const messageElement = document.getElementById('holiMessage');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    messageElement.style.color = randomColor;
}

// Initial color change and an event listener for user interaction
document.addEventListener('DOMContentLoaded', (event) => {
    changeColor(); // Set an initial color
    const messageElement = document.getElementById('holiMessage');
    messageElement.addEventListener('click', changeColor); // Change color on click
});
const btnScrollTo = document.querySelector('.back-to-top');
const section1 = document.querySelector('#top');
//scrolling
const clickScrollevent = function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
}
// btnScrollTo.onclick = clickScrollevent;
btnScrollTo.addEventListener('click', clickScrollevent);

let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

var progressBar = document.querySelectorAll('.progress-bar');


progressBar.forEach(mov => {
    mov.classList.add(`w-${mov.ariaValueNow}`)
})
function calling() {
    console.log('ggg');
    let file = document.getElementById('uploadPicture').files[0];
    console.log(file.name);
}

