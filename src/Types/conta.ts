import { transacao } from "./transacao.js";
import { tipoTrasacao } from "./tipo-trasacao.js";
import { GrupoTransacoes } from "./grupo-trasacao.js";

let saldo:number = JSON.parse(localStorage.getItem('saldo') || "0")
const transacoesJSON = localStorage.getItem('transacoes');
let transacoes: transacao[] = [];

if (transacoesJSON !== null) {
  transacoes = JSON.parse(transacoesJSON, (key: string, value: string) => { 
    if (key === 'data') {       
        return new Date(value);       
    }

    return value;
    });
}

function debitar(valor:number) {
    if(valor <= 0) {
        throw new Error('O valor a ser debitado deveser maior que 0')
    }
    if(valor > saldo) {
        throw new Error('Saldo insuficiente')
    }
    saldo -= valor;
    localStorage.setItem('saldo', saldo.toLocaleString())
}

function depositar(valor:number) {
    if(valor <= 0){
        throw new Error('O valor a ser depositado deveser maior que 0')
    }
    saldo += valor;
    localStorage.setItem('saldo', saldo.toLocaleString())
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDate() {
        return new Date;
    },

    getGrupotrasacoes():GrupoTransacoes[] {
        const grupoTransacoes:GrupoTransacoes[] = [];
        const listaTransacoes: transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas:transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTrasacao:string = '';

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTrasacao: string = transacao.data.toLocaleDateString('pt-br', {month:'long', year:'numeric'})
            if(labelAtualGrupoTrasacao !== labelGrupoTrasacao) {
                labelAtualGrupoTrasacao = labelGrupoTrasacao;
                grupoTransacoes.push({
                    label: labelGrupoTrasacao,
                    transacoes:[]
                });
            }
            grupoTransacoes.at(-1)?.transacoes.push(transacao)
        }

        return grupoTransacoes;
    },

    resgistrarTransacao(novaTransacao:transacao):void {
        if(novaTransacao.tipoTrasacao == tipoTrasacao.DEPOSITO) {
           depositar(novaTransacao.valor)
        } else if(novaTransacao.tipoTrasacao == tipoTrasacao.TRANSFERENCIA || novaTransacao.tipoTrasacao == tipoTrasacao.BOLETO) {
            debitar(novaTransacao.valor)
        } else {
            throw new Error('Transação invalida')
        }
        transacoes.push(novaTransacao)
        console.log(this.getGrupotrasacoes())
        localStorage.setItem('trasacoes', JSON.stringify(transacoes))
    }
}

export default Conta;
