import { tipoTrasacao } from "./tipo-trasacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDate() {
        return new Date;
    },
    resgistrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTrasacao == tipoTrasacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTrasacao == tipoTrasacao.TRANSFERENCIA || novaTransacao.tipoTrasacao == tipoTrasacao.BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert('Transação invalida');
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;
