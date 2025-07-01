var agora = new Date()
var diaSem = agora.getDay()

nomeSemana = ''
switch (diaSem) {
    case 0:
        nomeSemana = 'Domingo'
        break
    case 1:
        nomeSemana = 'Segunda'
        break
    case 2:
        nomeSemana = 'Terça'
        break
    case 3:
        nomeSemana = 'Quarta'
        break
    case 4:
        nomeSemana = 'Quinta'
        break
    case 5:
        nomeSemana = 'Sexta'
        break
    case 6:
        nomeSemana = 'Sábado'
        console.log('zzz')
        break
    default:
        nomeSemana = 'Erro'
}

console.log(nomeSemana)