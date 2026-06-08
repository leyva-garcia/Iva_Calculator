const inputNum = document.getElementById("input-num")
const inputPercentage = document.getElementById("input-percentage")
const calculateBtn = document.getElementById("calculate-btn")
const percentageResult = document.getElementById("percentage-result")
const substractionResult = document.getElementById("substraction-result")
const addResult = document.getElementById("add-result")

function calPerc() {
    let numValue = inputNum.value
    let percentageValue = inputPercentage.value

    const calculatePercentage = (numValue * percentageValue) / 100

    percentageResult.textContent = `
      The ${percentageValue}% of ${numValue} is ${calculatePercentage.toFixed(2)}
    `

    const calculateSubstraction = numValue - calculatePercentage.toFixed(2)
    substractionResult.textContent = `
     The substraction of ${calculatePercentage.toFixed(2)} to ${numValue} is ${calculateSubstraction.toFixed(2)}
    `
    const calculateAdd = + numValue + + calculatePercentage
    addResult.textContent = `
     The sum of ${calculatePercentage.toFixed(2)} to ${numValue} is ${calculateAdd.toFixed(2)}
    `
}

calculateBtn.addEventListener("click", () => {
    calPerc()


    inputNum.value = ""
    inputPercentage.value = ""
})

