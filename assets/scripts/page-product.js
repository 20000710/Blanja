const mainImg = document.getElementById("main-img")
const subImg1 = document.getElementById("sub-img1")
const subImg2 = document.getElementById("sub-img2")
const subImg3 = document.getElementById("sub-img3")
const subImg4 = document.getElementById("sub-img4")
const subImg5 = document.getElementById("sub-img5")

let sizeNumber = document.getElementById("size-number")
let sizeMinus = document.getElementById("size-minus")
let sizePlus = document.getElementById("size-plus")
let sizeInner = sizeNumber.innerText
let tempNumberSize = parseInt(sizeInner)

let amountNumber = document.getElementById("amount-number")
let amountMinus = document.getElementById("amount-minus")
let amountPlus = document.getElementById("amount-plus")
let amountInner = amountNumber.innerText
let tempNumberAmount = parseInt(amountInner)

subImg1.addEventListener("click", () => {
    mainImg.setAttribute('src', '../assets/img/baju-muslim5.png')
})

subImg2.addEventListener("click", () => {
    mainImg.setAttribute('src', '../assets/img/baju-muslim4.png')
})

subImg3.addEventListener("click", () => {
    mainImg.setAttribute('src', '../assets/img/baju-muslim3.png')
})

subImg4.addEventListener("click", () => {
    mainImg.setAttribute('src', '../assets/img/baju-muslim2.png')
})

subImg5.addEventListener("click", () => {
    mainImg.setAttribute('src', '../assets/img/baju-muslim1.png')
})

sizeMinus.addEventListener("click", () => {
    if(tempNumberSize > 0 ){
        tempNumberSize--;
        sizeNumber.innerHTML = tempNumberSize.toString()
    }
})

sizePlus.addEventListener("click", () => {
    console.log("temp: ", tempNumberSize)
    tempNumberSize += 1;
    sizeNumber.innerHTML = tempNumberSize.toString()
})

amountMinus.addEventListener("click", () => {
    if(tempNumberAmount > 0 ){
        tempNumberAmount--;
        amountNumber.innerHTML = tempNumberAmount.toString()
    }
})

amountPlus.addEventListener("click", () => {
    console.log("temp: ", tempNumberAmount)
    tempNumberAmount += 1;
    amountNumber.innerHTML = tempNumberAmount.toString()
})