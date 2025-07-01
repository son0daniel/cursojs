function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var hoje = new Date()
    var hora = hoje.getHours()
    // var hora = 13
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#fde592'
    } else if (hora < 19) {
        img.src = 'tarde.png'
        document.body.style.background = '#f3914f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0d2144'
    }
}

