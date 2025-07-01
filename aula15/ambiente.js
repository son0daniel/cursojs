var num = [5, 8, 4]
num[3] = 32
num.push(45)
console.log(num)
console.log(`${num}`)
console.log('ordem')
console.log(num.toSorted(function(a, b){return a - b})) // exibição
console.log(num.sort(function(a, b){return a - b})) // função inplace

for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element)
}
console.log('\n\noutro for')
for (let i in num) {
    console.log(num[i])
}

console.log(num.indexOf(32))
console.log(num.indexOf(130))