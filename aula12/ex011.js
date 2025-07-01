var idade = 2

// if (idade < 16) {
//     console.log('Não vota')
// } else if (idade < 18 || idade > 64) {
//     console.log('Pode votar')
// } else {
//     console.log('Vota')
// }

if (idade >= 18 && idade <= 64) {
    console.log('Vota')
} else if (idade < 16) {
    console.log('Não vota')
} else {
    console.log('Pode votar')
}