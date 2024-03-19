import { tipoTrasacao } from "./tipo-trasacao.js";
let saldo = 3000;
function debitar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser debitado deveser maior que 0');
    }
    if (valor > saldo) {
        throw new Error('Saldo insuficiente');
    }
    saldo -= valor;
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser depositado deveser maior que 0');
    }
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDate() {
        return new Date;
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
        console.log(novaTransacao);
    }
};
export default Conta;
