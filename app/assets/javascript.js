AOS.init({
    duration: 1200,
    easing: 'ease-out-back',
    once: true,
});

// ---------------------------------------------------------

const darkIcon = document.querySelector("#dark")
const body = document.querySelector("body")
const darkBody = darkIcon.querySelectorAll(".dark-body")

darkIcon.addEventListener("click", () => {
    body.classList.toggle("dark")
    for (part of darkBody) {
        part.classList.toggle("dark-enabled")
    }
})

// --------------------------------------------------------

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const annualToggle = document.querySelector("#pricing svg")
const annualToggleButton = annualToggle.querySelector(".toggle-button")
const annualToggleBg = annualToggle.querySelectorAll(".toggle-bg")
const price = document.querySelector("#pricing .price")

annualToggle.addEventListener("click", () => {
    annualToggleButton.classList.toggle("annual-enabled-button")
    for (Bg of annualToggleBg) {
        Bg.classList.toggle("annual-enabled-bg")
    }
    (Number(price.innerText) === 29) ? animateValue(price, 29, 49, 500) : animateValue(price, 49, 29, 500)
})

// ------------------------------------------------------------

const satisfaction = document.querySelector("#focus .satisfaction")
const supportHours = document.querySelector("#focus .support-hours")
const supportDays = document.querySelector("#focus .support-days")
const sales = document.querySelector("#focus .sales")

document.addEventListener('aos:in:statistics', () => {
    animateValue(satisfaction, 0, 100, 1500)
    animateValue(supportHours, 0, 24, 1500)
    animateValue(supportDays, 0, 7, 1500)
    animateValue(sales, 0, 100, 1500)
})

// ---------------------------------------------------------------

const createdFor = document.querySelector("#form .created-for")
const typeIndicator = document.querySelector("#form .type-indicator")

let wordsSet = ["developers.", "founders.", "designers."]
let j = 0

const animateText = () => {
    let i = 0
    if (j > 2) {
        j = 0
    }
    let word = wordsSet[j]
    j++
    const stopOne = setInterval(() => {
        if (i < word.length) {
            createdFor.innerText += word[i]
            i++
        }
        else {
            clearInterval(stopOne)
            typeIndicator.classList.toggle("blink")
            setTimeout(() => {
                typeIndicator.classList.toggle("blink")
                const stopTwo = setInterval(() => {
                    if (i >= 0) {
                        createdFor.innerText = createdFor.innerText.slice(0, i - 1)
                        i--
                    }
                    else {
                        clearInterval(stopTwo)
                        animateText()
                    }
                }, 50)
            }, 2000)
        }
    }, 50)
}

animateText()

// -------------------------------------------------------------------------

const carouselImages = document.querySelectorAll("#carousel img")
const carouselQuotes = document.querySelectorAll("#carousel .quote")
const carouselButtons = document.querySelectorAll("#carousel button")

for (const button of carouselButtons) {
    button.addEventListener("click", () => {
        for (const image of carouselImages) {
            image.classList.toggle("hidden")
        }
        for (const quote of carouselQuotes) {
            quote.classList.toggle("hidden")
        }
    })
}
// ----------------------------------------------------------------
const hamburger = document.querySelector(".hamburger-button")
const dropdowns = document.querySelector(".dropdowns")

hamburger.addEventListener("click", ()=>{
    dropdowns.classList.toggle("dropdowns-hidden")
})