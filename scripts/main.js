let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/yo.png") {
	myImage.setAttribute("src", "images/yo2.png");
    } else {
	myImage.setAttribute("src", "images/yo.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name");
    if (!myName) {
	setUserName();
    } else {
	localStorage.setItem("name", myName);
	myHeading.textContent = "Hola, " + myName + ". Mi nombre es Arturo";
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hola, " + storedName + ". Mi nombre es Arturo"
}

myButton.onclick = function() {
    setUserName();
}
