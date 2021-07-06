// 1-Crie um array de números pares,
// e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,]
const numerosImpares = numeros.filter(el=>el%2 !=0)
const numerosPares= numeros.filter(el=>el%2 ==0)

console.log(numerosImpares)
console.log(numerosPares)


// 2-Crie um array de nomes, que possua dois índices com o nome Maria. 
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes =['Maria', 'Carlos', 'Taty', 'Lavinia','Maria']
const marias = nomes.filter(el=>el == 'Maria')

// console.log(marias)

// 3- Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
const numeros= [1,5,9,3,7] ;

console.log(numeros.reduce((acumulador,atual)=>acumulador+'-'+atual));

// 4-Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais =['cachorro', 'gato', 'vaca', 'leão', 'elefante']
let nome=animais.forEach(el=> {
    
    console.log ('o nome do animal é '+el);
})
