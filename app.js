
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtm = document.getElementById('plus')
const minusBtm = document.getElementById('minus')
const multiplyBtm = document.getElementById('multiply')
const divideBtm = document.getElementById('divide')
let action = '+'


plusBtm.onclick = function () {
    action = '+'
}

minusBtm.onclick = function () {
    action = '-'
}

multiplyBtm.onclick = function () {
    action = '*'
}

divideBtm.onclick = function () {
    action = '/'
}

function printResult (result) {
    if (result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }  
    resultElement.textContent = result

} 

function computerNumbersWithAction(input1, input2, action) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)

    if (action == '+') {
        return num1 + num2
    } else if (action == "-") {
        return num1 - num2
    } else if (action == "*") {
        return num1 * num2
    } else {
        return num1 / num2
    }

}

submitBtn.onclick = function() {
    const result = computerNumbersWithAction(input1, input2, action)
    printResult(result)

}
