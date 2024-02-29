const test = document.querySelector("div")
const slideContainer = document.querySelector(".slideContainer")

let images = []

const getImages = async () => {
    const response = await fetch("/images")
    let data = await response.json()
    await data.images.forEach(image => {
        images.push(image)
    });
    start()
}

getImages()

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
    }, 3000)
}

const changeHtml = async (index) => {
    let start = await images[index]
    slideContainer.innerHTML = `
        <img src="./nfs/nfs/aiart/images/${images[index]}"></img>
    `
}

// starts the image carousel
const start = () => {
    changeHtml(index)
    index++
    switchImage(index)
}