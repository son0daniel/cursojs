function gerar_tabuada () {
    var txtNum = document.querySelector('#txtnum')
    var select = document.querySelector('#tabuada')
    select.innerHTML = ''
    if (txtNum.value.length == 0) {
        alert('Digite um número!')
        var option = document.createElement("option")
        option.setAttribute('name', 'label')
        option.innerText = 'Digite um número!'
        select.appendChild(option)
    } else {
        for (let index = 1; index < 11; index++) {
            var valNum = Number(txtNum.value)
            var option = document.createElement("option")
            option.setAttribute('name', index)
            option.innerText = `${valNum} x ${index} = ${valNum * index}`
            select.appendChild(option)
        }
    }

}