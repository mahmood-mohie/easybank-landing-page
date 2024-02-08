const header = document.querySelector(".header");
const hambugerMenu = document.querySelector("#hambugerMenu");
const overlay = document.querySelector(".overlay");

hambugerMenu.addEventListener("click", function() {
    console.log('clicked')
    if (header.classList.contains("open")) { 
        header.classList.remove("open")
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
    } else {
        header.classList.add("open")
        overlay.classList.add("fade-in")
        overlay.classList.remove("fade-out")
    }
})