function contar () {
    var txtIni = document.querySelector('#txtini')
    var txtFim = document.querySelector('#txtfim')
    var txtPas = document.querySelector('#txtpas')
    
    if (txtIni.value.length == 0 || txtFim.value.length == 0 || txtPas.value.length) {
        res.innerHTML = 'Impossível contar!'
        alert('Preencha os dados!')
        return
    }

    var valIni = Number(txtIni.value)
    var valFim = Number(txtFim.value)
    var valPas = Number(txtPas.value)

    if (valPas <= 0) {
        alert('Passo inválido. Considerando passo = 1')
        valPas = 1
    }

    var res = document.querySelector('#res')
    res.innerHTML = 'Contando: <br>'
    if (valIni > valFim) {
        for (let index = valIni; index >= valFim; index-= valPas) {
            res.innerHTML += `${index} &#x1F449; `
        }
    } else {
        for (let index = valIni; index <= valFim; index+= valPas) {
            res.innerHTML += `${index} &#x1F449; `
        }
    }
    
    res.innerHTML += `&#x1F3C1;`

}