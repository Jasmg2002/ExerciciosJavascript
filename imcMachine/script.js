function imc() {
    const firstValue = document.querySelector('.firstValue').value
    const secondValue = document.querySelector('.secondValue').value
    const result = document.querySelector('.result')
    
    if(firstValue !== "" && secondValue !== "") {
        const calcResult = (firstValue / secondValue**2)
        result.textContent = `Resultado: ${calcResult}`
    }
    else {
        result.textContent = `Preencha os campos`
    }
}
const resultButton = document.querySelector('.resultButton')
resultButton.addEventListener("click", imc)