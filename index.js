const throwables = document.querySelectorAll(".landing-throwable")

let thrown = []
let thrownNum = 0
for (let i = 0; i < throwables.length; i++) {

}

function throwIt() {
    let newNum = Math.floor(Math.random() * 6)
    while (thrown.includes(newNum)) {
        newNum = Math.floor(Math.random() * 6)
    }
    thrown.push(newNum)
    throwables[newNum].style.left = `${window.innerWidth + throwables[newNum].offsetWidth}px`
    thrownNum++
    if (thrownNum < throwables.length) {
        setTimeout(() => {
            throwIt()
        }, 100);
    }
}

setTimeout(() => {
    throwIt()
}, 300);

setTimeout(() => {
    document.querySelectorAll(".putback").forEach(p=>{
        p.style.transform = "none"
    })
    
}, 1000);

setTimeout(() => {
    document.querySelector(".letsgo").classList.add("leetsgo")
}, 2000);

throwables.forEach(th => {
    // th.style.left = `${window.innerWidth+th.offsetWidth}px`
})