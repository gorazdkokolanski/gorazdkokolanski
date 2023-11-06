const hamburger = document.querySelector(".hamburger")
const hamburgerImg = document.querySelector(".hamburger img")
const about = document.querySelector(".about")
const projects = document.querySelector(".projects")
const upwork = document.querySelector(".upwork")
const section = document.querySelector("section")

let opened = false

hamburger.addEventListener("click", () => {
    if (!opened) {
        about.style.transform = "translate(-150%, 0)"
        projects.style.transform = "translate(-110%, 110%)"
        upwork.style.transform = "translate(0, 150%)"
        hamburgerImg.src = "img/x.svg"
        opened=true
    }
    else{
        about.style.transform = "translate(-0%, 0)"
        projects.style.transform = "translate(-0%, 0%)"
        upwork.style.transform = "translate(0, 0%)"
        hamburgerImg.src = "img/hamburger.svg"
        opened=false
    }

})

const body = document.querySelector("section")
const splashAudio = document.querySelector("#splash")
const lopotavica = document.querySelector("#lopotavica")

window.addEventListener("load", ()=>{
    
})

body.addEventListener("click", (e)=>{
    x = e.clientX
    y = e.clientY

    console.log(y)

    let newSplash = document.createElement('div')
    newSplash.innerHTML=`<img src="img/splash.png">`
    newSplash.classList.add("lilsplash")
    newSplash.style.top = `${y}px`
    newSplash.style.left = `${x}px`
    section.appendChild(newSplash)
    setTimeout(()=>{
        newSplash.style.opacity="0"
    },10)
    splashAudio.load()
    splashAudio.play()
})
