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

    if(tipo == tipoTrasacao.DEPOSITO) {
        saldo += valor;
    } else if(tipo == tipoTrasacao.TRASFERENCIA || tipo == tipoTrasacao.BOLETO) {
        saldo -= valor;
    } else {
        alert('Transação invalida')
        return
    }

    saldoElemento.textContent = formartarMoeda(saldo)

    let transacao:transacao = {
        tipo:tipo,
        valor:valor,
        data:data
    }

    
    console.log(transacao)
    formElemento.reset();
})