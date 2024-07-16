let num = [5,6,8,9,3]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é o número ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor está na posição ${pos}`)
}

 






