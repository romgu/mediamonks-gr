let rightArrow = document.querySelector("#rightArrow");
let leftArrow = document.querySelector("#leftArrow");
let panoramicBG = document.querySelector("#carouselBG");
let guidePosition = document.querySelector("#guide");

let currentPage = 0;
let currentTarget = "g0";
let bgPosition = panoramicBG.style.backgroundPositionX;


//Hide&Show elements, move background
const changePage = (page) => {
	if (currentPage === 0) {
		//Move the page indicator
		document.querySelector(".current").className="";
		document.querySelector("#g0").className = "current";
		//Change the background
		panoramicBG.style.backgroundPositionX = "0%";
	} if (currentPage === 1) {
		document.querySelector(".current").className="";
		document.querySelector("#g1").className = "current";
		panoramicBG.style.backgroundPositionX = "12.5%";
	} if (currentPage === 2) {
		document.querySelector(".current").className="";
		document.querySelector("#g2").className = "current";
		panoramicBG.style.backgroundPositionX = "22%";
	} if (currentPage === 3) {
		document.querySelector(".current").className="";
		document.querySelector("#g3").className = "current";
		panoramicBG.style.backgroundPositionX = "36.5%";
	} if (currentPage === 4) {
		document.querySelector(".current").className="";
		document.querySelector("#g4").className = "current";
		panoramicBG.style.backgroundPositionX = "50%";
	} if (currentPage === 5) {
		document.querySelector(".current").className="";
		document.querySelector("#g5").className = "current";
		panoramicBG.style.backgroundPositionX = "64%";
	} if (currentPage === 6) {
		document.querySelector(".current").className="";
		document.querySelector("#g6").className = "current";
		panoramicBG.style.backgroundPositionX = "80%";
	} if (currentPage === 7) {
		document.querySelector(".current").className="";
		document.querySelector("#g7").className = "current";
		panoramicBG.style.backgroundPositionX = "100%";
	} if (currentPage === 8) {
		document.querySelector(".current").className="";
		document.querySelector("#g8").className = "current";
		panoramicBG.style.backgroundPositionX = "100%";
	} if (currentPage === 9) {
		document.querySelector(".current").className="";
		document.querySelector("#g9").className = "current";
		panoramicBG.style.backgroundPositionX = "115%";
	}
}
const showContent = (page) => {
	if (page === 0) {
		document.querySelector(".page0-A").classList.remove("hidden");
		document.querySelector(".page0-B").classList.remove("hidden");
		document.querySelector(".page0-A").classList.add("visibility");
		document.querySelector(".page0-B").classList.add("visibility");
	} if (page === 1) {
		document.querySelector(".page1-A").classList.remove("hidden");
		document.querySelector(".page1-B").classList.remove("hidden");
		document.querySelector(".page1-A").classList.add("visibility");
		document.querySelector(".page1-B").classList.add("visibility");
	} if (page === 2) {
		document.querySelector(".page2-A").classList.remove("hidden");
		document.querySelector(".page2-B").classList.remove("hidden");
		document.querySelector(".page2-A").classList.add("visibility");
		document.querySelector(".page2-B").classList.add("visibility");
	} if (page === 3) {
		document.querySelector(".page3-A").classList.remove("hidden");
		document.querySelector(".page3-B").classList.remove("hidden");
		document.querySelector(".page3-A").classList.add("visibility");
		document.querySelector(".page3-B").classList.add("visibility");
	} if (page === 4) {
		document.querySelector(".page4-A").classList.remove("hidden");
		document.querySelector(".page4-B").classList.remove("hidden");
		document.querySelector(".page4-A").classList.add("visibility");
		document.querySelector(".page4-B").classList.add("visibility");
	} if (page === 5) {
		document.querySelector(".page5-A").classList.remove("hidden");
		document.querySelector(".page5-B").classList.remove("hidden");
		document.querySelector(".page5-A").classList.add("visibility");
		document.querySelector(".page5-B").classList.add("visibility");
	} if (page === 6) {
		document.querySelector(".page6-A").classList.remove("hidden");
		document.querySelector(".page6-B").classList.remove("hidden");
		document.querySelector(".page6-A").classList.add("visibility");
		document.querySelector(".page6-B").classList.add("visibility");
	} if (page === 7) {
		document.querySelector(".page7-A").classList.remove("hidden");
		document.querySelector(".page7-B").classList.remove("hidden");
		document.querySelector(".page7-A").classList.add("visibility");
		document.querySelector(".page7-B").classList.add("visibility");
	} if (page === 8) {
		document.querySelector(".page8-A").classList.remove("hidden");
		document.querySelector(".page8-B").classList.remove("hidden");
		document.querySelector(".page8-A").classList.add("visibility");
		document.querySelector(".page8-B").classList.add("visibility");
	} if (page === 9) {
		document.querySelector(".page9-A").classList.remove("hidden");
		document.querySelector(".page9-B").classList.remove("hidden");
		document.querySelector(".page9-C").classList.remove("hidden");
		document.querySelector(".page9-A").classList.add("visibility");
		document.querySelector(".page9-B").classList.add("visibility");
		document.querySelector(".page9-C").classList.add("visibility");
	}
}
const hideContent = (page) => {
	if (page === 0) {
		document.querySelector(".page0-A").classList.remove("visibility");
		document.querySelector(".page0-B").classList.remove("visibility");
		document.querySelector(".page0-A").classList.add("hidden");
		document.querySelector(".page0-B").classList.add("hidden");
	} if (page === 1) {
		document.querySelector(".page1-A").classList.remove("visibility");
		document.querySelector(".page1-B").classList.remove("visibility");
		document.querySelector(".page1-A").classList.add("hidden");
		document.querySelector(".page1-B").classList.add("hidden");
	} if (page === 2) {
		document.querySelector(".page2-A").classList.remove("visibility");
		document.querySelector(".page2-B").classList.remove("visibility");
		document.querySelector(".page2-A").classList.add("hidden");
		document.querySelector(".page2-B").classList.add("hidden");
	} if (page === 3) {
		document.querySelector(".page3-A").classList.remove("visibility");
		document.querySelector(".page3-B").classList.remove("visibility");
		document.querySelector(".page3-A").classList.add("hidden");
		document.querySelector(".page3-B").classList.add("hidden");
	} if (page === 4) {
		document.querySelector(".page4-A").classList.remove("visibility");
		document.querySelector(".page4-B").classList.remove("visibility");
		document.querySelector(".page4-A").classList.add("hidden");
		document.querySelector(".page4-B").classList.add("hidden");
	} if (page === 5) {
		document.querySelector(".page5-A").classList.remove("visibility");
		document.querySelector(".page5-B").classList.remove("visibility");
		document.querySelector(".page5-A").classList.add("hidden");
		document.querySelector(".page5-B").classList.add("hidden");
	} if (page === 6) {
		document.querySelector(".page6-A").classList.remove("visibility");
		document.querySelector(".page6-B").classList.remove("visibility");
		document.querySelector(".page6-A").classList.add("hidden");
		document.querySelector(".page6-B").classList.add("hidden");
	} if (page === 7) {
		document.querySelector(".page7-A").classList.remove("visibility");
		document.querySelector(".page7-B").classList.remove("visibility");
		document.querySelector(".page7-A").classList.add("hidden");
		document.querySelector(".page7-B").classList.add("hidden");
	} if (page === 8) {
		document.querySelector(".page8-A").classList.remove("visibility");
		document.querySelector(".page8-B").classList.remove("visibility");
		document.querySelector(".page8-A").classList.add("hidden");
		document.querySelector(".page8-B").classList.add("hidden");
	} if (page === 9) {
		document.querySelector(".page9-A").classList.remove("visibility");
		document.querySelector(".page9-B").classList.remove("visibility");
		document.querySelector(".page9-C").classList.remove("visibility");
		document.querySelector(".page9-A").classList.add("hidden");
		document.querySelector(".page9-B").classList.add("hidden");
		document.querySelector(".page9-C").classList.add("hidden");
	}
} 

//Move functions
const movePageRight = () => {
	//Check that currentPage can't be lower than 0 or higher than 10
	if (currentPage === 9){
		console.log("you can't go any further :(");
		return
	}
	//Otherwise will increment currentPage counter;
	hideContent(currentPage);
	currentPage++;
	changePage();
	showContent(currentPage);
	arrowsVisibility(currentPage);
}
const movePageLeft = () => {	
	//Check that currentPage can't be lower than 0
	if (currentPage === 0){
		console.log("you are currently on zero");
		return
	}
	//Otherwise will decreased currentPage counter;	
		hideContent(currentPage);
		currentPage--;
		changePage();
		showContent(currentPage);
		arrowsVisibility(currentPage);

}
const clickGuide = (event) => {
	// Hide previous content
	hideContent(currentPage);
	// Update current value according currentTarget
	if (event.target.id === "g0") {
		currentPage = 0;
	} if (event.target.id === "g1") {
		currentPage = 1;
	} if (event.target.id === "g2") {
		currentPage = 2;
	} if (event.target.id === "g3") {
		currentPage = 3;
	} if (event.target.id === "g4") {
		currentPage = 4;
	} if (event.target.id === "g5") {
		currentPage = 5;
	} if (event.target.id === "g6") {
		currentPage = 6;
	} if (event.target.id === "g7") {
		currentPage = 7;
	} if (event.target.id === "g8") {
		currentPage = 8;
	} if (event.target.id === "g9") {
		currentPage = 9;
	}
	// Show target content
	changePage();
	showContent(currentPage);
	// Check for arrows visibility
	arrowsVisibility(currentPage);
	
}

//Hide&Show Arrows
const arrowsVisibility = (page) => {
	if (page === 0) {
		leftArrow.classList.remove("visibility");
		leftArrow.classList.add("hidden");
		rightArrow.classList.add("visibility");
	} if (page >= 1) {
		leftArrow.classList.add("visibility");
		rightArrow.classList.add("visibility");
	} if (page === 9) {
		rightArrow.classList.remove("visibility");
		rightArrow.classList.add("hidden");
	}
}

rightArrow.addEventListener("click", movePageRight);
leftArrow.addEventListener("click", movePageLeft);
guidePosition.addEventListener("click", clickGuide);
