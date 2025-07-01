const numbers = []
let res = document.querySelector('#res')

add_number = () => {
    let txtVal = document.querySelector('#num')
    let num = Number(txtVal.value)
    
    if (txtVal.value.length == 0 || numbers.indexOf(num) != -1 || num < 1 || num > 100) {
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        numbers.push(num)
        let select = document.querySelector('#listnum')
        let numOption = document.createElement('option')

        numOption.innerText = `Número ${num} adicionado`
        select.appendChild(numOption)
        res.innerHTML = ''
    }

    txtVal.value = ''
    txtVal.focus()
}

function finish () {
    if (numbers.length == 0) {
        alert('A lista está vazia!')
    } else {
        let listLength = document.createElement('p')
        listLength.innerText = `Foram passados ${numbers.length} números à lista.`
        let total = 0
        for (let number of numbers) {
            total += number
        }
        let listSum = document.createElement('p')
        listSum.innerText = `Somando todos os valores, temos ${total}`
        let listAvg = document.createElement('p')
        let avg = (total / numbers.length)
        listAvg.innerText = `Média da lista: ${Number(avg.toFixed(2))}` // casas decimais dinâmicas

        let maxNumber = document.createElement('p')
        maxNumber.innerHTML = `O maior número é ${Math.max.apply(null, numbers)}`
        let minNumber = document.createElement('p')
        minNumber.innerHTML = `O menor número é ${Math.min.apply(null, numbers)}`

        res.innerHTML = ''
        res.appendChild(listLength)
        res.appendChild(maxNumber)
        res.appendChild(minNumber)
        res.appendChild(listSum)
        res.appendChild(listAvg)
    }
}