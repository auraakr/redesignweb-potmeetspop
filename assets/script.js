const navscroll = document.querySelector('.navbar');
const btnscroll = document.querySelector('.button-scroll');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navscroll.classList.add('navbar-scrolled');
        btnscroll.classList.remove('button-black');
    } else if (window.screenY < 56) {
        navscroll.classList.remove('navbar-scrolled');
        btnscroll.classList.add('button-black');
    }
});

var btn = document.getElementById("icon");
function likeBtn() {
    if (btn.classList.contains("fa-regular")) {
        btn.classList.remove("fa-regular");
        btn.classList.add("fa-solid");
        document.getElementById("total").innerHTML = "100"
    } else {
        btn.classList.remove("fa-solid");
        btn.classList.add("fa-regular");
        document.getElementById("total").innerHTML = "99"
    }
};