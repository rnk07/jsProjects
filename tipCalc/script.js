const billAmt = document.querySelector(".bill-field")
const tipPercent = document.querySelector(".tip-field")
const calculateBtn = document.querySelector(".cal-btn")

const totalPlaceholder = document.querySelector(".total-value")

calculateBtn.addEventListener("click", calculateTip);



function calculateTip() {

    const bill = Number(billAmt.value);
    const tip = Number(tipPercent.value);

    if (!bill || !tip) {
        console.log("Please enter bill and tip");
         totalPlaceholder.textContent = 0;
    }

    const finalTipAmt = (bill * tip) / 100;
    const total = bill + finalTipAmt;


    totalPlaceholder.textContent = total.toFixed(2)

}