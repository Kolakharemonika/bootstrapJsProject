window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log('hhh');
        document.getElementById('navbar').style.background = '#00796b';
        // mybutton.style.display = "block";
    } else {
        document.getElementById('navbar').style.background = 'rgba(0, 106, 93, 0.8)';
        // mybutton.style.display = "none";
    }
}