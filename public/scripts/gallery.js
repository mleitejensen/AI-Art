const imageContainer = document.querySelector(".gridContainer")

let images = []

const getImages = async () => {
    const response = await fetch("/images")
    let data = await response.json()
    await data.images.forEach(image => {
        images.push(image)
    });
    images.forEach(image => {
        imageContainer.innerHTML += `
            <img class="gridItem" src="./nfs/nfs/aiart/images/${image}" alt="${image.split(" - ")[1]}"></img>
            `
    });
    
    const galleryImage = document.querySelectorAll(".gridItem") 
    const popUpElement = document.querySelector(".popUp")

    const popUp = (src) => {
        popUpElement.src = src
        popUpElement.classList.remove("popUp")
        popUpElement.classList.add("fullScreenImage")
    }
    
    galleryImage.forEach(image => {
        image.addEventListener("click", (e) => {
            popUp(e.target.src) // start popup
        })
    });
    
    popUpElement.addEventListener("click", (e) => { // remove popup
        popUpElement.classList.remove("fullScreenImage")
        popUpElement.classList.add("popUp")
    })
}

getImages()



