let saldo = 3000;

const saldoElemento = document.querySelector('.saldo-valor .valor') as HTMLElement;

saldoElemento.textContent = saldo.toString();

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

    let tipo:string = inputTipo.value;
    let valor:number = inputValor.valueAsNumber;
    let data:Date = new Date(inputData.value);

    if(tipo == "Depósito") {
        saldo += valor;
    } else if(tipo == "Transferência" || tipo == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert('Transação invalida')
        return
    }

    saldoElemento.textContent = saldo.toLocaleString();

    let transacao = {
        tipo:tipo,
        valor:valor,
        data:data
    }

    
    console.log(transacao)
    formElemento.reset();
})