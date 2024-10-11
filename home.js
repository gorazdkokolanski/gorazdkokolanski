const dots = document.querySelectorAll(".ring-container")
const modals = document.querySelectorAll(".modal")
const exes = document.querySelectorAll(".modal-x")

dots.forEach((dot, id)=>{
    dot.addEventListener("click", ()=>{
        modals.forEach(modal=>{
            modal.style.transform = "scale(0) translate(400px, -400px)"
        })
        modals[id].style.transform = "scale(1)"
    })
})

exes.forEach((x, id)=>{
    x.addEventListener("click", ()=>{
        modals[id].style.transform = "scale(0) translate(400px, -400px)"
    })
})