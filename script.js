var rollButton = document.querySelector("#roll")
var carolsText = document.querySelectorAll(".carols-text")
var startInfo = document.querySelector(".start-info")
var navBar = document.querySelector(".nav")
var lastCarolTitleBar = document.querySelector("#last")
document.lastValues = new Array()
let carolRandomizer = (e) => {
    return Math.floor(Math.random() * (carolsText.length))
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
        navBar.className = "nav-sticked d-flex flex-column"
        document.changedCarol = randomizedCarolNumber;
        document.lastValues.push(document.changedCarol)
        console.log("Historia losowania: " + document.lastValues)
        console.log(document.lastValues[document.lastValues.length - 2])
        latestCarolShower()
    })
}
carolChanger()
let latestCarolShower = (e) => {
    document.querySelector("#last").innerHTML = document.querySelectorAll("h1")[document.lastValues[document.lastValues.length - 2]].innerHTML
}