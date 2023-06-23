const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner = document.querySelector(".banner-img")
let text = document.querySelector("#banner p")
let left = document.querySelector(".arrow_left")
let right = document.querySelector(".arrow_right")
let dot = document.querySelector(".dot")
let position = 0

const dots = document.querySelectorAll(".dot")

dots[position].classList.add("dot_selected")

left.addEventListener ("click", function() {
	dots[position].classList.remove("dot_selected")
	position--;
	if (position < 0) {
		position = slides.length - 1
	}
	dots[position].classList.add("dot_selected")
	banner.src = "./assets/images/slideshow/"+slides[position]["image"]
	text.innerHTML = slides[position]["tagLine"];
})

right.addEventListener ("click", function() {
	dots[position].classList.remove("dot_selected")
	position++;
	if (position > slides.length - 1) {
		position = 0
	}
	dots[position].classList.add("dot_selected")
	banner.src = "./assets/images/slideshow/"+slides[position]["image"]
	text.innerHTML = slides[position]["tagLine"];
})