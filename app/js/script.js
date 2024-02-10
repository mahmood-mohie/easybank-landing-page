const header = document.querySelector(".header");
const hambugerMenu = document.querySelector("#hambugerMenu");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body")

hambugerMenu.addEventListener("click", function() {
    console.log('clicked')
    if (header.classList.contains("open")) { 
        header.classList.remove("open")
        fadeElems.forEach((e)=> {
            e.classList.remove("fade-in")
            e.classList.add("fade-out")
        })
        body.classList.remove("noscroll")
    } else {
        header.classList.add("open")
        fadeElems.forEach((e)=> {
            e.classList.add("fade-in")
            e.classList.remove("fade-out")
        })
        body.classList.add("noscroll")

    }
})