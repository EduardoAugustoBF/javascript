let valores = [5, 8, 9, 6, 3];
console.log(valores);
valores.push(7);

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
