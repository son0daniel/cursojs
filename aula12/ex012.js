var agora = new Date()

var hora = agora.getHours()
console.log(`Hora do relógio marca ${hora} horas`)

if (hora < 12 && hora > 4) {
    console.log('Bom dia')
} else if (hora > 18) {
    console.log('Boa noite')
} else if (hora > 11) {
    console.log('Boa tarde')
} else {
    console.log('Boa madrugada')
}