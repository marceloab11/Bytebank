import { transacao } from "./transacao.js";
import { tipoTrasacao } from "./tipo-trasacao.js";

let saldo:number = 3000;

function debitar(valor:number) {
    if(valor <= 0) {
        throw new Error('O valor a ser debitado deveser maior que 0')
    }
    if(valor > saldo) {
        throw new Error('Saldo insuficiente')
    }
    saldo -= valor;
}

function depositar(valor:number) {
    if(valor <= 0){
        throw new Error('O valor a ser depositado deveser maior que 0')
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

    resgistrarTransacao(novaTransacao:transacao):void {
        if(novaTransacao.tipoTrasacao == tipoTrasacao.DEPOSITO) {
           depositar(novaTransacao.valor)
        } else if(novaTransacao.tipoTrasacao == tipoTrasacao.TRANSFERENCIA || novaTransacao.tipoTrasacao == tipoTrasacao.BOLETO) {
            debitar(novaTransacao.valor)
        } else {
            throw new Error('Transação invalida')
        }
        console.log(novaTransacao)
    }
}

export default Conta;
