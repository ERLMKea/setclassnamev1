console.log("jeg er i inc font")

const ptag = document.querySelector(".first")
console.log(ptag)

function increaseFont(e) {
    console.log("set font")
    ptag.style.fontSize = "20px"
}

const pbIncrease = document.querySelector(".pbIncrease")
pbIncrease.addEventListener('click', increaseFont)

