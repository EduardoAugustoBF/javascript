
/*
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

/* Jeito mais rápido de fazer */

let num = [5,8,9,6,3]
num.push(4)
num.sort()
console.log(num)

for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}





