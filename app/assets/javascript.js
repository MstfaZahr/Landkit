const darkIcon = document.querySelector("#dark")
const body = document.querySelector("body")
const darkIconBorder = document.querySelector("#dark-border")

darkIcon.addEventListener("click", () => {
    body.classList.toggle("dark")
    darkIconBorder.classList.toggle("dark-enabled")
})