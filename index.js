const inputNum = document.getElementById("input-num")
const inputPercentage = document.getElementById("input-percentage")
const calculateBtn = document.getElementById("calculate-btn")
const percentageResult = document.getElementById("percentage-result")
const plusIvaTotal = document.getElementById("plus-iva-total")
const ivaTotal = document.getElementById("iva-total")

const addResult = document.getElementById("add-result")

function calculateDefault() {
    let numValue = Number(inputNum.value)

    const calculateIvaTotal = (numValue * 0.22) + numValue
    const calculateIvaMin = (numValue * 0.10) + numValue

    plusIvaTotal.textContent = `+ IVA 22%: ${calculateIvaTotal}`
    ivaTotal.textContent = `IVA 10%: ${calculateIvaMin}`
}


function calPerc() {
    let numValue = inputNum.value
    let percentageValue = inputPercentage.value

    const calculatePercentage = (numValue * percentageValue) / 100

    percentageResult.textContent = `
      The ${percentageValue}% of ${numValue} is ${calculatePercentage.toFixed(2)}
    `

    
    const calculateAdd = + numValue + + calculatePercentage
    addResult.textContent = `
     The sum of ${calculatePercentage.toFixed(2)} to ${numValue} is ${calculateAdd.toFixed(2)}
    `
}

calculateBtn.addEventListener("click", () => {
    calPerc()
    calculateDefault()

    //inputNum.value = ""
    //inputPercentage.value = ""
})

