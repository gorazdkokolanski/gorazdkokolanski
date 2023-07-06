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
	if(timer<6){
		timer++
	}
	else{
		clearInterval(peroInterval)
	}
}, 1000)


let posledenInterval = setInterval(function(){
	if(timer==5){
		setInterval(function(){
			greenbox.style.backgroundColor = "black"
		},800)

		setTimeout(function(){
			setInterval(function(){
				greenbox.style.backgroundColor = "limegreen"
			},800)
		}, 400)
	}

	if(timer==6){
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
	body.style.overflowY="scroll"
	setTimeout(() =>{scrollShit.style.transition = "2s"},50)
}, 10000)

const body = document.querySelector("body")

let anInterval = setInterval(() =>{
	const scrolled = window.scrollY
	if(scrolled>30){
		scrollShit.style.height = "100vh"
		setTimeout(()=>{firstSec.style.display="none"},100)
		scrollShit.style.overflow = "hidden"
		c.style.opacity = "0"
		setTimeout(()=>{c.style.display = "none"},1000)
	}
}, 50)



const about = document.querySelector("#about")
const realAbout = document.querySelector(".about")

about.addEventListener("click", ()=>{
	realAbout.style.transform = " translateX(0%)"
	realAbout.style.visibility = "visible"
	secondSec.style.transform = " translateX(-100%)"
})

const mobabout = document.querySelector("#aboutmob")

mobabout.addEventListener("click", ()=>{
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

const devmob = document.querySelector("#devmob")

devmob.addEventListener("click", ()=>{
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

bukvi = document.querySelectorAll(".imeto div")

let b=0


function padatBukvi(){
	if(b<bukvi.length){
		setTimeout(()=>{
			bukvi[b].style.transform = "translateY(0)"
			b++
			padatBukvi()
		},100)
	}
	else{
		setTimeout(tere,1000)
		setTimeout(()=>{
			for(let i=0; i<bukvi.length; i++){
				bukvi[i].style.display="none";
			}
			name.style.opacity = "1"
		},1000)
		
	}
}


setTimeout(padatBukvi, 3000);



const greenarrow = document.querySelector("#greenarrow")
const upwork = document.querySelector(".upwork")
const upworka = document.querySelector(".upwork a")

upwork.addEventListener("mouseover", ()=>{
	
	if(upworka.style.fontWeight =="100"){
		greenarrow.style.opacity = "0"
		return
	}
	setTimeout(()=>{
		greenarrow.style.opacity = "1"
	},200)
})

upwork.addEventListener("mouseout", ()=>{
		greenarrow.style.opacity = "0"

})

fakeProjects.addEventListener("mouseover", ()=>{
	greenarrow.style.opacity = "0"
	setTimeout(()=>{
		greenarrow.style.opacity = "0"
	},210)
})










var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 12;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "limegreen";//green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = matrix[Math.floor(Math.random()*matrix.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 35);
