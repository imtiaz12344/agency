let list = document.getElementById("list");
let menu = document.getElementById("menu");
let img = document.getElementById("menuimg");
list.style.height = "0%";
menu.addEventListener("click", function () {
	if (list.style.height === "0%") {
		list.style.height = "70%";
		img.src = "images/close.png";
	} else {
		list.style.height = "0%";
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
