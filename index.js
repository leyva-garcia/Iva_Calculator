const inputNum = document.getElementById("input-num")
const inputPercentage = document.getElementById("input-percentage")
const calculateBtn = document.getElementById("calculate-btn")
const resetBtn = document.getElementById("reset-btn")

let percentageResult = document.getElementById("percentage-result")
let plusIvaTotal = document.getElementById("plus-iva-total")
let plusIvaMin = document.getElementById("plus-iva-min")
let ivaTotal = document.getElementById("iva-total")
let ivaMin = document.getElementById("iva-min")
let addResult = document.getElementById("add-result")

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

    
})

function reset(){
    percentageResult.textContent = "Resultado del Otro %"
    plusIvaTotal.textContent = "+ IVA 22%: "
    plusIvaMin.textContent = "+ IVA 10%: "
    addResult.textContent = "Mas el Otro %"
    ivaMin.textContent = ""
    ivaTotal.textContent = ""
    inputNum.value = ""
    inputPercentage.value = ""
}

resetBtn.addEventListener("click", ()=> {
    reset()
})