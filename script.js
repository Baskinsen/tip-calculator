let inp = document.querySelectorAll('input[type="number"]')
let bill = document.getElementById('dol')
let err = document.getElementById('error')
let clicked = document.querySelector(' input[type="button"]')
let cust = document.getElementById('custom')
let radio = document.querySelectorAll('input[name="val"]')
let individual = document.getElementById('ind')
let total = document.getElementById('total')
let perPerson = document.getElementById('perPerson')

const reset = () => {
    Array.from(inp).forEach(function(inp){
        if(inp.value !=="") {
            inp.value = ''
        }
    total.innerHTML = '$0.00'
    perPerson.innerHTML = '$0.00'
    total.style.fontSize = '40px'
    perPerson.style.fontSize = '40px'
    })
}

const custom = () =>{
    if(individual.value < 1) {
        error.style.display = 'block'
        individual.style.borderColor = 'red'
    } else if(individual.value >= 1){
        error.style.display = 'none'
        individual.style.borderColor = 'hsl(172, 67%, 45%)'
    }
}


const cal = (event) => {
    let billPerPerson = bill.value * (5/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    }
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    }
    event.stopPropagation()
}
const cal2 = (event) => {
    let billPerPerson = bill.value * (10/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    } 
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    } 
    event.stopPropagation()
}

const cal3 = (event) => {
    let billPerPerson = bill.value * (15/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    }
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    }
    event.stopPropagation()
}

const cal4 = (event) => {
    let billPerPerson = bill.value * (25/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    }
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    }
    event.stopPropagation()
}

const cal5 = (event) => {
    let billPerPerson = bill.value * (5/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    }
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    }
    event.stopPropagation()
}

const cus = (event) => {
    let billPerPerson = bill.value * (cust.value/100)
    let totalBill = billPerPerson*individual.value + parseInt(bill.value)
    perPerson.innerHTML = '$' +  billPerPerson.toFixed(2)
    total.innerHTML = '$' + totalBill
    if(perPerson.innerHTML.length >= 5) {
        perPerson.style.fontSize = '30px'
    }
    if(total.innerHTML.length >= 5) {
        total.style.fontSize = '30px'
    }
    event.stopPropagation()
}