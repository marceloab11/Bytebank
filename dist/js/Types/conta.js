import { tipoTrasacao } from "./tipo-trasacao.js";
let saldo = JSON.parse(localStorage.getItem('saldo') || "0");
const transacoesJSON = localStorage.getItem('transacoes');
let transacoes = [];
if (transacoesJSON !== null) {
    transacoes = JSON.parse(transacoesJSON, (key, value) => {
        if (key === 'data') {
            return new Date(value);
        }
        return value;
    });
}
function debitar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser debitado deveser maior que 0');
    }
    if (valor > saldo) {
        throw new Error('Saldo insuficiente');
    }
    saldo -= valor;
    localStorage.setItem('saldo', saldo.toString());
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser depositado deveser maior que 0');
    }
    saldo += valor;
    localStorage.setItem('saldo', saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDate() {
        return new Date;
    },
    getGrupotransacoes() {
        const grupoTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTrasacao = '';
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTrasacao = transacao.data.toLocaleDateString('pt-br', { month: 'long', year: 'numeric' });
            if (labelAtualGrupoTrasacao !== labelGrupoTrasacao) {
                labelAtualGrupoTrasacao = labelGrupoTrasacao;
                grupoTransacoes.push({
                    label: labelGrupoTrasacao,
                    transacoes: []
                });
            }
            grupoTransacoes.at(-1)?.transacoes.push(transacao);
        }
        return grupoTransacoes;
    },
    resgistrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTrasacao == tipoTrasacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTrasacao == tipoTrasacao.TRANSFERENCIA || novaTransacao.tipoTrasacao == tipoTrasacao.BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error('Transação invalida');
        }
        transacoes.push(novaTransacao);
        console.log(this.getGrupotransacoes());
        localStorage.setItem('trasacoes', JSON.stringify(transacoes));
    }
};
export default Conta;
