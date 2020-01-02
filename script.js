const startInfo = document.querySelector(".start-info")
const navBar = document.querySelector(".nav")
const rollButton = document.querySelector("#roll")
const startRollingFormCheckbox = document.querySelector("#WNCcheckbox")
const carolsText = document.querySelectorAll(".carols-text")
const lastCarolLabel = document.querySelector("#last-label")
const lastCarolTitleBar = document.querySelector("#last")
document.lastValues = new Array()
let carolRandomizer = (e) => {
    const lastCarolValue1 = document.lastValues[document.lastValues.length - 1]
    const lastCarolValue2 = document.lastValues[document.lastValues.length - 2]
    let random = Math.floor(Math.random() * (carolsText.length))
    if (startRollingFormCheckbox.checked & document.lastValues.length === 0) {
        return 0
    } else if (random != lastCarolValue1 & random != lastCarolValue2) {
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
    if ((document.lastValues[document.lastValues.length - 2]) != undefined) {
        lastCarolLabel.style.display = "block";
        return document.querySelector("#last").innerHTML = document.querySelectorAll("h1")[(document.lastValues[document.lastValues.length - 2]) + 1].innerHTML
    } else {
        return document.querySelector("#last").innerHTML = ""
    }
}