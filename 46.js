
const outerDiv = document.querySelector(".container");

const button = document.querySelector("button");

outerDiv.addEventListener("click", ()=> {
    console.log("container clicked");
})
button.addEventListener("click", ()=> {
    console.log("button clicked ");
    event.stopPropagation();
})
