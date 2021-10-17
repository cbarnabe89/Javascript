var animalImg = document.querySelector("#fav-animal");

console.log(animalImg)

function pickCat(element){
    animalImg.src = "cat.png";
    console.log(element);
    
}

function pickDog(element) {
    element.classList.add("btn");
    animalImg.src = "dog.jpg";
    console.log(element.classList);
    
}
