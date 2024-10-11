let opened = false

document.querySelector(".menu-button").addEventListener("click", ()=>{
    if(!opened){
        document.querySelector(".menu>a:nth-child(1)").style.transform = "translate(-150%, 0)"
        document.querySelector(".menu>a:nth-child(2)").style.transform = "translate(-120%, 120%)"
        document.querySelector(".menu>a:nth-child(3)").style.transform = "translate(0%, 150%)"
        document.querySelector(".menu-button>img").style.transform = "rotate(45deg)"
        opened = true
    }
    else{
        document.querySelector(".menu>a:nth-child(1)").style.transform = "none"
        document.querySelector(".menu>a:nth-child(2)").style.transform = "none"
        document.querySelector(".menu>a:nth-child(3)").style.transform = "none"
        document.querySelector(".menu-button>img").style.transform = "none"
        opened = false
    }
})