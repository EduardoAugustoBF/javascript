let num = [5,8,6,9,3]
console.log(num)
/*
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

/* Jeito mais rápido de fazer */
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



