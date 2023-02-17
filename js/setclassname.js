console.log("jeg er i setclassname")

let inpElementName = document.getElementById("elementName")
let inpStyleName = document.getElementById("styleName")
let pbSetClassName = document.getElementById("pbSetStyle")

function setStyle() {
    const elm = document.querySelector("." + inpElementName.value)
    console.log(elm)
}

pbSetClassName.addEventListener('click', setStyle)

