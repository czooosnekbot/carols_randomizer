var rollButton = document.querySelector("#roll")
var carolsText = document.querySelectorAll(".carols-text")
var startInfo = document.querySelector(".start-info")
let carolRandomizer = function() {
    return Math.floor(Math.random() * (carolsText.length))
}
let carolsHidder = function() {
    for (i = 0; i < carolsText.length; i++) {
        carolsText[i].style.display = "none";
    }
    startInfo.style.display = "none";
}

rollButton.addEventListener("click", (e) => {
    carolsHidder()
    let randomizedCarolNumber = carolRandomizer()
    console.log("Numer wylosowanej kolędy: " + (randomizedCarolNumber + 1)+ `, ID: ${randomizedCarolNumber}`)
    document.getElementById(`${randomizedCarolNumber}`).style.display = "block";
})

