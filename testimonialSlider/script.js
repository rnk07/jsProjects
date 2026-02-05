const box = document.querySelector(".box1")

const data = [
    "one", "two", "three", "four"
]

let idx = 0
dataSlider();

function dataSlider() {

    box.textContent = data[idx]
    idx++
    if (idx === data.length) {
        idx = 0;
    }

    setTimeout(() => {
        dataSlider();

    }, 1000)

}