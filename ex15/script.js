function verificar () {
    var hoje = new Date()
    var ano = hoje.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Ano inválido')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        var categoria = ''
        if (idade < 6) {
            categoria = 'bebe'
        } else if (idade < 18) {
            categoria = 'jovem'
        } else if (idade < 60) {
            categoria = 'adulto'
        } else {
            categoria = 'idoso'
        }
        var genero = fSex[0].checked ? 'homem' : 'mulher'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.setAttribute('src', `${categoria}_${genero}.png`)
        res.appendChild(img)
    }
}

