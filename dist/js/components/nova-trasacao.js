import saldoComponent from './saldo.js';
import Conta from '../Types/conta.js';
const formElemento = document.querySelector('.block-nova-transacao form');
formElemento.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formElemento.checkValidity()) {
        alert('Formulario não preenchido');
        return;
    }
    const inputTipo = document.querySelector('#tipoTransacao');
    const inputValor = document.querySelector('#valor');
    const inputData = document.querySelector('#data');
    let tipo = inputTipo.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let novaTransacao = {
        tipoTrasacao: tipo,
        valor: valor,
        data: data
    };
    Conta.resgistrarTransacao(novaTransacao);
    saldoComponent.atualizar();
    formElemento.reset();
});
