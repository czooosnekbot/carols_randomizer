const startInfo = document.querySelector(".start-info")
const navBar = document.querySelector(".nav")
const rollButton = document.querySelector("#roll")
const startRollingFormCheckbox = document.querySelector("#WNCcheckbox")
const carolsText = document.querySelectorAll(".carols-text")
const lastCarolLabel = document.querySelector("#last-label")
const lastCarolTitleBar = document.querySelector("#last")
const lastValues = []
const carolRandomizer = () => {
    const lastCarolValue1 = lastValues[lastValues.length - 1]
    const lastCarolValue2 = lastValues[lastValues.length - 2]
    const random = Math.floor(Math.random() * (carolsText.length))
    if (startRollingFormCheckbox.checked & lastValues.length === 0) {
        return 0
    } else if (random != lastCarolValue1 & random != lastCarolValue2) {
        return random
    } else {
        return carolRandomizer()
    }
}
const carolsHidder = () => {
    for (i = 0; i < carolsText.length; i++) {
        carolsText[i].style.display = "none";
    }
    startInfo.style.display = "none";
}
const latestCarolShower = () => {
    if ((lastValues[lastValues.length - 2]) != undefined) {
        lastCarolLabel.style.display = "block";
        document.querySelector("#last").innerHTML = document.querySelectorAll("h1")[(lastValues[lastValues.length - 2]) + 1].innerHTML
    } else {
        document.querySelector("#last").innerHTML = ""
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
        document.getElementById(`${randomizedCarolNumber}`).style.display = "block";
        navMobileSticker()
        latestCarolShower()
    })
}
carolChanger()