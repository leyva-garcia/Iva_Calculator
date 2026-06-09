const inputNum = document.getElementById("input-num")
const inputPercentage = document.getElementById("input-percentage")
const calculateBtn = document.getElementById("calculate-btn")
const percentageResult = document.getElementById("percentage-result")
const plusIvaTotal = document.getElementById("plus-iva-total")
const plusIvaMin = document.getElementById("plus-iva-min")
const ivaTotal = document.getElementById("iva-total")
const ivaMin = document.getElementById("iva-min")

const addResult = document.getElementById("add-result")

function calculateDefault() {
    let numValue = Number(inputNum.value)
    let totalIvaPercentage = numValue * 0.22
    let minIvaPercentage = numValue * 0.10

    const calculateIvaTotal = totalIvaPercentage + numValue
    const calculateIvaMin = minIvaPercentage + numValue

    plusIvaTotal.textContent = `+ IVA 22% = ${calculateIvaTotal.toFixed(2)}`
    ivaTotal.textContent = `El 22% de ${numValue} es ${totalIvaPercentage.toFixed(2)}`
    plusIvaMin.textContent = `+ IVA 10% = ${calculateIvaMin.toFixed(2)}`
    ivaMin.textContent = `El 10% de ${numValue} es ${minIvaPercentage.toFixed(2)}`
}


function calPerc() {
    let numValue = inputNum.value
    let percentageValue = inputPercentage.value

    const calculatePercentage = (numValue * percentageValue) / 100

    percentageResult.textContent = `
      El ${percentageValue}% de ${numValue} es ${calculatePercentage.toFixed(2)}
    `

    
    const calculateAdd = + numValue + + calculatePercentage
    addResult.textContent = `
     La suma de ${calculatePercentage.toFixed(2)} a ${numValue} es ${calculateAdd.toFixed(2)}
    `
}

calculateBtn.addEventListener("click", () => {
    calPerc()
    calculateDefault()

    inputNum.value = ""
    inputPercentage.value = ""
})

