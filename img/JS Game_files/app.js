let dadosExpedicao = JSON.parse(localStorage.getItem('registroExpedicao')) || {
saldo: 1000,
historico: []
};

function exibirTextoNaTela(id, texto) {
let campo = document.querySelector(id);
if (campo) campo.innerHTML = texto;
}

function atualizarHistoricoNaTela() {
let lista = document.getElementById('lista-historico');
if (!lista) return;
lista.innerHTML = '';

// Mostra os últimos 3 movimentos
let ultimos = dadosExpedicao.historico.slice(-3).reverse();

ultimos.forEach(mov => {
let item = document.createElement('li');
item.innerHTML = `<strong>${mov.tipo}</strong>: ${mov.qtd} un. <br> <small>${mov.data}</small>`;
lista.appendChild(item);
});
}

function registrarEntrada() {
let valor = parseInt(document.getElementById('quantidade').value);
if (isNaN(valor) || valor <= 0) return alert("Digite um valor!");

dadosExpedicao.saldo += valor;
dadosExpedicao.historico.push({
tipo: 'Entrada',
qtd: valor,
data: new Date().toLocaleString('pt-BR')
});

salvarEAtualizar();
}

function registrarSaida() {
let valor = parseInt(document.getElementById('quantidade').value);
if (isNaN(valor) || valor <= 0 || valor > dadosExpedicao.saldo) return alert("Erro no valor!");

dadosExpedicao.saldo -= valor;
dadosExpedicao.historico.push({
tipo: 'Saída',
qtd: valor,
data: new Date().toLocaleString('pt-BR')
});

salvarEAtualizar();
}

function salvarEAtualizar() {
localStorage.setItem('registroExpedicao', JSON.stringify(dadosExpedicao));
exibirTextoNaTela('#valor-saldo', dadosExpedicao.saldo);
atualizarHistoricoNaTela();
document.getElementById('quantidade').value = '';
}

// Inicialização
exibirTextoNaTela('#valor-saldo', dadosExpedicao.saldo);
atualizarHistoricoNaTela();

