"use strict";
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
    if (tipo == tipoTrasacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipo == tipoTrasacao.TRASFERENCIA || tipo == tipoTrasacao.BOLETO) {
        saldo -= valor;
    }
    else {
        alert('Transação invalida');
        return;
    }
    saldoElemento.textContent = formartarMoeda(saldo);
    let transacao = {
        tipo: tipo,
        valor: valor,
        data: data
    };
    console.log(transacao);
    formElemento.reset();
});
