const name = document.querySelector(".nameDiv")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/*function = event => {
	event.target.innerText = event.target.innerText.split("")
		.map(letter => letters[Math.floor(Math.random() * 26)])
		.join("")
}*/

name.onmouseover = () => {
	let i=0
	const myInterval = setInterval(() => {
	name.innerText = name.innerText.split("").map((letter, index) => {
		//odi sekoj letter po ednas sos index ednakov na negovata pozicija
		//i ako e i dovolno gulemo se stava od valueto letter a za tia so i ne e dovolno gulemo odi dole random
		if(index < i/10){
			return name.dataset.value[index]
		}

		return letters[Math.floor(Math.random() * 26)]
	}).join("").toLowerCase()


	if(i>parseFloat(16*10)){
	 clearInterval(myInterval)
	}

	i++
	},10)
}

tere()

function tere(){
	let i=0
	const myInterval = setInterval(() => {
	name.innerText = name.innerText.split("").map((letter, index) => {
		//odi sekoj letter po ednas sos index ednakov na negovata pozicija
		//i ako e i dovolno gulemo se stava od valueto letter a za tia so i ne e dovolno gulemo odi dole random
		if(index < i/10){
			return name.dataset.value[index]
		}

		return letters[Math.floor(Math.random() * 26)]
	}).join("").toLowerCase()


	if(i>parseFloat(16*10)){
	 clearInterval(myInterval)
	}

	i++
}, 10)
}


const greenbox = document.querySelector(".greenbox")





const textbox = document.querySelector(".typing")


let actualtext =""

let n=0


function type(){	


	let text = "scroll down"

	if(n<text.length){
		actualtext+=text[n]
		textbox.innerText = actualtext
		n++
	}
	else{
		clearInterval(myInterval)
	}			
}




let timer=0

let peroInterval = setInterval(function(){
	if(timer<2){
		timer++
	}
	else{
		clearInterval(peroInterval)
	}
}, 1000)


let posledenInterval= setInterval(function(){
	if(timer==1){
		setInterval(function(){
			greenbox.style.backgroundColor = "black"
		},800)

		setTimeout(function(){
			setInterval(function(){
				greenbox.style.backgroundColor = "limegreen"
			},800)
		}, 400)
	}

	if(timer==2){
		myInterval = setInterval(type,100)
		clearInterval(posledenInterval)
		
	}

},1999)


const secondSec = document.querySelector(".secondSec")

const firstSec = document.querySelector(".firstSec")

const scrollShit = document.querySelector(".scrollshit")

setTimeout(function(){
	secondSec.style.display = "flex"
	scrollShit.style.height = "200vh"
	setTimeout(() =>{scrollShit.style.transition = "2s"},50)
}, 5000)

const body = document.querySelector("body")

let anInterval = setInterval(() =>{
	const scrolled = window.scrollY
	if(scrolled>30){
		scrollShit.style.height = "100vh"
		setTimeout(()=>{firstSec.style.display="none"},100)
		console.log("none")
		scrollShit.style.overflow = "hidden"
	}
}, 50)



const about = document.querySelector("#about")
const realAbout = document.querySelector(".about")

about.addEventListener("click", ()=>{
	realAbout.style.transform = " translateX(0%)"
	realAbout.style.visibility = "visible"
	secondSec.style.transform = " translateX(-100%)"
})

const projects = document.querySelector(".projects")
const fakeProjects = document.querySelector("#fake")

fakeProjects.addEventListener("click", ()=>{
	projects.style.transform = " translate(0%,50%)"
	projects.style.visibility = "visible"
	projects.style.pointerEvents = "auto"
	secondSec.style.transform = " translateX(-100%)"
})

const backs = document.querySelectorAll(".svgDiv")

backs[0].addEventListener("click", ()=>{
	realAbout.style.transform = " translateX(100%)"
	secondSec.style.transform = " translateX(00%)"
	setTimeout(()=>{
		realAbout.style.visibility = "hidden"},1000
		)
})

backs[1].addEventListener("click", ()=>{
	projects.style.transform = " translate(100%,50%)"
	secondSec.style.transform = " translateX(00%)"
	setTimeout(()=>{
	projects.style.visibility = "hidden"
	projects.style.pointerEvents = "none"},1000
	)
	
	
})

























