let saldo:number = 3000;

const saldoElemento = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement
if(saldoElemento !== null) {
    saldoElemento.textContent = formartarMoeda(saldo)
}

if(elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso)
}

