var saldo = 3000;
var saldoElemento = document.querySelector('.saldo-valor .valor');
saldoElemento.textContent = saldo.toString();
var formElemento = document.querySelector('.block-nova-transacao form');
formElemento.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formElemento.checkValidity()) {
        alert('Formulario não preenchido');
        return;
    }
    var inputTipo = document.querySelector('#tipoTransacao');
    var inputValor = document.querySelector('#valor');
    var inputData = document.querySelector('#data');
    var tipo = inputTipo.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipo == "Depósito") {
        saldo += valor;
    }
    else if (tipo == "Transferência" || tipo == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert('Transação invalida');
        return;
    }
    saldoElemento.textContent = saldo.toLocaleString();
    var transacao = {
        tipo: tipo,
        valor: valor,
        data: data
    };
    formElemento.reset();
    console.log(transacao);
});
