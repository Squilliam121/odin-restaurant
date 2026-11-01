const content = document.querySelector("#content")

function page1Load(){
    const imageContainer = document.createElement("div")
    imageContainer.id = "imgcontainer"

    const image = document.createElement("img")
    image.src = "https://wallpapercave.com/wp/wp1874155.jpg";
    image.alt = "Maycomb Palisade";
    imageContainer.append(image)

    const heading = document.createElement("h1")
    heading.textContent = "Maycomb Palisade"

    const subheading = document.createElement("h2")
    subheading.textContent = "Finest Restaurant in Central Alabama."

    const info = document.createElement("p")
    info.textContent = "123 Oulton Lane - 24/7"

    content.append(imageContainer,heading,subheading,info)
}

export {page1Load}