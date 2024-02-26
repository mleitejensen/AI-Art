const test = document.querySelector("div")
const slideContainer = document.querySelector(".slideContainer")
const images = [1,2,3,4,5,6]

test.onclick = () => {
    console.log("click")
}

let index = 0

const switchImage = (index) => {
    setTimeout(() => {
        changeHtml(index)
        if(index >= images.length - 1){
            index = 0
        } else{
            index++
        }
        switchImage(index)
    }, 1000)
}

const changeHtml = (index) => {
    slideContainer.innerHTML = `
        <div>${images[index]}</div>
    `
}

// starts the image carousel
changeHtml(index)
index++
switchImage(index)