// JavaScript source code
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 900) {
        if (docScrollTop > 70) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove ("fixed")
        }
    }
}

// navbarlinks

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
});
