function areElementsTouching(el1, el2) {
    let rect1 = el1.getBoundingClientRect();
    let rect2 = el2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||  // rect1 is to the left of rect2
        rect1.left > rect2.right ||  // rect1 is to the right of rect2
        rect1.bottom < rect2.top ||  // rect1 is above rect2
        rect1.top > rect2.bottom     // rect1 is below rect2
    );
}

const ninjaContainer = document.querySelector(".ninja-container")
const projects = document.querySelectorAll(".project")

window.addEventListener("click", (e) => {

    if (window.innerWidth < 1024) {
        return
    }

    let clickedOnProject = Array.from(projects).some(project => project === e.target || project.contains(e.target));

    if (clickedOnProject) {
        // If clicked on a project, remove the window event listener
        window.removeEventListener("click", handleWindowClick);
        console.log("Clicked on a project. Window event listener removed.");
        return;
    }

    let shootingEl = document.createElement("div")
    shootingEl.classList.add("shooting-element")
    shootingEl.innerHTML = `<img src="img/kunai.svg" alt="kunai">`
    let rect = ninjaContainer.getBoundingClientRect();
    document.querySelector("#projects").appendChild(shootingEl)
    if (e.clientX < window.innerWidth / 6) {
        shootingEl.style.transform = "rotate(-110deg) translate(-50%, -50%)"
    }
    else if (e.clientX < window.innerWidth / 4) {
        shootingEl.style.transform = "rotate(-90deg) translate(-50%, -50%)"
    }
    else if (e.clientX < window.innerWidth / 3.2) {
        shootingEl.style.transform = "rotate(-65deg) translate(-50%, -50%)"
    }
    else if (e.clientX < window.innerWidth / 2) {
        shootingEl.style.transform = "rotate(-60deg) translate(-50%, -50%)"
    }
    else if (e.clientX < window.innerWidth / 1.5) {
        shootingEl.style.transform = "rotate(-30deg) translate(-50%, -50%)"
    }
    else if (e.clientX < window.innerWidth / 1.3) {
        shootingEl.style.transform = "rotate(-15deg) translate(-50%, -50%)"
    }
    if (e.clientY > window.innerHeight / 2) {
        shootingEl.style.transform = "translate(-50%, -50%)"
    }
    console.log(e.clientX - rect.left + shootingEl.offsetWidth)
    console.log(e.clientY - rect.top)
    setTimeout(() => {
        shootingEl.style.left = `${rect.left + shootingEl.offsetWidth}px`
        shootingEl.style.top = `${rect.top}px`
    }, 20);
    setTimeout(() => {
        shootingEl.style.left = `${e.clientX + (e.clientX - rect.left + shootingEl.offsetWidth)*2}px`
        shootingEl.style.top = `${e.clientY + (e.clientY - rect.top)*2}px`
    }, 40);

    let theInterval = setInterval(() => {
        projects.forEach(pr => {
            if (areElementsTouching(shootingEl, pr)) {
                pr.click()
            }
            else {
            }
        })
    }, 100)

    shootingEl.addEventListener("transitionend", () => {
        shootingEl.style.display = `none`
        clearInterval(theInterval)
    })

})