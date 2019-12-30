var startInfo = document.querySelector(".start-info")
var navBar = document.querySelector(".nav")
var rollButton = document.querySelector("#roll")
var carolsText = document.querySelectorAll(".carols-text")
var lastCarolLabel = document.querySelector("#last-label")
var lastCarolTitleBar = document.querySelector("#last")
document.lastValues = new Array()
let carolRandomizer = (e) => {
    let random = Math.floor(Math.random() * (carolsText.length))
    if (random != document.lastValues[document.lastValues.length - 1] & random != document.lastValues[document.lastValues.length - 2]) {
        return random
    } else {
        return carolRandomizer()
    }
}
let carolsHidder = (e) => {
    for (i = 0; i < carolsText.length; i++) {
        carolsText[i].style.display = "none";
    }
    startInfo.style.display = "none";
}
let carolChanger = (e) => {
    rollButton.addEventListener("click", (e) => {
        carolsHidder()
        let randomizedCarolNumber = carolRandomizer()
        console.log("Numer wylosowanej kolędy: " + randomizedCarolNumber)
        document.getElementById(`${randomizedCarolNumber}`).style.display = "block";
        navBar.className = "nav-sticked d-flex flex-md-column"
        document.changedCarol = randomizedCarolNumber;
        document.lastValues.push(document.changedCarol)
        console.log("Historia losowania: " + document.lastValues)
        console.log(document.lastValues[document.lastValues.length - 2])
        latestCarolShower()
    })
}
carolChanger()
let latestCarolShower = (e) => {
    if ((document.lastValues[document.lastValues.length - 2]) != undefined) {
        lastCarolLabel.style.display = "block";
        return document.querySelector("#last").innerHTML = document.querySelectorAll("h1")[(document.lastValues[document.lastValues.length - 2]) + 1].innerHTML
    } else {
        return document.querySelector("#last").innerHTML = ""
    }
}