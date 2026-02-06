const imgEle = document.querySelector("img")
const detailEle = document.querySelector(".details")
const userNameEle = document.querySelector(".userName")

const data = [
    {
        photoSource: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        name: "Ronak P"

    },

    {
        photoSource: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        name: "Sweezy P"

    },
    {
        photoSource: "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740&q=80",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        name: "Bunty P"

    }
]

let idx = 0
dataSlider();

function dataSlider() {
    const { photoSource, text, name } = data[idx];

    imgEle.src = photoSource;
    detailEle.innerText = text;
    userNameEle.innerText = name;

    idx++
    if (idx === data.length) {
        idx = 0;
    }

    setTimeout(() => {
        dataSlider();

    }, 2000)

}