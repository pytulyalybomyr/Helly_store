let burger__button = document.querySelector(".burger__button")
let burger__block = document.querySelector(".burger__block")

burger__button.addEventListener("click", () => {
    burger__block.classList.toggle('vision')
})