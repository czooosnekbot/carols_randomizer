const startInfo = document.querySelector(".start-info")
const navBar = document.querySelector(".nav")
const rollButton = document.querySelector("#roll")
const startRollingFormCheckbox = document.querySelector("#WNCcheckbox")
const carolsText = document.querySelectorAll(".carols-text")
const previousCarolLabel = document.querySelector("#last-label")
const previousCarolTitleBar = document.querySelector("#last")
const lastValues = []
const carolRandomizer = () => {
    const random = Math.floor(Math.random() * (carolsText.length))
    if (startRollingFormCheckbox.checked & lastValues.length === 0) {
        return 0
    } else if (random != getPreviousValue(1) & random != getPreviousValue(2)) {
        return random
    } else {
        return carolRandomizer()
    }
}
const getPreviousValue = (queueNumber) => {
    return lastValues[lastValues.length - queueNumber]
}
const carolsHidder = () => {
    for (i = 0; i < carolsText.length; i++) {
        carolsText[i].style.display = "none";
    }
    startInfo.style.display = "none";
}
const previousCarolShower = () => {
    if (getPreviousValue(2) != undefined) {
        previousCarolLabel.style.display = "block";
        previousCarolTitleBar.innerHTML = document.querySelectorAll("h1")[(getPreviousValue(2)) + 1].innerHTML
    } else {
        previousCarolTitleBar.innerHTML = ""
    }
}
const navMobileSticker = () => {
    navBar.className = "nav-sticked d-flex flex-md-column"
}
const carolChanger = () => {
    rollButton.addEventListener("click", (e) => {
        carolsHidder()
        const randomizedCarolNumber = carolRandomizer()
        console.log("Numer wylosowanej kolędy: " + randomizedCarolNumber)
        lastValues.push(randomizedCarolNumber)
        console.log("Historia losowania: " + lastValues)
        carolsText[randomizedCarolNumber].style.display = "block";
        navMobileSticker()
        previousCarolShower()
    })
}
carolChanger()