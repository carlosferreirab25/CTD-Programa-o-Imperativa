let compras = ["Sabão", "Frutas", "Pão"]

console.log("O método .join() JUnta os elementos de um array usando um separador que especificamos!")
let separadosPortraco = compras.join(' - ')
console.log(separadosPortraco)

console.log("O método .pop() elimina o último elemento de um array!")
let ultimaCompra = compras.pop()
console.log(compras)
console.log(ultimaCompra)

compras.push("Carne")
console.log('O método PUSH adiciona um ou mais elementos ao final do array!')
console.log(compras)


console.log("O método .shift() elimina o primeiro elemento de um array!")
let primeiraCompra = compras.shift()
console.log(compras)
console.log(ultimaCompra)

console.log("O método .unshift() adiciona um ou mais elementos ao inicio de um array!")
console.log(compras)
compras.unshift('Limão', 'Leite')
console.log(compras)

