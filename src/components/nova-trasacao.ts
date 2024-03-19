import { transacao } from '../Types/transacao.js'
import { tipoTrasacao } from '../Types/tipo-trasacao.js'
import saldoComponent from './saldo.js'
import  Conta  from '../Types/conta.js'




const formElemento = document.querySelector('.block-nova-transacao form') as HTMLFormElement

formElemento.addEventListener('submit', function (event) {
    event.preventDefault()
    if(!formElemento.checkValidity()) {
        alert('Formulario não preenchido')
        return
    } 

    const inputTipo = document.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = document.querySelector('#valor') as HTMLInputElement;
    const inputData = document.querySelector('#data') as HTMLInputElement;

    let tipo:tipoTrasacao = inputTipo.value as tipoTrasacao;
    let valor:number = inputValor.valueAsNumber;
    let data:Date = new Date(inputData.value);

    let novaTransacao:transacao = {
        tipoTrasacao:tipo,
        valor:valor,
        data:data
    }

    Conta.resgistrarTransacao(novaTransacao)
    saldoComponent.atualizar();
    formElemento.reset();
})