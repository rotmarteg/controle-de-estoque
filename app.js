'CONFIGURAÇÃO DO ESTOQUE'

let estoqueAtual = parseInt(localStorage.getItem('estoqueSalvo')) || 50;
let estoqueMinimo = 5;

function salvarNoNavegador() {
localStorage.setItem('estoqueSalvo', estoqueAtual);
}

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
if (campo) {
campo.innerHTML = texto;
}
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Controle de Expedição');
exibirTextoNaTela('p', `Estoque atual: ${estoqueAtual} unidades.`);
}

// --- FUNÇÃO PARA ADICIONAR (ENTRADA) ---
function registrarEntrada() {
let quantidadeDigitada = document.getElementById('quantidade').value;
let valorEntrada = parseInt(quantidadeDigitada);

if (valorEntrada <= 0 || isNaN(valorEntrada)) {
exibirTextoNaTela('p', 'Por favor, digite um número válido para entrada.');
} else {
estoqueAtual += valorEntrada;
salvarNoNavegador();
exibirTextoNaTela('h1', 'Entrada Confirmada!');
exibirTextoNaTela('p', `Você adicionou ${valorEntrada} itens. Novo saldo: ${estoqueAtual}.`);
limparCampo();
}
}

// --- FUNÇÃO PARA RETIRAR (SAÍDA) ---
function registrarSaida() {
let quantidadeDigitada = document.querySelector('input').value;
let valorSaida = parseInt(quantidadeDigitada);

if (valorSaida <= 0 || isNaN(valorSaida)) {
exibirTextoNaTela('p', 'Por favor, digite um número válido para saída.');
} else if (valorSaida > estoqueAtual) {
exibirTextoNaTela('p', 'Quantidade indisponível no estoque!');
} else {
estoqueAtual -= valorSaida;
salvarNoNavegador();

exibirTextoNaTela('h1', 'Saída Confirmada!');
let mensagemSaida = `Novo saldo: ${estoqueAtual} unidades.`;

// Alerta de estoque baixo
if (estoqueAtual <= estoqueMinimo) {
mensagemSaida = `ALERTA: Estoque crítico: ${estoqueAtual}!`;
}

exibirTextoNaTela('p', mensagemSaida);
limparCampo();
}
}

function limparCampo() {
let campo = document.querySelector('input');
campo.value = '';
}

// Inicia o sistema
exibirMensagemInicial();
