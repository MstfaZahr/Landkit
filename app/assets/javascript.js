AOS.init({
    duration: 1200,
    easing: 'ease-out-back',
    once: true,
});

const darkIcon = document.querySelector("#dark")
const body = document.querySelector("body")
const darkIconBorder = document.querySelector("#dark-border")

darkIcon.addEventListener("click", () => {
    body.classList.toggle("dark")
    darkIconBorder.classList.toggle("dark-enabled")
})

// --------------------------------------------------------

const annualToggle = document.querySelector("#pricing svg")
const annualToggleButton = annualToggle.querySelector(".toggle-button")
const annualToggleBg = annualToggle.querySelectorAll(".toggle-bg")

annualToggle.addEventListener("click", () => {
    annualToggleButton.classList.toggle("annual-enabled-button")

    for (Bg of annualToggleBg) {
        Bg.classList.toggle("annual-enabled-bg")
    }
})