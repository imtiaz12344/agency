let list = document.getElementById("list");
let menu = document.getElementById("menu");
let img = document.getElementById("menuimg");

menu.addEventListener("click", function () {
	console.log("hello");
	if (list.style.display == "none") {
		list.style.display = "block";
		img.src = "images/close.png";
		nav.style.display = "flex";
	} else {
		list.style.display = "none";
		img.src = "images/menu.png";
	}
});

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
});

let introduction = document.getElementById("Introduction");
let profile = document.getElementById("Profile");
let FAQS = document.getElementById("FAQS");
let intro = document.getElementById("intro");
let profo = document.getElementById("profo");
let faqs = document.getElementById("faqs");
profile.addEventListener("click", function () {
	console.log("hello");
	if (profo.style.display == "none") {
		profile.classList.add("active");
		profo.style.display = "flex";
		intro.style.display = "none";
		introduction.classList.remove("active");
		FAQS.classList.remove("active");
	} else {
		profo.style.display = "flex";
		intro.style.display = "none";
		faqs.style.display = "none";
		profile.classList.add("active");
		introduction.classList.remove("active");
		FAQS.classList.remove("active");
	}
});
introduction.addEventListener("click", function () {
	console.log("hello");
	if (intro.style.display == "none") {
		intro.style.display = "flex";
		profo.style.display = "none";
		faqs.style.display = "none";
		introduction.classList.add("active");
		profile.classList.remove("active");
		FAQS.classList.remove("active");
	} else {
		intro.style.display = "flex";
		profo.style.display = "none";
		faqs.style.display = "none";
		introduction.classList.add("active");
		profile.classList.remove("active");
		FAQS.classList.remove("active");
	}
});
FAQS.addEventListener("click", function () {
	console.log("hello");
	if (faqs.style.display == "none") {
		faqs.style.display = "flex";
		profo.style.display = "none";
		intro.style.display = "none";
		FAQS.classList.add("active");
		profile.classList.remove("active");
		introduction.classList.remove("active");
	} else {
		faqs.style.display = "flex";
		profo.style.display = "none";
		intro.style.display = "none";
		FAQS.classList.add("active");
		profile.classList.remove("active");
		introduction.classList.remove("active");
	}
});

let agency = document.getElementById("agency");
let services = document.getElementById("services");
let project = document.getElementById("project");

let about1 = document.getElementById("about1");
let about2 = document.getElementById("about2");
let about3 = document.getElementById("about3");

agency.addEventListener("click", () => {
	if (about1.style.display == "none") {
		agency.style.color = "blue";
		about1.style.color = "coral";
		about1.style.display = "block";
		about2.style.display = "none";
		about3.style.display = "none";
	} else {
		about1.style.display = "none";
		about2.style.display = "none";
		about3.style.display = "none";
		about1.style.color = "#717275";
	}
});
services.addEventListener("click", () => {
	if (about2.style.display == "none") {
		services.style.color = "blue";
		about2.style.color = "coral";
		about2.style.display = "block";
		about1.style.display = "none";
		about3.style.display = "none";
	} else {
		about1.style.display = "none";
		about2.style.display = "none";
		about3.style.display = "none";
		about2.style.color = "#717275";
	}
});
project.addEventListener("click", () => {
	if (about3.style.display == "none") {
		project.style.color = "blue";
		about3.style.color = "coral";
		about3.style.display = "block";
		about1.style.display = "none";
		about2.style.display = "none";
	} else {
		about1.style.display = "none";
		about2.style.display = "none";
		about3.style.display = "none";
		about3.style.color = "#717275";
	}
});

// animation for home page

let lt = gsap.timeline();

lt.from(".home-text", {
	opacity: 0,
	duration: 1,
	y: -500,
	color: "green",
});
lt.from(".nav-btn", {
	opacity: 0,
	duration: 0.5,
	y: -50,
});
lt.from(".logo", {
	opacity: 0,
	duration: 0.5,
	x: -50,
});

// anime for section
let ab = gsap.timeline();
ab.from(".about-header-h2", {
	opacity: 0,
	y: -400,
	duration: 0.5,
});

ab.from(".first", {
	opacity: 0,
	y: 400,
	duration: 0.4,
});
