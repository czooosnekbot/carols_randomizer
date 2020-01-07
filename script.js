const startInfo = document.querySelector(".start-info")
const navBar = document.querySelector(".nav")
const rollButton = document.querySelector("#roll")
const startRollingFormCheckbox = document.querySelector("#WNCcheckbox")
const carolsText = document.querySelectorAll(".carols-text")
const previous = {
    carolLabel: document.querySelector("#last-label"),
    carolTitle: document.querySelector("#last"),
    Values: [],
}
const carolRandomizer = () => {
    const random = Math.floor(Math.random() * (carolsText.length))
    if (startRollingFormCheckbox.checked & previous.Values.length === 0) {
        return 0
    } else if (random != getPreviousValue(1) & random != getPreviousValue(2)) {
        return random
    } else {
        return carolRandomizer()
    }
}
const getPreviousValue = (queueNumber) => {
    return previous.Values[previous.Values.length - queueNumber]
}
const carolsHidder = () => {
    for (i = 0; i < carolsText.length; i++) {
        carolsText[i].style.display = "none";
    }
    startInfo.style.display = "none";
}
const previousCarolShower = () => {
    if (getPreviousValue(2) != undefined) {
        previous.carolLabel.style.display = "block";
        previous.carolTitle.innerHTML = document.querySelectorAll("h1")[(getPreviousValue(2)) + 1].innerHTML
    } else {
        previous.carolTitle.innerHTML = ""
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
        previous.Values.push(randomizedCarolNumber)
        console.log("Historia losowania: " + previous.Values)
        carolsText[randomizedCarolNumber].style.display = "block";
        navMobileSticker()
        previousCarolShower()
    })
}
carolChanger()