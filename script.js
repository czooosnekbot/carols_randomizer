var rollButton = document.querySelector("#roll")
var carolsText = document.querySelectorAll(".carols-text")
let carolRandomizer = function() {
    return Math.floor(Math.random() * carolsText.length + 1)
}
let carolsHidder = function() {
    carolsText.style.display = "block";
}

rollButton.addEventListener("click", (e) => {
    carolsHidder()
    let randomizedCarolNumber = carolRandomizer()
    console.log(randomizedCarolNumber)
})