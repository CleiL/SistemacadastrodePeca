//Variável é um espaço que guarda um valor.
// declaração da variável + nome da variável + valor da variável.
// verificar se o peso da peça é superior a 100g.
let pesoPeca = 90
if (pesoPeca > 100) {
    console.log("Peso da peça superior a 100g, cadastro permitido")
} else {
    console.log("Peso menor que 100g, cadastro não permitido.")
}

// quantidade de peças
let qtdPeca = 9
if (qtdPeca < 10) {
    console.log("Capacidade do estoque inferior a dez peças, cadastro permitido")
} else {
    console.log("capacidade no máxima do estoque, cadastro não permitido.")
}

// qtd de caracteres do nome da peça
let caracterPeca = "Bieleta"
if (caracterPeca.length >= 3) {
    console.log("Cadastro permitido.")
} else {
    console.log("Cadastro não permitido, nome da peça deve conter três ou mais caracteres.")
}
