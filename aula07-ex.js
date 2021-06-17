//Arrowfunctions ex01 
let mensagem = () => console.log('Olá, bom dia!')
mensagem();

// ex02
let soma =(n1, n2) => {
    return(n1 + n2)
}
console.log(soma(10,10))

//callbacks ex03
const andar =()=> console.log('O carro está andando!')
const parar =()=> console.log('O carro parou!')
const acaoCarro=(vaiDarCerto)=>vaiDarCerto()

acaoCarro(andar)
acaoCarro(parar)