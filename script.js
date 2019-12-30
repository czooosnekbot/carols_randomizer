document.lastValues = new Array()
const startInfo = document.querySelector(".start-info")
const navBar = document.querySelector(".nav")
const rollButton = document.querySelector("#roll")
const carolsText = document.querySelectorAll(".carols-text")
const lastCarolLabel = document.querySelector("#last-label")
const lastCarolTitleBar = document.querySelector("#last")
const previousRandomValue1 = document.lastValues[document.lastValues.length - 1]
const previousRandomValue2 = document.lastValues[document.lastValues.length - 2]
let carolRandomizer = (e) => {
    let random = Math.floor(Math.random() * (carolsText.length))
    if (random != previousRandomValue1 & random != previousRandomValue2) {
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
        latestCarolShower()
    })
}
carolChanger()
let latestCarolShower = (e) => {
    if ((previousRandomValue2) != undefined) {
        lastCarolLabel.style.display = "block";
        return document.querySelector("#last").innerHTML = document.querySelectorAll("h1")[(previousRandomValue2) + 1].innerHTML
    } else {
        return document.querySelector("#last").innerHTML = ""
    }
}