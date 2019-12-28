var rollButton = document.querySelector("#roll")
var carolsText = document.querySelectorAll(".carols-text")
var startInfo = document.querySelector(".start-info")
var navBar = document.querySelector(".nav")
var lastCarolTitleBar = document.querySelector("#last")
var latestValues = [];
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
        console.log("Numer wylosowanej kolędy: " + (randomizedCarolNumber + 1) + `, ID: ${randomizedCarolNumber}`)
        document.getElementById(`${randomizedCarolNumber}`).style.display = "block";
        navBar.className = "nav-sticked d-flex flex-column"
        document.changedCarol = randomizedCarolNumber;
        // lastCarolShower()
    })
}
carolChanger()
// let lastCarolShower = (e) => {
//     lastCarolTitleBar.innerHTML = document.querySelectorAll("h1")[document.latestValues[latestValues - 2] + 1].innerHTML
// }