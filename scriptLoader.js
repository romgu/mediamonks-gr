//Adding Animations to the Monk, Smoke and Text

document.querySelector("#monk").classList.add("monkB");
document.querySelector("#smokeBackground").classList.toggle("smokeAnimation");
document.querySelector("#monk").classList.toggle("monkAnimation");
document.querySelector("#patience").classList.toggle("hidden");

//Using setTimeOut to refresh the smoke
setTimeout(function(){
	document.querySelector("#smokeBackground").classList.toggle("smokeAnimation");
}, 5000);
//Using setTimeOut to move the text
setTimeout(function(){
	document.querySelector("#patience").classList.toggle("textAnimation");
}, 1000);
setTimeout(function(){
	document.querySelector("#padawan").classList.toggle("hidden");
	document.querySelector("#padawan").classList.toggle("textAnimation");
}, 1000);

//Calling the window object once it's fully loaded to remove the loader
window.addEventListener("load", function(){
	setTimeout(function(){
		let loader = document.querySelector("#loadingScreen");
		loader.remove();; 
	}, 3000);
})

